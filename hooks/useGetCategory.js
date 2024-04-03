"use server";
import projectModel from "../models/project-model";
import { connectToDatabase } from "@/lib/mongodb";

export const getProgetByCategory = async (identifier) => {
  await connectToDatabase();
  try {
    const projects = await projectModel.find({ category: identifier });
    return projects;
  } catch (error) {
    console.log(`Error fetching  projects for category ${identifier}:`, error);
    return [];
  }
};
