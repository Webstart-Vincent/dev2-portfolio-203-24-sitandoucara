import mongoose from "mongoose";

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DATABASE } =
  process.env;
const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

export async function connectToDatabase() {
  if (mongoose.connection.readyState) {
    console.log("Using existing connection to MongoDB.");
    return mongoose.connection;
  } else {
    console.log("Connecting to MongoDB...");
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected.");
    return conn;
  }
}
