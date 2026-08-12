import Image from "next/image";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <NavLink href="/">
          <div className="relative">
            {/* Desktop logo */}
            <Image
              src="/printforge-logo.svg"
              alt="PrintForge Logo"
              width={240}
              height={61}
              className="w-50 h-auto hidden md:block"
            />
            {/* Mobile logo */}
            <Image
              src="/printforge-logo-icon.svg"
              alt="PrintForge Logo"
              width={39}
              height={39}
              className="w-10 h-auto block md:hidden"
            />
          </div>
        </NavLink>
        <ul className="flex items-center gap-2.5">
          <li>
            <NavLink href="/3d-models">3D Models</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
