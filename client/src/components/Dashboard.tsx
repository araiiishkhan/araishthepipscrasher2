import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import TradingChart from "./TradingChart";
import CurrencyPairCard from "./CurrencyPairCard";
import { 
  initialCryptoPairs, 
  initialTradingSignals, 
  monthlyChartData, 
  type ForexPair, 
  type TradingSignal 
} from "@/lib/cryptoData";
import { useQuery } from "@tanstack/react-query";

export function Dashboard() {
  const { data: pairs = initialCryptoPairs, isLoading: isLoadingPairs } = useQuery<CryptoPair[]>({
    queryKey: ["/api/crypto-pairs"],
  });

  const { data: signals = initialTradingSignals, isLoading: isLoadingSignals } = useQuery<TradingSignal[]>({
    queryKey: ["/api/trading-signals"],
  });

  return (
    <section id="dashboard" className="py-16 px-6 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Revolutionary <span className="text-primary">Trading Dashboard</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience a data-rich interface that gives you full control over your trading strategy
          </p>
        </div>
        
        <Card className="bg-background mb-10 p-4">
          <CardContent className="p-0">
            <TradingChart />
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Live Market Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {pairs.slice(0, 2).map((pair: CryptoPair) => (
                  <CurrencyPairCard key={pair.id} pair={pair} />
                ))}
              </div>
              <Card className="bg-gray-50 shadow-sm">
                <CardHeader className="py-3 px-4">
                  <CardTitle className="text-base">Current Trading Signals</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  {signals.filter((s: TradingSignal) => s.pair === "GBP/JPY").map((signal: TradingSignal) => (
                    <div key={signal.id} className="flex justify-between items-center mb-2 last:mb-0">
                      <span>{signal.pair} {signal.timeframe}</span>
                      <Badge variant="default" className={signal.signal === 'BUY' ? 'bg-[#0ECB81] text-primary-foreground' : 'bg-[#F6465D] text-primary-foreground'}>
                        {signal.signal}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </CardContent>
          </Card>
          
          <Card className="bg-background">
            <CardHeader>
              <CardTitle>Trading Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <Card className="bg-gray-50 p-4 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Win Rate</p>
                  <p className="text-xl font-mono font-bold text-[#0ECB81]">91.7%</p>
                </Card>
                <Card className="bg-gray-50 p-4 shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Profit Factor</p>
                  <p className="text-xl font-mono font-bold text-primary">3.8</p>
                </Card>
              </div>
              <Card className="bg-gray-50 p-4 shadow-sm">
                <p className="font-bold text-primary mb-2 text-center">Monthly Performance</p>
                <div className="w-full flex items-end justify-between h-20 px-2">
                  {monthlyChartData.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#0ECB81] w-6 rounded-t-sm"
                      style={{ height: `${item.value}%` }}
                    ></div>
                  ))}
                </div>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
