"use client";

import Image from "next/image";
import NavLink from "../NavLink";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative">
            {/* Desktop logo */}
            <Image
              src="/img/printforge-logo.svg"
              alt="PrintForge Logo"
              width={240}
              height={61}
              className="w-50 h-auto hidden md:block"
            />
            {/* Mobile logo */}
            <Image
              src="/img/printforge-logo-icon.svg"
              alt="PrintForge Logo"
              width={39}
              height={39}
              className="w-10 h-auto block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <NavLink href="/3d-models">3D Models</NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
}
