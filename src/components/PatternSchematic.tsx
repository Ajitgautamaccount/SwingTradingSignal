import React from 'react';
import { Pattern } from '../types/pattern';
import { CheckCircle2, TrendingUp, TrendingDown, Layers } from 'lucide-react';

interface PatternSchematicProps {
  pattern: Pattern;
}

export const PatternSchematic: React.FC<PatternSchematicProps> = ({ pattern }) => {
  const isBull = pattern.bias === 'bullish';
  const isBear = pattern.bias === 'bearish';

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <h4 className="text-sm font-bold text-slate-100 tracking-tight">Textbook Anatomical Schematic</h4>
        </div>
        <div className="flex items-center gap-2 text-xs">
          {isBull && (
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <TrendingUp className="w-3.5 h-3.5" /> Bullish Expectancy
            </span>
          )}
          {isBear && (
            <span className="flex items-center gap-1 text-rose-400 font-medium">
              <TrendingDown className="w-3.5 h-3.5" /> Bearish Expectancy
            </span>
          )}
          {pattern.bias === 'bilateral' && (
            <span className="text-sky-400 font-medium">Bilateral Expansion</span>
          )}
        </div>
      </div>

      {/* Schematic Overview Callout */}
      <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 text-xs text-slate-300 font-mono leading-relaxed">
        <strong className="text-slate-100">Flow:</strong> {pattern.schematicSummary}
      </div>

      {/* 4-Step Structural Anatomy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {pattern.schematicSteps.map((step, idx) => (
          <div
            key={idx}
            className="p-3.5 bg-slate-950/60 border border-slate-800/70 rounded-lg flex flex-col justify-between space-y-2 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono font-bold flex items-center justify-center">
                {idx + 1}
              </span>
              <span className="text-xs font-semibold text-slate-100">{step.label}</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Identification Rules Checklist */}
      <div className="pt-2 border-t border-slate-800/60">
        <h5 className="text-xs font-semibold text-slate-300 mb-2.5">Key Identification Criteria:</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {pattern.identificationRules.map((rule, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
