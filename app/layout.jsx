import Head from "next/head";
import "./globals.css";
import Provider from "../components/provider";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

export const metadata = {
  title: "Portefolio",
  description:
    "Développeuse Web et Webdesigner Junioir, combinant la maitrisse de langagues comme React, Javascript, PHP ainsi que des logiciels comme Figma ainsi que la suite Abobe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-FR">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body>
        <Provider>
          <Loader />
          <div className="circle"></div>
          <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
            <Navbar />

            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
