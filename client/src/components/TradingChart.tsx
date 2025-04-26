import { useEffect, useRef, useState } from "react";
import { generateCandlestickData } from "@/lib/utils";

export function TradingChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  
  // Simple static chart implementation instead of using lightweight-charts
  useEffect(() => {
    const drawChart = () => {
      if (!chartContainerRef.current) return;
      
      // Create chart background
      chartContainerRef.current.innerHTML = `
        <div class="bg-gray-50 rounded-lg p-4 h-[300px] relative">
          <div class="h-full w-full">
            <div class="text-xs text-gray-500 absolute top-2 left-4">181.92</div>
            <div class="text-xs text-gray-500 absolute bottom-2 left-4">181.54</div>
            
            <!-- Grid lines -->
            <div class="border-t border-gray-200 absolute top-1/4 left-0 right-0"></div>
            <div class="border-t border-gray-200 absolute top-2/4 left-0 right-0"></div>
            <div class="border-t border-gray-200 absolute top-3/4 left-0 right-0"></div>
            
            <!-- Static chart data display -->
            <div class="flex items-end justify-around h-3/4 absolute bottom-8 left-12 right-12">
              ${Array(20).fill(0).map((_, i) => {
                const height = 30 + Math.random() * 70;
                const isUp = Math.random() > 0.4;
                const color = isUp ? '#0ECB81' : '#F6465D';
                return `
                  <div class="relative w-4">
                    <div class="absolute bottom-0 w-0.5 bg-${isUp ? 'green-500' : 'red-500'} mx-auto left-0 right-0" 
                      style="height: ${Math.random() * 15 + 5}px; top: -${Math.random() * 5 + 2}px;"></div>
                    <div class="bg-${isUp ? 'green-500' : 'red-500'} rounded-sm" 
                      style="height: ${height}px; width: 6px;"></div>
                    <div class="absolute bottom-0 w-0.5 bg-${isUp ? 'green-500' : 'red-500'} mx-auto left-0 right-0" 
                      style="height: ${Math.random() * 10 + 5}px; bottom: -${Math.random() * 5 + 2}px;"></div>
                  </div>
                `;
              }).join('')}
            </div>
            
            <!-- Time labels -->
            <div class="flex justify-between text-xs text-gray-500 absolute bottom-1 left-12 right-12">
              <div>09:00</div>
              <div>12:00</div>
              <div>15:00</div>
              <div>18:00</div>
            </div>
            
            <!-- Current price indicator -->
            <div class="absolute top-2 right-4 text-blue-500 font-bold text-sm">
              GBP/JPY: 181.76
            </div>
          </div>
        </div>
      `;
    };
    
    drawChart();
    
    // Cleanup function
    return () => {
      if (chartContainerRef.current) {
        chartContainerRef.current.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <div ref={chartContainerRef} className="w-full">
      <div className="flex items-center justify-center h-[300px] bg-secondary/10 rounded-lg">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent mb-2"></div>
          <p className="text-muted-foreground">Loading Chart...</p>
        </div>
      </div>
    </div>
  );
}

export default TradingChart;
