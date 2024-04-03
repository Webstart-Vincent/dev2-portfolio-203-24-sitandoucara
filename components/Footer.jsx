import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-4 border-double border-custom-brown">
      <div className="flex justify-center gap-2.5 p-3  text-base ">
        <p>@copyright2024 |</p>
        <Link href="/">Mentions Légales</Link>
        <Link href="/">RGPD</Link>
      </div>
    </footer>
  );
}
