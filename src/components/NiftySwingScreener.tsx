import React, { useState, useMemo } from 'react';
import { SwingTradeItem } from '../types/pattern';
import { NIFTY_NEXT_100_SWING_TRADES, NIFTY_NEXT_100_SUMMARY } from '../data/niftySwingTrades';
import { CandlestickChart } from './CandlestickChart';
import { MiniCandlestickChart } from './MiniCandlestickChart';
import { 
  TrendingUp, TrendingDown, Clock, Target, Shield, CheckCircle2, 
  Search, SlidersHorizontal, Calculator, Copy, Check, Star, 
  ExternalLink, BarChart2, Eye, Sparkles, AlertCircle, RefreshCw,
  Flame, LayoutGrid, List, ArrowUpRight, Percent, IndianRupee
} from 'lucide-react';

interface NiftySwingScreenerProps {
  onOpenPatternModal?: (patternName: string) => void;
}

export const NiftySwingScreener: React.FC<NiftySwingScreenerProps> = ({ }) => {
  const [signalFilter, setSignalFilter] = useState<'ALL' | 'BUY' | 'SELL' | 'HOLD'>('ALL');
  const [sectorFilter, setSectorFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'confidence' | 'rr' | 'gain' | 'change'>('confidence');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [selectedStockForChart, setSelectedStockForChart] = useState<SwingTradeItem | null>(null);
  
  // Watchlist in localStorage
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('nifty_swing_watchlist');
      return saved ? JSON.parse(saved) : ['HAL', 'ZOMATO', 'BEL'];
    } catch {
      return ['HAL', 'ZOMATO', 'BEL'];
    }
  });

  const toggleWatchlist = (ticker: string) => {
    setWatchlist(prev => {
      const updated = prev.includes(ticker) ? prev.filter(t => t !== ticker) : [...prev, ticker];
      try {
        localStorage.setItem('nifty_swing_watchlist', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Copy setup state
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopySetup = (item: SwingTradeItem) => {
    const text = `📊 [NIFTY NEXT 100 SWING - 1H] ${item.ticker} (${item.companyName})
Signal: ${item.signal} | Pattern: ${item.patternDetected}
CMP: ₹${item.currentPrice.toLocaleString('en-IN')}
Entry Zone: ${item.entryZone}
Stop Loss: ₹${item.stopLossPrice.toLocaleString('en-IN')}
Target 1: ₹${item.target1Price.toLocaleString('en-IN')} | Target 2: ₹${item.target2Price.toLocaleString('en-IN')}
Risk-Reward: ${item.riskRewardRatio} | Horizon: ${item.holdingHorizon}
RSI: ${item.rsi14} | EMA: ${item.emaStatus}`;

    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Quick Position Calculator state
  const [calculatorItem, setCalculatorItem] = useState<SwingTradeItem | null>(null);
  const [accountCapital, setAccountCapital] = useState<number>(200000); // ₹2,00,000 default
  const [riskPercent, setRiskPercent] = useState<number>(1.5); // 1.5% default

  // Unique sectors
  const sectors = useMemo(() => {
    const set = new Set(NIFTY_NEXT_100_SWING_TRADES.map(s => s.sector));
    return ['ALL', ...Array.from(set)];
  }, []);

  // Filtered and sorted stocks
  const filteredStocks = useMemo(() => {
    return NIFTY_NEXT_100_SWING_TRADES.filter(stock => {
      const matchesSignal = signalFilter === 'ALL' || stock.signal === signalFilter;
      const matchesSector = sectorFilter === 'ALL' || stock.sector === sectorFilter;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query || 
        stock.ticker.toLowerCase().includes(query) ||
        stock.companyName.toLowerCase().includes(query) ||
        stock.patternDetected.toLowerCase().includes(query) ||
        stock.sector.toLowerCase().includes(query);

      return matchesSignal && matchesSector && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'confidence') return b.confidenceScore - a.confidenceScore;
      if (sortBy === 'change') return b.dayChangePct - a.dayChangePct;
      if (sortBy === 'gain') {
        const gainA = ((a.target1Price - a.currentPrice) / a.currentPrice) * 100;
        const gainB = ((b.target1Price - b.currentPrice) / b.currentPrice) * 100;
        return gainB - gainA;
      }
      if (sortBy === 'rr') {
        const rrA = parseFloat(a.riskRewardRatio.split(':')[1]?.trim() || '0');
        const rrB = parseFloat(b.riskRewardRatio.split(':')[1]?.trim() || '0');
        return rrB - rrA;
      }
      return 0;
    });
  }, [signalFilter, sectorFilter, searchQuery, sortBy]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Institutional Market Status Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                NSE LIVE 1H SCANNER
              </span>
              <span className="text-xs font-mono text-slate-400">
                NIFTY NEXT 100 & MIDCAP CONSTITUENTS
              </span>
              <span className="text-xs font-mono text-slate-500">·</span>
              <span className="text-xs font-mono text-sky-400">
                TIMEFRAME: 1-HOUR (60m)
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              1-Hour Price Action & Swing Trade Signals
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Algorithmic price action scanner detecting high-conviction chart patterns (breakouts, flags, wedges, double bottoms, order blocks) across top Indian midcaps on the 1-hour timeframe with calibrated Entry, Stop-Loss, and Target levels for 3–8 day swing trades.
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div 
              onClick={() => setSignalFilter('BUY')}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                signalFilter === 'BUY'
                  ? 'bg-emerald-950/40 border-emerald-500/50 ring-1 ring-emerald-500/30'
                  : 'bg-slate-950/70 border-slate-800/80 hover:border-emerald-500/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>BUY SIGNALS</span>
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="mt-1 text-2xl font-black font-mono text-emerald-400 tabular-nums">
                {NIFTY_NEXT_100_SUMMARY.buySignalsCount}
              </div>
              <div className="text-[10px] text-emerald-500/80 font-medium mt-0.5">
                Breakouts & Reversals
              </div>
            </div>

            <div 
              onClick={() => setSignalFilter('SELL')}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                signalFilter === 'SELL'
                  ? 'bg-rose-950/40 border-rose-500/50 ring-1 ring-rose-500/30'
                  : 'bg-slate-950/70 border-slate-800/80 hover:border-rose-500/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>SELL SIGNALS</span>
                <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
              </div>
              <div className="mt-1 text-2xl font-black font-mono text-rose-400 tabular-nums">
                {NIFTY_NEXT_100_SUMMARY.sellSignalsCount}
              </div>
              <div className="text-[10px] text-rose-500/80 font-medium mt-0.5">
                Breakdowns / Shorts
              </div>
            </div>

            <div 
              onClick={() => setSignalFilter('HOLD')}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                signalFilter === 'HOLD'
                  ? 'bg-amber-950/40 border-amber-500/50 ring-1 ring-amber-500/30'
                  : 'bg-slate-950/70 border-slate-800/80 hover:border-amber-500/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>HOLD / TRAIL</span>
                <Clock className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="mt-1 text-2xl font-black font-mono text-amber-400 tabular-nums">
                {NIFTY_NEXT_100_SUMMARY.holdSignalsCount}
              </div>
              <div className="text-[10px] text-amber-500/80 font-medium mt-0.5">
                Range / 50 EMA Test
              </div>
            </div>

            <div className="p-3.5 rounded-xl border bg-slate-950/70 border-slate-800/80">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>AVG R : R</span>
                <Target className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <div className="mt-1 text-2xl font-black font-mono text-sky-400 tabular-nums">
                {NIFTY_NEXT_100_SUMMARY.avgRiskReward}
              </div>
              <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                Asymmetric Edge
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters, Search, Sort & View Mode */}
      <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Signal Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs overflow-x-auto">
            <button
              type="button"
              onClick={() => setSignalFilter('ALL')}
              className={`px-3 py-1.5 rounded font-bold whitespace-nowrap transition-colors ${
                signalFilter === 'ALL'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Signals ({NIFTY_NEXT_100_SWING_TRADES.length})
            </button>
            <button
              type="button"
              onClick={() => setSignalFilter('BUY')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-bold whitespace-nowrap transition-colors ${
                signalFilter === 'BUY'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-emerald-400 hover:bg-emerald-950/30'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>BUY Signals ({NIFTY_NEXT_100_SUMMARY.buySignalsCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setSignalFilter('SELL')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-bold whitespace-nowrap transition-colors ${
                signalFilter === 'SELL'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-rose-400 hover:bg-rose-950/30'
              }`}
            >
              <TrendingDown className="w-3.5 h-3.5" />
              <span>SELL Signals ({NIFTY_NEXT_100_SUMMARY.sellSignalsCount})</span>
            </button>
            <button
              type="button"
              onClick={() => setSignalFilter('HOLD')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded font-bold whitespace-nowrap transition-colors ${
                signalFilter === 'HOLD'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-amber-400 hover:bg-amber-950/30'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>HOLD / Trail ({NIFTY_NEXT_100_SUMMARY.holdSignalsCount})</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by stock (HAL, ZOMATO, TRENT), sector, pattern..."
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center p-1 bg-slate-950 rounded-lg border border-slate-800">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'cards' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'
                }`}
                title="Card View with Mini Charts"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'table' ? 'bg-slate-800 text-emerald-400' : 'text-slate-400 hover:text-white'
                }`}
                title="Dense Terminal Table View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Secondary filters row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800/80 text-xs">
          {/* Sector Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-3xl">
            <span className="text-slate-400 font-medium shrink-0 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Sector:
            </span>
            {sectors.map(sector => (
              <button
                key={sector}
                type="button"
                onClick={() => setSectorFilter(sector)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap ${
                  sectorFilter === sector
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-slate-400 font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-md text-xs text-slate-300 focus:outline-none focus:border-emerald-500 font-mono"
            >
              <option value="confidence">Confidence Score (Highest)</option>
              <option value="rr">Risk-to-Reward (Highest)</option>
              <option value="gain">Target 1 Upside %</option>
              <option value="change">Day Change %</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Stock Signals List */}
      {filteredStocks.length === 0 ? (
        <div className="p-12 text-center bg-slate-900/40 border border-slate-800 rounded-2xl space-y-3">
          <AlertCircle className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-white">No Swing Signals Matching Criteria</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query, sector filter, or signal type to view available 1H setups.
          </p>
          <button
            type="button"
            onClick={() => {
              setSignalFilter('ALL');
              setSectorFilter('ALL');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        /* Cards Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStocks.map((stock) => {
            const isWatchlisted = watchlist.includes(stock.ticker);
            const isCopied = copiedId === stock.id;
            const targetUpsidePct = (((stock.target1Price - stock.currentPrice) / stock.currentPrice) * 100).toFixed(1);
            const slRiskPct = Math.abs(((stock.stopLossPrice - stock.currentPrice) / stock.currentPrice) * 100).toFixed(1);

            return (
              <div
                key={stock.id}
                className="group flex flex-col bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-lg hover:shadow-2xl"
              >
                {/* Card Top Header */}
                <div className="p-4 sm:p-5 border-b border-slate-800/80 flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black font-mono tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                        {stock.ticker}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60">
                        {stock.sector}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 truncate max-w-[200px]">
                      {stock.companyName}
                    </div>
                  </div>

                  {/* Signal Badge & Watchlist button */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleWatchlist(stock.ticker)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isWatchlisted
                          ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                          : 'bg-slate-950 text-slate-500 border-slate-800 hover:text-slate-300'
                      }`}
                      title={isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
                    >
                      <Star className={`w-3.5 h-3.5 ${isWatchlisted ? 'fill-amber-400' : ''}`} />
                    </button>

                    <div
                      className={`px-3 py-1 rounded-lg text-xs font-black font-mono flex items-center gap-1.5 shadow-sm ${
                        stock.signal === 'BUY'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                          : stock.signal === 'SELL'
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      }`}
                    >
                      {stock.signal === 'BUY' && <TrendingUp className="w-3.5 h-3.5" />}
                      {stock.signal === 'SELL' && <TrendingDown className="w-3.5 h-3.5" />}
                      {stock.signal === 'HOLD' && <Clock className="w-3.5 h-3.5" />}
                      <span>{stock.signal} SWING</span>
                    </div>
                  </div>
                </div>

                {/* Price & Pattern Bar */}
                <div className="px-5 py-3 bg-slate-950/60 flex items-center justify-between border-b border-slate-800/60">
                  <div>
                    <div className="text-[10px] uppercase font-mono text-slate-500">Current Market Price (1H)</div>
                    <div className="flex items-baseline gap-2 font-mono">
                      <span className="text-xl font-black text-white tabular-nums">
                        ₹{stock.currentPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </span>
                      <span className={`text-xs font-bold tabular-nums ${stock.dayChange >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {stock.dayChange >= 0 ? '+' : ''}{stock.dayChangePct.toFixed(2)}%
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] uppercase font-mono text-slate-500">1H Pattern Detected</div>
                    <div className="text-xs font-bold text-sky-400 flex items-center gap-1 justify-end">
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      <span>{stock.patternDetected}</span>
                    </div>
                  </div>
                </div>

                {/* Real 1-Hour Candlestick Mini Preview Chart */}
                <div 
                  onClick={() => setSelectedStockForChart(stock)}
                  className="px-4 py-3 bg-slate-950/40 cursor-pointer group-hover:bg-slate-950/80 transition-colors border-b border-slate-800/80 relative"
                  title="Click to expand interactive 1H chart"
                >
                  <div className="flex items-center justify-between mb-1.5 text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <BarChart2 className="w-3 h-3 text-emerald-400" />
                      <span>1H Candlestick Structure ({stock.lastCandleTime})</span>
                    </span>
                    <span className="text-emerald-400 flex items-center gap-0.5 group-hover:underline">
                      <span>Expand Chart</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Render Mini Candlestick Chart */}
                  <MiniCandlestickChart
                    example={{
                      ticker: stock.ticker,
                      companyName: stock.companyName,
                      timeframe: stock.timeframe,
                      dateRange: 'Recent 1H Session',
                      tradeType: stock.signal === 'SELL' ? 'Short' : 'Long',
                      entryPrice: stock.entryPrice,
                      stopLossPrice: stock.stopLossPrice,
                      target1Price: stock.target1Price,
                      target2Price: stock.target2Price,
                      riskReward: stock.riskRewardRatio,
                      outcome: 'Active Swing Setup',
                      caseStudyNotes: stock.technicalRationale,
                      candles: stock.candles,
                      annotations: stock.annotations
                    }}
                    height={125}
                  />
                </div>

                {/* Swing Trade Setup Execution Matrix */}
                <div className="p-4 sm:p-5 space-y-4 flex-1 flex flex-col justify-between">
                  {/* Key Levels Grid */}
                  <div className="grid grid-cols-3 gap-2 p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 text-center font-mono">
                    <div className="space-y-0.5">
                      <div className="text-[10px] text-slate-500 uppercase">Entry Zone</div>
                      <div className="text-xs font-bold text-sky-400 tabular-nums">
                        ₹{stock.entryPrice.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="space-y-0.5 border-x border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Stop Loss</div>
                      <div className="text-xs font-bold text-rose-400 tabular-nums">
                        ₹{stock.stopLossPrice.toLocaleString('en-IN')}
                        <span className="text-[9px] block text-rose-500/80">({slRiskPct}%)</span>
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[10px] text-slate-500 uppercase">Target 1</div>
                      <div className="text-xs font-bold text-emerald-400 tabular-nums">
                        ₹{stock.target1Price.toLocaleString('en-IN')}
                        <span className="text-[9px] block text-emerald-500/80">(+{targetUpsidePct}%)</span>
                      </div>
                    </div>
                  </div>

                  {/* Technical Indicators Row */}
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                      R:R <strong className="text-white">{stock.riskRewardRatio}</strong>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                      RSI <strong className={stock.rsi14 >= 60 ? 'text-emerald-400' : stock.rsi14 <= 40 ? 'text-rose-400' : 'text-amber-400'}>{stock.rsi14}</strong>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                      Vol <strong className="text-sky-400">{stock.volumeRatio}</strong>
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                      Horizon <strong className="text-slate-200">{stock.holdingHorizon}</strong>
                    </span>
                  </div>

                  {/* Technical Rationale Note */}
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                    {stock.technicalRationale}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60">
                    <button
                      type="button"
                      onClick={() => setSelectedStockForChart(stock)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>1H Deep Dive</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalculatorItem(stock)}
                      className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                      title="Calculate Quantity & Risk Sizing"
                    >
                      <Calculator className="w-4 h-4 text-sky-400" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopySetup(stock)}
                      className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                      title="Copy Swing Setup to Clipboard"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Dense Institutional Table View */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-950/80 border-b border-slate-800 font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Stock / Sector</th>
                  <th className="py-3 px-4">CMP (₹)</th>
                  <th className="py-3 px-4">1H Signal</th>
                  <th className="py-3 px-4">1H Pattern</th>
                  <th className="py-3 px-4">Entry Zone</th>
                  <th className="py-3 px-4">Stop Loss</th>
                  <th className="py-3 px-4">Target 1 & 2</th>
                  <th className="py-3 px-4">R : R</th>
                  <th className="py-3 px-4">Horizon</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono">
                {filteredStocks.map((stock) => {
                  const isCopied = copiedId === stock.id;
                  const isWatchlisted = watchlist.includes(stock.ticker);

                  return (
                    <tr 
                      key={stock.id}
                      className="hover:bg-slate-800/50 transition-colors group cursor-pointer"
                      onClick={() => setSelectedStockForChart(stock)}
                    >
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleWatchlist(stock.ticker);
                            }}
                            className="text-slate-500 hover:text-amber-400"
                          >
                            <Star className={`w-3.5 h-3.5 ${isWatchlisted ? 'fill-amber-400 text-amber-400' : ''}`} />
                          </button>
                          <div>
                            <div className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                              {stock.ticker}
                            </div>
                            <div className="text-[10px] text-slate-400 font-sans truncate max-w-[140px]">
                              {stock.companyName}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 font-bold tabular-nums text-white">
                        ₹{stock.currentPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        <span className={`block text-[10px] font-normal ${stock.dayChange >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                          {stock.dayChange >= 0 ? '+' : ''}{stock.dayChangePct.toFixed(2)}%
                        </span>
                      </td>

                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-bold ${
                            stock.signal === 'BUY'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                              : stock.signal === 'SELL'
                              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                              : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          }`}
                        >
                          {stock.signal}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 font-sans font-semibold text-sky-400">
                        {stock.patternDetected}
                      </td>

                      <td className="py-3.5 px-4 text-slate-300">
                        {stock.entryZone}
                      </td>

                      <td className="py-3.5 px-4 text-rose-400 font-bold tabular-nums">
                        ₹{stock.stopLossPrice.toLocaleString('en-IN')}
                      </td>

                      <td className="py-3.5 px-4 text-emerald-400 font-bold tabular-nums">
                        ₹{stock.target1Price.toLocaleString('en-IN')}
                        <span className="block text-[10px] text-slate-400">T2: ₹{stock.target2Price.toLocaleString('en-IN')}</span>
                      </td>

                      <td className="py-3.5 px-4 font-bold text-white">
                        {stock.riskRewardRatio}
                      </td>

                      <td className="py-3.5 px-4 text-slate-300 text-[11px]">
                        {stock.holdingHorizon}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                          <button
                            type="button"
                            onClick={() => setSelectedStockForChart(stock)}
                            className="px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-bold rounded text-[11px] transition-colors"
                          >
                            Chart
                          </button>
                          <button
                            type="button"
                            onClick={() => setCalculatorItem(stock)}
                            className="p-1 text-slate-400 hover:text-white bg-slate-800 rounded transition-colors"
                            title="Position Sizer"
                          >
                            <Calculator className="w-3.5 h-3.5 text-sky-400" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCopySetup(stock)}
                            className="p-1 text-slate-400 hover:text-white bg-slate-800 rounded transition-colors"
                            title="Copy setup"
                          >
                            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Interactive 1-Hour Chart Modal */}
      {selectedStockForChart && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-scaleUp">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl sm:text-2xl font-black font-mono text-white">
                    {selectedStockForChart.ticker}
                  </span>
                  <span className="text-sm text-slate-300 font-sans">
                    {selectedStockForChart.companyName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                    NSE 1H
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded text-xs font-black font-mono ${
                      selectedStockForChart.signal === 'BUY'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : selectedStockForChart.signal === 'SELL'
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    }`}
                  >
                    {selectedStockForChart.signal} SIGNAL
                  </span>
                </div>
                <div className="text-xs text-sky-400 font-mono flex items-center gap-2">
                  <span>Detected: {selectedStockForChart.patternDetected}</span>
                  <span>·</span>
                  <span>Confidence: {selectedStockForChart.confidenceScore}%</span>
                  <span>·</span>
                  <span>R:R {selectedStockForChart.riskRewardRatio}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStockForChart(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Full Interactive Candlestick Chart */}
              <div className="bg-slate-950 rounded-xl p-3 sm:p-4 border border-slate-800">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">1-HOUR CANDLES</span>
                    <span>·</span>
                    <span>20 EMA (Sky) · 50 EMA (Amber) · Volume</span>
                  </div>
                  <div className="text-slate-300 font-bold tabular-nums">
                    CMP: ₹{selectedStockForChart.currentPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </div>
                </div>

                <CandlestickChart
                  example={{
                    ticker: selectedStockForChart.ticker,
                    companyName: selectedStockForChart.companyName,
                    timeframe: '1-Hour (1H)',
                    dateRange: 'Recent 3 Sessions',
                    tradeType: selectedStockForChart.signal === 'SELL' ? 'Short' : 'Long',
                    entryPrice: selectedStockForChart.entryPrice,
                    stopLossPrice: selectedStockForChart.stopLossPrice,
                    target1Price: selectedStockForChart.target1Price,
                    target2Price: selectedStockForChart.target2Price,
                    riskReward: selectedStockForChart.riskRewardRatio,
                    outcome: 'Live Swing Trade Setup',
                    caseStudyNotes: selectedStockForChart.technicalRationale,
                    candles: selectedStockForChart.candles,
                    annotations: selectedStockForChart.annotations
                  }}
                  height={380}
                  interactiveReplay={true}
                />
              </div>

              {/* Execution Blueprint Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-center">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Recommended Entry</div>
                  <div className="text-sm sm:text-base font-black text-sky-400 mt-1">
                    {selectedStockForChart.entryZone}
                  </div>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Strict Stop Loss</div>
                  <div className="text-sm sm:text-base font-black text-rose-400 mt-1">
                    ₹{selectedStockForChart.stopLossPrice.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Target 1 (Primary)</div>
                  <div className="text-sm sm:text-base font-black text-emerald-400 mt-1">
                    ₹{selectedStockForChart.target1Price.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Target 2 (Runner)</div>
                  <div className="text-sm sm:text-base font-black text-emerald-300 mt-1">
                    ₹{selectedStockForChart.target2Price.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Confluence Factors & Technical Rationale */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase font-bold text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Confluence Factors (Why this trade works)</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedStockForChart.confluenceFactors.map((factor, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase font-bold text-slate-400 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-sky-400" />
                    <span>Trade Management & Strategy</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedStockForChart.technicalRationale}
                  </p>
                  <div className="pt-2 text-xs font-mono text-slate-400 flex flex-wrap gap-2">
                    <span className="p-1.5 bg-slate-800 rounded">Expected Duration: {selectedStockForChart.holdingHorizon}</span>
                    <span className="p-1.5 bg-slate-800 rounded">EMA: {selectedStockForChart.emaStatus}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => handleCopySetup(selectedStockForChart)}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors font-mono"
              >
                {copiedId === selectedStockForChart.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Trade Setup</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setCalculatorItem(selectedStockForChart);
                  setSelectedStockForChart(null);
                }}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors font-mono shadow-sm"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Open Position Sizer</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Position Sizing Calculator Modal */}
      {calculatorItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-6 animate-scaleUp">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black font-mono text-white">{calculatorItem.ticker}</span>
                  <span className="px-2 py-0.5 rounded text-xs font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    {calculatorItem.signal} SWING
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">
                  1H Swing Trade Position Sizer & Risk Management
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCalculatorItem(null)}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <IndianRupee className="w-3 h-3 text-emerald-400" />
                  <span>Trading Capital (₹)</span>
                </label>
                <input
                  type="number"
                  value={accountCapital}
                  onChange={(e) => setAccountCapital(Math.max(1000, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white font-mono focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Percent className="w-3 h-3 text-sky-400" />
                  <span>Risk Per Trade (%)</span>
                </label>
                <input
                  type="number"
                  step="0.25"
                  value={riskPercent}
                  onChange={(e) => setRiskPercent(Math.max(0.1, Number(e.target.value)))}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white font-mono focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Calculations */}
            {(() => {
              const maxRiskAmount = (accountCapital * riskPercent) / 100;
              const perShareRisk = Math.abs(calculatorItem.entryPrice - calculatorItem.stopLossPrice);
              const sharesQty = perShareRisk > 0 ? Math.floor(maxRiskAmount / perShareRisk) : 0;
              const totalCapitalRequired = sharesQty * calculatorItem.entryPrice;
              const expectedProfitT1 = sharesQty * Math.abs(calculatorItem.target1Price - calculatorItem.entryPrice);
              const expectedProfitT2 = sharesQty * Math.abs(calculatorItem.target2Price - calculatorItem.entryPrice);

              return (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 font-mono">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Maximum Allowed Risk:</span>
                      <span className="text-rose-400 font-bold tabular-nums">
                        ₹{maxRiskAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Risk Per Share:</span>
                      <span className="text-slate-200 tabular-nums">
                        ₹{perShareRisk.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-800/80">
                      <span className="font-bold text-emerald-400">Recommended Quantity:</span>
                      <span className="text-xl font-black text-white tabular-nums bg-slate-800 px-3 py-1 rounded-md border border-slate-700">
                        {sharesQty} Shares
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-xs text-slate-400">
                      <span>Total Investment:</span>
                      <span className="tabular-nums">
                        ₹{totalCapitalRequired.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>

                  {/* Target returns */}
                  <div className="grid grid-cols-2 gap-3 text-center font-mono">
                    <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                      <div className="text-[10px] text-emerald-400 uppercase">Profit at Target 1</div>
                      <div className="text-base font-bold text-emerald-300 mt-1 tabular-nums">
                        +₹{expectedProfitT1.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </div>
                    </div>
                    <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl">
                      <div className="text-[10px] text-emerald-400 uppercase">Profit at Target 2</div>
                      <div className="text-base font-bold text-emerald-200 mt-1 tabular-nums">
                        +₹{expectedProfitT2.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            <button
              type="button"
              onClick={() => setCalculatorItem(null)}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-lg transition-colors font-mono"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
