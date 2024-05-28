import { connectToDatabase } from "@/lib/mongodb";
import projectModel from "@/models/project-model";
import { GetProjectDetails } from "@/helper/GetProject";
import { PageDetails } from "@/components/PageDetails";
import Head from "next/head";

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
    seoDescription: projectDetails.seoDescription,
    seoTitle: projectDetails.seoTitle,
    category: projectDetails.category,
  };

  return (
    <>
      <Head>
        <title>{detailedProject.seoTitle || detailedProject.title}</title>
        <meta name="description" content={detailedProject.seoDescription} />
        <meta
          property="og:title"
          content={detailedProject.seoTitle || detailedProject.title}
        />
        <meta
          property="og:description"
          content={detailedProject.seoDescription}
        />
        <meta property="og:image" content={detailedProject.imageUrl} />
      </Head>
      <PageDetails project={detailedProject} />
    </>
  );
}
