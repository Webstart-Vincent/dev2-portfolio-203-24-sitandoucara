import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title: "Portfolio - Code",
  description: "portfolio",
};

export default function choose_code() {
  return (
    <>
      <div className="">
        <h1 className="title portfolio_title text-center">Code</h1>
        <div className="choose grid grid-cols-[1fr] gap-5 p-2.5 justify-items-center">
          <Link href="" className="z-20">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5 ">
              <Image
                src="/code/site1.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Cristovery</h2>
                <Link
                  href=""
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>

          <Link href="" className="z-20">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <Image
                src="/code/site2.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Agence Victoria</h2>
                <Link
                  href=""
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>

          <Link href="" className="z-20">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <Image
                src="/code/site5.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Luxury Home</h2>
                <Link
                  href=""
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>

          <Link href="" className="z-20">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <Image
                src="/code/site3.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Bonjour la Terre</h2>
                <Link
                  href=""
                  className="btn inline-block rounded-2xl px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown whitespace-nowrap"
                >
                  Voir le projet
                </Link>
              </div>
            </div>
          </Link>

          <Link href="" className="z-20">
            <div className="choose_valeur rounded-2xl border-3 border-double border-custom-brown bg-whine-transp p-2.5">
              <Image
                src="/code/site4.png"
                alt="photo design site internet"
                width={300}
                height={200}
              />
              <div className="choose_val">
                <h2>Cinema</h2>
                <Link
                  href=""
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
