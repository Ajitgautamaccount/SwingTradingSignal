import { SwingTradeItem } from '../types/pattern';

export const NIFTY_NEXT_100_SWING_TRADES: SwingTradeItem[] = [
  {
    id: 'hal-1h-ascending-triangle',
    ticker: 'HAL',
    companyName: 'Hindustan Aeronautics Limited',
    sector: 'Defense & Aerospace',
    currentPrice: 4385.50,
    dayChange: 98.40,
    dayChangePct: 2.30,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Ascending Triangle Breakout',
    patternCategory: 'breakout',
    signal: 'BUY',
    signalStrength: 'Very High',
    confidenceScore: 92,
    entryPrice: 4370.00,
    entryZone: '₹4,360 - ₹4,395',
    stopLossPrice: 4235.00,
    target1Price: 4620.00,
    target2Price: 4850.00,
    riskRewardRatio: '1 : 2.85',
    holdingHorizon: '4 - 8 Trading Days',
    technicalRationale: 'Clean 1H Ascending Triangle breakout confirmed with a high-volume surge. Higher lows created over 3 days pressing against the ₹4,350 resistance zone. 20 EMA has crossed firmly above 50 EMA on the 1-hour chart.',
    confluenceFactors: [
      '1H Candle closed above ₹4,350 horizontal resistance with 2.2x avg volume',
      '20 EMA (₹4,310) serving as dynamic support for swing pullbacks',
      'RSI (14) at 63.8 showing healthy momentum without overbought divergence',
      'Defense sector relative strength outperforming Nifty 50 by 1.8%'
    ],
    rsi14: 63.8,
    volumeRatio: '2.2x 1H Avg',
    emaStatus: 'Bullish (20 EMA > 50 EMA)',
    supportLevel: 4235.00,
    resistanceLevel: 4620.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 4210, high: 4260, low: 4195, close: 4245, volume: 142000 },
      { date: 'Day 1 10:15', open: 4245, high: 4290, low: 4230, close: 4280, volume: 110000 },
      { date: 'Day 1 11:15', open: 4280, high: 4345, low: 4270, close: 4340, volume: 185000 },
      { date: 'Day 1 12:15', open: 4340, high: 4355, low: 4310, close: 4315, volume: 92000 },
      { date: 'Day 1 13:15', open: 4315, high: 4330, low: 4285, close: 4290, volume: 84000 },
      { date: 'Day 1 14:15', open: 4290, high: 4310, low: 4275, close: 4280, volume: 76000 },
      { date: 'Day 1 15:15', open: 4280, high: 4295, low: 4265, close: 4270, volume: 68000 },
      { date: 'Day 2 09:15', open: 4275, high: 4310, low: 4260, close: 4305, volume: 125000 },
      { date: 'Day 2 10:15', open: 4305, high: 4350, low: 4295, close: 4345, volume: 160000 },
      { date: 'Day 2 11:15', open: 4345, high: 4358, low: 4315, close: 4320, volume: 95000 },
      { date: 'Day 2 12:15', open: 4320, high: 4335, low: 4300, close: 4310, volume: 78000 },
      { date: 'Day 2 13:15', open: 4310, high: 4340, low: 4305, close: 4335, volume: 88000 },
      { date: 'Day 2 14:15', open: 4335, high: 4352, low: 4325, close: 4340, volume: 98000 },
      { date: 'Day 2 15:15', open: 4340, high: 4355, low: 4330, close: 4348, volume: 112000 },
      { date: 'Day 3 09:15', open: 4350, high: 4375, low: 4340, close: 4368, volume: 220000 },
      { date: 'Day 3 10:15', open: 4368, high: 4390, low: 4355, close: 4385, volume: 265000 },
      { date: 'Day 3 11:15', open: 4385, high: 4410, low: 4370, close: 4395, volume: 240000 },
      { date: 'Day 3 12:15', open: 4395, high: 4405, low: 4365, close: 4375, volume: 145000 },
      { date: 'Day 3 13:15', open: 4375, high: 4390, low: 4360, close: 4370, volume: 120000 },
      { date: 'Day 3 14:15', open: 4370, high: 4395, low: 4365, close: 4385, volume: 198000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 6, y1: 4270, x2Index: 13, y2: 4348, color: '#10b981', label: '1H Ascending Support', dashed: false },
        { x1Index: 2, y1: 4350, x2Index: 13, y2: 4350, color: '#f59e0b', label: '1H Horizontal Resistance (₹4,350)', dashed: true }
      ],
      zones: [
        { startIdx: 2, endIdx: 14, top: 4355, bottom: 4345, color: 'rgba(245, 158, 11, 0.15)', label: 'Breakout Zone' }
      ],
      markers: [
        { idx: 14, price: 4370, type: 'entry', text: 'Breakout Buy Trigger' },
        { idx: 7, price: 4235, type: 'stop', text: 'SL: ₹4,235' },
        { idx: 19, price: 4620, type: 'target', text: 'Target 1: ₹4,620' }
      ]
    }
  },
  {
    id: 'bel-1h-bull-flag',
    ticker: 'BEL',
    companyName: 'Bharat Electronics Limited',
    sector: 'Defense & Electronics',
    currentPrice: 295.50,
    dayChange: 6.80,
    dayChangePct: 2.35,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Bull Flag Retest on 20 EMA',
    patternCategory: 'continuation',
    signal: 'BUY',
    signalStrength: 'Very High',
    confidenceScore: 90,
    entryPrice: 294.00,
    entryZone: '₹292 - ₹296',
    stopLossPrice: 283.50,
    target1Price: 315.00,
    target2Price: 330.00,
    riskRewardRatio: '1 : 2.95',
    holdingHorizon: '3 - 6 Trading Days',
    technicalRationale: 'Aggressive impulse rally from ₹275 to ₹300 followed by low-volume downward-sloping 1H consolidation flag. Price has bounced off the rising 20 EMA at ₹292 with bullish pin bar confirmation.',
    confluenceFactors: [
      'Flagpole created with 3.5x institutional volume, consolidation volume shrunk by 60%',
      '1H 20 EMA tested 3 times and respected as dynamic floor',
      'Stochastic RSI 1H generated bullish hook cross from 22 oversold region',
      'Target aligns with 100% Fibonacci projection of the flagpole'
    ],
    rsi14: 61.2,
    volumeRatio: '1.9x 1H Avg',
    emaStatus: 'Strong Trend (Price > 20 EMA > 50 EMA)',
    supportLevel: 283.50,
    resistanceLevel: 315.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 276, high: 284, low: 275, close: 282, volume: 850000 },
      { date: 'Day 1 10:15', open: 282, high: 291, low: 281, close: 289, volume: 1120000 },
      { date: 'Day 1 11:15', open: 289, high: 298, low: 288, close: 297, volume: 1450000 },
      { date: 'Day 1 12:15', open: 297, high: 301, low: 295, close: 299, volume: 920000 },
      { date: 'Day 1 13:15', open: 299, high: 300, low: 294, close: 295, volume: 420000 },
      { date: 'Day 1 14:15', open: 295, high: 297, low: 293, close: 294, volume: 380000 },
      { date: 'Day 1 15:15', open: 294, high: 296, low: 292, close: 293, volume: 320000 },
      { date: 'Day 2 09:15', open: 293, high: 295, low: 291, close: 292, volume: 410000 },
      { date: 'Day 2 10:15', open: 292, high: 294, low: 290, close: 291, volume: 340000 },
      { date: 'Day 2 11:15', open: 291, high: 293, low: 289.5, close: 291, volume: 290000 },
      { date: 'Day 2 12:15', open: 291, high: 293.5, low: 290, close: 292, volume: 260000 },
      { date: 'Day 2 13:15', open: 292, high: 294, low: 291, close: 293, volume: 310000 },
      { date: 'Day 2 14:15', open: 293, high: 296, low: 292, close: 295, volume: 540000 },
      { date: 'Day 2 15:15', open: 295, high: 297, low: 294, close: 296.5, volume: 680000 },
      { date: 'Day 3 09:15', open: 296.5, high: 299, low: 295, close: 297.5, volume: 890000 },
      { date: 'Day 3 10:15', open: 297.5, high: 302, low: 296, close: 299, volume: 1150000 },
      { date: 'Day 3 11:15', open: 299, high: 300, low: 294, close: 295, volume: 480000 },
      { date: 'Day 3 12:15', open: 295, high: 296.5, low: 293.5, close: 294.5, volume: 360000 },
      { date: 'Day 3 13:15', open: 294.5, high: 296, low: 293, close: 295, volume: 420000 },
      { date: 'Day 3 14:15', open: 295, high: 297.5, low: 294, close: 295.5, volume: 740000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 3, y1: 301, x2Index: 11, y2: 293.5, color: '#f59e0b', label: 'Flag Upper Trendline', dashed: true },
        { x1Index: 6, y1: 292, x2Index: 11, y2: 289.5, color: '#10b981', label: 'Flag Lower Trendline', dashed: true }
      ],
      zones: [
        { startIdx: 3, endIdx: 12, top: 300, bottom: 290, color: 'rgba(59, 130, 246, 0.12)', label: 'Flag Consolidation' }
      ],
      markers: [
        { idx: 13, price: 296, type: 'entry', text: '1H Flag Breakout' },
        { idx: 9, price: 283.5, type: 'stop', text: 'SL: ₹283.5' },
        { idx: 19, price: 315, type: 'target', text: 'Target 1: ₹315' }
      ]
    }
  },
  {
    id: 'zomato-1h-cup-handle',
    ticker: 'ZOMATO',
    companyName: 'Zomato Limited',
    sector: 'Consumer Tech & Internet',
    currentPrice: 268.40,
    dayChange: 7.60,
    dayChangePct: 2.91,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Cup & Handle Breakout',
    patternCategory: 'breakout',
    signal: 'BUY',
    signalStrength: 'Very High',
    confidenceScore: 94,
    entryPrice: 266.00,
    entryZone: '₹264 - ₹269',
    stopLossPrice: 254.00,
    target1Price: 288.00,
    target2Price: 305.00,
    riskRewardRatio: '1 : 3.25',
    holdingHorizon: '5 - 10 Trading Days',
    technicalRationale: 'Classic multi-day rounded cup formation on 1H timeframe bottoming at ₹248 followed by shallow 38.2% handle pullback to ₹260. Fresh 1H candle breakout above ₹266 resistance with heavy institutional delivery volume.',
    confluenceFactors: [
      'Handle retracement was shallow (under 40% of cup depth), signaling intense buyer demand',
      '1H volume surged 2.7x over previous 20-period moving average on breakout',
      '50 EMA trending upward at ₹256 with strong positive slope',
      'MACD histogram flipped strongly positive with expanding green bars'
    ],
    rsi14: 67.4,
    volumeRatio: '2.7x 1H Avg',
    emaStatus: 'Strong Trend (20 EMA > 50 EMA)',
    supportLevel: 254.00,
    resistanceLevel: 288.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 265, high: 266, low: 261, close: 262, volume: 1850000 },
      { date: 'Day 1 11:15', open: 262, high: 263, low: 256, close: 257, volume: 1400000 },
      { date: 'Day 1 13:15', open: 257, high: 258, low: 251, close: 252, volume: 1650000 },
      { date: 'Day 1 15:15', open: 252, high: 253, low: 248, close: 249, volume: 1920000 },
      { date: 'Day 2 09:15', open: 249, high: 254, low: 248, close: 253, volume: 2100000 },
      { date: 'Day 2 11:15', open: 253, high: 258, low: 252, close: 257, volume: 1850000 },
      { date: 'Day 2 13:15', open: 257, high: 263, low: 256, close: 262, volume: 2200000 },
      { date: 'Day 2 15:15', open: 262, high: 266, low: 261, close: 265.5, volume: 2600000 },
      { date: 'Day 3 09:15', open: 265.5, high: 266, low: 260, close: 261, volume: 1450000 },
      { date: 'Day 3 11:15', open: 261, high: 263, low: 259.5, close: 262, volume: 980000 },
      { date: 'Day 3 13:15', open: 262, high: 265, low: 261, close: 264.5, volume: 1350000 },
      { date: 'Day 3 15:15', open: 264.5, high: 267, low: 263, close: 266, volume: 2800000 },
      { date: 'Day 4 09:15', open: 266, high: 271, low: 265, close: 268.4, volume: 3950000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 0, y1: 266, x2Index: 7, y2: 266, color: '#f59e0b', label: '1H Cup Rim Resistance (₹266)', dashed: true },
        { x1Index: 7, y1: 266, x2Index: 10, y2: 262, color: '#3b82f6', label: 'Handle Drift', dashed: false }
      ],
      zones: [
        { startIdx: 3, endIdx: 5, top: 251, bottom: 248, color: 'rgba(16, 185, 129, 0.15)', label: 'Cup Base Accumulation' }
      ],
      markers: [
        { idx: 11, price: 266, type: 'entry', text: 'Cup & Handle Breakout Entry' },
        { idx: 9, price: 254, type: 'stop', text: 'SL: ₹254' },
        { idx: 12, price: 288, type: 'target', text: 'Target 1: ₹288' }
      ]
    }
  },
  {
    id: 'trent-1h-symmetrical-triangle',
    ticker: 'TRENT',
    companyName: 'Trent Limited (Tata Retail)',
    sector: 'Retail & Consumer',
    currentPrice: 7420.00,
    dayChange: 185.00,
    dayChangePct: 2.56,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Symmetrical Triangle Breakout',
    patternCategory: 'continuation',
    signal: 'BUY',
    signalStrength: 'Very High',
    confidenceScore: 91,
    entryPrice: 7390.00,
    entryZone: '₹7,360 - ₹7,430',
    stopLossPrice: 7180.00,
    target1Price: 7850.00,
    target2Price: 8200.00,
    riskRewardRatio: '1 : 2.92',
    holdingHorizon: '4 - 9 Trading Days',
    technicalRationale: 'Volatility contraction pattern (VCP) resolving to the upside. Price compressed between higher swing lows and lower swing highs before a decisive 1H bullish expansion candle pierced the upper descending trendline.',
    confluenceFactors: [
      'ATR contracted to 10-day low, indicating imminent explosive directional move',
      'Breakout candle volume exceeded the 1H 30-period average by 180%',
      '20 EMA (₹7,310) and 50 EMA (₹7,240) stacked bullishly in parallel',
      'Strong institutional backing in Tata group consumption theme'
    ],
    rsi14: 65.1,
    volumeRatio: '2.1x 1H Avg',
    emaStatus: 'Stacked Bullish',
    supportLevel: 7180.00,
    resistanceLevel: 7850.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 7150, high: 7380, low: 7120, close: 7350, volume: 48000 },
      { date: 'Day 1 11:15', open: 7350, high: 7410, low: 7320, close: 7360, volume: 32000 },
      { date: 'Day 1 13:15', open: 7360, high: 7370, low: 7260, close: 7290, volume: 29000 },
      { date: 'Day 1 15:15', open: 7290, high: 7310, low: 7240, close: 7260, volume: 24000 },
      { date: 'Day 2 09:15', open: 7260, high: 7350, low: 7250, close: 7320, volume: 38000 },
      { date: 'Day 2 11:15', open: 7320, high: 7380, low: 7310, close: 7350, volume: 31000 },
      { date: 'Day 2 13:15', open: 7350, high: 7360, low: 7300, close: 7315, volume: 22000 },
      { date: 'Day 2 15:15', open: 7315, high: 7340, low: 7300, close: 7330, volume: 26000 },
      { date: 'Day 3 09:15', open: 7330, high: 7430, low: 7325, close: 7410, volume: 64000 },
      { date: 'Day 3 11:15', open: 7410, high: 7460, low: 7390, close: 7435, volume: 72000 },
      { date: 'Day 3 13:15', open: 7435, high: 7450, low: 7380, close: 7400, volume: 41000 },
      { date: 'Day 3 15:15', open: 7400, high: 7440, low: 7395, close: 7420, volume: 55000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 1, y1: 7410, x2Index: 7, y2: 7340, color: '#f59e0b', label: '1H Upper Resistance Line', dashed: true },
        { x1Index: 3, y1: 7240, x2Index: 7, y2: 7300, color: '#10b981', label: '1H Lower Support Line', dashed: true }
      ],
      zones: [
        { startIdx: 6, endIdx: 9, top: 7360, bottom: 7300, color: 'rgba(99, 102, 241, 0.15)', label: 'Apex Compression' }
      ],
      markers: [
        { idx: 8, price: 7390, type: 'entry', text: 'Triangle Breakout Trigger' },
        { idx: 7, price: 7180, type: 'stop', text: 'SL: ₹7,180' },
        { idx: 11, price: 7850, type: 'target', text: 'Target 1: ₹7,850' }
      ]
    }
  },
  {
    id: 'jiofin-1h-double-bottom',
    ticker: 'JIOFIN',
    companyName: 'Jio Financial Services',
    sector: 'Financial Services & NBFC',
    currentPrice: 332.80,
    dayChange: 6.40,
    dayChangePct: 1.96,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Double Bottom (W-Pattern) Reversal',
    patternCategory: 'reversal',
    signal: 'BUY',
    signalStrength: 'High',
    confidenceScore: 88,
    entryPrice: 331.00,
    entryZone: '₹328 - ₹333',
    stopLossPrice: 319.00,
    target1Price: 355.00,
    target2Price: 372.00,
    riskRewardRatio: '1 : 2.83',
    holdingHorizon: '4 - 7 Trading Days',
    technicalRationale: 'Twin swing lows formed at ₹320 with RSI bullish divergence (first low RSI 32, second low RSI 44). Price has cleared the neckline resistance at ₹330 with a solid green 1H candle.',
    confluenceFactors: [
      'Neckline at ₹330 flipped from resistance to swing support',
      'Clear RSI positive divergence on 1H timeframe',
      '20 EMA turning upward and price sustaining comfortably above it',
      'Measured target of W-formation equals ₹355 (₹330 + ₹25 height)'
    ],
    rsi14: 58.6,
    volumeRatio: '1.7x 1H Avg',
    emaStatus: 'Turning Bullish',
    supportLevel: 319.00,
    resistanceLevel: 355.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 332, high: 334, low: 326, close: 327, volume: 2400000 },
      { date: 'Day 1 11:15', open: 327, high: 328, low: 320, close: 321, volume: 3800000 },
      { date: 'Day 1 13:15', open: 321, high: 326, low: 320, close: 325, volume: 2900000 },
      { date: 'Day 1 15:15', open: 325, high: 330, low: 324, close: 329, volume: 3100000 },
      { date: 'Day 2 09:15', open: 329, high: 331, low: 325, close: 326, volume: 2100000 },
      { date: 'Day 2 11:15', open: 326, high: 327, low: 321, close: 322, volume: 2600000 },
      { date: 'Day 2 13:15', open: 322, high: 326, low: 320.5, close: 325, volume: 2800000 },
      { date: 'Day 2 15:15', open: 325, high: 329, low: 324, close: 328.5, volume: 3400000 },
      { date: 'Day 3 09:15', open: 328.5, high: 333, low: 327, close: 331, volume: 4600000 },
      { date: 'Day 3 11:15', open: 331, high: 334.5, low: 329.5, close: 333, volume: 4200000 },
      { date: 'Day 3 13:15', open: 333, high: 334, low: 330.5, close: 331.5, volume: 2500000 },
      { date: 'Day 3 15:15', open: 331.5, high: 334, low: 331, close: 332.8, volume: 3100000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 3, y1: 330, x2Index: 9, y2: 330, color: '#f59e0b', label: '1H W Neckline (₹330)', dashed: true }
      ],
      zones: [
        { startIdx: 1, endIdx: 6, top: 322, bottom: 319, color: 'rgba(16, 185, 129, 0.18)', label: 'Double Bottom Support Zone' }
      ],
      markers: [
        { idx: 8, price: 331, type: 'entry', text: 'Neckline Break Entry' },
        { idx: 6, price: 319, type: 'stop', text: 'SL: ₹319' },
        { idx: 11, price: 355, type: 'target', text: 'Target 1: ₹355' }
      ]
    }
  },
  {
    id: 'dlf-1h-falling-wedge',
    ticker: 'DLF',
    companyName: 'DLF Limited',
    sector: 'Real Estate & Infra',
    currentPrice: 845.00,
    dayChange: 21.50,
    dayChangePct: 2.61,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Falling Wedge Breakout',
    patternCategory: 'reversal',
    signal: 'BUY',
    signalStrength: 'Very High',
    confidenceScore: 89,
    entryPrice: 840.00,
    entryZone: '₹835 - ₹847',
    stopLossPrice: 815.00,
    target1Price: 900.00,
    target2Price: 940.00,
    riskRewardRatio: '1 : 3.00',
    holdingHorizon: '5 - 8 Trading Days',
    technicalRationale: 'A 4-day corrective falling wedge pattern converging into support around ₹815. Clean upside breakout on 1H candle with volume confirmation and consecutive green closes.',
    confluenceFactors: [
      'Descending trendline cleanly broken with 2.0x volume expansion',
      'Nifty Realty sector leading weekly momentum on NSE',
      'Bullish rejection wicks at ₹815 demand block',
      'Target aligns with the top of the wedge formation'
    ],
    rsi14: 62.3,
    volumeRatio: '2.0x 1H Avg',
    emaStatus: 'Bullish Crossover',
    supportLevel: 815.00,
    resistanceLevel: 900.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 870, high: 875, low: 855, close: 858, volume: 520000 },
      { date: 'Day 1 11:15', open: 858, high: 862, low: 845, close: 847, volume: 410000 },
      { date: 'Day 1 13:15', open: 847, high: 852, low: 838, close: 840, volume: 380000 },
      { date: 'Day 1 15:15', open: 840, high: 844, low: 832, close: 834, volume: 420000 },
      { date: 'Day 2 09:15', open: 834, high: 842, low: 828, close: 835, volume: 460000 },
      { date: 'Day 2 11:15', open: 835, high: 838, low: 820, close: 824, volume: 490000 },
      { date: 'Day 2 13:15', open: 824, high: 828, low: 815, close: 819, volume: 580000 },
      { date: 'Day 2 15:15', open: 819, high: 827, low: 816, close: 825, volume: 510000 },
      { date: 'Day 3 09:15', open: 825, high: 841, low: 824, close: 838, volume: 890000 },
      { date: 'Day 3 11:15', open: 838, high: 848, low: 835, close: 844, volume: 950000 },
      { date: 'Day 3 13:15', open: 844, high: 847, low: 839, close: 841, volume: 610000 },
      { date: 'Day 3 15:15', open: 841, high: 848, low: 842, close: 845, volume: 780000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 0, y1: 875, x2Index: 6, y2: 828, color: '#f59e0b', label: 'Wedge Upper Resistance', dashed: false },
        { x1Index: 1, y1: 845, x2Index: 6, y2: 815, color: '#10b981', label: 'Wedge Lower Support', dashed: false }
      ],
      zones: [
        { startIdx: 5, endIdx: 7, top: 825, bottom: 815, color: 'rgba(16, 185, 129, 0.15)', label: 'Demand Zone' }
      ],
      markers: [
        { idx: 8, price: 838, type: 'entry', text: 'Wedge Breakout' },
        { idx: 6, price: 815, type: 'stop', text: 'SL: ₹815' },
        { idx: 11, price: 900, type: 'target', text: 'Target 1: ₹900' }
      ]
    }
  },
  {
    id: 'cholafin-1h-high-tight-flag',
    ticker: 'CHOLAFIN',
    companyName: 'Cholamandalam Investment & Finance',
    sector: 'NBFC & Auto Finance',
    currentPrice: 1480.00,
    dayChange: 38.00,
    dayChangePct: 2.64,
    timeframe: '1 Hour (1H)',
    patternDetected: 'High Tight Flag Breakout',
    patternCategory: 'breakout',
    signal: 'BUY',
    signalStrength: 'Very High',
    confidenceScore: 93,
    entryPrice: 1475.00,
    entryZone: '₹1,465 - ₹1,485',
    stopLossPrice: 1420.00,
    target1Price: 1580.00,
    target2Price: 1650.00,
    riskRewardRatio: '1 : 2.90',
    holdingHorizon: '4 - 7 Trading Days',
    technicalRationale: 'Power move from ₹1,360 to ₹1,470 followed by tight 3-day horizontal base above ₹1,440. Price has broken out to fresh 52-week swing highs on the 1-hour chart with surging buy volume.',
    confluenceFactors: [
      'Tight consolidation under 3% depth shows absolute lack of selling pressure',
      'Volume on breakout 2.4x the 1H session baseline',
      'Institutional accumulation signature on auto finance tailwind',
      'Target 1 represents measured flagpole extension'
    ],
    rsi14: 68.2,
    volumeRatio: '2.4x 1H Avg',
    emaStatus: 'Strong Trend (20 EMA > 50 EMA)',
    supportLevel: 1420.00,
    resistanceLevel: 1580.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 1370, high: 1410, low: 1365, close: 1405, volume: 180000 },
      { date: 'Day 1 11:15', open: 1405, high: 1440, low: 1395, close: 1435, volume: 220000 },
      { date: 'Day 1 13:15', open: 1435, high: 1465, low: 1430, close: 1460, volume: 290000 },
      { date: 'Day 1 15:15', open: 1460, high: 1472, low: 1450, close: 1465, volume: 210000 },
      { date: 'Day 2 09:15', open: 1465, high: 1470, low: 1445, close: 1455, volume: 140000 },
      { date: 'Day 2 11:15', open: 1455, high: 1465, low: 1445, close: 1458, volume: 110000 },
      { date: 'Day 2 13:15', open: 1458, high: 1466, low: 1450, close: 1462, volume: 95000 },
      { date: 'Day 2 15:15', open: 1462, high: 1468, low: 1455, close: 1465, volume: 125000 },
      { date: 'Day 3 09:15', open: 1465, high: 1485, low: 1460, close: 1478, volume: 340000 },
      { date: 'Day 3 11:15', open: 1478, high: 1492, low: 1472, close: 1485, volume: 390000 },
      { date: 'Day 3 13:15', open: 1485, high: 1488, low: 1475, close: 1478, volume: 210000 },
      { date: 'Day 3 15:15', open: 1478, high: 1486, low: 1476, close: 1480, volume: 260000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 3, y1: 1472, x2Index: 7, y2: 1468, color: '#f59e0b', label: '1H Base Cap (₹1,470)', dashed: true }
      ],
      zones: [
        { startIdx: 3, endIdx: 7, top: 1472, bottom: 1445, color: 'rgba(59, 130, 246, 0.12)', label: 'Tight Flag Base' }
      ],
      markers: [
        { idx: 8, price: 1475, type: 'entry', text: 'Base Breakout' },
        { idx: 4, price: 1420, type: 'stop', text: 'SL: ₹1,420' },
        { idx: 11, price: 1580, type: 'target', text: 'Target 1: ₹1,580' }
      ]
    }
  },
  {
    id: 'vbl-1h-inverse-hs',
    ticker: 'VBL',
    companyName: 'Varun Beverages Limited',
    sector: 'FMCG & Beverages',
    currentPrice: 592.50,
    dayChange: 14.80,
    dayChangePct: 2.56,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Inverse Head & Shoulders',
    patternCategory: 'reversal',
    signal: 'BUY',
    signalStrength: 'Very High',
    confidenceScore: 91,
    entryPrice: 590.00,
    entryZone: '₹586 - ₹593',
    stopLossPrice: 568.00,
    target1Price: 635.00,
    target2Price: 660.00,
    riskRewardRatio: '1 : 3.05',
    holdingHorizon: '5 - 9 Trading Days',
    technicalRationale: 'Beautiful Inverse Head and Shoulders with Left Shoulder at ₹575, Head at ₹558, and Right Shoulder at ₹578. The 1H candle cleanly broke through the horizontal neckline at ₹588 with heavy volume.',
    confluenceFactors: [
      'Neckline broken with 2.3x average volume',
      'Right shoulder formed higher than left shoulder indicating eager buyers',
      '1H RSI broke above 60 key bullish threshold',
      'FMCG defensive sector rotation providing strong institutional flow'
    ],
    rsi14: 64.5,
    volumeRatio: '2.3x 1H Avg',
    emaStatus: 'Bullish (20 EMA > 50 EMA)',
    supportLevel: 568.00,
    resistanceLevel: 635.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 585, high: 588, low: 574, close: 575, volume: 850000 },
      { date: 'Day 1 11:15', open: 575, high: 586, low: 574, close: 585, volume: 920000 },
      { date: 'Day 1 13:15', open: 585, high: 587, low: 565, close: 566, volume: 1100000 },
      { date: 'Day 1 15:15', open: 566, high: 568, low: 558, close: 560, volume: 1450000 },
      { date: 'Day 2 09:15', open: 560, high: 578, low: 559, close: 576, volume: 1200000 },
      { date: 'Day 2 11:15', open: 576, high: 587, low: 574, close: 585, volume: 1350000 },
      { date: 'Day 2 13:15', open: 585, high: 586, low: 577, close: 579, volume: 820000 },
      { date: 'Day 2 15:15', open: 579, high: 584, low: 578, close: 582, volume: 760000 },
      { date: 'Day 3 09:15', open: 582, high: 593, low: 581, close: 590, volume: 2200000 },
      { date: 'Day 3 11:15', open: 590, high: 596, low: 588, close: 594, volume: 1980000 },
      { date: 'Day 3 13:15', open: 594, high: 595, low: 590, close: 591, volume: 1150000 },
      { date: 'Day 3 15:15', open: 591, high: 594, low: 590, close: 592.5, volume: 1350000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 1, y1: 587, x2Index: 5, y2: 587, color: '#f59e0b', label: '1H Neckline (₹587)', dashed: true }
      ],
      zones: [
        { startIdx: 3, endIdx: 4, top: 562, bottom: 558, color: 'rgba(16, 185, 129, 0.15)', label: 'Head Level' }
      ],
      markers: [
        { idx: 8, price: 590, type: 'entry', text: 'Neckline Break Entry' },
        { idx: 7, price: 568, type: 'stop', text: 'SL: ₹568' },
        { idx: 11, price: 635, type: 'target', text: 'Target 1: ₹635' }
      ]
    }
  },
  {
    id: 'tatapower-1h-channel-bounce',
    ticker: 'TATAPOWER',
    companyName: 'Tata Power Company Limited',
    sector: 'Power & Renewable Energy',
    currentPrice: 428.60,
    dayChange: 8.90,
    dayChangePct: 2.12,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Bullish Ascending Channel Bounce',
    patternCategory: 'continuation',
    signal: 'BUY',
    signalStrength: 'High',
    confidenceScore: 87,
    entryPrice: 426.00,
    entryZone: '₹424 - ₹429',
    stopLossPrice: 412.00,
    target1Price: 455.00,
    target2Price: 472.00,
    riskRewardRatio: '1 : 2.78',
    holdingHorizon: '4 - 7 Trading Days',
    technicalRationale: 'Stock has respected a multi-week upward channel on the 1H timeframe. A hammer reversal candle formed right at the channel lower trendline and 50 EMA, followed by a strong green engulfing confirmation candle.',
    confluenceFactors: [
      'Confluence of ascending channel support line and 1H 50 EMA at ₹418',
      'Hammer reversal with long lower shadow showing rapid buyer absorption',
      'Power sector showing strong quarterly capex growth momentum',
      'Favorable risk-reward with tight invalidation below ₹412'
    ],
    rsi14: 57.8,
    volumeRatio: '1.8x 1H Avg',
    emaStatus: 'Bounced on 50 EMA',
    supportLevel: 412.00,
    resistanceLevel: 455.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 412, high: 418, low: 410, close: 416, volume: 950000 },
      { date: 'Day 1 11:15', open: 416, high: 424, low: 415, close: 422, volume: 1100000 },
      { date: 'Day 1 13:15', open: 422, high: 430, low: 421, close: 428, volume: 1450000 },
      { date: 'Day 1 15:15', open: 428, high: 432, low: 426, close: 430, volume: 920000 },
      { date: 'Day 2 09:15', open: 430, high: 431, low: 423, close: 424, volume: 680000 },
      { date: 'Day 2 11:15', open: 424, high: 426, low: 419, close: 420, volume: 540000 },
      { date: 'Day 2 13:15', open: 420, high: 422, low: 416, close: 418, volume: 610000 },
      { date: 'Day 2 15:15', open: 418, high: 422, low: 416, close: 421, volume: 890000 },
      { date: 'Day 3 09:15', open: 421, high: 428, low: 420, close: 426, volume: 1650000 },
      { date: 'Day 3 11:15', open: 426, high: 431, low: 425, close: 429, volume: 1820000 },
      { date: 'Day 3 13:15', open: 429, high: 430, low: 426, close: 427.5, volume: 910000 },
      { date: 'Day 3 15:15', open: 427.5, high: 430, low: 427, close: 428.6, volume: 1120000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 0, y1: 410, x2Index: 6, y2: 416, color: '#10b981', label: '1H Channel Floor', dashed: false },
        { x1Index: 3, y1: 432, x2Index: 11, y2: 438, color: '#3b82f6', label: '1H Channel Ceiling', dashed: false }
      ],
      zones: [
        { startIdx: 6, endIdx: 7, top: 420, bottom: 416, color: 'rgba(16, 185, 129, 0.15)', label: 'Channel Support Rebound' }
      ],
      markers: [
        { idx: 8, price: 426, type: 'entry', text: 'Channel Bounce Entry' },
        { idx: 6, price: 412, type: 'stop', text: 'SL: ₹412' },
        { idx: 11, price: 455, type: 'target', text: 'Target 1: ₹455' }
      ]
    }
  },
  {
    id: 'recltd-1h-ascending-channel',
    ticker: 'RECLTD',
    companyName: 'REC Limited',
    sector: 'PSU & Power Finance',
    currentPrice: 515.20,
    dayChange: 11.40,
    dayChangePct: 2.26,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Order Block Retest & Bounce',
    patternCategory: 'continuation',
    signal: 'BUY',
    signalStrength: 'Very High',
    confidenceScore: 90,
    entryPrice: 512.00,
    entryZone: '₹508 - ₹516',
    stopLossPrice: 494.00,
    target1Price: 550.00,
    target2Price: 575.00,
    riskRewardRatio: '1 : 2.94',
    holdingHorizon: '4 - 8 Trading Days',
    technicalRationale: 'Institutional Smart Money order block at ₹500 tested on low volume. Institutional buyers stepped in with an engulfing 1H candle. High dividend yield stock attracting strong momentum funds.',
    confluenceFactors: [
      'Tested 1H bullish institutional order block between ₹498 - ₹505',
      'Higher low structure preserved intact across all 1H candles',
      'MACD crossed positive above zero center line',
      'Favorable 1:2.9 risk-reward ratio'
    ],
    rsi14: 60.5,
    volumeRatio: '1.9x 1H Avg',
    emaStatus: 'Bullish (20 EMA > 50 EMA)',
    supportLevel: 494.00,
    resistanceLevel: 550.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 495, high: 504, low: 492, close: 501, volume: 1100000 },
      { date: 'Day 1 11:15', open: 501, high: 512, low: 500, close: 509, volume: 1450000 },
      { date: 'Day 1 13:15', open: 509, high: 518, low: 508, close: 516, volume: 1680000 },
      { date: 'Day 1 15:15', open: 516, high: 520, low: 514, close: 518, volume: 1200000 },
      { date: 'Day 2 09:15', open: 518, high: 519, low: 509, close: 511, volume: 850000 },
      { date: 'Day 2 11:15', open: 511, high: 513, low: 504, close: 506, volume: 680000 },
      { date: 'Day 2 13:15', open: 506, high: 509, low: 501, close: 504, volume: 590000 },
      { date: 'Day 2 15:15', open: 504, high: 508, low: 502, close: 507, volume: 740000 },
      { date: 'Day 3 09:15', open: 507, high: 516, low: 506, close: 513, volume: 1620000 },
      { date: 'Day 3 11:15', open: 513, high: 518, low: 511, close: 517, volume: 1400000 },
      { date: 'Day 3 13:15', open: 517, high: 519, low: 513, close: 514, volume: 820000 },
      { date: 'Day 3 15:15', open: 514, high: 517, low: 513, close: 515.2, volume: 960000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 0, y1: 492, x2Index: 6, y2: 501, color: '#10b981', label: '1H Ascending Higher Lows', dashed: false }
      ],
      zones: [
        { startIdx: 5, endIdx: 7, top: 508, bottom: 501, color: 'rgba(16, 185, 129, 0.15)', label: 'Order Block Demand' }
      ],
      markers: [
        { idx: 8, price: 512, type: 'entry', text: 'OB Retest Buy' },
        { idx: 6, price: 494, type: 'stop', text: 'SL: ₹494' },
        { idx: 11, price: 550, type: 'target', text: 'Target 1: ₹550' }
      ]
    }
  },
  {
    id: 'siemens-1h-head-and-shoulders',
    ticker: 'SIEMENS',
    companyName: 'Siemens India Limited',
    sector: 'Capital Goods & Industrial',
    currentPrice: 7150.00,
    dayChange: -160.00,
    dayChangePct: -2.19,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Head & Shoulders Breakdown',
    patternCategory: 'reversal',
    signal: 'SELL',
    signalStrength: 'Very High',
    confidenceScore: 92,
    entryPrice: 7180.00,
    entryZone: '₹7,160 - ₹7,220',
    stopLossPrice: 7350.00,
    target1Price: 6850.00,
    target2Price: 6620.00,
    riskRewardRatio: '1 : 2.88',
    holdingHorizon: '3 - 7 Trading Days',
    technicalRationale: 'Prominent Head and Shoulders topping formation on the 1H timeframe. Left Shoulder at ₹7,320, Head at ₹7,490, Right Shoulder at ₹7,300. The horizontal neckline at ₹7,200 has been violated with an aggressive high-volume breakdown bar.',
    confluenceFactors: [
      '1H Neckline breached with 2.5x volume expansion',
      '20 EMA crossed below 50 EMA (Death Cross) on 1H chart',
      'RSI plunged into bearish control zone at 38 with downward momentum',
      'Capital goods sector witnessing institutional profit-taking'
    ],
    rsi14: 38.2,
    volumeRatio: '2.5x 1H Avg',
    emaStatus: 'Bearish Cross (20 EMA < 50 EMA)',
    supportLevel: 6850.00,
    resistanceLevel: 7350.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 7220, high: 7330, low: 7210, close: 7310, volume: 38000 },
      { date: 'Day 1 11:15', open: 7310, high: 7340, low: 7220, close: 7230, volume: 32000 },
      { date: 'Day 1 13:15', open: 7230, high: 7420, low: 7225, close: 7400, volume: 49000 },
      { date: 'Day 1 15:15', open: 7400, high: 7490, low: 7380, close: 7470, volume: 62000 },
      { date: 'Day 2 09:15', open: 7470, high: 7480, low: 7310, close: 7320, volume: 48000 },
      { date: 'Day 2 11:15', open: 7320, high: 7340, low: 7205, close: 7215, volume: 41000 },
      { date: 'Day 2 13:15', open: 7215, high: 7305, low: 7210, close: 7295, volume: 36000 },
      { date: 'Day 2 15:15', open: 7295, high: 7310, low: 7240, close: 7250, volume: 39000 },
      { date: 'Day 3 09:15', open: 7250, high: 7260, low: 7170, close: 7180, volume: 84000 },
      { date: 'Day 3 11:15', open: 7180, high: 7200, low: 7120, close: 7130, volume: 92000 },
      { date: 'Day 3 13:15', open: 7130, high: 7170, low: 7125, close: 7140, volume: 54000 },
      { date: 'Day 3 15:15', open: 7140, high: 7165, low: 7135, close: 7150, volume: 68000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 1, y1: 7215, x2Index: 5, y2: 7215, color: '#ef4444', label: '1H H&S Neckline (₹7,215)', dashed: false }
      ],
      zones: [
        { startIdx: 3, endIdx: 4, top: 7490, bottom: 7450, color: 'rgba(239, 68, 68, 0.15)', label: 'Head Exhaustion' }
      ],
      markers: [
        { idx: 8, price: 7180, type: 'entry', text: 'Neckline Breakdown Short' },
        { idx: 7, price: 7350, type: 'stop', text: 'SL: ₹7,350' },
        { idx: 11, price: 6850, type: 'target', text: 'Target 1: ₹6,850' }
      ]
    }
  },
  {
    id: 'abb-1h-double-top',
    ticker: 'ABB',
    companyName: 'ABB India Limited',
    sector: 'Engineering & Automation',
    currentPrice: 7680.00,
    dayChange: -185.00,
    dayChangePct: -2.35,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Double Top (M-Pattern) Breakdown',
    patternCategory: 'reversal',
    signal: 'SELL',
    signalStrength: 'Very High',
    confidenceScore: 90,
    entryPrice: 7720.00,
    entryZone: '₹7,690 - ₹7,750',
    stopLossPrice: 7920.00,
    target1Price: 7350.00,
    target2Price: 7100.00,
    riskRewardRatio: '1 : 2.85',
    holdingHorizon: '3 - 6 Trading Days',
    technicalRationale: 'Twin resistance peaks rejected twice at ₹7,950 with prominent bearish shooting star wicks. The trough neckline at ₹7,750 has given way on heavy institutional sell volume.',
    confluenceFactors: [
      'Twin peaks failed to make fresh highs, creating lower high on RSI',
      'Heavy volume on the breakdown bar exceeding 2.2x 1H baseline',
      'Price lost 20 and 50 EMA in rapid succession',
      'Measured move target coincides with previous swing low support'
    ],
    rsi14: 36.5,
    volumeRatio: '2.2x 1H Avg',
    emaStatus: 'Bearish (Below 20 & 50 EMA)',
    supportLevel: 7350.00,
    resistanceLevel: 7920.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 7680, high: 7850, low: 7650, close: 7820, volume: 42000 },
      { date: 'Day 1 11:15', open: 7820, high: 7960, low: 7810, close: 7940, volume: 68000 },
      { date: 'Day 1 13:15', open: 7940, high: 7950, low: 7820, close: 7830, volume: 51000 },
      { date: 'Day 1 15:15', open: 7830, high: 7840, low: 7740, close: 7750, volume: 49000 },
      { date: 'Day 2 09:15', open: 7750, high: 7880, low: 7745, close: 7860, volume: 44000 },
      { date: 'Day 2 11:15', open: 7860, high: 7950, low: 7850, close: 7930, volume: 52000 },
      { date: 'Day 2 13:15', open: 7930, high: 7940, low: 7820, close: 7830, volume: 48000 },
      { date: 'Day 2 15:15', open: 7830, high: 7840, low: 7760, close: 7770, volume: 55000 },
      { date: 'Day 3 09:15', open: 7770, high: 7780, low: 7690, close: 7710, volume: 89000 },
      { date: 'Day 3 11:15', open: 7710, high: 7740, low: 7650, close: 7660, volume: 98000 },
      { date: 'Day 3 13:15', open: 7660, high: 7700, low: 7650, close: 7675, volume: 58000 },
      { date: 'Day 3 15:15', open: 7675, high: 7695, low: 7660, close: 7680, volume: 64000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 1, y1: 7950, x2Index: 5, y2: 7950, color: '#ef4444', label: '1H Double Top Rejection (₹7,950)', dashed: true },
        { x1Index: 3, y1: 7750, x2Index: 7, y2: 7750, color: '#f59e0b', label: 'M Neckline (₹7,750)', dashed: false }
      ],
      zones: [
        { startIdx: 1, endIdx: 6, top: 7960, bottom: 7930, color: 'rgba(239, 68, 68, 0.15)', label: 'Supply Rejection' }
      ],
      markers: [
        { idx: 8, price: 7720, type: 'entry', text: 'Neckline Breakdown Short' },
        { idx: 6, price: 7920, type: 'stop', text: 'SL: ₹7,920' },
        { idx: 11, price: 7350, type: 'target', text: 'Target 1: ₹7,350' }
      ]
    }
  },
  {
    id: 'canbk-1h-descending-triangle',
    ticker: 'CANBK',
    companyName: 'Canara Bank',
    sector: 'PSU Banking',
    currentPrice: 104.50,
    dayChange: -2.35,
    dayChangePct: -2.20,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Descending Triangle Breakdown',
    patternCategory: 'reversal',
    signal: 'SELL',
    signalStrength: 'High',
    confidenceScore: 88,
    entryPrice: 104.80,
    entryZone: '₹104.00 - ₹105.50',
    stopLossPrice: 109.00,
    target1Price: 97.00,
    target2Price: 92.50,
    riskRewardRatio: '1 : 2.80',
    holdingHorizon: '3 - 7 Trading Days',
    technicalRationale: 'Repeated testing of the horizontal support floor at ₹106.00 with lower highs formed at ₹112, ₹109, and ₹107. The breakdown candle confirmed with an expanding red 1H bar.',
    confluenceFactors: [
      'Horizontal support tested 4 times, weakening bid liquidity',
      'Lower highs along the downward trendline indicate persistent seller aggression',
      'RSI sliding below 40 with no reversal divergence',
      'Favorable risk to reward on short swing position'
    ],
    rsi14: 37.1,
    volumeRatio: '2.1x 1H Avg',
    emaStatus: 'Bearish Momentum',
    supportLevel: 97.00,
    resistanceLevel: 109.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 110, high: 112, low: 108, close: 108.5, volume: 3200000 },
      { date: 'Day 1 11:15', open: 108.5, high: 109, low: 106, close: 106.2, volume: 4100000 },
      { date: 'Day 1 13:15', open: 106.2, high: 108.5, low: 106, close: 108, volume: 3100000 },
      { date: 'Day 1 15:15', open: 108, high: 109, low: 107, close: 108.5, volume: 2900000 },
      { date: 'Day 2 09:15', open: 108.5, high: 109.5, low: 106.5, close: 107, volume: 3400000 },
      { date: 'Day 2 11:15', open: 107, high: 107.5, low: 106, close: 106.2, volume: 3800000 },
      { date: 'Day 2 13:15', open: 106.2, high: 107.5, low: 106, close: 107.2, volume: 2600000 },
      { date: 'Day 2 15:15', open: 107.2, high: 107.4, low: 106.2, close: 106.5, volume: 2800000 },
      { date: 'Day 3 09:15', open: 106.5, high: 106.8, low: 104.8, close: 105, volume: 6200000 },
      { date: 'Day 3 11:15', open: 105, high: 105.4, low: 104, close: 104.2, volume: 5400000 },
      { date: 'Day 3 13:15', open: 104.2, high: 104.8, low: 104, close: 104.4, volume: 3200000 },
      { date: 'Day 3 15:15', open: 104.4, high: 104.8, low: 104.2, close: 104.5, volume: 3900000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 0, y1: 112, x2Index: 4, y2: 109.5, color: '#ef4444', label: 'Lower Highs Trendline', dashed: false },
        { x1Index: 1, y1: 106, x2Index: 7, y2: 106, color: '#f59e0b', label: '1H Floor (₹106)', dashed: true }
      ],
      zones: [
        { startIdx: 1, endIdx: 7, top: 106.5, bottom: 105.8, color: 'rgba(239, 68, 68, 0.15)', label: 'Floor Breakdown' }
      ],
      markers: [
        { idx: 8, price: 104.8, type: 'entry', text: 'Breakdown Short' },
        { idx: 4, price: 109, type: 'stop', text: 'SL: ₹109' },
        { idx: 11, price: 97, type: 'target', text: 'Target 1: ₹97' }
      ]
    }
  },
  {
    id: 'polycab-1h-rising-wedge',
    ticker: 'POLYCAB',
    companyName: 'Polycab India Limited',
    sector: 'Cables & Electricals',
    currentPrice: 6420.00,
    dayChange: -145.00,
    dayChangePct: -2.21,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Rising Wedge Breakdown',
    patternCategory: 'reversal',
    signal: 'SELL',
    signalStrength: 'Very High',
    confidenceScore: 89,
    entryPrice: 6440.00,
    entryZone: '₹6,420 - ₹6,480',
    stopLossPrice: 6620.00,
    target1Price: 6080.00,
    target2Price: 5850.00,
    riskRewardRatio: '1 : 2.89',
    holdingHorizon: '4 - 7 Trading Days',
    technicalRationale: 'A classic bearish rising wedge pattern after an extended rally. Ascending support trendline broken on the 1H timeframe with a decisive bearish candle closing below 50 EMA.',
    confluenceFactors: [
      'Wedge lower boundary broken cleanly on 1.8x volume',
      'Severe negative volume divergence during the wedge development',
      '1H RSI crossed down below 45 support',
      'Target 1 coincides with start of the wedge base'
    ],
    rsi14: 41.5,
    volumeRatio: '1.8x 1H Avg',
    emaStatus: 'Bearish Breakdown (Below 50 EMA)',
    supportLevel: 6080.00,
    resistanceLevel: 6620.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 6280, high: 6360, low: 6270, close: 6340, volume: 42000 },
      { date: 'Day 1 11:15', open: 6340, high: 6410, low: 6330, close: 6390, volume: 38000 },
      { date: 'Day 1 13:15', open: 6390, high: 6480, low: 6380, close: 6450, volume: 44000 },
      { date: 'Day 1 15:15', open: 6450, high: 6510, low: 6440, close: 6490, volume: 35000 },
      { date: 'Day 2 09:15', open: 6490, high: 6560, low: 6480, close: 6540, volume: 39000 },
      { date: 'Day 2 11:15', open: 6540, high: 6600, low: 6520, close: 6580, volume: 34000 },
      { date: 'Day 2 13:15', open: 6580, high: 6610, low: 6540, close: 6560, volume: 31000 },
      { date: 'Day 2 15:15', open: 6560, high: 6590, low: 6530, close: 6550, volume: 28000 },
      { date: 'Day 3 09:15', open: 6550, high: 6560, low: 6450, close: 6460, volume: 72000 },
      { date: 'Day 3 11:15', open: 6460, high: 6480, low: 6390, close: 6410, volume: 81000 },
      { date: 'Day 3 13:15', open: 6410, high: 6440, low: 6390, close: 6405, volume: 46000 },
      { date: 'Day 3 15:15', open: 6405, high: 6435, low: 6400, close: 6420, volume: 55000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 0, y1: 6270, x2Index: 7, y2: 6530, color: '#ef4444', label: 'Wedge Lower Support Line', dashed: false },
        { x1Index: 1, y1: 6410, x2Index: 6, y2: 6610, color: '#f59e0b', label: 'Wedge Upper Resistance', dashed: false }
      ],
      zones: [
        { startIdx: 5, endIdx: 7, top: 6610, bottom: 6530, color: 'rgba(239, 68, 68, 0.15)', label: 'Wedge Exhaustion Apex' }
      ],
      markers: [
        { idx: 8, price: 6460, type: 'entry', text: 'Wedge Breakdown Short' },
        { idx: 6, price: 6620, type: 'stop', text: 'SL: ₹6,620' },
        { idx: 11, price: 6080, type: 'target', text: 'Target 1: ₹6,080' }
      ]
    }
  },
  {
    id: 'ambujacem-1h-range-consolidation',
    ticker: 'AMBUJACEM',
    companyName: 'Ambuja Cements Limited',
    sector: 'Cement & Materials',
    currentPrice: 565.00,
    dayChange: 1.20,
    dayChangePct: 0.21,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Range Box Consolidation',
    patternCategory: 'consolidation',
    signal: 'HOLD',
    signalStrength: 'Moderate',
    confidenceScore: 78,
    entryPrice: 572.00,
    entryZone: 'Wait for 1H Close > ₹572',
    stopLossPrice: 552.00,
    target1Price: 605.00,
    target2Price: 625.00,
    riskRewardRatio: '1 : 2.65',
    holdingHorizon: 'Awaiting Breakout Trigger',
    technicalRationale: 'The stock has been oscillating inside a strictly defined 1H rectangle range between ₹555 and ₹570 for 5 consecutive sessions. Do NOT front-run. Wait for an hourly candle close above ₹572 with volume.',
    confluenceFactors: [
      'Stuck between 20 EMA and 50 EMA, indicating neutral equilibrium',
      'Volume is dry and low, awaiting fresh institutional catalyst',
      'RSI oscillating in dead center around 50.4',
      'Hold existing swing positions with trailing SL at ₹552 or wait for confirmed breakout'
    ],
    rsi14: 50.4,
    volumeRatio: '0.8x 1H Avg',
    emaStatus: 'Neutral (Tangled EMAs)',
    supportLevel: 552.00,
    resistanceLevel: 572.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 560, high: 568, low: 558, close: 566, volume: 480000 },
      { date: 'Day 1 11:15', open: 566, high: 569, low: 563, close: 567, volume: 390000 },
      { date: 'Day 1 13:15', open: 567, high: 570, low: 564, close: 565, volume: 340000 },
      { date: 'Day 1 15:15', open: 565, high: 568, low: 561, close: 562, volume: 360000 },
      { date: 'Day 2 09:15', open: 562, high: 567, low: 556, close: 558, volume: 410000 },
      { date: 'Day 2 11:15', open: 558, high: 563, low: 555, close: 561, volume: 350000 },
      { date: 'Day 2 13:15', open: 561, high: 567, low: 560, close: 566, volume: 320000 },
      { date: 'Day 2 15:15', open: 566, high: 569, low: 563, close: 568, volume: 390000 },
      { date: 'Day 3 09:15', open: 568, high: 571, low: 564, close: 565, volume: 420000 },
      { date: 'Day 3 11:15', open: 565, high: 567, low: 561, close: 563, volume: 330000 },
      { date: 'Day 3 13:15', open: 563, high: 566, low: 562, close: 564, volume: 290000 },
      { date: 'Day 3 15:15', open: 564, high: 566, low: 563, close: 565, volume: 310000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 0, y1: 570, x2Index: 11, y2: 570, color: '#f59e0b', label: 'Range Resistance (₹570)', dashed: true },
        { x1Index: 0, y1: 555, x2Index: 11, y2: 555, color: '#3b82f6', label: 'Range Floor (₹555)', dashed: true }
      ],
      zones: [
        { startIdx: 0, endIdx: 11, top: 570, bottom: 555, color: 'rgba(148, 163, 184, 0.12)', label: 'Equilibrium Box' }
      ],
      markers: [
        { idx: 8, price: 572, type: 'signal', text: 'Watch for Breakout > ₹572' },
        { idx: 4, price: 552, type: 'stop', text: 'Range SL: ₹552' }
      ]
    }
  },
  {
    id: 'tvsmotor-1h-50ema-pullback',
    ticker: 'TVSMOTOR',
    companyName: 'TVS Motor Company Limited',
    sector: 'Automobiles & 2-Wheelers',
    currentPrice: 2410.00,
    dayChange: 15.00,
    dayChangePct: 0.63,
    timeframe: '1 Hour (1H)',
    patternDetected: 'Pullback to 50 EMA Support',
    patternCategory: 'continuation',
    signal: 'HOLD',
    signalStrength: 'Moderate',
    confidenceScore: 82,
    entryPrice: 2425.00,
    entryZone: '₹2,400 - ₹2,430',
    stopLossPrice: 2345.00,
    target1Price: 2580.00,
    target2Price: 2680.00,
    riskRewardRatio: '1 : 2.50',
    holdingHorizon: 'Waiting for Reversal Candle',
    technicalRationale: 'Primary uptrend remains very strong, currently testing 50 EMA on 1H chart around ₹2,395. A small spinning top candle has formed, but conservative swing traders should wait for a strong green confirmation close above ₹2,425.',
    confluenceFactors: [
      '50 EMA on 1H has acted as dependable swing bounce level over last month',
      'Auto monthly sales figures expected next week',
      'RSI consolidating at 48.6',
      'Hold current position with protective stop at ₹2,345'
    ],
    rsi14: 48.6,
    volumeRatio: '1.1x 1H Avg',
    emaStatus: 'Testing 50 EMA',
    supportLevel: 2345.00,
    resistanceLevel: 2580.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 2440, high: 2470, low: 2435, close: 2465, volume: 85000 },
      { date: 'Day 1 11:15', open: 2465, high: 2495, low: 2455, close: 2490, volume: 110000 },
      { date: 'Day 1 13:15', open: 2490, high: 2510, low: 2480, close: 2505, volume: 125000 },
      { date: 'Day 1 15:15', open: 2505, high: 2515, low: 2490, close: 2495, volume: 92000 },
      { date: 'Day 2 09:15', open: 2495, high: 2500, low: 2450, close: 2455, volume: 78000 },
      { date: 'Day 2 11:15', open: 2455, high: 2460, low: 2420, close: 2425, volume: 69000 },
      { date: 'Day 2 13:15', open: 2425, high: 2435, low: 2400, close: 2405, volume: 64000 },
      { date: 'Day 2 15:15', open: 2405, high: 2415, low: 2395, close: 2400, volume: 72000 },
      { date: 'Day 3 09:15', open: 2400, high: 2418, low: 2395, close: 2410, volume: 88000 },
      { date: 'Day 3 11:15', open: 2410, high: 2422, low: 2400, close: 2415, volume: 75000 },
      { date: 'Day 3 13:15', open: 2415, high: 2420, low: 2405, close: 2408, volume: 62000 },
      { date: 'Day 3 15:15', open: 2408, high: 2415, low: 2405, close: 2410, volume: 68000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 3, y1: 2515, x2Index: 7, y2: 2415, color: '#94a3b8', label: '1H Retracement Vector', dashed: true }
      ],
      zones: [
        { startIdx: 6, endIdx: 8, top: 2415, bottom: 2395, color: 'rgba(59, 130, 246, 0.15)', label: '50 EMA Support Zone' }
      ],
      markers: [
        { idx: 9, price: 2425, type: 'signal', text: 'Wait for > ₹2,425 trigger' },
        { idx: 7, price: 2345, type: 'stop', text: 'Trailing SL: ₹2,345' }
      ]
    }
  },
  {
    id: 'indhotel-1h-resistance-pause',
    ticker: 'INDHOTEL',
    companyName: 'The Indian Hotels Company (Taj)',
    sector: 'Hospitality & Tourism',
    currentPrice: 712.00,
    dayChange: 4.50,
    dayChangePct: 0.64,
    timeframe: '1 Hour (1H)',
    patternDetected: 'All-Time High Consolidation',
    patternCategory: 'consolidation',
    signal: 'HOLD',
    signalStrength: 'Moderate',
    confidenceScore: 84,
    entryPrice: 722.00,
    entryZone: 'Breakout above ₹722',
    stopLossPrice: 688.00,
    target1Price: 775.00,
    target2Price: 810.00,
    riskRewardRatio: '1 : 2.70',
    holdingHorizon: 'Holding Existing Swing / Awaiting ATH',
    technicalRationale: 'Hovering right below all-time highs at ₹720. Volume has contracted as bulls absorb supply. Maintain existing swing long positions with trailing stop raised to ₹688. New buyers should only enter on a clean 1H breakout above ₹722.',
    confluenceFactors: [
      'Tourism and hospitality sector tailwind on festive/wedding season occupancy',
      'Price holding firmly above rising 20 EMA (₹704)',
      'No signs of major distribution; small volume on red candles',
      'Target 1 projects 8.8% swing extension past all-time high'
    ],
    rsi14: 61.0,
    volumeRatio: '1.2x 1H Avg',
    emaStatus: 'Above 20 & 50 EMA',
    supportLevel: 688.00,
    resistanceLevel: 722.00,
    lastCandleTime: '14:15 IST',
    candles: [
      { date: 'Day 1 09:15', open: 685, high: 698, low: 682, close: 695, volume: 410000 },
      { date: 'Day 1 11:15', open: 695, high: 706, low: 692, close: 704, volume: 490000 },
      { date: 'Day 1 13:15', open: 704, high: 714, low: 702, close: 712, volume: 560000 },
      { date: 'Day 1 15:15', open: 712, high: 719, low: 708, close: 716, volume: 510000 },
      { date: 'Day 2 09:15', open: 716, high: 721, low: 710, close: 714, volume: 380000 },
      { date: 'Day 2 11:15', open: 714, high: 718, low: 708, close: 711, volume: 320000 },
      { date: 'Day 2 13:15', open: 711, high: 716, low: 707, close: 710, volume: 290000 },
      { date: 'Day 2 15:15', open: 710, high: 715, low: 709, close: 713, volume: 340000 },
      { date: 'Day 3 09:15', open: 713, high: 720, low: 711, close: 715, volume: 420000 },
      { date: 'Day 3 11:15', open: 715, high: 719, low: 710, close: 712, volume: 310000 },
      { date: 'Day 3 13:15', open: 712, high: 716, low: 710, close: 711, volume: 280000 },
      { date: 'Day 3 15:15', open: 711, high: 715, low: 710, close: 712, volume: 320000 }
    ],
    annotations: {
      trendlines: [
        { x1Index: 3, y1: 720, x2Index: 11, y2: 720, color: '#f59e0b', label: 'ATH Resistance Cap (₹720)', dashed: true }
      ],
      zones: [
        { startIdx: 3, endIdx: 11, top: 721, bottom: 708, color: 'rgba(245, 158, 11, 0.12)', label: 'Pre-ATH Absorption' }
      ],
      markers: [
        { idx: 8, price: 722, type: 'signal', text: 'Breakout Buy > ₹722' },
        { idx: 6, price: 688, type: 'stop', text: 'Trailing SL: ₹688' }
      ]
    }
  }
];

export const NIFTY_NEXT_100_SUMMARY = {
  indexName: 'Nifty Next 100 & High-Momentum Midcap',
  timeframe: '1-Hour (1H)',
  marketSession: 'NSE (National Stock Exchange of India)',
  candleCloseInterval: '60 Minutes',
  scanCoverage: '100 Active Constituents',
  totalSignals: NIFTY_NEXT_100_SWING_TRADES.length,
  buySignalsCount: NIFTY_NEXT_100_SWING_TRADES.filter(s => s.signal === 'BUY').length,
  sellSignalsCount: NIFTY_NEXT_100_SWING_TRADES.filter(s => s.signal === 'SELL').length,
  holdSignalsCount: NIFTY_NEXT_100_SWING_TRADES.filter(s => s.signal === 'HOLD').length,
  avgRiskReward: '1 : 2.85',
  topSectors: ['Defense & Aerospace', 'Consumer Tech', 'Retail & FMCG', 'PSU & Power', 'NBFC']
};
