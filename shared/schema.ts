import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const forexPairs = pgTable("forex_pairs", {
  id: serial("id").primaryKey(),
  symbol: text("symbol").notNull().unique(),
  price: text("price").notNull(),
  change: text("change").notNull(),
  direction: text("direction").notNull(), // up or down
  lastUpdated: text("last_updated").notNull(),
});

export const tradingSignals = pgTable("trading_signals", {
  id: serial("id").primaryKey(),
  pair: text("pair").notNull(),
  timeframe: text("timeframe").notNull(),
  signal: text("signal").notNull(), // BUY, SELL, NEUTRAL
  strength: integer("strength").notNull(), // 1-10
  timestamp: text("timestamp").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCryptoPairSchema = createInsertSchema(cryptoPairs).omit({
  id: true,
});

export const insertTradingSignalSchema = createInsertSchema(tradingSignals).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertCryptoPair = z.infer<typeof insertCryptoPairSchema>;
export type CryptoPair = typeof cryptoPairs.$inferSelect;

export type InsertTradingSignal = z.infer<typeof insertTradingSignalSchema>;
export type TradingSignal = typeof tradingSignals.$inferSelect;
