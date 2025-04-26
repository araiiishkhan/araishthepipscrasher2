import { useState, useEffect } from "react";
import { testimonials } from "@/lib/testimonials";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Testimonials() {
  const [page, setPage] = useState(0);
  const testimonialsPerPage = 8;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [page]);

  const paginatedTestimonials = testimonials.slice(
    page * testimonialsPerPage,
    (page + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Trader Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what traders around the world have experienced with Araish the Pips Crasher.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevPage}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              variant={i === page ? "default" : "outline"}
              size="sm"
              onClick={() => setPage(i)}
              className={`min-w-8 h-8 rounded-full ${
                i === page ? "bg-primary text-white" : ""
              }`}
            >
              {i + 1}
            </Button>
          ))}
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextPage}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;