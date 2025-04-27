import { Card } from "@/components/ui/card";
import { ForexPair } from "@/lib/cryptoData";
import { isPositiveChange } from "@/lib/utils";

interface CurrencyPairCardProps {
  pair: ForexPair;
}

export function CurrencyPairCard({ pair }: CurrencyPairCardProps) {
  const isPositive = isPositiveChange(pair.change);

  return (
    <Card className="bg-gray-50 p-4 shadow-sm">
      <p className="text-sm text-muted-foreground mb-1">{pair.symbol}</p>
      <p className="text-xl font-mono font-bold">
        {pair.price} <span className={`text-sm ${isPositive ? 'text-[#0ECB81]' : 'text-[#F6465D]'}`}>{pair.change}</span>
      </p>
    </Card>
  );
}

export default CurrencyPairCard;