"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CldUploadButton } from "next-cloudinary";
import { createProject } from "@/helper/CreateProjects";

const New = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [projectData, setProjectData] = useState({
    title: "",
    slug: "",
    text: "",
    seoDescription: "",
    seoTitle: "",
    imageUrl: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUploadSuccess = (result) => {
    console.log("Image uploaded successfully:", result);
    if (result.info && result.info.public_id) {
      setProjectData((prevState) => ({
        ...prevState,
        imageUrl: result.info.public_id,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting project with data:", projectData);

    const createdProject = await createProject(
      projectData.title,
      projectData.slug,
      projectData.text,
      projectData.imageUrl,
      projectData.seoDescription,
      projectData.seoTitle,
      projectData.category
    );

    if (createdProject) {
      console.log("Project created successfully");
      router.push("/dashboard");
    } else {
      console.error("Failed to create project: maybe the slug already exists.");
    }
  };

  if (status === "unauthenticated") {
    router.push("/");
  }

  if (status === "authenticated") {
    return (
      <form onSubmit={handleSubmit} className="grid gap-4 p-2.5 items-center">
        <h1>Créer un nouveau projet</h1>
        <div className="z-20">
          <input
            type="radio"
            id="code"
            name="category"
            value="code"
            onChange={handleChange}
          />
          <label htmlFor="code">Code</label>
          <input
            type="radio"
            id="webdesign"
            name="category"
            value="webdesign"
            onChange={handleChange}
          />
          <label htmlFor="webdesign">Webdesign</label>
          <input
            type="radio"
            id="motion"
            name="category"
            value="motion"
            onChange={handleChange}
          />
          <label htmlFor="motion">Motion</label>
        </div>
        <input
          type="text"
          name="title"
          placeholder="Titre du projet"
          required
          value={projectData.title}
          onChange={handleChange}
          className="z-20 p-2.5 rounded-2xl bg-whine-transp border-3 border-double border-custom-brown"
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug du projet"
          required
          value={projectData.slug}
          onChange={handleChange}
          className="z-20 p-2.5 rounded-2xl bg-whine-transp border-3 border-double border-custom-brown"
        />
        <textarea
          name="text"
          placeholder="Texte du projet"
          required
          value={projectData.text}
          onChange={handleChange}
          className="z-20 p-2.5 rounded-2xl bg-whine-transp border-3 border-double border-custom-brown"
        />
        <input
          type="text"
          name="seoDescription"
          placeholder="Description SEO du projet"
          required
          value={projectData.seoDescription}
          onChange={handleChange}
          className="z-20 p-2.5 rounded-2xl bg-whine-transp border-3 border-double border-custom-brown"
        />
        <input
          type="text"
          name="seoTitle"
          placeholder="Title SEO du projet"
          required
          value={projectData.seoTitle}
          onChange={handleChange}
          className="z-20 p-2.5 rounded-2xl bg-whine-transp border-3 border-double border-custom-brown"
        />
        <CldUploadButton
          cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
          uploadPreset="shc131i6"
          onSuccess={handleImageUploadSuccess}
          className="z-20 btn hover:bg-white inline-block rounded-2xl bg-whine-transp border-3 border-double border-custom-brown"
        >
          Importer une image
        </CldUploadButton>
        <button
          type="submit"
          className="z-20 btn hover:bg-white inline-block rounded-2xl bg-whine-transp border-3 border-double border-custom-brown"
        >
          Créer le projet
        </button>
      </form>
    );
  }

  return null;
};

export default New;
