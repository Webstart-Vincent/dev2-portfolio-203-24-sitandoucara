"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == "unauthenticated") {
    router.push("/");
  }
  const projects = [
    { id: 1, title: "Projet 1", slug: "projet-1" },
    { id: 2, title: "Projet 2", slug: "projet-2" },
  ];

  if (status == "authenticated") {
    return (
      <div className="z-20 p-2">
        <h1>Tableau de bord</h1>
        <p>Utilisateur : {session?.user.name ?? "Pas de session"}</p>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
        <Link
          href="/dashboard/new"
          className="z-20 btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
        >
          <p>Créer un nouveau projet</p>
        </Link>
      </div>
    );
  }
};

export default Dashboard;
