import { NavLinkProps } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, exact }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
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
