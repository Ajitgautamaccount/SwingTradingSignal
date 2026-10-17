import React, { useState, useEffect } from 'react';
import { Pattern, UserNote } from '../types/pattern';
import { CandlestickChart } from './CandlestickChart';
import { PatternSchematic } from './PatternSchematic';
import { RiskCalculator } from './RiskCalculator';
import { 
  X, Bookmark, BookmarkCheck, CheckCircle2, AlertTriangle, ShieldCheck, 
  HelpCircle, Sparkles, TrendingUp, TrendingDown, BookOpen, Calculator, 
  Edit3, ChevronLeft, ChevronRight, Check 
} from 'lucide-react';

interface PatternDetailModalProps {
  pattern: Pattern;
  allPatterns: Pattern[];
  onClose: () => void;
  onSelectPattern: (pattern: Pattern) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenCompare: (pattern: Pattern) => void;
}

export const PatternDetailModal: React.FC<PatternDetailModalProps> = ({
  pattern,
  allPatterns,
  onClose,
  onSelectPattern,
  isBookmarked,
  onToggleBookmark,
  onOpenCompare,
}) => {
  const [activeTab, setActiveTab] = useState<'chart' | 'rules' | 'education' | 'calculator' | 'journal'>('chart');
  const [userNote, setUserNote] = useState<string>('');
  const [masteryStatus, setMasteryStatus] = useState<'learning' | 'practicing' | 'mastered'>('learning');
  const [saveConfirmation, setSaveConfirmation] = useState(false);

  // Load saved notes from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`pattern_note_${pattern.id}`);
      if (stored) {
        const parsed: UserNote = JSON.parse(stored);
        setUserNote(parsed.note || '');
        setMasteryStatus(parsed.masteryStatus || 'learning');
      } else {
        setUserNote('');
        setMasteryStatus('learning');
      }
    } catch {
      // ignore storage errors
    }
  }, [pattern.id]);

  const handleSaveNote = () => {
    const noteData: UserNote = {
      patternId: pattern.id,
      note: userNote,
      updatedAt: new Date().toISOString(),
      masteryStatus,
    };
    try {
      localStorage.setItem(`pattern_note_${pattern.id}`, JSON.stringify(noteData));
      setSaveConfirmation(true);
      setTimeout(() => setSaveConfirmation(false), 2000);
    } catch {
      // ignore
    }
  };

  // Find next/prev patterns
  const currentIndex = allPatterns.findIndex((p) => p.id === pattern.id);
  const prevPattern = allPatterns[(currentIndex - 1 + allPatterns.length) % allPatterns.length];
  const nextPattern = allPatterns[(currentIndex + 1) % allPatterns.length];

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectPattern(prevPattern);
      if (e.key === 'ArrowRight') onSelectPattern(nextPattern);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevPattern, nextPattern, onClose, onSelectPattern]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-6xl my-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-3.5 bg-slate-950/90 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-slate-100 tracking-tight flex items-center gap-2">
              <span>{pattern.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded font-mono font-medium ${
                pattern.bias === 'bullish' ? 'bg-emerald-500/10 text-emerald-400' : pattern.bias === 'bearish' ? 'bg-rose-500/10 text-rose-400' : 'bg-sky-500/10 text-sky-400'
              }`}>
                {pattern.bias.toUpperCase()}
              </span>
            </h2>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span className="capitalize">{pattern.category.replace('_', ' ')}</span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">{pattern.difficulty}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-emerald-400">{pattern.winRateEstimate} Win Rate</span>
            </div>
          </div>

          {/* Right Action Icons & Next/Prev */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenCompare(pattern)}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              Compare
            </button>

            <button
              type="button"
              onClick={() => onToggleBookmark(pattern.id)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-700 transition-colors"
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Pattern'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <div className="flex items-center border border-slate-800 rounded-lg overflow-hidden bg-slate-950">
              <button
                type="button"
                onClick={() => onSelectPattern(prevPattern)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title={`Previous: ${prevPattern.name}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onSelectPattern(nextPattern)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title={`Next: ${nextPattern.name}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Controls Bar */}
        <div className="flex items-center gap-1 px-6 py-2 bg-slate-900 border-b border-slate-800 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('chart')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'chart'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Real Stock Chart ({pattern.realStockExample.ticker})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('rules')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'rules'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Market Psychology & Execution Rules
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('education')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'education'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Beginner Checklist vs Advanced Traps
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('calculator')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'calculator'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Trade Sizing Calculator
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('journal')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'journal'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            My Trading Notes & Status
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'chart' && (
            <div className="space-y-6">
              {/* Real Chart Viewer */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-100">
                      Real Stock Case Study: {pattern.realStockExample.companyName} ({pattern.realStockExample.ticker})
                    </h3>
                    <p className="text-xs text-slate-400">
                      High-fidelity Japanese candlesticks with live EMA, volume, and trade zones.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-emerald-400">
                    Trade Type: <strong className="text-slate-100">{pattern.realStockExample.tradeType}</strong>
                  </div>
                </div>

                <CandlestickChart
                  example={pattern.realStockExample}
                  height={440}
                  interactiveReplay={true}
                />
              </div>

              {/* Textbook Schematic Anatomy Comparison */}
              <PatternSchematic pattern={pattern} />
            </div>
          )}

          {activeTab === 'rules' && (
            <div className="space-y-6">
              {/* Market Psychology Section */}
              <div className="p-5 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  Institutional & Market Psychology
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pattern.marketPsychology}
                </p>
              </div>

              {/* Step-by-Step Execution Rules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
                  <span className="text-[11px] font-mono text-emerald-400 block font-semibold uppercase">
                    01. Entry Trigger
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {pattern.tradingRules.entryTrigger}
                  </p>
                </div>

                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
                  <span className="text-[11px] font-mono text-rose-400 block font-semibold uppercase">
                    02. Invalidation & Stop Loss
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {pattern.tradingRules.stopLossPlacement}
                  </p>
                </div>

                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
                  <span className="text-[11px] font-mono text-sky-400 block font-semibold uppercase">
                    03. Target 1 & Target 2 Calculation
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {pattern.tradingRules.targetCalculation}
                  </p>
                </div>

                <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
                  <span className="text-[11px] font-mono text-amber-400 block font-semibold uppercase">
                    04. Volume Confirmation Climax
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {pattern.tradingRules.volumeConfirmation}
                  </p>
                </div>
              </div>

              {/* Ideal Identification Checklist */}
              <div className="p-5 bg-slate-950/70 border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-sm font-bold text-slate-100">
                  Identification Rules (Confirm all before entering):
                </h4>
                <div className="space-y-2">
                  {pattern.identificationRules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Beginner Checklist */}
              <div className="p-5 bg-slate-950/70 border border-emerald-900/30 rounded-xl space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-sm font-bold text-emerald-300">Beginner Trader Golden Rules</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Avoid common novice trading mistakes and premature executions:
                </p>
                <div className="space-y-2.5 pt-1">
                  {pattern.beginnerChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Traps & Institutional Edge */}
              <div className="p-5 bg-slate-950/70 border border-amber-900/30 rounded-xl space-y-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm font-bold text-amber-300">Advanced Nuances & Institutional Traps</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  How algorithms, market makers, and prop desks exploit retail traders:
                </p>
                <div className="space-y-2.5 pt-1">
                  {pattern.advancedNuances.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calculator' && (
            <RiskCalculator initialExample={pattern.realStockExample} />
          )}

          {activeTab === 'journal' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-emerald-400" />
                    Personal Trading Journal & Mastery
                  </h4>
                  <p className="text-xs text-slate-400">
                    Record your own observations, chart screenshots, backtest notes, or playbook rules for this pattern.
                  </p>
                </div>

                {/* Mastery Level Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">My Status:</span>
                  <select
                    value={masteryStatus}
                    onChange={(e) => setMasteryStatus(e.target.value as any)}
                    className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-200 font-medium focus:outline-none focus:border-emerald-500"
                  >
                    <option value="learning">Learning 📖</option>
                    <option value="practicing">Practicing 🎯</option>
                    <option value="mastered">Mastered 🏆</option>
                  </select>
                </div>
              </div>

              <textarea
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="E.g., I trade this best on Nifty / Bank Nifty 15-minute chart with 20 EMA confluence. My rule: avoid the initial 09:15-09:30 opening noise and execute between 09:45 AM and 02:30 PM with strict stop loss."
                rows={7}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-100 font-mono leading-relaxed focus:outline-none focus:border-emerald-500"
              />

              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Notes are stored safely in your browser’s local storage.
                </span>
                <button
                  type="button"
                  onClick={handleSaveNote}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
                >
                  {saveConfirmation ? <Check className="w-3.5 h-3.5" /> : null}
                  <span>{saveConfirmation ? 'Saved!' : 'Save Journal Note'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
