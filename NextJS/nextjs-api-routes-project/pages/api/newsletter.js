import { connectDatabase, insertDocument } from '../../helpers/db-util'

async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        // Validation
        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalid Email Address' })
            return;
        }

        // Setup a connection with mongodb
        // const client = await MongoClient.connect('mongodb+srv://hritik:React123@cluster0.sciwky6.mongodb.net/?retryWrites=true&w=majority')
        // const db = client.db('newsletter');
        // await db.collection('emails').insertOne({ email: userEmail })

        let client;
        try {
            client = await connectDatabase();
        } catch (error) {
            res.status(500).json({ message: 'Connecting to database failed' });
            return;
        }

        try {
            await insertDocument(client, 'emails', { email: userEmail }, 'newsletter');
            client.close();
        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed' });
            return;
        }

        res.status(201).json({ message: 'Signed Up' })

    }
}

export default handler;