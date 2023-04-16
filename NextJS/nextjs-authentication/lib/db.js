import MongoClient from "mongodb/lib/mongo_client";

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://hritik:React123@cluster0.sciwky6.mongodb.net/auth-demo?retryWrites=true&w=majority')

    return client;
}