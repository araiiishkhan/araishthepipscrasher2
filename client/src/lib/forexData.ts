export type ForexPair = {
  id: number;
  symbol: string;
  price: string;
  change: string;
  direction: 'up' | 'down';
  lastUpdated: string;
};

export type TradingSignal = {
  id: number;
  pair: string;
  timeframe: string;
  signal: string;
  strength: number;
  timestamp: string;
};

export const initialForexPairs: ForexPair[] = [
  { id: 1, symbol: "GBP/JPY", price: "188.450", change: "+0.25%", direction: "up", lastUpdated: new Date().toISOString() },
  { id: 2, symbol: "EUR/USD", price: "1.0923", change: "-0.12%", direction: "down", lastUpdated: new Date().toISOString() },
  { id: 3, symbol: "USD/JPY", price: "148.150", change: "+0.18%", direction: "up", lastUpdated: new Date().toISOString() },
  { id: 4, symbol: "GBP/USD", price: "1.2720", change: "+0.15%", direction: "up", lastUpdated: new Date().toISOString() },
  { id: 5, symbol: "EUR/JPY", price: "161.820", change: "+0.05%", direction: "up", lastUpdated: new Date().toISOString() }
];

export const initialTradingSignals: TradingSignal[] = [
  { id: 1, pair: "GBP/JPY", timeframe: "15M", signal: "BUY", strength: 9, timestamp: new Date().toISOString() },
  { id: 2, pair: "GBP/JPY", timeframe: "1H", signal: "BUY", strength: 8, timestamp: new Date().toISOString() },
  { id: 3, pair: "GBP/JPY", timeframe: "4H", signal: "BUY", strength: 7, timestamp: new Date().toISOString() }
];

export const monthlyChartData = [
  { month: "Apr", value: 30 },
  { month: "May", value: 40 },
  { month: "Jun", value: 70 },
  { month: "Jul", value: 50 },
  { month: "Aug", value: 80 },
  { month: "Sep", value: 60 },
  { month: "Oct", value: 90 }
];

export const paymentAddress = "TFJt7YsWUKb3To8UfBmx55ZWpUMoDdRvAo";
export const productPrice = 1199;
export const originalPrice = 1999;
export const discountPercentage = 40;