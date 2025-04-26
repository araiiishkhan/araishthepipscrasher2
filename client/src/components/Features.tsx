import { features } from "@/lib/cryptoData";
import FeatureCard from "./FeatureCard";

export function Features() {
  return (
    <section id="features" className="py-16 px-6 md:px-10 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Trading Weaponry for <span className="text-primary">Maximum Profit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced AI-powered trading system designed specifically for the GBP/JPY currency pair
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
