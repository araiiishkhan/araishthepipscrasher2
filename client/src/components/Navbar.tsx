import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavLinks = [
  { name: "Features", href: "#features" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Performance", href: "#performance" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-secondary py-4 px-6 md:px-10 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-primary text-2xl font-bold">Araish</h1>
          <span className="text-sm ml-2 bg-primary text-primary-foreground px-2 py-1 rounded font-mono font-bold">
            PIPS CRASHER
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div>
          <a href="#buy-now">
            <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Buy Now
            </Button>
          </a>
          <button
            className="md:hidden ml-4 text-foreground focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-6 bg-secondary border-t border-gray-700">
          <div className="flex flex-col space-y-4">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors"
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
