import React, { useState } from 'react';
import { Pattern } from '../types/pattern';
import { X, ArrowLeftRight, CheckCircle2, TrendingUp, TrendingDown } from 'lucide-react';

interface CompareModalProps {
  initialPattern: Pattern;
  allPatterns: Pattern[];
  onClose: () => void;
  onSelectPattern: (p: Pattern) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  initialPattern,
  allPatterns,
  onClose,
  onSelectPattern,
}) => {
  const [patternA, setPatternA] = useState<Pattern>(initialPattern);
  const [patternB, setPatternB] = useState<Pattern>(() => {
    const candidate = allPatterns.find((p) => p.id !== initialPattern.id && p.category === initialPattern.category);
    return candidate || allPatterns.find((p) => p.id !== initialPattern.id) || allPatterns[0];
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl my-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-emerald-400" />
            <h2 className="text-base font-bold text-slate-100">Side-by-Side Pattern Comparative Analysis</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <label className="text-[11px] text-slate-400 font-semibold block mb-1">
                Pattern A:
              </label>
              <select
                value={patternA.id}
                onChange={(e) => {
                  const found = allPatterns.find((p) => p.id === e.target.value);
                  if (found) setPatternA(found);
                }}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 font-medium focus:outline-none focus:border-emerald-500"
              >
                {allPatterns.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.realStockExample.ticker})
                  </option>
                ))}
              </select>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <label className="text-[11px] text-slate-400 font-semibold block mb-1">
                Pattern B:
              </label>
              <select
                value={patternB.id}
                onChange={(e) => {
                  const found = allPatterns.find((p) => p.id === e.target.value);
                  if (found) setPatternB(found);
                }}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-100 font-medium focus:outline-none focus:border-emerald-500"
              >
                {allPatterns.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.realStockExample.ticker})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column A */}
            <div className="space-y-4 p-5 bg-slate-950/60 border border-slate-800 rounded-xl">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[10px] uppercase font-mono text-emerald-400 tracking-wider">Pattern 01</span>
                <h3 className="text-base font-bold text-slate-100 mt-1">{patternA.name}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span className="capitalize">{patternA.category.replace('_', ' ')}</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{patternA.bias}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-emerald-400">{patternA.winRateEstimate} Win Rate</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Real Stock Study</span>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 font-mono">
                    {patternA.realStockExample.ticker} ({patternA.realStockExample.timeframe}) — {patternA.realStockExample.outcome}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Entry Trigger</span>
                  <p className="text-slate-300 leading-relaxed">{patternA.tradingRules.entryTrigger}</p>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Stop Loss Placement</span>
                  <p className="text-rose-300 leading-relaxed font-mono">{patternA.tradingRules.stopLossPlacement}</p>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Typical Risk/Reward</span>
                  <span className="text-emerald-400 font-mono font-bold">{patternA.avgRiskReward}</span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Beginner Trap Checklist</span>
                  <ul className="space-y-1 text-slate-300">
                    {patternA.beginnerChecklist.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Column B */}
            <div className="space-y-4 p-5 bg-slate-950/60 border border-slate-800 rounded-xl">
              <div className="border-b border-slate-800 pb-3">
                <span className="text-[10px] uppercase font-mono text-sky-400 tracking-wider">Pattern 02</span>
                <h3 className="text-base font-bold text-slate-100 mt-1">{patternB.name}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span className="capitalize">{patternB.category.replace('_', ' ')}</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{patternB.bias}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-emerald-400">{patternB.winRateEstimate} Win Rate</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Real Stock Study</span>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 font-mono">
                    {patternB.realStockExample.ticker} ({patternB.realStockExample.timeframe}) — {patternB.realStockExample.outcome}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Entry Trigger</span>
                  <p className="text-slate-300 leading-relaxed">{patternB.tradingRules.entryTrigger}</p>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Stop Loss Placement</span>
                  <p className="text-rose-300 leading-relaxed font-mono">{patternB.tradingRules.stopLossPlacement}</p>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Typical Risk/Reward</span>
                  <span className="text-emerald-400 font-mono font-bold">{patternB.avgRiskReward}</span>
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block mb-1">Beginner Trap Checklist</span>
                  <ul className="space-y-1 text-slate-300">
                    {patternB.beginnerChecklist.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
