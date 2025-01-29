import "next";

declare module "next" {
  // Override the PageProps type to fix searchParams
  interface PageProps {
    params?: { [key: string]: string | string[] };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}