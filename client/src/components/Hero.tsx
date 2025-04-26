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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ lineHeight: "1.2", fontFamily: "'Poppins', sans-serif" }}>
              <div className="title-gradient text-white px-6 py-4 rounded-xl inline-block shadow-lg">
                <span>Araish </span>
                <span>the Pips</span>
                <span> Crasher</span>
              </div>
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
          
          <div className="relative flex justify-center items-center">
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] relative floating-product">
              <div className="w-full h-full relative z-10 bg-white rounded-full p-2">
                <img 
                  src={images.productBox} 
                  alt="Araish - The Pips Crasher" 
                  className="w-full h-full object-contain rounded-xl" 
                  style={{ 
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 6px 16px rgba(0, 0, 0, 0.12)'
                  }}
                />
              </div>
              <div className="absolute -inset-12 bg-white rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <img
            src={images.presentation1}
            alt="Araish - Trading Results" 
            className="rounded-xl shadow-xl w-full max-w-5xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
