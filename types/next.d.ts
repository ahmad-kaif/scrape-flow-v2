import "next";

declare module "next" {
  // Nuclear override for PageProps
  type PageProps<T = any> = {
    params?: T;
    searchParams?: { [key: string]: string | string[] | undefined };
  };
}