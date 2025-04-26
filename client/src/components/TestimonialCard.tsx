import { Card, CardContent } from "@/components/ui/card";
import { type Testimonial } from "@/lib/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-background p-5">
      <div className="flex mb-3">
        <div className="text-primary">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{testimonial.text}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
          {testimonial.author.initials}
        </div>
        <div className="ml-3">
          <p className="font-bold">{testimonial.author.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.author.title}</p>
        </div>
      </div>
    </Card>
  );
}

export default TestimonialCard;
