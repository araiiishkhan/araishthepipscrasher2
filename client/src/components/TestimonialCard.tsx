import { Card, CardContent } from "@/components/ui/card";
import { type Testimonial } from "@/lib/testimonials";
import { Star, MapPin, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-white shadow-sm rounded-xl border border-border/10 relative overflow-hidden h-full">
      <div className="absolute top-3 right-3 opacity-10">
        <Quote size={40} className="text-primary transform rotate-180" />
      </div>
      <CardContent className="p-5">
        <div className="flex space-x-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={i < testimonial.rating ? "fill-secondary text-secondary" : "text-gray-200"} 
              size={14}
            />
          ))}
        </div>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{testimonial.text}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white font-medium">
            {testimonial.author.initials}
          </div>
          <div className="ml-3">
            <p className="font-medium text-sm">{testimonial.author.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.author.title}</p>
            <div className="flex items-center mt-1 text-xs text-muted-foreground">
              <MapPin size={10} className="mr-1" />
              {testimonial.author.location}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
