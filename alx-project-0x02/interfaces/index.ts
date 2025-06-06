import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}


export interface HeaderLink {
  name: string;
  href: string;
}

export interface HeaderLinksProps {
  links: HeaderLink[];
}
