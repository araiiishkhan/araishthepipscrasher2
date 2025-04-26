import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-10 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dominate <span className="text-primary">GBP/JPY</span> Trading
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
              Step into the future of trading with Araish - The Pips Crasher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#buy-now">
                <Button className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-6 text-lg h-auto">
                  Get Started Today
                </Button>
              </a>
              <a href="#performance">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-6 text-lg h-auto"
                >
                  View Performance
                </Button>
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-[#0ECB81] font-mono">+391%</span>
                <span className="text-muted-foreground text-sm">Monthly Return</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary font-mono">+25.5%</span>
                <span className="text-muted-foreground text-sm">Daily Growth</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/DKq2EoL.jpg"
              alt="Araish - The Pips Crasher"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
