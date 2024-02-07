import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title: "Portfolio - Motion",
  description: "portfolio",
};

export default function choose_motion() {
  return (
    <>
      <div className="">
        <h1 className="title portfolio_title text-center">Motion</h1>
        <div className="choose grid grid-cols-[1fr] gap-5 p-2.5 justify-items-center">
          <Link href="/portfolio/webdesign/deviantart" className="z-20">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5 ">
              <Image
                src="/Motion/img1.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Heart Tunnel</h2>
                <Link
                  href="/portfolio/webdesign/deviantart"
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <Image
                src="/Motion/img2.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Bouteille</h2>
                <Link
                  href="/"
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <Image
                src="/Motion/img3.PNG"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Flacon</h2>
                <Link
                  href="/"
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <Image
                src="/Motion/img4.PNG"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Crème</h2>
                <Link
                  href="/"
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>

          <Link href="/">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <Image
                src="/Motion/img5.PNG"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Poster</h2>
                <Link
                  href="/"
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <Image
                src="/Motion/img6.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Love Temple</h2>
                <Link
                  href="/"
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
