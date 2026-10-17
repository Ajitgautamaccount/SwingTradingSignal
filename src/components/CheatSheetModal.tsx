import React, { useState } from 'react';
import { Pattern } from '../types/pattern';
import { X, Table, Search, TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';

interface CheatSheetModalProps {
  patterns: Pattern[];
  onClose: () => void;
  onSelectPattern: (p: Pattern) => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({
  patterns,
  onClose,
  onSelectPattern,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBias, setFilterBias] = useState<'all' | 'bullish' | 'bearish'>('all');

  const filtered = patterns.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.realStockExample.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBias = filterBias === 'all' || p.bias === filterBias;
    return matchesSearch && matchesBias;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-6xl my-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Table className="w-5 h-5 text-emerald-400" />
            <h2 className="text-base font-bold text-slate-100">
              Price Action Master Cheatsheet & Execution Matrix
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-slate-900 border-b border-slate-800">
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search pattern, ticker, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
            <button
              type="button"
              onClick={() => setFilterBias('all')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterBias === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilterBias('bullish')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterBias === 'bullish' ? 'bg-emerald-600/30 text-emerald-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Bullish Only
            </button>
            <button
              type="button"
              onClick={() => setFilterBias('bearish')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterBias === 'bearish' ? 'bg-rose-600/30 text-rose-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Bearish Only
            </button>
          </div>
        </div>

        {/* Dense Financial Table */}
        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead className="bg-slate-950/80 sticky top-0 z-10 border-b border-slate-800 text-slate-400 font-mono text-[11px]">
              <tr>
                <th className="py-2.5 px-4 font-semibold">Pattern</th>
                <th className="py-2.5 px-3 font-semibold">Bias</th>
                <th className="py-2.5 px-3 font-semibold">Win Rate</th>
                <th className="py-2.5 px-3 font-semibold">Entry Rule</th>
                <th className="py-2.5 px-3 font-semibold">Stop Loss Rule</th>
                <th className="py-2.5 px-3 font-semibold">Real Stock Study</th>
                <th className="py-2.5 px-4 font-semibold text-right">Inspect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {filtered.map((p) => {
                const isBull = p.bias === 'bullish';
                const isBear = p.bias === 'bearish';

                return (
                  <tr
                    key={p.id}
                    className="hover:bg-slate-800/40 transition-colors group cursor-pointer"
                    onClick={() => {
                      onSelectPattern(p);
                      onClose();
                    }}
                  >
                    <td className="py-3 px-4 font-bold text-slate-100 group-hover:text-emerald-300">
                      <div>{p.name}</div>
                      <span className="text-[10px] text-slate-500 font-normal capitalize">
                        {p.category.replace('_', ' ')} · {p.difficulty}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <span
                        className={`inline-flex items-center gap-1 font-semibold text-[11px] ${
                          isBull ? 'text-emerald-400' : isBear ? 'text-rose-400' : 'text-sky-400'
                        }`}
                      >
                        {isBull ? <TrendingUp className="w-3 h-3" /> : isBear ? <TrendingDown className="w-3 h-3" /> : null}
                        <span className="capitalize">{p.bias}</span>
                      </span>
                    </td>
                    <td className="py-3 px-3 font-mono tabular-nums text-slate-200">
                      {p.winRateEstimate}
                    </td>
                    <td className="py-3 px-3 text-slate-300 max-w-[220px] leading-relaxed truncate" title={p.tradingRules.entryTrigger}>
                      {p.tradingRules.entryTrigger}
                    </td>
                    <td className="py-3 px-3 text-rose-300 max-w-[200px] leading-relaxed truncate" title={p.tradingRules.stopLossPlacement}>
                      {p.tradingRules.stopLossPlacement}
                    </td>
                    <td className="py-3 px-3 font-mono">
                      <span className="font-bold text-slate-200">{p.realStockExample.ticker}</span>
                      <span className="text-slate-500 text-[10px] block">
                        {p.realStockExample.timeframe}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectPattern(p);
                          onClose();
                        }}
                        className="p-1 text-slate-400 group-hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
