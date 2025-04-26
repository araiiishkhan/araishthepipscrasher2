import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/lib/cryptoData";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <Card className="bg-secondary">
      <div
        className="flex justify-between items-center p-5 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="font-bold">{question}</h3>
        <div className="text-primary transition-transform">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      <div
        className={cn(
          "transition-all overflow-hidden",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <CardContent className={isOpen ? "mt-0 p-5 pt-0" : "hidden"}>
          <p className="text-muted-foreground">{answer}</p>
        </CardContent>
      </div>
    </Card>
  );
}

export function FAQ() {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="py-16 px-6 md:px-10 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Everything you need to know about Araish Pips Crasher
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItemId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
