import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid Input.' })
            return;
        }

        // Store it in a database
        const newMessage = {
            email,
            name,
            message
        }
        console.log('From', newMessage)

        let client;

        try {
            client = await MongoClient.connect(
                'mongodb+srv://hritik:React123@cluster0.sciwky6.mongodb.net/?retryWrites=true&w=majority'
            )
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' })
            return;
        }

        const db = client.db('my-blog-site')
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed' })
            return;
        }

        client.close();

        res.status(201).json({ message: 'Successfully stored message', message: newMessage })


    }
}

export default handler;