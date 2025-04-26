import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-secondary p-6 transition-all hover:transform hover:-translate-y-1 hover:shadow-lg">
      <div className="text-primary text-3xl mb-4">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

export default FeatureCard;
