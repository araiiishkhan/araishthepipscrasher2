import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import TestimonialCard from "./TestimonialCard";
import PerformanceCard from "./PerformanceCard";
import { testimonials, performanceMetrics } from "@/lib/testimonials";
import { performanceMetrics as metrics } from "@/lib/cryptoData";
import { images } from "@/assets/images";
import { ChartIcon } from "@/assets/icons";

export function Performance() {
  return (
    <section id="performance" className="py-20 px-6 md:px-10 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>
            <span className="text-primary">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See our verified trading results and trader testimonials
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden mb-16">
            <div className="bg-gradient-to-r from-secondary to-primary p-4 text-white">
              <h3 className="font-bold text-lg">Trading Results</h3>
            </div>
            <div className="p-6">
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src={images.tradingResults} 
                  alt="Trading Results Chart" 
                  className="w-full aspect-[16/9] object-cover object-center rounded-lg"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Return</p>
                  <p className="text-2xl font-bold text-secondary">{metrics.monthlyReturn}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <p className="text-sm text-muted-foreground mb-1">Daily Growth</p>
                  <p className="text-2xl font-bold text-primary">{metrics.dailyGrowth}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <p className="text-sm text-muted-foreground mb-1">Drawdown</p>
                  <p className="text-2xl font-bold text-accent">{metrics.drawdown}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                  <p className="text-sm text-muted-foreground mb-1">Win Rate</p>
                  <p className="text-2xl font-bold text-secondary">{metrics.winRate}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Live Trading Metrics</h3>
              <p className="text-muted-foreground">Consistent performance across various market conditions</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {performanceMetrics.map((metric) => (
                <PerformanceCard
                  key={metric.id}
                  label={metric.label}
                  value={metric.value}
                  percentage={metric.percentage}
                />
              ))}
            </div>
          </div>
          
          {/* Presentation Photos */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Verified Results</h3>
              <p className="text-muted-foreground">Real trading screenshots from our users</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-3 rounded-xl shadow-md overflow-hidden">
                <img
                  src={images.presentation1}
                  alt="Araish presentation"
                  className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-3 rounded-xl shadow-md overflow-hidden">
                <img
                  src={images.presentation2}
                  alt="Araish presentation"
                  className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-3 rounded-xl shadow-md overflow-hidden">
                <img
                  src={images.presentation3}
                  alt="Araish presentation"
                  className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Trader Testimonials</h3>
              <p className="text-muted-foreground">What our users say about Araish Pips Crasher</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-5">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Performance;
