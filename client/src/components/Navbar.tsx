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
          <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
            <img src={images.logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <Link href="/" className="flex flex-col">
              <span className="font-bold text-lg">
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
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <a href="#buy-now">
            <Button variant="default" className="brand-button text-white rounded-full px-6">
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
        <div className="md:hidden mt-4 py-4 px-6 bg-background border-t border-border">
          <div className="flex flex-col space-y-4">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
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
