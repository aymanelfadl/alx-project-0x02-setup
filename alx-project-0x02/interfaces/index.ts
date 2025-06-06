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


export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CardProps) => void;
}