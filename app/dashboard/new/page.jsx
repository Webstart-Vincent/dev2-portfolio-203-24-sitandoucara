"use client";
import { useState } from "react";

const NewProject = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    slug: "",
    text: "",
    seoDescription: "",
    seoTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("Field updated", name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting project", projectData);

    try {
      const response = await fetch("/api/projects/page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });
      console.log("Response received", response);

      if (response.ok) {
        console.log("Project created successfully");
        window.location.href = "/dashboard";
      } else {
        console.error("Failed to create project, status:", response.status);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 p-2.5 items-center">
      <h1>Créer un nouveau projet</h1>
      <input
        type="text"
        name="title"
        placeholder="Titre du projet"
        required
        value={projectData.title}
        onChange={handleChange}
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <input
        type="text"
        name="slug"
        placeholder="Slug du projet"
        required
        value={projectData.slug}
        onChange={handleChange}
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <textarea
        name="text"
        placeholder="Texte du projet"
        required
        value={projectData.text}
        onChange={handleChange}
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <input
        type="text"
        name="seoDescription"
        placeholder="Description SEO du projet"
        required
        value={projectData.seoDescription}
        onChange={handleChange}
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <input
        type="text"
        name="seoTitle"
        placeholder="Title SEO du projet"
        required
        value={projectData.seoTitle}
        onChange={handleChange}
        className="p-2.5 z-20 rounded-2xl px-[25px] py-[10px] bg-whine-transp border-3 border-double border-custom-brown"
      />
      <button
        type="submit"
        className="z-20 btn hover:bg-white inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
      >
        Créer le projet
      </button>
    </form>
  );
};

export default NewProject;
