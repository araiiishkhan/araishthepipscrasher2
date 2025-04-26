import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import TestimonialCard from "./TestimonialCard";
import PerformanceCard from "./PerformanceCard";
import { testimonials, performanceMetrics } from "@/lib/testimonials";
import { performanceMetrics as metrics } from "@/lib/cryptoData";
import { images } from "@/assets/images";

export function Performance() {
  return (
    <section id="performance" className="py-16 px-6 md:px-10 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Proven <span className="text-primary">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See our verified trading results and investor testimonials
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle>Trading Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src={images.tradingResults} 
                  alt="Trading Results Chart" 
                  className="w-full aspect-[16/9] object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Monthly Return</p>
                  <p className="text-2xl font-mono font-bold text-[#0ECB81]">{metrics.monthlyReturn}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Daily Growth</p>
                  <p className="text-2xl font-mono font-bold text-[#0ECB81]">{metrics.dailyGrowth}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Drawdown</p>
                  <p className="text-2xl font-mono font-bold text-[#F6465D]">{metrics.drawdown}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle>Live Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceMetrics.map((metric) => (
                <PerformanceCard
                  key={metric.id}
                  label={metric.label}
                  value={metric.value}
                  percentage={metric.percentage}
                />
              ))}
            </CardContent>
          </Card>
        </div>
        
        {/* Presentation Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="rounded-xl overflow-hidden">
            <img
              src={images.presentation1}
              alt="Araish presentation"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src={images.presentation2}
              alt="Araish presentation"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src={images.presentation3}
              alt="Araish presentation"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Testimonials */}
        <Card className="bg-secondary p-6 md:p-8">
          <CardHeader className="text-center p-0 mb-6">
            <CardTitle>What Traders Say About Araish</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Performance;
