"use client";
import { useRouter } from "next/navigation";

const NewProject = () => {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/dashbord");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 p-2.5 items-center">
      <h1>Créer un nouveau projet</h1>
      <input
        type="text"
        placeholder="Titre du projet"
        required
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <input
        type="text"
        placeholder="Slug du projet"
        required
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <textarea
        placeholder="Texte du projet"
        required
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <input
        type="text"
        placeholder="Description SEO du projet"
        required
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <input
        type="text"
        placeholder="Title SEO du projet"
        required
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <button
        type="submit"
        className="z-20 btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
      >
        Créer le projet
      </button>
    </form>
  );
};

export default NewProject;
