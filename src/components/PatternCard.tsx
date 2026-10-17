import React from 'react';
import { Pattern } from '../types/pattern';
import { MiniCandlestickChart } from './MiniCandlestickChart';
import { Bookmark, BookmarkCheck, ArrowUpRight, TrendingUp, TrendingDown, Clock, Target, Shield } from 'lucide-react';

interface PatternCardProps {
  pattern: Pattern;
  isBookmarked: boolean;
  isMastered: boolean;
  onToggleBookmark: (id: string) => void;
  onSelect: (pattern: Pattern) => void;
  onOpenCalculator: (pattern: Pattern) => void;
}

export const PatternCard: React.FC<PatternCardProps> = ({
  pattern,
  isBookmarked,
  isMastered,
  onToggleBookmark,
  onSelect,
  onOpenCalculator,
}) => {
  const isBull = pattern.bias === 'bullish';
  const isBear = pattern.bias === 'bearish';

  return (
    <div className="group bg-slate-900/90 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl hover:shadow-slate-950/40 transition-all duration-200">
      {/* Top Meta Header: Zero-Pill Discipline */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <div className="flex items-center gap-2">
            <span className="capitalize">{pattern.category.replace('_', ' ')}</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize text-slate-400">{pattern.difficulty}</span>
            {isMastered && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400 font-medium">Mastered</span>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(pattern.id);
            }}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Pattern'}
            className="text-slate-400 hover:text-amber-400 transition-colors p-1"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-amber-400" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Pattern Name */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            onClick={() => onSelect(pattern)}
            className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors cursor-pointer tracking-tight"
          >
            {pattern.name}
          </h3>
          <span
            className={`shrink-0 flex items-center gap-1 text-xs font-semibold ${
              isBull
                ? 'text-emerald-400'
                : isBear
                ? 'text-rose-400'
                : 'text-sky-400'
            }`}
          >
            {isBull ? <TrendingUp className="w-3.5 h-3.5" /> : isBear ? <TrendingDown className="w-3.5 h-3.5" /> : null}
            <span className="capitalize">{pattern.bias}</span>
          </span>
        </div>

        {/* Pattern Summary */}
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
          {pattern.summary}
        </p>

        {/* Small Real Stock Candlestick Chart */}
        <div 
          onClick={() => onSelect(pattern)}
          className="mb-3 cursor-pointer group/chart"
          title={`Click to open full interactive chart of ${pattern.realStockExample.ticker}`}
        >
          <MiniCandlestickChart example={pattern.realStockExample} height={124} />
        </div>

        {/* Real Stock Case Study Kicker */}
        <div className="p-2.5 bg-slate-950/70 border border-slate-800/80 rounded-lg flex items-center justify-between text-xs mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-slate-200">{pattern.realStockExample.ticker}</span>
            <span className="text-slate-500 hidden sm:inline">({pattern.realStockExample.timeframe})</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 font-medium">
            {pattern.realStockExample.outcome.split('(')[0]}
          </span>
        </div>

        {/* Key Trade Metrics Matrix */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
          <div className="p-2 bg-slate-950/50 rounded border border-slate-800/60">
            <span className="text-slate-400 text-[10px] block">Est. Win Rate</span>
            <span className="text-slate-200 font-bold tabular-nums">{pattern.winRateEstimate}</span>
          </div>
          <div className="p-2 bg-slate-950/50 rounded border border-slate-800/60">
            <span className="text-slate-400 text-[10px] block">Avg Risk/Reward</span>
            <span className="text-emerald-400 font-bold tabular-nums">{pattern.avgRiskReward}</span>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onOpenCalculator(pattern)}
          className="text-xs text-slate-400 hover:text-slate-200 transition-colors font-medium"
        >
          Risk Calculator
        </button>

        <button
          type="button"
          onClick={() => onSelect(pattern)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600/20 text-xs font-semibold transition-colors"
        >
          <span>Real Chart & Rules</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
