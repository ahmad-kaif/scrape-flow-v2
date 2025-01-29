import "next";

declare module "next" {
  type PageProps = {
    params?: Record<string, string | string[]>;
    searchParams?: Record<string, string | string[] | undefined>;
  };
}