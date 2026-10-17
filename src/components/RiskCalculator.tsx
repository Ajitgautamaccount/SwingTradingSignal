import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldAlert, Target, Percent } from 'lucide-react';
import { RealStockExample } from '../types/pattern';

interface RiskCalculatorProps {
  initialExample?: RealStockExample;
}

export const RiskCalculator: React.FC<RiskCalculatorProps> = ({ initialExample }) => {
  const [accountSize, setAccountSize] = useState<number>(500000); // 5 Lakhs default
  const [riskPercent, setRiskPercent] = useState<number>(1.5);
  const [tradeType, setTradeType] = useState<'Long' | 'Short'>(
    initialExample?.tradeType || 'Long'
  );
  const [entryPrice, setEntryPrice] = useState<number>(
    initialExample?.entryPrice || 2500
  );
  const [stopLossPrice, setStopLossPrice] = useState<number>(
    initialExample?.stopLossPrice || 2420
  );
  const [target1Price, setTarget1Price] = useState<number>(
    initialExample?.target1Price || 2680
  );
  const [target2Price, setTarget2Price] = useState<number>(
    initialExample?.target2Price || 2820
  );

  // Calculations
  const riskRupees = (accountSize * riskPercent) / 100;
  const priceRiskPerShare = Math.abs(entryPrice - stopLossPrice);
  const shares = priceRiskPerShare > 0 ? Math.floor(riskRupees / priceRiskPerShare) : 0;
  const totalPositionCost = shares * entryPrice;
  const positionSizePercent = accountSize > 0 ? ((totalPositionCost / accountSize) * 100).toFixed(1) : '0';

  // Target 1
  const profitPerShareT1 = Math.abs(target1Price - entryPrice);
  const totalProfitT1 = shares * profitPerShareT1;
  const rewardRiskT1 = priceRiskPerShare > 0 ? (profitPerShareT1 / priceRiskPerShare).toFixed(2) : '0';

  // Target 2
  const profitPerShareT2 = Math.abs(target2Price - entryPrice);
  const totalProfitT2 = shares * profitPerShareT2;
  const rewardRiskT2 = priceRiskPerShare > 0 ? (profitPerShareT2 / priceRiskPerShare).toFixed(2) : '0';

  // Required Win Rate to breakeven: 1 / (1 + RR)
  const rrNum = parseFloat(rewardRiskT1) || 1;
  const breakevenWinRate = ((1 / (1 + rrNum)) * 100).toFixed(1);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-emerald-400" />
          <div>
            <h3 className="font-bold text-base text-slate-100">Trade Sizing & Risk/Reward Calculator (INR)</h3>
            <span className="text-[11px] text-slate-400">NSE / BSE Equity & F&O Position Sizer</span>
          </div>
        </div>
        <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setTradeType('Long')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              tradeType === 'Long'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Long
          </button>
          <button
            type="button"
            onClick={() => setTradeType('Short')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              tradeType === 'Short'
                ? 'bg-rose-600 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Short
          </button>
        </div>
      </div>

      {/* Input Parameters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div>
          <label className="block text-[11px] font-medium text-slate-400 mb-1">
            Trading Capital (₹)
          </label>
          <div className="relative">
            <span className="text-slate-400 font-bold text-xs absolute left-2.5 top-2">₹</span>
            <input
              type="number"
              value={accountSize}
              onChange={(e) => setAccountSize(Number(e.target.value) || 0)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-7 pr-2.5 py-1.5 text-xs text-slate-100 font-mono font-semibold focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-slate-400 mb-1">
            Risk Per Trade (%)
          </label>
          <div className="relative">
            <Percent className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
            <input
              type="number"
              step="0.25"
              value={riskPercent}
              onChange={(e) => setRiskPercent(Number(e.target.value) || 0)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-7 pr-2.5 py-1.5 text-xs text-slate-100 font-mono font-semibold focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-medium text-slate-400 mb-1">
            Entry Price (₹)
          </label>
          <input
            type="number"
            step="0.5"
            value={entryPrice}
            onChange={(e) => setEntryPrice(Number(e.target.value) || 0)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-100 font-mono font-semibold focus:outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="block text-[11px] font-medium text-slate-400 mb-1">
            Stop Loss (₹)
          </label>
          <input
            type="number"
            step="0.5"
            value={stopLossPrice}
            onChange={(e) => setStopLossPrice(Number(e.target.value) || 0)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-rose-300 font-mono font-semibold focus:outline-none focus:border-rose-500"
          />
        </div>

        <div>
          <label className="block text-[11px] font-medium text-slate-400 mb-1">
            Target 1 (₹)
          </label>
          <input
            type="number"
            step="0.5"
            value={target1Price}
            onChange={(e) => setTarget1Price(Number(e.target.value) || 0)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-emerald-300 font-mono font-semibold focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-[11px] font-medium text-slate-400 mb-1">
            Target 2 (₹)
          </label>
          <input
            type="number"
            step="0.5"
            value={target2Price}
            onChange={(e) => setTarget2Price(Number(e.target.value) || 0)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-emerald-300 font-mono font-semibold focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Outputs & Position Sizing Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg">
          <span className="text-[11px] text-slate-400 block mb-1">Quantity (Shares / Units)</span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold font-mono text-emerald-400 tabular-nums">
              {shares.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">qty</span>
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">
            Capital: ₹{totalPositionCost.toLocaleString('en-IN')} ({positionSizePercent}%)
          </span>
        </div>

        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg">
          <span className="text-[11px] text-slate-400 block mb-1">Max Rupee Risk</span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold font-mono text-rose-400 tabular-nums">
              ₹{riskRupees.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
            </span>
            <span className="text-[11px] text-slate-400 font-mono">({riskPercent}%)</span>
          </div>
          <span className="text-[10px] text-slate-500 mt-1 block">
            ₹{priceRiskPerShare.toFixed(1)} per share risk
          </span>
        </div>

        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg">
          <span className="text-[11px] text-slate-400 block mb-1">Target 1 Return (R:R)</span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold font-mono text-emerald-300 tabular-nums">
              1 : {rewardRiskT1}
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 mt-1 block font-mono">
            +₹{totalProfitT1.toLocaleString('en-IN', { maximumFractionDigits: 0 })} (+{((profitPerShareT1 / entryPrice) * 100).toFixed(1)}%)
          </span>
        </div>

        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg">
          <span className="text-[11px] text-slate-400 block mb-1">Target 2 Return (R:R)</span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold font-mono text-emerald-300 tabular-nums">
              1 : {rewardRiskT2}
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 mt-1 block font-mono">
            +₹{totalProfitT2.toLocaleString('en-IN', { maximumFractionDigits: 0 })} (+{((profitPerShareT2 / entryPrice) * 100).toFixed(1)}%)
          </span>
        </div>
      </div>

      {/* Institutional Trader Advice / Invalidation Note */}
      <div className="flex items-start gap-2.5 p-3 bg-slate-950/90 rounded-lg border border-slate-800/80 text-xs text-slate-300">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-slate-200">Indian Market Execution Discipline:</span>
          <p className="text-slate-400 text-[11.5px] leading-relaxed">
            With a <strong className="text-emerald-400">1 : {rewardRiskT1}</strong> risk-to-reward ratio, your strategy requires only a <strong className="text-slate-200">{breakevenWinRate}%</strong> win rate to stay profitable long-term. In Indian F&O and equity trading, never risk more than 1% to 2% of your capital on a single expiry or swing setup.
          </p>
        </div>
      </div>
    </div>
  );
};
