"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getProgetByCategory } from "@/hooks/useGetCategory";
import { CldImage } from "next-cloudinary";

const CategoryPage = ({ category }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProgetByCategory(category).then((projects) => {
      if (projects.length) {
        setProjects(projects);
      } else {
        console.log(`Aucun projet trouvé pour la catégorie: ${category}`);
      }
    });
  }, [category]);

  if (!projects.length) {
    return <div>Cette catégorie a pas de projet pour le moment.</div>;
  }

  return (
    <div>
      <h1 className="title portfolio_title text-center">{category}</h1>
      <div className="choose grid grid-cols-[1fr] gap-5 p-2.5 justify-items-center">
        {projects.map((project) => (
          <Link key={project._id} href={`/works/${category}/${project.slug}`}>
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <CldImage
                className="img_dev_destop"
                src={project.imageUrl}
                alt="Image projet"
                width={300}
                height={200}
              />

              <div className="choose_val">
                <h2>{project.title}</h2>

                <p>Voir le projet</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
