import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images";
import { ChevronRight, Play } from "lucide-react";
import "./hero-animations.css"; // We'll create this file next

export function Hero() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-10 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="w-48 h-48 mb-8 relative floating-product">
            <div className="w-full h-full relative z-10">
              <img 
                src={images.productBox} 
                alt="Araish - The Pips Crasher" 
                className="w-full h-full object-contain shadow-xl" 
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Araish</span>{" "}
            <span className="text-secondary">the Pips</span>{" "}
            <span className="text-primary">Crasher</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
            Specialized algorithmic trading solution for the GBP/JPY forex pair, engineered with advanced precision and risk management.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="flex items-center bg-muted rounded-full px-4 py-2 text-sm">
              <span className="bg-secondary h-2 w-2 rounded-full mr-2"></span>
              Risk Management
            </div>
            <div className="flex items-center bg-muted rounded-full px-4 py-2 text-sm">
              <span className="bg-primary h-2 w-2 rounded-full mr-2"></span>
              Real-time Trading
            </div>
            <div className="flex items-center bg-muted rounded-full px-4 py-2 text-sm">
              <span className="bg-accent h-2 w-2 rounded-full mr-2"></span>
              Instant Download
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#buy-now">
              <Button className="brand-button text-white rounded-full px-8 py-6 text-base h-auto shadow-lg">
                Buy & Download Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          
          <div className="mt-10 text-2xl font-bold">
            <span className="text-primary">$1,199</span>
            <span className="text-sm font-normal text-muted-foreground ml-2">USD/USDT</span>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img
            src={images.presentation1}
            alt="Araish - Trading Results"
            className="rounded-xl shadow-xl max-w-3xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
