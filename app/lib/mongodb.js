import { MongoClient } from "mongodb";

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DATABASE } =
  process.env;

const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

console.log("Connecting to MongoDB with URI:", uri);

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(MONGODB_DATABASE);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
