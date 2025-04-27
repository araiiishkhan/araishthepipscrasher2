import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images";

const NavLinks = [
  { name: "About Strategy", href: "#features" },
  { name: "Performance", href: "#performance" },
  { name: "Buy Now", href: "#buy-now" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background py-4 px-6 md:px-10 sticky top-0 z-50 shadow-sm border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="h-14 w-auto overflow-hidden mr-3">
              <img src={images.logo} alt="Araish Logo" className="h-full w-auto object-contain" />
            </div>
          </Link>
          <div>
            <Link href="/" className="flex flex-col">
              <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}>
                <span style={{ color: "#33B3E3" }}>Araish </span>
                <span style={{ color: "#9966FF" }}>the Pips </span>
                <span style={{ color: "#33B3E3" }}>Crasher</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 transition-colors" // Updated styling
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-6 bg-background border-t border-border">
          <div className="flex flex-col space-y-4">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 transition-colors" // Updated styling
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;