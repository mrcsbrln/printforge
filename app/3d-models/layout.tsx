import type { ReactNode } from "react";
import CategoriesNav from "@/components/layout/CategoriesNav";

export default function ModelsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      {/* Responsive Navigation */}
      <CategoriesNav />
      {/* Main Content Area */}
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  );
}
