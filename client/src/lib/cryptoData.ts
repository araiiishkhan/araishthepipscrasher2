export interface ForexPair {
  id: number;
  symbol: string;
  price: string;
  change: string;
  direction: 'up' | 'down';
  lastUpdated: string;
}

export interface TradingSignal {
  id: number;
  pair: string;
  timeframe: string;
  signal: 'BUY' | 'SELL' | 'NEUTRAL';
  strength: number;
  timestamp: string;
}

export interface PerformanceMetrics {
  monthlyReturn: string;
  dailyGrowth: string;
  drawdown: string;
  winRate: string;
  profitFactor: string;
  balance: string;
  tradingWeeks: string;
  weeklyConsistency: string;
}

export const initialForexPairs: ForexPair[] = [
  { id: 1, symbol: "GBP/JPY", price: "181.971", change: "+0.12%", direction: "up", lastUpdated: new Date().toISOString() },
  { id: 2, symbol: "EUR/USD", price: "1.1305", change: "-0.08%", direction: "down", lastUpdated: new Date().toISOString() },
  { id: 3, symbol: "USD/JPY", price: "142.958", change: "+0.35%", direction: "up", lastUpdated: new Date().toISOString() },
  { id: 4, symbol: "GBP/USD", price: "1.31971", change: "+0.08%", direction: "up", lastUpdated: new Date().toISOString() },
  { id: 5, symbol: "EUR/JPY", price: "161.522", change: "-0.15%", direction: "down", lastUpdated: new Date().toISOString() }
];

export const initialTradingSignals: TradingSignal[] = [
  { id: 1, pair: "GBP/JPY", timeframe: "15M", signal: "BUY", strength: 9, timestamp: new Date().toISOString() },
  { id: 2, pair: "GBP/JPY", timeframe: "1H", signal: "BUY", strength: 8, timestamp: new Date().toISOString() },
  { id: 3, pair: "GBP/JPY", timeframe: "4H", signal: "BUY", strength: 7, timestamp: new Date().toISOString() },
  { id: 4, pair: "EUR/USD", timeframe: "1H", signal: "SELL", strength: 6, timestamp: new Date().toISOString() },
  { id: 5, pair: "USD/JPY", timeframe: "4H", signal: "BUY", strength: 8, timestamp: new Date().toISOString() }
];

export const performanceMetrics: PerformanceMetrics = {
  monthlyReturn: "+391.10%",
  dailyGrowth: "+25.5%",
  drawdown: "44.6%",
  winRate: "91.7%",
  profitFactor: "3.8",
  balance: "$4,911.04",
  tradingWeeks: "26",
  weeklyConsistency: "97.8%"
};

export const features = [
  {
    id: 1,
    icon: "robot",
    title: "AI-Powered Analysis",
    description: "Advanced algorithms monitor market conditions 24/7 to identify profitable trading opportunities."
  },
  {
    id: 2,
    icon: "chart-line",
    title: "Precision Entry Points",
    description: "Pinpoint entry and exit strategies that maximize profit and minimize risk in GBP/JPY trading."
  },
  {
    id: 3,
    icon: "shield-alt",
    title: "Risk Management",
    description: "Built-in protection features to preserve your capital during volatile market conditions."
  },
  {
    id: 4,
    icon: "bolt",
    title: "Lightning Execution",
    description: "React to market changes in milliseconds with automated trade execution technology."
  },
  {
    id: 5,
    icon: "cogs",
    title: "MetaTrader 5 Compatible",
    description: "Seamlessly integrates with MT5 platform for a familiar trading environment."
  },
  {
    id: 6,
    icon: "graduation-cap",
    title: "Expert Support",
    description: "Access to trading professionals who guide you through setup and optimization."
  }
];

export const faqs = [
  {
    id: 1,
    question: "What is the minimum deposit required?",
    answer: "We recommend a minimum of $1,000 to get started, although the system can work with as little as $500. For optimal results and to fully leverage the compound growth capabilities, $2,000 or more is ideal."
  },
  {
    id: 2,
    question: "Can I use any broker with Araish?",
    answer: "Yes, Araish is compatible with any broker that supports MetaTrader 5. For optimal performance, we recommend brokers with tight spreads, fast execution, and reliable service. Our setup guide includes a list of recommended brokers."
  },
  {
    id: 3,
    question: "Is previous trading experience necessary?",
    answer: "No, Araish is designed to be user-friendly for traders of all experience levels. Our comprehensive setup guide walks you through each step, and our support team is available to assist with any questions. Basic familiarity with MetaTrader 5 is helpful but not required."
  },
  {
    id: 4,
    question: "How much time do I need to dedicate daily?",
    answer: "Araish is fully automated and runs 24/5 during market hours. You can set it up in less than 30 minutes, and then it requires minimal oversight. Many users check performance once or twice daily for just a few minutes. The system handles entry, exit, and risk management automatically."
  },
  {
    id: 5,
    question: "What kind of returns can I expect?",
    answer: "While past performance doesn't guarantee future results, our verified accounts have shown monthly returns ranging from 200% to 400%. Results vary based on market conditions, account size, and risk settings. Conservative settings typically yield 50-100% monthly with reduced risk."
  }
];

export const productBenefits = [
  "Specialized AI algorithm focusing solely on the GBP/JPY currency pair",
  "Fully automated trading with manual override capabilities",
  "Works on MetaTrader 5 platform with any broker of your choice",
  "Consistent monthly returns with proven track record",
  "Lifetime updates and technical support included"
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
