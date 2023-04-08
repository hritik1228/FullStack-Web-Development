// /api/comments/some-event-id
// import { MongoClient } from 'mongodb';
import { connectDatabase, insertDocument, getAllDocuments } from '../../../helpers/db-util';

async function handler(req, res) {

    const eventId = req.query.eventId;
    // const client = await MongoClient.connect('mongodb+srv://hritik:React123@cluster0.sciwky6.mongodb.net/?retryWrites=true&w=majority')

    let client;
    try {
        client = await connectDatabase();
    } catch (error) {
        res.status(500).json({ message: 'Connecting to the Database failed!' });
        return;
    }

    if (req.method === 'POST') {

        const { email, name, text } = req.body;

        // Add server side validation
        if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
            res.status(422).json({ message: 'Invalid Input' })
            client.close();
            return;
        }

        const newComment = {
            email,
            name,
            text,
            eventId
        }

        // const db = client.db('events');
        // const result = await db.collection('comments').insertOne(newComment)
        // console.log(result);

        let result;
        try {
            result = await insertDocument(client, 'comments', newComment, 'events')
            newComment._id = result.insertedId
            res.status(201).json({ message: 'Comments Added', comment: newComment })
        } catch (error) {
            res.status(500).json({ message: 'Inserting Comment failed!' })
        }

        // console.log(newComment);

    }
    if (req.method === 'GET') {

        // const dummyList = [
        //     { id: 'c1', name: 'Max', text: 'A first comment!' },
        //     { id: 'c2', name: 'Manuel', text: 'A second comment!' }
        // ]
        // const db = client.db('events');
        // const documents = await db.collection('comments').find().sort(({ _id: -1 })).toArray();

        try {
            const documents = await getAllDocuments(client, 'comments', 'events');
            res.status(200).json({ comments: documents });
        } catch (error) {
            res.status(500).json({ message: 'Getting comments failed.' })
        }
    }

    client.close();

}

export default handler;