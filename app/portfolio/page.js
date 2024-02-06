//import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Portfolio() {
  return (
    <header className="grid place-items-center">
      <h1 className="portfolio_title">Mes compétences</h1>
      <div className="portefolio_items flex flex-wrap gap-20 justify-around items-center">
        <Link className="frame w-80 h-96" href="/portfolio/webdesign">
          <div className="card items-center  w-full h-full rounded-tl-[95px] rounded-tr-[95px] border-3 border-double border-custom-brown bg-whine-transp flex justify-center">
            <div className="light"></div>
            <div className="text text-24 font-bold text-#333 text-center">
              Webdesign
            </div>
          </div>
        </Link>

        <Link className="frame w-80 h-96" href="/">
          <div className="card items-center w-full h-full rounded-tl-[95px] rounded-tr-[95px] border-3 border-double border-custom-brown bg-whine-transp flex justify-center">
            <div className="light"></div>
            <div className="text text-24 font-bold text-#333 text-center">
              3D
            </div>
          </div>
        </Link>

        <Link className="frame w-80 h-96" href="/">
          <div className="card items-center w-full h-full rounded-tl-[95px] rounded-tr-[95px] border-3 border-double border-custom-brown bg-whine-transp flex justify-center">
            <div className="light"></div>
            <div className="text text-24 font-bold text-#333 text-center">
              Code
            </div>
          </div>
        </Link>

        <Link
          className="frame w-80 h-96"
          href="https://xrbazaar.co/creators/si-graph/"
        >
          <div className="card items-center w-full h-full rounded-tl-[95px] rounded-tr-[95px] border-3 border-double border-custom-brown bg-whine-transp flex justify-center">
            <div className="light"></div>
            <div className="text text-24 font-bold text-#333 text-center">
              Filtre
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
