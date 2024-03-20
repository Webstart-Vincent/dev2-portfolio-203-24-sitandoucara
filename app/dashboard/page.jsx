"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      window.location.href = "/";
    } else if (status === "authenticated") {
      fetch("/api/projects/page")
        .then((res) => res.json())
        .then((data) => {
          console.log("Data from API:", data);
          if (data && data.success) {
            setProjects(data.data);
          }
        })
        .catch((err) => console.error("Error loading projects", err));
    }
  }, [status]);

  if (status === "authenticated") {
    return (
      <div className="z-20 p-2">
        <h1>Tableau de bord</h1>
        <p>Utilisateur : {session?.user.name ?? "Pas de session"}</p>
        <ul>
          {projects.map((project) => (
            <li key={project._id}>{project.title}</li>
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
  return null;
};

export default Dashboard;
