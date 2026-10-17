import React, { useState, useMemo, useRef } from 'react';
import { Candle, RealStockExample } from '../types/pattern';
import { Eye, EyeOff, Activity, BarChart2, Maximize2, Minimize2, Play, RotateCcw, ChevronRight } from 'lucide-react';

interface CandlestickChartProps {
  example: RealStockExample;
  height?: number;
  initialRevealedCount?: number;
  interactiveReplay?: boolean;
}

export const CandlestickChart: React.FC<CandlestickChartProps> = ({
  example,
  height = 420,
  initialRevealedCount,
  interactiveReplay = false,
}) => {
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [showEMAs, setShowEMAs] = useState(true);
  const [showVolume, setShowVolume] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  
  // Bar Replay state
  const totalCandles = example.candles.length;
  const [replayIdx, setReplayIdx] = useState<number>(
    initialRevealedCount !== undefined ? initialRevealedCount : totalCandles
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const playIntervalRef = useRef<number | null>(null);

  const displayedCandles = useMemo(() => {
    return example.candles.slice(0, replayIdx);
  }, [example.candles, replayIdx]);

  // Calculate EMAs (20 and 50 period)
  const { ema20, ema50 } = useMemo(() => {
    const calcEMA = (period: number) => {
      const k = 2 / (period + 1);
      const emaValues: (number | null)[] = [];
      let prevEma: number | null = null;

      for (let i = 0; i < displayedCandles.length; i++) {
        const close = displayedCandles[i].close;
        if (i < 3) {
          // early seed with SMA
          prevEma = close;
          emaValues.push(prevEma);
        } else {
          prevEma = close * k + (prevEma ?? close) * (1 - k);
          emaValues.push(prevEma);
        }
      }
      return emaValues;
    };

    return {
      ema20: calcEMA(20),
      ema50: calcEMA(50),
    };
  }, [displayedCandles]);

  // Price calculations
  const { minPrice, maxPrice, maxVolume } = useMemo(() => {
    if (displayedCandles.length === 0) {
      return { minPrice: 100, maxPrice: 110, maxVolume: 1000000 };
    }
    let min = Math.min(...displayedCandles.map((c) => c.low));
    let max = Math.max(...displayedCandles.map((c) => c.high));
    const maxVol = Math.max(...displayedCandles.map((c) => c.volume), 1);

    // Also include annotation prices if active
    if (showAnnotations) {
      min = Math.min(min, example.stopLossPrice);
      max = Math.max(max, example.target2Price, example.target1Price);
    }

    const padding = (max - min) * 0.1 || 5;
    return {
      minPrice: Math.max(0, min - padding),
      maxPrice: max + padding,
      maxVolume: maxVol,
    };
  }, [displayedCandles, showAnnotations, example]);

  // Replay playback controls
  const handleTogglePlay = () => {
    if (isPlaying) {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
      setIsPlaying(false);
    } else {
      if (replayIdx >= totalCandles) {
        setReplayIdx(3);
      }
      setIsPlaying(true);
      playIntervalRef.current = window.setInterval(() => {
        setReplayIdx((prev) => {
          if (prev >= totalCandles) {
            if (playIntervalRef.current) clearInterval(playIntervalRef.current);
            setIsPlaying(false);
            return totalCandles;
          }
          return prev + 1;
        });
      }, 700);
    }
  };

  const handleStepForward = () => {
    if (replayIdx < totalCandles) {
      setReplayIdx((prev) => prev + 1);
    }
  };

  const handleResetReplay = () => {
    if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    setIsPlaying(false);
    setReplayIdx(3);
  };

  const handleShowAll = () => {
    if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    setIsPlaying(false);
    setReplayIdx(totalCandles);
  };

  // Dimensions
  const chartHeight = isExpanded ? 580 : height;
  const paddingRight = 75; // for price axis
  const paddingLeft = 16;
  const paddingTop = 28;
  const paddingBottom = 48; // for date labels and volume
  const volumeHeight = showVolume ? 60 : 0;
  const pricePlotHeight = chartHeight - paddingTop - paddingBottom - volumeHeight;

  const count = displayedCandles.length;
  const slotWidth = count > 0 ? (800 - paddingLeft - paddingRight) / count : 20;
  const candleBodyWidth = Math.max(3, Math.min(22, slotWidth * 0.65));

  const priceToY = (price: number) => {
    const range = maxPrice - minPrice || 1;
    return paddingTop + pricePlotHeight * (1 - (price - minPrice) / range);
  };

  const indexToX = (idx: number) => {
    return paddingLeft + idx * slotWidth + slotWidth / 2;
  };

  const activeCandle = hoveredIdx !== null && displayedCandles[hoveredIdx] 
    ? displayedCandles[hoveredIdx] 
    : displayedCandles[displayedCandles.length - 1];

  const priceChange = activeCandle ? activeCandle.close - activeCandle.open : 0;
  const percentChange = activeCandle && activeCandle.open ? ((priceChange / activeCandle.open) * 100).toFixed(2) : '0.00';

  // Generate grid price levels
  const priceGridLevels = useMemo(() => {
    const steps = 5;
    const diff = (maxPrice - minPrice) / steps;
    return Array.from({ length: steps + 1 }).map((_, i) => minPrice + diff * i);
  }, [minPrice, maxPrice]);

  return (
    <div className={`relative bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ${isExpanded ? 'fixed inset-4 z-50 flex flex-col' : ''}`}>
      {/* Chart Top Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 backdrop-blur-sm">
        {/* Symbol & Data Header */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-slate-100 tracking-tight">{example.ticker}</span>
            <span className="text-xs text-slate-400 hidden sm:inline">{example.companyName}</span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">{example.timeframe}</span>
          </div>

          {activeCandle && (
            <div className="hidden lg:flex items-center gap-3 text-xs font-mono">
              <span className="text-slate-400">O: <strong className="text-slate-200">{activeCandle.open.toFixed(2)}</strong></span>
              <span className="text-slate-400">H: <strong className="text-emerald-400">{activeCandle.high.toFixed(2)}</strong></span>
              <span className="text-slate-400">L: <strong className="text-rose-400">{activeCandle.low.toFixed(2)}</strong></span>
              <span className="text-slate-400">C: <strong className={activeCandle.close >= activeCandle.open ? 'text-emerald-400' : 'text-rose-400'}>{activeCandle.close.toFixed(2)}</strong></span>
              <span className={`font-semibold ${priceChange >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {priceChange >= 0 ? `+${priceChange.toFixed(2)}` : priceChange.toFixed(2)} ({percentChange}%)
              </span>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Replay Controls */}
          {(interactiveReplay || replayIdx < totalCandles) && (
            <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700/60">
              <button
                type="button"
                onClick={handleTogglePlay}
                title={isPlaying ? 'Pause Replay' : 'Play Bar Replay'}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <Play className={`w-3 h-3 ${isPlaying ? 'fill-emerald-400' : ''}`} />
                <span>{isPlaying ? 'Pause' : 'Replay'}</span>
              </button>
              <button
                type="button"
                onClick={handleStepForward}
                disabled={replayIdx >= totalCandles}
                title="Next Bar"
                className="p-1 text-slate-300 hover:text-white disabled:opacity-30 transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleResetReplay}
                title="Reset Replay"
                className="p-1 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
              {replayIdx < totalCandles && (
                <button
                  type="button"
                  onClick={handleShowAll}
                  className="px-2 py-1 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  Show All ({replayIdx}/{totalCandles})
                </button>
              )}
            </div>
          )}

          {/* Indicators & Annotations Toggles */}
          <button
            type="button"
            onClick={() => setShowAnnotations(!showAnnotations)}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg border transition-colors ${
              showAnnotations
                ? 'bg-sky-500/10 border-sky-500/40 text-sky-300'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle Pattern Annotations"
          >
            {showAnnotations ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">Setups</span>
          </button>

          <button
            type="button"
            onClick={() => setShowEMAs(!showEMAs)}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg border transition-colors ${
              showEMAs
                ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle 20 / 50 EMA"
          >
            <Activity className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">EMA</span>
          </button>

          <button
            type="button"
            onClick={() => setShowVolume(!showVolume)}
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg border transition-colors ${
              showVolume
                ? 'bg-indigo-500/10 border-indigo-500/40 text-indigo-300'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle Volume Profile"
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Vol</span>
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
            title={isExpanded ? 'Collapse' : 'Expand Chart'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main SVG Chart Canvas */}
      <div className="relative flex-1 w-full bg-slate-950 select-none overflow-hidden" style={{ height: chartHeight }}>
        <svg
          viewBox={`0 0 800 ${chartHeight}`}
          preserveAspectRatio="none"
          className="w-full h-full cursor-crosshair"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clientX = e.clientX - rect.left;
            const xRatio = (clientX / rect.width) * 800;
            const plotX = xRatio - paddingLeft;
            const idx = Math.floor(plotX / slotWidth);
            if (idx >= 0 && idx < displayedCandles.length) {
              setHoveredIdx(idx);
            }
          }}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <defs>
            {/* Grid pattern */}
            <pattern id="chart-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>

            {/* Linear gradients for zones */}
            <linearGradient id="bull-zone-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="bear-zone-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="fvg-zone-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.06" />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <rect x={paddingLeft} y={paddingTop} width={800 - paddingLeft - paddingRight} height={pricePlotHeight} fill="url(#chart-grid)" />

          {/* Horizontal Price Grid Lines & Labels */}
          {priceGridLevels.map((price, idx) => {
            const y = priceToY(price);
            return (
              <g key={`grid-y-${idx}`}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={800 - paddingRight}
                  y2={y}
                  stroke="#1e293b"
                  strokeWidth="0.8"
                  strokeDasharray="2,2"
                />
                <text
                  x={800 - paddingRight + 8}
                  y={y + 3}
                  fill="#64748b"
                  fontSize="10"
                  fontFamily="monospace"
                  className="font-mono tabular-nums"
                >
                  ₹{price >= 1000 ? Math.round(price).toLocaleString('en-IN') : price.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* ANNOTATIONS: Zones (Target, Stop, Order Block, FVG) */}
          {showAnnotations && example.annotations.zones.map((zone, zIdx) => {
            if (zone.startIdx >= replayIdx) return null;
            const effectiveEnd = Math.min(zone.endIdx, replayIdx - 1);
            const x1 = indexToX(zone.startIdx) - slotWidth / 2;
            const x2 = indexToX(effectiveEnd) + slotWidth / 2;
            const yTop = priceToY(zone.top);
            const yBottom = priceToY(zone.bottom);
            const zoneWidth = Math.max(10, x2 - x1);
            const zoneHeight = Math.max(4, Math.abs(yBottom - yTop));

            return (
              <g key={`zone-${zIdx}`}>
                <rect
                  x={x1}
                  y={Math.min(yTop, yBottom)}
                  width={zoneWidth}
                  height={zoneHeight}
                  fill={zone.color.includes('f43f5e') ? 'url(#bear-zone-grad)' : zone.color.includes('3b82f6') || zone.color.includes('38bdf8') ? 'url(#fvg-zone-grad)' : 'url(#bull-zone-grad)'}
                  stroke={zone.color.slice(0, 7)}
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  rx="3"
                />
                <text
                  x={x1 + 6}
                  y={Math.min(yTop, yBottom) + 12}
                  fill="#cbd5e1"
                  fontSize="9"
                  fontWeight="600"
                  className="tracking-tight"
                >
                  {zone.label}
                </text>
              </g>
            );
          })}

          {/* ANNOTATIONS: Trendlines */}
          {showAnnotations && example.annotations.trendlines.map((tline, tIdx) => {
            if (tline.x1Index >= replayIdx) return null;
            const x1 = indexToX(tline.x1Index);
            const y1 = priceToY(tline.y1);
            const effX2Idx = Math.min(tline.x2Index, replayIdx - 1);
            const x2 = indexToX(effX2Idx);
            // compute proportional y2
            const progress = (effX2Idx - tline.x1Index) / (tline.x2Index - tline.x1Index || 1);
            const y2 = y1 + (priceToY(tline.y2) - y1) * Math.min(1, Math.max(0, progress));

            return (
              <g key={`trendline-${tIdx}`}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={tline.color || '#38bdf8'}
                  strokeWidth="1.8"
                  strokeDasharray={tline.dashed ? '4,3' : undefined}
                />
                {tline.label && (
                  <text
                    x={x1 + 6}
                    y={y1 - 6}
                    fill={tline.color || '#38bdf8'}
                    fontSize="9.5"
                    fontWeight="600"
                  >
                    {tline.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Trade Execution Levels: Entry, Stop Loss, Target 1, Target 2 */}
          {showAnnotations && (
            <g className="transition-opacity duration-200">
              {/* Entry Level */}
              <line
                x1={paddingLeft}
                y1={priceToY(example.entryPrice)}
                x2={800 - paddingRight}
                y2={priceToY(example.entryPrice)}
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeDasharray="4,2"
              />
              <rect
                x={800 - paddingRight + 4}
                y={priceToY(example.entryPrice) - 8}
                width="70"
                height="16"
                rx="2"
                fill="#0284c7"
              />
              <text
                x={800 - paddingRight + 8}
                y={priceToY(example.entryPrice) + 3}
                fill="#ffffff"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                ENT ₹{example.entryPrice >= 1000 ? Math.round(example.entryPrice).toLocaleString('en-IN') : example.entryPrice.toFixed(1)}
              </text>

              {/* Stop Loss Level */}
              <line
                x1={paddingLeft}
                y1={priceToY(example.stopLossPrice)}
                x2={800 - paddingRight}
                y2={priceToY(example.stopLossPrice)}
                stroke="#f43f5e"
                strokeWidth="1.2"
                strokeDasharray="4,2"
              />
              <rect
                x={800 - paddingRight + 4}
                y={priceToY(example.stopLossPrice) - 8}
                width="70"
                height="16"
                rx="2"
                fill="#be123c"
              />
              <text
                x={800 - paddingRight + 8}
                y={priceToY(example.stopLossPrice) + 3}
                fill="#ffffff"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                STP ₹{example.stopLossPrice >= 1000 ? Math.round(example.stopLossPrice).toLocaleString('en-IN') : example.stopLossPrice.toFixed(1)}
              </text>

              {/* Target 1 Level */}
              <line
                x1={paddingLeft}
                y1={priceToY(example.target1Price)}
                x2={800 - paddingRight}
                y2={priceToY(example.target1Price)}
                stroke="#10b981"
                strokeWidth="1.2"
                strokeDasharray="4,2"
              />
              <rect
                x={800 - paddingRight + 4}
                y={priceToY(example.target1Price) - 8}
                width="70"
                height="16"
                rx="2"
                fill="#059669"
              />
              <text
                x={800 - paddingRight + 8}
                y={priceToY(example.target1Price) + 3}
                fill="#ffffff"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                TP1 ₹{example.target1Price >= 1000 ? Math.round(example.target1Price).toLocaleString('en-IN') : example.target1Price.toFixed(1)}
              </text>
            </g>
          )}

          {/* INDICATORS: 20 EMA and 50 EMA */}
          {showEMAs && (
            <>
              {/* 20 EMA (Amber) */}
              <polyline
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeOpacity="0.85"
                points={displayedCandles
                  .map((_, i) => (ema20[i] !== null ? `${indexToX(i)},${priceToY(ema20[i]!)}` : ''))
                  .filter(Boolean)
                  .join(' ')}
              />
              {/* 50 EMA (Violet) */}
              <polyline
                fill="none"
                stroke="#a855f7"
                strokeWidth="1.5"
                strokeOpacity="0.75"
                points={displayedCandles
                  .map((_, i) => (ema50[i] !== null ? `${indexToX(i)},${priceToY(ema50[i]!)}` : ''))
                  .filter(Boolean)
                  .join(' ')}
              />
            </>
          )}

          {/* Candlesticks Rendering */}
          {displayedCandles.map((candle, idx) => {
            const isBullish = candle.close >= candle.open;
            const x = indexToX(idx);
            const yHigh = priceToY(candle.high);
            const yLow = priceToY(candle.low);
            const yOpen = priceToY(candle.open);
            const yClose = priceToY(candle.close);

            const bodyTop = Math.min(yOpen, yClose);
            const bodyHeight = Math.max(2, Math.abs(yClose - yOpen));
            const color = isBullish ? '#10b981' : '#f43f5e';

            return (
              <g key={`candle-${idx}`} className="transition-opacity duration-150">
                {/* Wick */}
                <line
                  x1={x}
                  y1={yHigh}
                  x2={x}
                  y2={yLow}
                  stroke={color}
                  strokeWidth="1.2"
                />

                {/* Candle Body */}
                <rect
                  x={x - candleBodyWidth / 2}
                  y={bodyTop}
                  width={candleBodyWidth}
                  height={bodyHeight}
                  fill={isBullish ? '#10b981' : '#f43f5e'}
                  rx="1"
                />
              </g>
            );
          })}

          {/* ANNOTATIONS: Key Marker Arrows & Badges */}
          {showAnnotations && example.annotations.markers.map((marker, mIdx) => {
            if (marker.idx >= replayIdx) return null;
            const x = indexToX(marker.idx);
            const y = priceToY(marker.price);
            const isTarget = marker.type === 'target';
            const isStop = marker.type === 'stop';
            const isEntry = marker.type === 'entry';

            const badgeBg = isTarget ? '#059669' : isStop ? '#dc2626' : isEntry ? '#0284c7' : '#475569';
            const isAbove = isTarget || marker.type === 'pivot';
            const labelY = isAbove ? y - 18 : y + 20;

            return (
              <g key={`marker-${mIdx}`}>
                <circle cx={x} cy={y} r="3.5" fill={badgeBg} stroke="#0f172a" strokeWidth="1.5" />
                <rect
                  x={x - 40}
                  y={labelY - 10}
                  width="80"
                  height="16"
                  rx="3"
                  fill={badgeBg}
                  stroke="#0f172a"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={labelY + 2}
                  fill="#ffffff"
                  fontSize="8.5"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {marker.text}
                </text>
              </g>
            );
          })}

          {/* Volume Profile Bars at Bottom */}
          {showVolume && (
            <g transform={`translate(0, ${chartHeight - paddingBottom - volumeHeight + 10})`}>
              <line
                x1={paddingLeft}
                y1={0}
                x2={800 - paddingRight}
                y2={0}
                stroke="#1e293b"
                strokeWidth="0.8"
              />
              <text x={paddingLeft} y="-4" fill="#64748b" fontSize="8" fontWeight="600">
                VOLUME
              </text>
              {displayedCandles.map((c, i) => {
                const x = indexToX(i);
                const isBull = c.close >= c.open;
                const vHeight = (c.volume / maxVolume) * (volumeHeight - 12);
                return (
                  <rect
                    key={`vol-${i}`}
                    x={x - candleBodyWidth / 2}
                    y={volumeHeight - 12 - vHeight}
                    width={candleBodyWidth}
                    height={vHeight}
                    fill={isBull ? '#10b981' : '#f43f5e'}
                    fillOpacity="0.5"
                    rx="0.5"
                  />
                );
              })}
            </g>
          )}

          {/* Date Axis Labels */}
          {displayedCandles.map((c, i) => {
            if (i % Math.ceil(displayedCandles.length / 6) !== 0 && i !== displayedCandles.length - 1) return null;
            const x = indexToX(i);
            const dateParts = c.date.split(' ');
            const label = dateParts[0];
            return (
              <text
                key={`date-${i}`}
                x={x}
                y={chartHeight - 12}
                fill="#64748b"
                fontSize="9"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {label}
              </text>
            );
          })}

          {/* Crosshair on Hover */}
          {hoveredIdx !== null && displayedCandles[hoveredIdx] && (
            <g>
              <line
                x1={indexToX(hoveredIdx)}
                y1={paddingTop}
                x2={indexToX(hoveredIdx)}
                y2={chartHeight - paddingBottom}
                stroke="#94a3b8"
                strokeWidth="0.8"
                strokeDasharray="3,3"
              />
              <line
                x1={paddingLeft}
                y1={priceToY(displayedCandles[hoveredIdx].close)}
                x2={800 - paddingRight}
                y2={priceToY(displayedCandles[hoveredIdx].close)}
                stroke="#94a3b8"
                strokeWidth="0.8"
                strokeDasharray="3,3"
              />
            </g>
          )}
        </svg>

        {/* Legend Overlay in Top Left */}
        <div className="absolute top-2 left-4 pointer-events-none flex items-center gap-3 text-[11px] font-mono bg-slate-950/70 px-2.5 py-1 rounded border border-slate-800/80 backdrop-blur-sm">
          {showEMAs && (
            <>
              <span className="flex items-center gap-1 text-amber-400">
                <span className="w-2.5 h-0.5 bg-amber-400 rounded-full inline-block"></span>
                EMA 20
              </span>
              <span className="flex items-center gap-1 text-purple-400">
                <span className="w-2.5 h-0.5 bg-purple-400 rounded-full inline-block"></span>
                EMA 50
              </span>
            </>
          )}
          <span className="text-slate-400 hidden md:inline">
            Risk/Reward: <strong className="text-emerald-400">{example.riskReward}</strong>
          </span>
          <span className="text-slate-400 hidden md:inline">
            Bias: <strong className={example.tradeType === 'Long' ? 'text-emerald-400' : 'text-rose-400'}>{example.tradeType}</strong>
          </span>
        </div>
      </div>

      {/* Case Study Summary Footer Bar */}
      <div className="px-4 py-2 bg-slate-900 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <span className="text-slate-400">Case Study:</span>
          <span className="text-slate-200 font-medium">{example.caseStudyNotes}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-emerald-400 font-semibold">{example.outcome}</span>
        </div>
      </div>
    </div>
  );
};
