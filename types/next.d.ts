// types/next.d.ts
import "next";

declare module "next" {
  // Completely override PageProps type
  type PageProps = {
    params?: Record<string, string | string[]>;
    searchParams?: Record<string, string | string[] | undefined>;
  };
}