import React, { useState } from 'react';
import { Pattern } from '../types/pattern';
import { CandlestickChart } from './CandlestickChart';
import { Trophy, HelpCircle, Award, CheckCircle, XCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface PatternSimulatorProps {
  patterns: Pattern[];
  onSelectPatternForDetail: (pattern: Pattern) => void;
}

export const PatternSimulator: React.FC<PatternSimulatorProps> = ({
  patterns,
  onSelectPatternForDetail,
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<'Long' | 'Short' | 'No Trade' | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [totalAttempts, setTotalAttempts] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  const currentPattern = patterns[currentIdx % patterns.length];
  const chartExample = currentPattern.realStockExample;

  // Compute cutoff candle for the quiz (reveal about 55-65% of the chart)
  const cutoffIndex = Math.max(4, Math.floor(chartExample.candles.length * 0.65));

  // Generate 3 random decoy options plus the correct one
  const options = React.useMemo(() => {
    const wrongPatterns = patterns.filter((p) => p.id !== currentPattern.id);
    const shuffledWrong = [...wrongPatterns].sort(() => 0.5 - Math.random()).slice(0, 3);
    const combined = [...shuffledWrong, currentPattern].sort(() => 0.5 - Math.random());
    return combined;
  }, [currentPattern, patterns]);

  const handleSubmit = () => {
    if (!selectedAnswer || !selectedDirection) return;
    setIsRevealed(true);
    setTotalAttempts((prev) => prev + 1);

    const isCorrectPattern = selectedAnswer === currentPattern.id;
    const isCorrectDirection = selectedDirection === chartExample.tradeType;

    if (isCorrectPattern && isCorrectDirection) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNextChallenge = () => {
    setIsRevealed(false);
    setSelectedAnswer(null);
    setSelectedDirection(null);
    setCurrentIdx((prev) => (prev + 1) % patterns.length);
  };

  const isCorrectPattern = selectedAnswer === currentPattern.id;
  const isCorrectDirection = selectedDirection === chartExample.tradeType;
  const isFullSuccess = isCorrectPattern && isCorrectDirection;

  return (
    <div className="space-y-6">
      {/* Top Simulator Stats Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900 border border-slate-800 rounded-xl">
        <div>
          <span className="text-xs text-slate-400 block mb-0.5">Practice Simulator</span>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            Live Market Pattern Recognition Challenge
          </h2>
        </div>

        {/* Stats Counters */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <div>
            <span className="text-slate-400 block">Score</span>
            <span className="text-base font-bold text-emerald-400 tabular-nums">
              {score} / {totalAttempts}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block">Win Rate</span>
            <span className="text-base font-bold text-slate-200 tabular-nums">
              {totalAttempts > 0 ? `${((score / totalAttempts) * 100).toFixed(0)}%` : '0%'}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block">Streak</span>
            <span className="text-base font-bold text-amber-400 tabular-nums">
              {streak} 🔥
            </span>
          </div>
        </div>
      </div>

      {/* Main Challenge Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left 2 Cols: Real Stock Candlestick Chart */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="font-semibold text-slate-100">{chartExample.ticker}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{chartExample.timeframe}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{chartExample.dateRange}</span>
            </div>
            {!isRevealed ? (
              <span className="text-xs text-amber-400 font-medium">
                Challenge Mode: Candlesticks frozen at breakout point
              </span>
            ) : (
              <span className="text-xs text-emerald-400 font-medium">
                Full Pattern & Outcome Revealed
              </span>
            )}
          </div>

          <CandlestickChart
            key={`${currentPattern.id}-${isRevealed ? 'full' : 'partial'}`}
            example={chartExample}
            height={440}
            initialRevealedCount={isRevealed ? chartExample.candles.length : cutoffIndex}
            interactiveReplay={isRevealed}
          />
        </div>

        {/* Right 1 Col: Trader Decision Panel */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5">
          {!isRevealed ? (
            <>
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                  Question 1 of 2
                </span>
                <h4 className="text-sm font-bold text-slate-100">
                  What price action pattern is developing on this chart?
                </h4>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-2">
                {options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedAnswer(option.id)}
                    className={`w-full text-left p-3 rounded-lg border text-xs font-medium transition-all ${
                      selectedAnswer === option.id
                        ? 'bg-slate-800 border-emerald-500 text-emerald-300'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.name}</span>
                      <span className="text-[10px] text-slate-500 capitalize">{option.category.replace('_', ' ')}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Question 2: Trade Direction */}
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                  Question 2 of 2
                </span>
                <h4 className="text-sm font-bold text-slate-100 mb-2">
                  What is your trade bias / execution?
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDirection('Long')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                      selectedDirection === 'Long'
                        ? 'bg-emerald-600/30 border-emerald-500 text-emerald-200'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Long 🟢
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDirection('Short')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                      selectedDirection === 'Short'
                        ? 'bg-rose-600/30 border-rose-500 text-rose-200'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Short 🔴
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDirection('No Trade')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                      selectedDirection === 'No Trade'
                        ? 'bg-amber-600/30 border-amber-500 text-amber-200'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Wait ⚪
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!selectedAnswer || !selectedDirection}
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit & Reveal Price Action</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            /* Results & Educational Breakdown */
            <div className="space-y-4">
              <div
                className={`p-4 rounded-lg border flex items-start gap-3 ${
                  isFullSuccess
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                    : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                }`}
              >
                {isFullSuccess ? (
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">
                    {isFullSuccess ? 'Excellent Recognition!' : 'Trade Invalidation / Review'}
                  </h4>
                  <p className="text-xs opacity-90">
                    Pattern was <strong className="underline">{currentPattern.name}</strong> on {chartExample.ticker}.
                    Trade Bias: <strong className="underline">{chartExample.tradeType}</strong>.
                  </p>
                </div>
              </div>

              {/* Outcome Analysis */}
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2 text-xs">
                <span className="text-[11px] text-slate-400 block font-semibold">Real Trade Outcome:</span>
                <p className="text-emerald-400 font-semibold">{chartExample.outcome}</p>
                <p className="text-slate-300 leading-relaxed text-[11.5px]">{chartExample.caseStudyNotes}</p>
              </div>

              {/* Trade Blueprint Data */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Entry Price</span>
                  <span className="text-sky-400 font-bold">₹{chartExample.entryPrice >= 1000 ? Math.round(chartExample.entryPrice).toLocaleString('en-IN') : chartExample.entryPrice.toFixed(1)}</span>
                </div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Stop Loss</span>
                  <span className="text-rose-400 font-bold">₹{chartExample.stopLossPrice >= 1000 ? Math.round(chartExample.stopLossPrice).toLocaleString('en-IN') : chartExample.stopLossPrice.toFixed(1)}</span>
                </div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Target 1</span>
                  <span className="text-emerald-400 font-bold">₹{chartExample.target1Price >= 1000 ? Math.round(chartExample.target1Price).toLocaleString('en-IN') : chartExample.target1Price.toFixed(1)}</span>
                </div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Target 2</span>
                  <span className="text-emerald-400 font-bold">₹{chartExample.target2Price >= 1000 ? Math.round(chartExample.target2Price).toLocaleString('en-IN') : chartExample.target2Price.toFixed(1)}</span>
                </div>
              </div>

              {/* Next / Study Button */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleNextChallenge}
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Next Chart Challenge</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectPatternForDetail(currentPattern)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                >
                  Deep Dive Full Study Guide & Rules
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
