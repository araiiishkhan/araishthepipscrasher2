import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PerformanceCardProps {
  label: string;
  value: string;
  percentage: number;
}

export function PerformanceCard({ label, value, percentage }: PerformanceCardProps) {
  // Determine gradient colors based on label
  const getGradientColors = () => {
    switch (label) {
      case "Trading Weeks":
        return "from-secondary to-secondary/80";
      case "Win Rate":
        return "from-primary to-primary/80";
      case "Profit Factor":
        return "from-accent to-accent/80";
      default:
        return "from-secondary to-primary";
    }
  };

  return (
    <Card className="bg-white shadow-sm rounded-xl p-5 border border-border/10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{label}</p>
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
            {value}
          </p>
        </div>
        <div className="w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-primary opacity-20"></div>
        </div>
      </div>
      <div className="relative w-full h-2 bg-muted/30 rounded-full overflow-hidden">
        <div 
          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${getGradientColors()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </Card>
  );
}

export default PerformanceCard;
