import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    seoDescription: {
      type: String,
    },
    seoTitle: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { collection: "projects" }
);

const projectModel =
  mongoose.models.projectModel ||
  mongoose.model("projectModel", projectSchema, "projects");

export default projectModel;
