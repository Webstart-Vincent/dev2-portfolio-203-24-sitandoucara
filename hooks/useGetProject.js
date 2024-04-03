"use server";
import projectModel from "../models/project-model";
import { connectToDatabase } from "@/lib/mongodb";

export const GetProjectDetails = async (identifier) => {
  await connectToDatabase();

  try {
    const projectDetails = await projectModel.findOne({ slug: identifier });
    if (!projectDetails) {
      console.log(`No project found with slug: ${identifier}`);
      return null;
    }

    console.log(`Project fetched successfully: ${identifier}`);
    return projectDetails;
  } catch (error) {
    console.error(`Error fetching project with slug: ${identifier}`, error);
    return null;
  }
};
