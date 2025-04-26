import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import Performance from "@/components/Performance";
import ProductShowcase from "@/components/ProductShowcase";
import FuturisticPromo from "@/components/FuturisticPromo";
import BuyNow from "@/components/BuyNow";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Setup smooth scrolling behavior
  useEffect(() => {
    const smoothScrollToElement = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      
      if (target.tagName === 'A' && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth"
          });
        }
      }
    };
    
    document.addEventListener('click', smoothScrollToElement);
    
    return () => document.removeEventListener('click', smoothScrollToElement);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <Performance />
      <ProductShowcase />
      <FuturisticPromo />
      <BuyNow />
      <FAQ />
      <Footer />
    </div>
  );
}
