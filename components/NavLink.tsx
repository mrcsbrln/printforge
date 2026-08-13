import { NavLinkProps } from "@/app/types";
import Link from "next/link";

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <li className="text-sm uppercase">
      <Link
        href={href}
        className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-accent ${isActive ? "text-orange-accent" : "text-gray-700"}`}
      >
        {children}
      </Link>
    </li>
  );
}
