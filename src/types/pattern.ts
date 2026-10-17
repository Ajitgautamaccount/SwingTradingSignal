export type PatternCategory = 'reversal' | 'continuation' | 'candlestick' | 'smc_liquidity';
export type PatternBias = 'bullish' | 'bearish' | 'bilateral';
export type TraderLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Candle {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface TrendlineAnnotation {
  x1Index: number;
  y1: number;
  x2Index: number;
  y2: number;
  color?: string;
  label?: string;
  dashed?: boolean;
}

export interface ZoneAnnotation {
  startIdx: number;
  endIdx: number;
  top: number;
  bottom: number;
  color: string;
  label: string;
}

export interface MarkerAnnotation {
  idx: number;
  price: number;
  type: 'entry' | 'stop' | 'target' | 'signal' | 'pivot';
  text: string;
}

export interface RealStockExample {
  ticker: string;
  companyName: string;
  timeframe: string;
  dateRange: string;
  tradeType: 'Long' | 'Short';
  entryPrice: number;
  stopLossPrice: number;
  target1Price: number;
  target2Price: number;
  riskReward: string;
  outcome: string;
  caseStudyNotes: string;
  candles: Candle[];
  annotations: {
    trendlines: TrendlineAnnotation[];
    zones: ZoneAnnotation[];
    markers: MarkerAnnotation[];
  };
}

export interface SchematicStep {
  label: string;
  description: string;
}

export interface Pattern {
  id: string;
  name: string;
  category: PatternCategory;
  bias: PatternBias;
  difficulty: TraderLevel;
  winRateEstimate: string;
  avgRiskReward: string;
  recommendedTimeframes: string[];
  summary: string;
  marketPsychology: string;
  identificationRules: string[];
  tradingRules: {
    entryTrigger: string;
    stopLossPlacement: string;
    targetCalculation: string;
    volumeConfirmation: string;
  };
  beginnerChecklist: string[];
  advancedNuances: string[];
  realStockExample: RealStockExample;
  schematicSummary: string;
  schematicSteps: SchematicStep[];
}

export interface UserNote {
  patternId: string;
  note: string;
  updatedAt: string;
  masteryStatus: 'learning' | 'practicing' | 'mastered';
}

export type SwingSignalType = 'BUY' | 'SELL' | 'HOLD';

export interface SwingTradeItem {
  id: string;
  ticker: string;
  companyName: string;
  sector: string;
  currentPrice: number;
  dayChange: number;
  dayChangePct: number;
  timeframe: string; // e.g. '1 Hour (1H)'
  patternDetected: string;
  patternCategory: 'reversal' | 'continuation' | 'breakout' | 'consolidation';
  signal: SwingSignalType;
  signalStrength: 'Very High' | 'High' | 'Moderate';
  confidenceScore: number; // e.g. 88%
  entryPrice: number;
  entryZone: string; // e.g. '₹4,360 - ₹4,395'
  stopLossPrice: number;
  target1Price: number;
  target2Price: number;
  riskRewardRatio: string;
  holdingHorizon: string; // e.g. '3-7 Trading Days'
  technicalRationale: string;
  confluenceFactors: string[];
  rsi14: number;
  volumeRatio: string; // e.g. '1.8x 1H Avg'
  emaStatus: string; // e.g. 'Above 20 & 50 EMA'
  supportLevel: number;
  resistanceLevel: number;
  lastCandleTime: string; // e.g. '14:15 IST'
  candles: Candle[];
  annotations: {
    trendlines: TrendlineAnnotation[];
    zones: ZoneAnnotation[];
    markers: MarkerAnnotation[];
  };
}


