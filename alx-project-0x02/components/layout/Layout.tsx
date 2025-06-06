import Header from "./Header";
import { LayoutProps } from "@/interfaces";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header links={[{ name: "Home", href: "/home" }, { name: "About", href: "/about" }, { name: "Posts", href: "/posts" }]} />
      <main className="p-4">{children}</main>
    </>
  );
};

export default Layout;
