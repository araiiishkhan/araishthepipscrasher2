import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(number: number, options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat("en-US", options).format(number);
}

export function formatCurrency(amount: number, currency: string = "USD") {
  return formatNumber(amount, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  });
}

export function formatPercentage(value: number) {
  return formatNumber(value, {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomPercentageChange(baseChange: number, variance: number) {
  const change = baseChange + (Math.random() * variance * 2 - variance);
  return change;
}

export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function generateCandlestickData(periods: number = 50) {
  const now = new Date();
  const data = [];
  let lastClose = 181.5 + Math.random() * 3;
  
  for (let i = 0; i < periods; i++) {
    const time = new Date(now.getTime() - (periods - i) * 15 * 60000);
    const open = lastClose;
    const high = open + Math.random() * 0.5;
    const low = open - Math.random() * 0.5;
    const close = low + Math.random() * (high - low);
    
    data.push({
      time: time.getTime() / 1000,
      open,
      high,
      low,
      close
    });
    
    lastClose = close;
  }
  
  return data;
}

export function isPositiveChange(change: string): boolean {
  return change.startsWith('+');
}
