import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Portfolio() {
  return (
    <header className="grid place-items-center">
      <h1 className="portfolio_title">Mes compétences</h1>
      <div className="portefolio_items grid grid-cols-[1fr] gap-5 p-2.5 justify-items-center">
        <Link className="frame w-80 h-96 z-20" href="/portfolio/webdesign">
          <div className="card items-center  w-full h-full rounded-tl-[95px] rounded-tr-[95px] border-3 border-double border-custom-brown bg-whine-transp flex justify-center">
            <div className="light"></div>
            <div className="text text-24 font-bold text-#333 text-center">
              Webdesign
            </div>
          </div>
        </Link>

        <Link className="frame w-80 h-96 z-20" href="/portfolio/code">
          <div className="card items-center w-full h-full rounded-tl-[95px] rounded-tr-[95px] border-3 border-double border-custom-brown bg-whine-transp flex justify-center">
            <div className="light"></div>
            <div className="text text-24 font-bold text-#333 text-center">
              Code
            </div>
          </div>
        </Link>

        <Link className="frame w-80 h-96 z-20" href="/portfolio/motion">
          <div className="card items-center w-full h-full rounded-tl-[95px] rounded-tr-[95px] border-3 border-double border-custom-brown bg-whine-transp flex justify-center">
            <div className="light"></div>
            <div className="text text-24 font-bold text-#333 text-center">
              Motion
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
