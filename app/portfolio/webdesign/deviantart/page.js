import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function DeviantArtPage() {
  return (
    <>
      <div className="plusweb2 p-2.5 grid gap-y-3 justify-items-start">
        <div className="back_portfolio z-20">
          <Link
            href="/portfolio/webdesign"
            class="modal_closee_filtre inline-block rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5"
          >
            <i className="bi bi-chevron-left"></i>
          </Link>
        </div>

        <div className="describ_project flex flex-wrap gap-y-5 p-2.5 item-center justify-center bg-whine-transp rounded-2xl border-3 border-double border-custom-brown">
          <div className="textdescrib">
            <h1>Deviant Art Refonte</h1>
            <p>
              Projet scolaire, il avait pour but de proposer une refonte de la
              home Page du site deviant art. La version responsive est
              disponible sur mon figma. Voir le lien ci-dessous.
            </p>
            <p>
              <span>Fais en</span> - 2022
            </p>
            <p>
              <span>Outils utilisés</span> - Figma & Procreate
            </p>
          </div>
        </div>

        <div className="mockupweb1 p-2.5 bg-whine-transp rounded-2xl border-3 border-double border-custom-brown">
          <Image
            src="/Webdesign/Deviant_art1.png"
            alt="photo1"
            width={300}
            height={200}
          />
          <div className="one_slide"></div>
        </div>

        <div className="describ_project2 p-2.5 bg-whine-transp rounded-2xl border-3 border-double border-custom-brown">
          <div>
            <Image
              src="/Webdesign/Deviant_art2.png"
              alt="image2"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
}
