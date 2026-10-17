import React, { useState, useMemo, useEffect } from 'react';
import { PATTERNS_DATA, CATEGORIES } from './data/patterns';
import { Pattern, PatternCategory, PatternBias, TraderLevel } from './types/pattern';
import { PatternCard } from './components/PatternCard';
import { PatternDetailModal } from './components/PatternDetailModal';
import { PatternSimulator } from './components/PatternSimulator';
import { RiskCalculator } from './components/RiskCalculator';
import { CompareModal } from './components/CompareModal';
import { CheatSheetModal } from './components/CheatSheetModal';
import { CandlestickChart } from './components/CandlestickChart';
import { NiftySwingScreener } from './components/NiftySwingScreener';
import { 
  TrendingUp, TrendingDown, BookOpen, Table, Search, Bookmark, 
  Trophy, Calculator, Layers, ArrowUpRight, CheckCircle2, ShieldAlert,
  Sparkles, Filter, ChevronRight, Activity, Flame
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'library' | 'nifty-swing' | 'stocks' | 'simulator' | 'calculator'>('library');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const [selectedBias, setSelectedBias] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);

  // Modals state
  const [activeModalPattern, setActiveModalPattern] = useState<Pattern | null>(null);
  const [comparingPattern, setComparingPattern] = useState<Pattern | null>(null);
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  const [calculatorPattern, setCalculatorPattern] = useState<Pattern | null>(null);

  // Bookmarks state in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('priceaction_bookmarks');
      return saved ? JSON.parse(saved) : ['double-bottom', 'bull-flag', 'fair-value-gap'];
    } catch {
      return ['double-bottom', 'bull-flag', 'fair-value-gap'];
    }
  });

  // Mastered pattern IDs
  const [masteredIds, setMasteredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('priceaction_mastered');
      return saved ? JSON.parse(saved) : ['double-bottom'];
    } catch {
      return ['double-bottom'];
    }
  });

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('priceaction_bookmarks', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Filtered patterns
  const filteredPatterns = useMemo(() => {
    return PATTERNS_DATA.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesBias = selectedBias === 'all' || p.bias === selectedBias;
      const matchesLevel = selectedLevel === 'all' || p.difficulty === selectedLevel;
      const matchesBookmark = !onlyBookmarked || bookmarkedIds.includes(p.id);
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.realStockExample.ticker.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query);

      return matchesCategory && matchesBias && matchesLevel && matchesBookmark && matchesSearch;
    });
  }, [selectedCategory, selectedBias, selectedLevel, onlyBookmarked, searchQuery, bookmarkedIds]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* 
        TOP BAR CONTRACT:
        [Brand title, one line] — [4 nav links, 1–2 word labels, single-line] — [1 primary action]
      */}
      <header className="sticky top-0 z-40 flex items-center justify-between gap-8 px-6 py-3.5 bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setCurrentView('library');
          }}
          className="text-base font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs">
            P
          </div>
          <span>PriceAction Codex</span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
          <button
            type="button"
            onClick={() => setCurrentView('library')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentView === 'library'
                ? 'border-emerald-400 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-100'
            }`}
          >
            Pattern Library
          </button>

          <button
            type="button"
            onClick={() => setCurrentView('nifty-swing')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 flex items-center gap-1.5 ${
              currentView === 'nifty-swing'
                ? 'border-emerald-400 text-emerald-400 font-bold'
                : 'border-transparent text-slate-400 hover:text-slate-100'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Nifty 100 Swing (1H)</span>
          </button>

          <button
            type="button"
            onClick={() => setCurrentView('stocks')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentView === 'stocks'
                ? 'border-emerald-400 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-100'
            }`}
          >
            Real Stock Charts
          </button>
          <button
            type="button"
            onClick={() => setCurrentView('simulator')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentView === 'simulator'
                ? 'border-emerald-400 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-100'
            }`}
          >
            Practice Simulator
          </button>
          <button
            type="button"
            onClick={() => setCurrentView('calculator')}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentView === 'calculator'
                ? 'border-emerald-400 text-white'
                : 'border-transparent text-slate-400 hover:text-slate-100'
            }`}
          >
            Risk Calculator
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setShowCheatSheet(true)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-lg shadow-emerald-500/20"
          >
            <Table className="w-3.5 h-3.5" />
            <span>Master Cheatsheet</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-8">
        {/* Editorial Hero Header Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
          {/* Workstation Terminal Background Asset */}
          <div className="absolute inset-0 z-0">
            <img
              src="/src/assets/images/price_action_terminal_1792260673833.jpg"
              alt="Professional Stock Trading Terminal"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-25 filter contrast-125"
            />
            {/* Measured contrast scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 p-6 sm:p-10 space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span>INSTITUTIONAL TECHNICAL ANALYSIS</span>
              <span aria-hidden="true">·</span>
              <span>PRICE ACTION BLUEPRINTS</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Master High-Probability Price Action With Real Indian Stock & Index Charts
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              An exhaustive technical analysis repository pairing classical geometry, candlestick patterns, and Smart Money Concepts with real, recent market case studies across Nifty 50, Bank Nifty, Reliance, HDFC Bank, Tata Motors, and TCS.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
              <div>
                <strong className="text-slate-100 font-bold tabular-nums text-sm">15+</strong> Patterns Curated
              </div>
              <div className="hidden sm:inline" aria-hidden="true">·</div>
              <div>
                <strong className="text-emerald-400 font-bold tabular-nums text-sm">100%</strong> Real Indian Stock Charts
              </div>
              <div className="hidden sm:inline" aria-hidden="true">·</div>
              <div>
                <strong className="text-sky-400 font-bold tabular-nums text-sm">1-Hour</strong> Swing Signals
              </div>
              <div className="hidden sm:inline" aria-hidden="true">·</div>
              <div>
                <strong className="text-amber-400 font-bold tabular-nums text-sm">Nifty Next 100</strong> Coverage
              </div>
            </div>

            {/* Direct Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentView('nifty-swing')}
                className="px-4 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-black flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                <span>Nifty Next 100 1H Signals (18 Live Swings)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setCurrentView('library')}
                className="px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700/80 flex items-center gap-2 transition-all"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pattern Blueprints & Rules</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Switcher Mobile / Secondary */}
        <div className="flex md:hidden items-center justify-between p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs overflow-x-auto">
          <button
            type="button"
            onClick={() => setCurrentView('library')}
            className={`flex-1 py-1.5 px-2 font-medium rounded whitespace-nowrap ${currentView === 'library' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
          >
            Library
          </button>
          <button
            type="button"
            onClick={() => setCurrentView('nifty-swing')}
            className={`flex-1 py-1.5 px-2 font-bold rounded whitespace-nowrap flex items-center justify-center gap-1 ${currentView === 'nifty-swing' ? 'bg-emerald-500 text-slate-950' : 'text-emerald-400'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            1H Swing
          </button>
          <button
            type="button"
            onClick={() => setCurrentView('stocks')}
            className={`flex-1 py-1.5 px-2 font-medium rounded whitespace-nowrap ${currentView === 'stocks' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
          >
            Stocks
          </button>
          <button
            type="button"
            onClick={() => setCurrentView('simulator')}
            className={`flex-1 py-1.5 px-2 font-medium rounded whitespace-nowrap ${currentView === 'simulator' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
          >
            Quiz
          </button>
          <button
            type="button"
            onClick={() => setCurrentView('calculator')}
            className={`flex-1 py-1.5 px-2 font-medium rounded whitespace-nowrap ${currentView === 'calculator' ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
          >
            Calc
          </button>
        </div>

        {/* ================= VIEW 1: PATTERN LIBRARY ================= */}
        {currentView === 'library' && (
          <div className="space-y-6">
            {/* Live 1H Scanner Callout Banner */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-950/50 via-slate-900 to-slate-950 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white">Live 1-Hour Swing Trade Signals for Indian Traders: </span>
                  <span className="text-slate-300">18 algorithmic pattern setups detected across Nifty Next 100 (HAL, ZOMATO, BEL, TRENT, etc.) with calibrated Stop-Loss and Targets.</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCurrentView('nifty-swing')}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-black shrink-0 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Launch 1H Terminal</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Filter and Search Toolbar */}
            <div className="space-y-3 bg-slate-900/90 border border-slate-800 rounded-xl p-4">
              {/* Top Row: Category Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      selectedCategory === cat.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Second Row: Bias, Level, Search & Bookmark Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Bias Selector */}
                  <div className="flex items-center gap-1 p-0.5 bg-slate-950 rounded-lg border border-slate-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedBias('all')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${selectedBias === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      All Bias
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedBias('bullish')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${selectedBias === 'bullish' ? 'bg-emerald-600/30 text-emerald-300' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Bullish
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedBias('bearish')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${selectedBias === 'bearish' ? 'bg-rose-600/30 text-rose-300' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Bearish
                    </button>
                  </div>

                  {/* Level Selector */}
                  <div className="flex items-center gap-1 p-0.5 bg-slate-950 rounded-lg border border-slate-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('all')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${selectedLevel === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      All Levels
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('beginner')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${selectedLevel === 'beginner' ? 'bg-slate-800 text-emerald-300' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Beginner
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('intermediate')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${selectedLevel === 'intermediate' ? 'bg-slate-800 text-amber-300' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Intermediate
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('advanced')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${selectedLevel === 'advanced' ? 'bg-slate-800 text-purple-300' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Advanced
                    </button>
                  </div>

                  {/* Bookmarks Toggle */}
                  <button
                    type="button"
                    onClick={() => setOnlyBookmarked(!onlyBookmarked)}
                    className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg border transition-colors ${
                      onlyBookmarked
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Saved ({bookmarkedIds.length})</span>
                  </button>
                </div>

                {/* Search Input */}
                <div className="relative min-w-[220px]">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search pattern or ticker (NVDA, TSLA)..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Patterns Grid */}
            {filteredPatterns.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredPatterns.map((pattern) => (
                  <PatternCard
                    key={pattern.id}
                    pattern={pattern}
                    isBookmarked={bookmarkedIds.includes(pattern.id)}
                    isMastered={masteredIds.includes(pattern.id)}
                    onToggleBookmark={toggleBookmark}
                    onSelect={(p) => setActiveModalPattern(p)}
                    onOpenCalculator={(p) => {
                      setCalculatorPattern(p);
                      setCurrentView('calculator');
                    }}
                  />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-xl space-y-3">
                <Search className="w-8 h-8 text-slate-600 mx-auto" />
                <h3 className="text-base font-bold text-slate-200">No patterns matched your filters</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Try adjusting your search query, switching categories, or clearing the bookmarked filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedBias('all');
                    setSelectedLevel('all');
                    setOnlyBookmarked(false);
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================= VIEW: NIFTY NEXT 100 1-HOUR SWING TRADE TERMINAL ================= */}
        {currentView === 'nifty-swing' && (
          <NiftySwingScreener />
        )}

        {/* ================= VIEW 2: REAL STOCK CHARTS SHOWCASE ================= */}
        {currentView === 'stocks' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-100 tracking-tight">
                Curated Real Stock Chart Case Studies
              </h2>
              <p className="text-xs text-slate-400">
                Examine how technical price action patterns formed in real trading sessions on major market equities.
              </p>
            </div>

            <div className="space-y-8">
              {PATTERNS_DATA.map((pattern) => (
                <div
                  key={pattern.id}
                  className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                        <span className="capitalize">{pattern.category.replace('_', ' ')}</span>
                        <span aria-hidden="true">·</span>
                        <span className="capitalize">{pattern.difficulty}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-emerald-400">{pattern.winRateEstimate} Win Rate</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-100">{pattern.name}</h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveModalPattern(pattern)}
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                      >
                        <span>Full Deep Dive & Rules</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Real Candlestick Chart */}
                  <CandlestickChart
                    example={pattern.realStockExample}
                    height={420}
                    interactiveReplay={true}
                  />

                  {/* Execution Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Entry Level</span>
                      <span className="text-sky-400 font-bold">₹{pattern.realStockExample.entryPrice >= 1000 ? Math.round(pattern.realStockExample.entryPrice).toLocaleString('en-IN') : pattern.realStockExample.entryPrice.toFixed(1)}</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Stop Loss Invalidation</span>
                      <span className="text-rose-400 font-bold">₹{pattern.realStockExample.stopLossPrice >= 1000 ? Math.round(pattern.realStockExample.stopLossPrice).toLocaleString('en-IN') : pattern.realStockExample.stopLossPrice.toFixed(1)}</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Target 1 & 2</span>
                      <span className="text-emerald-400 font-bold">₹{pattern.realStockExample.target1Price >= 1000 ? Math.round(pattern.realStockExample.target1Price).toLocaleString('en-IN') : pattern.realStockExample.target1Price.toFixed(0)} / ₹{pattern.realStockExample.target2Price >= 1000 ? Math.round(pattern.realStockExample.target2Price).toLocaleString('en-IN') : pattern.realStockExample.target2Price.toFixed(0)}</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Risk/Reward Achieved</span>
                      <span className="text-emerald-300 font-bold">{pattern.realStockExample.riskReward}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= VIEW 3: PRACTICE SIMULATOR ================= */}
        {currentView === 'simulator' && (
          <PatternSimulator
            patterns={PATTERNS_DATA}
            onSelectPatternForDetail={(p) => setActiveModalPattern(p)}
          />
        )}

        {/* ================= VIEW 4: RISK CALCULATOR ================= */}
        {currentView === 'calculator' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-100 tracking-tight">
                Position Sizing & Risk Management Planner
              </h2>
              <p className="text-xs text-slate-400">
                Calculate share quantity, exact dollar risk, and multi-target profit projections for any pattern setup.
              </p>
            </div>

            <RiskCalculator initialExample={calculatorPattern?.realStockExample || PATTERNS_DATA[0].realStockExample} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-800/80 bg-slate-950 px-6 py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">PriceAction Codex</span>
            <span aria-hidden="true">·</span>
            <span>Technical Chart Analysis Platform</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Historical stock examples for educational analysis</span>
            <span aria-hidden="true">·</span>
            <span>Strict 1-2% risk discipline recommended</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {activeModalPattern && (
        <PatternDetailModal
          pattern={activeModalPattern}
          allPatterns={PATTERNS_DATA}
          onClose={() => setActiveModalPattern(null)}
          onSelectPattern={(p) => setActiveModalPattern(p)}
          isBookmarked={bookmarkedIds.includes(activeModalPattern.id)}
          onToggleBookmark={toggleBookmark}
          onOpenCompare={(p) => {
            setComparingPattern(p);
          }}
        />
      )}

      {comparingPattern && (
        <CompareModal
          initialPattern={comparingPattern}
          allPatterns={PATTERNS_DATA}
          onClose={() => setComparingPattern(null)}
          onSelectPattern={(p) => setActiveModalPattern(p)}
        />
      )}

      {showCheatSheet && (
        <CheatSheetModal
          patterns={PATTERNS_DATA}
          onClose={() => setShowCheatSheet(false)}
          onSelectPattern={(p) => setActiveModalPattern(p)}
        />
      )}
    </div>
  );
}
