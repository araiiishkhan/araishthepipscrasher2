import { features } from "@/lib/cryptoData";
import FeatureCard from "./FeatureCard";
import { images } from "@/assets/images";

export function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>
            About the <span className="text-secondary">Strategy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Advanced AI-powered trading system designed specifically for the GBP/JPY currency pair with proven results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary/10 p-4 rounded-full">
              <div className="bg-gradient-to-r from-secondary to-primary w-16 h-16 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2v8"></path>
                  <path d="m19 5-7 5-7-5"></path>
                  <path d="M5 11v6"></path>
                  <path d="m19 11-7 6-7-6"></path>
                </svg>
              </div>
            </div>
            
            <div className="text-center mt-10 mb-8">
              <h3 className="text-2xl font-bold mb-3">How It Works</h3>
              <p className="text-muted-foreground">The Araish Pips Crasher uses a sophisticated algorithm to identify high-probability trading opportunities.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary font-bold text-xl">1</span>
                </div>
                <h4 className="font-medium mb-2">Market Analysis</h4>
                <p className="text-sm text-muted-foreground">AI analyzes multiple timeframes and indicators</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h4 className="font-medium mb-2">Signal Generation</h4>
                <p className="text-sm text-muted-foreground">Precise entry/exit points with risk parameters</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-xl">3</span>
                </div>
                <h4 className="font-medium mb-2">Profit Optimization</h4>
                <p className="text-sm text-muted-foreground">Automatic profit target and stop-loss management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
