import { MongoClient } from 'mongodb';
export async function connectDatabase() {
    const client = await MongoClient.connect('mongodb+srv://hritik:React123@cluster0.sciwky6.mongodb.net/?retryWrites=true&w=majority');
    return client;
}

export async function insertDocument(client, collection, document, database) {
    const db = client.db(database);
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(client, collection, database) {
    const db = client.db(database);
    const documents = await db.collection(collection).find().sort(({ _id: -1 })).toArray();
    return documents;
}