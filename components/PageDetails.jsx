"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import "bootstrap-icons/font/bootstrap-icons.css";

/*export const metadata = {
  title: "projet",
  description: "projet description",
};*/

export const PageDetails = ({ project }) => {
  return (
    <div className="z-20 plusweb2 p-3 grid gap-y-3 justify-items-start">
      <div className="back_portfolio z-20">
        <Link
          href={`/works/${project.category}`}
          className="modal_closee_filtre inline-block rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5"
        >
          <i className="bi bi-chevron-left"></i> Back
        </Link>
      </div>

      <div className="describ_project flex flex-wrap gap-y-5 p-2.5 item-center justify-center bg-whine-transp rounded-2xl border-3 border-double border-custom-brown">
        <div className="textdescrib">
          <h1>{project.title}</h1>
          <p>{project.text}</p>
          <p>
            <span>Fais en</span> - 2022
          </p>
          <p>
            <span>Outils utilisés</span> - Figma & Procreate
          </p>
        </div>
      </div>

      <div className="image-container p-2.5 bg-whine-transp rounded-2xl border-3 border-double border-custom-brown">
        <CldImage
          className="z-20 img_dev_destop"
          src={project.imageUrl}
          alt="Image projet"
          width={900}
          height={900}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </div>
  );
};
