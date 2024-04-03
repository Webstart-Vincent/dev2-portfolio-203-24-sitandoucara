import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <header className="grid place-items-center">
      <div className="header grid grid-cols-1 justify-center gap-0 justify-items-center">
        <div className="rounded-tl-[95px] rounded-tr-[95px] border-3 border-double border-custom-brown bg-whine-transp flex justify-center">
          <Image
            src="/person_tree.png"
            alt="Next.js Logo"
            width={300}
            height={500}
            className="responsive-img"
            priority
          />
        </div>
        <div className="text-center">
          <h2 className="font-bold">Salut, Je suis Sitan</h2>
          <h1 className="font-bold">Une Développeuse Web</h1>
          <div className="flex gap-4 justify-center">
            <div className="flex-1 relative">
              <Link
                className="link_home inline-block rounded-tl-[95px] rounded-tr-[95px] px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown rounded-[55px] whitespace-nowrap"
                href="/"
              >
                Plus sur moi
              </Link>
              <i className="absolute -top-[8px] left-[7px] text-custom-brown text-2xl bi bi-stars stars1"></i>
            </div>
            <div className="flex-1 relative z-20">
              <Link
                className="link_home  inline-block rounded-tl-[95px] rounded-tr-[95px] px-[25px] py-[10px] text-center bg-whine-transp border-3 border-double border-custom-brown rounded-[55px] whitespace-nowrap"
                href="/works"
              >
                Portfolio
              </Link>
              <i className="stars2 bi bi-stars absolute -top-[9px] left-[7px] text-custom-brown text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
