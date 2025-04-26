import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images";
import { ChevronRight, Play } from "lucide-react";
import "./hero-animations.css"; // We'll create this file next

export function Hero() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-10 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              <span className="text-primary">Araish</span>{" "}
              <span className="text-secondary">the Pips</span>{" "}
              <span className="text-primary">Crasher</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Specialized algorithmic trading solution for the GBP/JPY forex pair, engineered with advanced precision and risk management.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 text-sm">
                <span className="bg-secondary h-2 w-2 rounded-full mr-2"></span>
                Risk Management
              </div>
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 text-sm">
                <span className="bg-primary h-2 w-2 rounded-full mr-2"></span>
                Real-time Trading
              </div>
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 text-sm">
                <span className="bg-accent h-2 w-2 rounded-full mr-2"></span>
                Instant Download
              </div>
            </div>
            
            <div className="flex gap-5 mb-8">
              <a href="#buy-now">
                <Button className="brand-button text-white rounded-full px-8 py-6 text-base h-auto shadow-lg">
                  Buy & Download Now <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            
            <div className="text-2xl font-bold">
              <span className="text-primary" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>$1,199</span>
              <span className="text-sm font-normal text-muted-foreground ml-2">USD/USDT</span>
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="w-full h-full">
              <img 
                src={images.presentation1}
                alt="Araish - Trading Results" 
                className="w-full h-auto object-cover rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl blur-xl opacity-50"></div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 relative floating-product">
            <div className="w-full h-full relative z-10">
              <img 
                src={images.productBox} 
                alt="Araish - The Pips Crasher" 
                className="w-full h-full object-contain shadow-lg" 
              />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
