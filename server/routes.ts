import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { cryptoPairs, tradingSignals, insertCryptoPairSchema, insertTradingSignalSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Get all crypto pairs
  app.get("/api/crypto-pairs", async (req, res) => {
    try {
      // Sample data for demonstration
      const pairs = [
        { id: 1, symbol: "GBP/JPY", price: "181.971", change: "+0.12%", direction: "up", lastUpdated: new Date().toISOString() },
        { id: 2, symbol: "EUR/USD", price: "1.1305", change: "-0.08%", direction: "down", lastUpdated: new Date().toISOString() },
        { id: 3, symbol: "USD/JPY", price: "142.958", change: "+0.35%", direction: "up", lastUpdated: new Date().toISOString() },
        { id: 4, symbol: "GBP/USD", price: "1.31971", change: "+0.08%", direction: "up", lastUpdated: new Date().toISOString() },
        { id: 5, symbol: "EUR/JPY", price: "161.522", change: "-0.15%", direction: "down", lastUpdated: new Date().toISOString() }
      ];
      res.json(pairs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch crypto pairs" });
    }
  });

  // Get all trading signals
  app.get("/api/trading-signals", async (req, res) => {
    try {
      // Sample data for demonstration
      const signals = [
        { id: 1, pair: "GBP/JPY", timeframe: "15M", signal: "BUY", strength: 9, timestamp: new Date().toISOString() },
        { id: 2, pair: "GBP/JPY", timeframe: "1H", signal: "BUY", strength: 8, timestamp: new Date().toISOString() },
        { id: 3, pair: "GBP/JPY", timeframe: "4H", signal: "BUY", strength: 7, timestamp: new Date().toISOString() },
        { id: 4, pair: "EUR/USD", timeframe: "1H", signal: "SELL", strength: 6, timestamp: new Date().toISOString() },
        { id: 5, pair: "USD/JPY", timeframe: "4H", signal: "BUY", strength: 8, timestamp: new Date().toISOString() }
      ];
      res.json(signals);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trading signals" });
    }
  });

  // Get performance metrics
  app.get("/api/performance", async (req, res) => {
    try {
      const performance = {
        monthlyReturn: "+391.10%",
        dailyGrowth: "+25.5%",
        drawdown: "44.6%",
        winRate: "91.7%",
        profitFactor: "3.8",
        balance: "$4,911.04",
        tradingWeeks: "26",
        weeklyConsistency: "97.8%"
      };
      res.json(performance);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch performance metrics" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
