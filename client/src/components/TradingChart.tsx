import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { generateCandlestickData } from "@/lib/utils";

export function TradingChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;
    
    let chart: any = null;
    
    const initializeChart = async () => {
      try {
        const LightweightCharts = await import('lightweight-charts');
        
        // Clear previous chart if it exists
        if (chartContainerRef.current) {
          chartContainerRef.current.innerHTML = '';
        }
        
        chart = LightweightCharts.createChart(chartContainerRef.current!, {
          layout: {
            background: { color: '#1E2026' },
            textColor: '#d1d4dc',
          },
          grid: {
            vertLines: { color: 'rgba(42, 46, 57, 0.5)' },
            horzLines: { color: 'rgba(42, 46, 57, 0.5)' },
          },
          timeScale: {
            timeVisible: true,
            secondsVisible: false,
          },
          width: chartContainerRef.current!.clientWidth,
          height: 300,
        });
        
        const candlestickSeries = chart.addCandlestickSeries({
          upColor: '#0ECB81',
          downColor: '#F6465D',
          borderVisible: false,
          wickUpColor: '#0ECB81',
          wickDownColor: '#F6465D',
        });
        
        const data = generateCandlestickData(100);
        candlestickSeries.setData(data);
        
        // Add volume series
        const volumeSeries = chart.addHistogramSeries({
          color: '#26a69a',
          priceFormat: {
            type: 'volume',
          },
          priceScaleId: '',
          scaleMargins: {
            top: 0.8,
            bottom: 0,
          },
        });
        
        const volumeData = data.map(item => ({
          time: item.time,
          value: (Math.random() * 10 + 1) * 1000,
          color: item.close >= item.open ? '#0ECB81' : '#F6465D'
        }));
        
        volumeSeries.setData(volumeData);
        
        // Resize handler
        const resizeObserver = new ResizeObserver(entries => {
          if (entries.length === 0 || !entries[0].contentRect) return;
          const { width, height } = entries[0].contentRect;
          chart.applyOptions({ width, height: 300 });
          chart.timeScale().fitContent();
        });
        
        resizeObserver.observe(chartContainerRef.current!);
        
        return () => {
          resizeObserver.disconnect();
          chart.remove();
        };
      } catch (error) {
        console.error("Error loading chart:", error);
        if (chartContainerRef.current) {
          // Fallback content if chart fails to load
          chartContainerRef.current.innerHTML = `
            <div class="flex items-center justify-center h-[300px] bg-secondary/30 rounded-lg">
              <p class="text-muted-foreground">Chart loading failed. Please try again later.</p>
            </div>
          `;
        }
      }
    };
    
    initializeChart();
    
    return () => {
      if (chart) {
        chart.remove();
      }
    };
  }, []);
  
  return (
    <div className="chart-container" ref={chartContainerRef}>
      <div className="flex items-center justify-center h-full bg-secondary/30 rounded-lg">
        <p className="text-muted-foreground">Loading Chart...</p>
      </div>
    </div>
  );
}

export default TradingChart;
