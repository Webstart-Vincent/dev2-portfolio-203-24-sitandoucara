"use client";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <h1>Tableau de bord</h1>
      <p>
        Utilisateur :{" "}
        {session && session.user ? session.user.email : "Pas d'utilisateur"}
      </p>
    </>
  );
};

export default Dashboard;
