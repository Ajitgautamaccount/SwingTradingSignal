import React, { useMemo } from 'react';
import { RealStockExample } from '../types/pattern';

interface MiniCandlestickChartProps {
  example: RealStockExample;
  height?: number;
}

export const MiniCandlestickChart: React.FC<MiniCandlestickChartProps> = ({
  example,
  height = 128,
}) => {
  const candles = example.candles;

  const { minPrice, maxPrice, priceRange } = useMemo(() => {
    if (!candles || candles.length === 0) {
      return { minPrice: 0, maxPrice: 100, priceRange: 100 };
    }
    let min = Math.min(...candles.map((c) => c.low));
    let max = Math.max(...candles.map((c) => c.high));

    // Include entry, stop loss, and target in range if available
    min = Math.min(min, example.stopLossPrice);
    max = Math.max(max, example.target1Price);

    const pad = (max - min) * 0.1 || 2;
    const effectiveMin = Math.max(0, min - pad);
    const effectiveMax = max + pad;
    return {
      minPrice: effectiveMin,
      maxPrice: effectiveMax,
      priceRange: effectiveMax - effectiveMin || 1,
    };
  }, [candles, example]);

  const width = 320;
  const paddingTop = 12;
  const paddingBottom = 16;
  const paddingLeft = 8;
  const paddingRight = 42; // for right-side mini price axis
  const plotHeight = height - paddingTop - paddingBottom;
  const count = candles.length;
  const slotWidth = (width - paddingLeft - paddingRight) / (count || 1);
  const bodyWidth = Math.max(3, Math.min(10, slotWidth * 0.65));

  const priceToY = (price: number) => {
    return paddingTop + plotHeight * (1 - (price - minPrice) / priceRange);
  };

  const indexToX = (idx: number) => {
    return paddingLeft + idx * slotWidth + slotWidth / 2;
  };

  const lastCandle = candles[candles.length - 1];
  const firstCandle = candles[0];
  const netReturn = lastCandle && firstCandle 
    ? (((lastCandle.close - firstCandle.open) / firstCandle.open) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-slate-950/90 border border-slate-800/80 group-hover:border-slate-700/80 transition-colors">
      {/* Top Header Badge */}
      <div className="absolute top-1.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-mono pointer-events-none z-10">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-slate-200">{example.ticker}</span>
          <span className="text-slate-500">{example.timeframe}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className={`font-semibold ${example.tradeType === 'Long' ? 'text-emerald-400' : 'text-rose-400'}`}>
            {example.tradeType}
          </span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-300 font-bold tabular-nums">
            ₹{example.entryPrice >= 1000 ? Math.round(example.entryPrice).toLocaleString('en-IN') : example.entryPrice.toFixed(0)}
          </span>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="w-full h-full block"
        style={{ height }}
      >
        <defs>
          <linearGradient id={`mini-bull-${example.ticker}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id={`mini-bear-${example.ticker}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Subtle Horizontal Reference Grid Lines */}
        <line
          x1={paddingLeft}
          y1={priceToY(example.entryPrice)}
          x2={width - paddingRight}
          y2={priceToY(example.entryPrice)}
          stroke="#38bdf8"
          strokeWidth="0.8"
          strokeDasharray="2,2"
          strokeOpacity="0.7"
        />

        {/* Stop Loss Line */}
        <line
          x1={paddingLeft}
          y1={priceToY(example.stopLossPrice)}
          x2={width - paddingRight}
          y2={priceToY(example.stopLossPrice)}
          stroke="#f43f5e"
          strokeWidth="0.8"
          strokeDasharray="2,2"
          strokeOpacity="0.7"
        />

        {/* Target 1 Line */}
        <line
          x1={paddingLeft}
          y1={priceToY(example.target1Price)}
          x2={width - paddingRight}
          y2={priceToY(example.target1Price)}
          stroke="#10b981"
          strokeWidth="0.8"
          strokeDasharray="2,2"
          strokeOpacity="0.7"
        />

        {/* Zone from annotations if present */}
        {example.annotations.zones.slice(0, 1).map((zone, zIdx) => {
          const x1 = indexToX(zone.startIdx) - slotWidth / 2;
          const x2 = indexToX(Math.min(zone.endIdx, count - 1)) + slotWidth / 2;
          const yTop = priceToY(zone.top);
          const yBottom = priceToY(zone.bottom);
          return (
            <rect
              key={`mini-zone-${zIdx}`}
              x={x1}
              y={Math.min(yTop, yBottom)}
              width={Math.max(8, x2 - x1)}
              height={Math.max(4, Math.abs(yBottom - yTop))}
              fill={zone.color.includes('f43f5e') ? `url(#mini-bear-${example.ticker})` : `url(#mini-bull-${example.ticker})`}
              stroke={zone.color.slice(0, 7)}
              strokeWidth="0.6"
              strokeDasharray="2,2"
              rx="1.5"
            />
          );
        })}

        {/* Trendline from annotations if present */}
        {example.annotations.trendlines.slice(0, 1).map((tline, tIdx) => {
          const x1 = indexToX(tline.x1Index);
          const y1 = priceToY(tline.y1);
          const x2 = indexToX(Math.min(tline.x2Index, count - 1));
          const y2 = priceToY(tline.y2);
          return (
            <line
              key={`mini-tline-${tIdx}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={tline.color || '#38bdf8'}
              strokeWidth="1.2"
              strokeDasharray={tline.dashed ? '2,2' : undefined}
            />
          );
        })}

        {/* Candlesticks */}
        {candles.map((candle, idx) => {
          const isBull = candle.close >= candle.open;
          const x = indexToX(idx);
          const yHigh = priceToY(candle.high);
          const yLow = priceToY(candle.low);
          const yOpen = priceToY(candle.open);
          const yClose = priceToY(candle.close);
          const bodyTop = Math.min(yOpen, yClose);
          const bodyHeight = Math.max(1.5, Math.abs(yClose - yOpen));
          const color = isBull ? '#10b981' : '#f43f5e';

          return (
            <g key={`mini-c-${idx}`}>
              <line
                x1={x}
                y1={yHigh}
                x2={x}
                y2={yLow}
                stroke={color}
                strokeWidth="1"
              />
              <rect
                x={x - bodyWidth / 2}
                y={bodyTop}
                width={bodyWidth}
                height={bodyHeight}
                fill={color}
                rx="0.5"
              />
            </g>
          );
        })}

        {/* Price Axis on the right */}
        <text
          x={width - paddingRight + 4}
          y={priceToY(example.target1Price) + 3}
          fill="#10b981"
          fontSize="7.5"
          fontFamily="monospace"
          fontWeight="bold"
        >
          TP ₹{example.target1Price >= 1000 ? Math.round(example.target1Price).toLocaleString('en-IN') : example.target1Price.toFixed(0)}
        </text>
        <text
          x={width - paddingRight + 4}
          y={priceToY(example.entryPrice) + 3}
          fill="#38bdf8"
          fontSize="7.5"
          fontFamily="monospace"
          fontWeight="bold"
        >
          ENT ₹{example.entryPrice >= 1000 ? Math.round(example.entryPrice).toLocaleString('en-IN') : example.entryPrice.toFixed(0)}
        </text>
        <text
          x={width - paddingRight + 4}
          y={priceToY(example.stopLossPrice) + 3}
          fill="#f43f5e"
          fontSize="7.5"
          fontFamily="monospace"
          fontWeight="bold"
        >
          SL ₹{example.stopLossPrice >= 1000 ? Math.round(example.stopLossPrice).toLocaleString('en-IN') : example.stopLossPrice.toFixed(0)}
        </text>

        {/* Bottom subtle date indicators */}
        <text
          x={paddingLeft + 4}
          y={height - 4}
          fill="#64748b"
          fontSize="7.5"
          fontFamily="monospace"
        >
          {candles[0]?.date.split(' ')[0] || ''}
        </text>
        <text
          x={width - paddingRight - 8}
          y={height - 4}
          fill="#64748b"
          fontSize="7.5"
          fontFamily="monospace"
          textAnchor="end"
        >
          {candles[candles.length - 1]?.date.split(' ')[0] || ''}
        </text>
      </svg>
    </div>
  );
};
