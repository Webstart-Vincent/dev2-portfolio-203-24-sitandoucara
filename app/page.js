import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-midnight grid min-h-screen items-center">
      <header>
        <div className="grid h-full justify-items-center  items-center grid-rows-2 gap-4">
          <div className="rounded-t-lg p-2 bg-whine_transp border-double border-4 border-brown">
            <Image
              src="/person_tree.png"
              alt="Next.js Logo"
              width={280}
              height={37}
              priority
            />
          </div>
          <div className="text1">
            <h2>Salut, Je suis Sitan</h2>
            <h1>Une Devellopeuse Web</h1>
            <div className="flex gap-4">
              <div className="rounded-t-lg p-2 bg-whine_transp border-double border-4 border-brown">
                <a href="about.html">Plus sur moi</a>
                <i className="bi bi-stars"></i>
              </div>
              <div className="rounded-t-lg p-2 bg-whine_transp border-double border-4 border-brown">
                <a href="portefolio.html">Portfolio</a>
                <i className="bi bi-stars"></i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
