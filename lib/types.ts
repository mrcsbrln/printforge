import { ReactNode } from "react";

export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type Category = {
  name: string;
  slug: string;
};

export type CategoriesData = {
  categories: Category[];
};

export type GetModelsParams = {
  category?: string;
};

// Page Types
export type ModelDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export type CategoryPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
};

// Components Types
export type ModelCardProps = {
  model: Model;
};

export type ModelsGridProps = {
  models: Model[];
  categoryName?: string;
  query?: string;
};

export type PillProps = {
  children: ReactNode;
  className?: string;
};

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  exact?: boolean;
};
