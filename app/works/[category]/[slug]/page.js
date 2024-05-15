import { connectToDatabase } from "@/lib/mongodb";
import projectModel from "@/models/project-model";
import { GetProjectDetails } from "@/helper/GetProject";
import { PageDetails } from "@/components/PageDetails";

export async function generateStaticParams() {
  await connectToDatabase();
  const projects = await projectModel.find({});
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }) {
  const projectDetails = await GetProjectDetails(params.slug);

  if (!projectDetails) {
    return <div>Désolé, cette route ne correspond à aucun projet</div>;
  }

  const detailedProject = {
    _id: projectDetails._id,
    title: projectDetails.title,
    slug: projectDetails.slug,
    text: projectDetails.text,
    imageUrl: projectDetails.imageUrl,
    category: projectDetails.category,
  };

  return <PageDetails project={detailedProject} />;
}
