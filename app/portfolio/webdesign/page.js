import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function choose_webdesign() {
  return (
    <>
      <div className="">
        <h1 className="title portfolio_title text-center">Webdesign</h1>
        <div className="choose flex flex-wrap gap-y-5 p-2.5 item-center justify-center">
          <Link href="/portfolio/webdesign/deviantart">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5 ">
              <Image
                src="/Webdesign/img1.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Deviant Art</h2>
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
                src="/Webdesign/img3.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Why Festival</h2>
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
                src="/Webdesign/img5.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Mini Site</h2>
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
                src="/Webdesign/img4.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Netflix</h2>
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
                src="/Webdesign/luxyryhome.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Luxury Home</h2>
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
                src="/Webdesign/img6.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Twitter</h2>
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
                src="/Webdesign/img2.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Web Tv</h2>
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
                src="/Webdesign/wikipedia.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Wikipedia</h2>
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
                src="/Webdesign/guitard.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Guitar Part</h2>
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
