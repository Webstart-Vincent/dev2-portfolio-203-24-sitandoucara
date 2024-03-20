import { connectToDatabase } from "@/app/lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case "GET":
      try {
        const projects = await db.collection("projects").find({}).toArray();
        res.status(200).json({ success: true, data: projects });
      } catch (e) {
        console.error("GET Error:", e);
        res.status(500).json({ error: e.message });
      }
      break;

    case "POST":
      try {
        const project = await db.collection("projects").insertOne(req.body);
        res.status(201).json({ success: true, data: project });
      } catch (e) {
        console.error("POST Error:", e);
        res.status(500).json({ error: e.message });
      }
      break;

    case "DELETE":
      try {
        if (req.query.id) {
          const { id } = req.query;
          await db.collection("projects").deleteOne({ _id: new ObjectId(id) });
        } else {
          await db.collection("projects").deleteMany({});
        }
        res.status(200).json({ success: true, message: "Project(s) deleted" });
      } catch (e) {
        console.error("DELETE Error:", e);
        res.status(500).json({ error: e.message });
      }
      break;

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
