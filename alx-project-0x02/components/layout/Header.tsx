import Link from "next/link";
import Image from "next/image";
import { HeaderLinksProps } from "@/interfaces";

const Header: React.FC<HeaderLinksProps> = ({ links }) => {
  return (
    <header className="p-4 bg-gray-50 flex items-center justify-between">
      <div className="w-16 h-16 hover:w-20 hover:h-20 relative rounded-full overflow-hidden">
        <Link href="/" >
        <Image
          src="https://i.pinimg.com/736x/e7/3a/a8/e73aa8e639f8a446c59de0b47b84771b.jpg"
          alt="My Logo"
          fill
          style={{ objectFit: "cover" }}
          />
        </Link> 
      </div>
      <nav className="flex gap-4">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="px-4 py-2 border-2 border-gray-300 text-black rounded-xl hover:bg-gray-200 transition"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
