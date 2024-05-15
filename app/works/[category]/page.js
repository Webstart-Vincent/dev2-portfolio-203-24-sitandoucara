"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getProgetByCategory } from "@/helper/GetCategory";
import { CldImage } from "next-cloudinary";

const CategoryPage = ({ params }) => {
  const { category } = params;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedProjects = await getProgetByCategory(category);
      if (fetchedProjects.length) {
        setProjects(fetchedProjects);
      } else {
        console.log(`Aucun projet trouvé pour la catégorie: ${category}`);
      }
    }

    fetchData();
  }, [category]);

  if (!projects.length) {
    return <div>Cette catégorie ne contient aucun projet pour le moment.</div>;
  }

  return (
    <div>
      <h1 className="title portfolio_title text-center">{category}</h1>
      <div className="choose grid grid-cols-[1fr] gap-5 p-2.5 justify-items-center">
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/works/${category}/${project.slug}`}
            className=" z-20"
          >
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
                <p className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap">
                  Voir le projet
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
