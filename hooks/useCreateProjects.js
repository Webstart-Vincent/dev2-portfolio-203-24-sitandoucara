"use server";
import { connectToDatabase } from "@/lib/mongodb";
import projectModel from "@/models/project-model";

export const createProject = async (
  title,
  slug,
  text,
  imageUrl,
  seoDescription,
  seoTitle,
  category
) => {
  console.log("Creating project with:", title, slug, text, imageUrl, category);
  try {
    await connectToDatabase();
    const createdProject = await projectModel.create({
      title,
      slug,
      text,
      imageUrl,
      seoDescription,
      seoTitle,
      category,
    });
    console.log("Created project:", createdProject);
    return createdProject;
  } catch (error) {
    console.log("Error creating  project:", error);
    return null;
  }
};
