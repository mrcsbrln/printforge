import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-12 bg-white border-t border-gray-200">
      <div className="flex flex-col items-center justify-between gap-4 px-6 py-6 mx-auto text-sm text-gray-600 max-w-7xl md:flex-row">
        <p>&copy; {new Date().getFullYear()} PrintForge</p>
        <nav className="flex gap-6">
          <Link href="/impressum" className="hover:text-orange-accent">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-orange-accent">
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
