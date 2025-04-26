import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-white border border-border/30 rounded-xl p-6 transition-all hover:shadow-md hover:border-primary/20">
      <div className="flex gap-4 items-start">
        <div className="bg-primary/10 p-3 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d={getIconPath(icon)} />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </Card>
  );
}

function getIconPath(icon: string): string {
  switch (icon) {
    case 'robot':
      return "M12 2a8 8 0 0 1 8 8v1h-8v5h2a2 2 0 0 1 0 4H8.4a4 4 0 0 1-3.8-2.6C3 13.4 2 8.3 2 10c0-4.4 3.6-8 8-8zm-2 18h4m-5-7H5m14-6h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1M7 7H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1";
    case 'signal':
      return "M2 20h.01m4 0h.01m4 0h.01m4 0h.01m4 0h.01M5 14a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm5-5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm5 3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm5-6a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1z";
    case 'chart':
      return "M3 3v18h18M7 16l4-4 4 4 6-6";
    case 'shield':
      return "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4";
    case 'bolt':
      return "M13 2L3 14h9l-1 8 10-12h-9l1-8z";
    case 'target':
      return "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z";
    default:
      return "M9.615 20H7l1-8H3L13 2l-1 7h5l-7.385 11z"; // default lightning bolt
  }
}

export default FeatureCard;
