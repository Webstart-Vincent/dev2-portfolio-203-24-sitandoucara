import Link from "next/link";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/mongodb";
import projectModel from "@/models/project-model";
import Image from "next/image";
import { AuthOptions } from "next-auth";
import { getServerSession } from "next-auth";

const getProjects = async () => {
  try {
    await connectToDatabase();
    const projects = await projectModel.find({});
    return projects;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Dashboard = async () => {
  const session = await getServerSession(AuthOptions);
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!session?.user) {
    return redirect("/");
  }

  console.log("Fetching projects...");
  const projects = await getProjects();
  console.log("Projects fetched:", projects);

  if (session?.user) {
    console.log("Rendering dashboard with projects");
    return (
      <div className="z-20 p-2">
        <h1>Tableau de bord</h1>
        <p>Utilisateur : {session?.user.name ?? "Pas de session"}</p>
        <div className="flex flex-wrap">
          {projects.map((project) => {
            const imageUrl = project.imageUrl
              ? `https://res.cloudinary.com/${cloudName}/image/upload/v1606921589/${project.imageUrl}.jpg`
              : "/nopicture.png";
            return (
              <div
                key={project._id}
                className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5 m-2"
              >
                <Image
                  src={imageUrl}
                  alt="photo design site internet"
                  width={300}
                  height={200}
                  className="object-cover"
                />
                <div className="choose_val">
                  <h2>{project.title}</h2>
                  <p>Slug: {project.slug}</p>
                  <p>{project.text}</p>
                  <p>Catégorie: {project.category}</p>
                  <p>SEO Description: {project.seoDescription}</p>
                  <p>SEO Title: {project.seoTitle}</p>
                  <button
                    aria-label="delete button"
                    id="theme-brown--button"
                    data-tooltip-target="import-delete"
                    className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-red-800 text-white border-3 border-double border-custom-brown whitespace-nowrap"
                  >
                    Supprimer
                  </button>
                  <button className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-grey-300 text-white border-3 border-double border-custom-brown whitespace-nowrap">
                    Modifier
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          href="/dashboard/new"
          className="z-20 btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
        >
          <p>Créer un nouveau projet</p>
        </Link>
      </div>
    );
  }
  return null;
};

export default Dashboard;
