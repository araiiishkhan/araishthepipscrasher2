import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PerformanceCardProps {
  label: string;
  value: string;
  percentage: number;
}

export function PerformanceCard({ label, value, percentage }: PerformanceCardProps) {
  return (
    <Card className="bg-background p-4">
      <div className="flex justify-between mb-2">
        <p className="font-bold">{label}</p>
        <p className={label === "Trading Weeks" ? "text-primary font-bold" : "text-[#0ECB81] font-bold"}>
          {value}
        </p>
      </div>
      <Progress 
        value={percentage} 
        className="h-2 bg-secondary/30" 
        indicatorClassName={label === "Trading Weeks" ? "bg-primary" : "bg-[#0ECB81]"}
      />
    </Card>
  );
}

export default PerformanceCard;
