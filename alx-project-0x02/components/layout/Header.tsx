import Link from "next/link";
import { HeaderLinksProps } from "@/interfaces";

const Header: React.FC<HeaderLinksProps> = ({ links }) => {
    [{ name: "Home", href: "/home" }, { name: "About", href: "/about" }]
  return (
    <header className="p-4 bg-blue-400 flex gap-4 justify-end">
      {links.map((link, idx) => (
        <Link className="px-2 py-3 bg-cyan-600 rounded-2xl hover:bg-blue-300" key={idx} href={link.href}>
          <span>{link.name}</span>
        </Link>
      ))}
    </header>
  );
};

export default Header;
