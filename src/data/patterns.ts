import { Pattern } from '../types/pattern';

export const PATTERNS_DATA: Pattern[] = [
  {
    id: 'double-bottom',
    name: 'Double Bottom (W-Pattern)',
    category: 'reversal',
    bias: 'bullish',
    difficulty: 'beginner',
    winRateEstimate: '74% - 80%',
    avgRiskReward: '1 : 2.6',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'A classic bullish reversal pattern resembling the letter "W", signaling the exhaustion of an Indian market correction as DII/FII institutional buyers defend a crucial support floor twice.',
    marketPsychology: 'During the first selloff, panic creates the initial trough. When price bounces to establish the neckline, intraday profit-taking occurs. The second dip re-tests the lows, but aggressive domestic institutional buyers step in at the exact same level, preventing a lower low. The failure of bears to push new lows triggers short covering across index futures and heavy call writing unwinding, propelling a breakout past the neckline.',
    identificationRules: [
      'Preceding defined downtrend or sharp index correction.',
      'Two distinct troughs touching or closely matching the same support floor (within 0.5% - 1.0%).',
      'Intermediate peak between the two troughs forms the resistance "neckline".',
      'Volume is heavy on Trough 1, dries up on Trough 2, and expands aggressively on the neckline breakout candle.'
    ],
    tradingRules: {
      entryTrigger: 'Enter long on daily/hourly candle close above the neckline with expanded turnover; or on the pullback/retest of the broken neckline.',
      stopLossPlacement: 'Place stop loss just below Trough 2 swing low or 1 ATR below the neckline.',
      targetCalculation: 'Measure vertical distance in points from lowest trough to neckline, project that exact distance upward from the breakout level.',
      volumeConfirmation: 'Breakout candle volume on NSE should be at least 1.5x - 2.0x higher than 20-period average volume.'
    },
    beginnerChecklist: [
      'Do not buy at Trough 2 before confirmation; wait for the neckline to be closed above.',
      'Check if Nifty 50 or Bank Nifty is also showing relative strength.',
      'Ensure the time gap between the two bottoms is at least 7 to 15 trading sessions.'
    ],
    advancedNuances: [
      'Look for bullish RSI divergence between Trough 1 and Trough 2 (Trough 2 has higher RSI despite equal index price).',
      'If Trough 2 sweeps Trough 1 by a few points intraday and immediately reclaims (Liquidity Sweep / Spring), it offers a world-class risk-to-reward ratio for option buyers and swing traders.'
    ],
    schematicSummary: 'Correction -> Trough 1 -> Neckline Peak -> Trough 2 (Support Holds) -> Volume Breakout Above Neckline -> Measured Target.',
    schematicSteps: [
      { label: 'Downleg', description: 'Sharp market impulse establishes initial panic low (Trough 1).' },
      { label: 'Neckline', description: 'Relief bounce establishes resistance peak.' },
      { label: 'Trough 2', description: 'Re-test of support where DIIs & institutional buyers aggressively accumulate.' },
      { label: 'Breakout', description: 'Decisive candle closes above neckline on expanding volume.' }
    ],
    realStockExample: {
      ticker: 'NIFTY 50',
      companyName: 'Nifty 50 Index (NSE: NIFTY)',
      timeframe: 'Daily (1D)',
      dateRange: 'Jun 04, 2024 - Jul 15, 2024',
      tradeType: 'Long',
      entryPrice: 23340,
      stopLossPrice: 22480,
      target1Price: 24200,
      target2Price: 24850,
      riskReward: '1 : 2.8',
      outcome: 'Target 2 reached (+1,510 pts, 2.8R return on index futures)',
      caseStudyNotes: 'Nifty 50 printed Trough 1 on June 04 Election Day at ₹21,281, followed by a relief bounce to ₹23,340 (Neckline). A re-test held firmly at ₹22,800 (Trough 2 with strong RSI divergence). Once Nifty closed above the ₹23,340 neckline with institutional FII/DII buying, it surged non-stop past ₹24,850.',
      candles: [
        { date: '2024-06-03', open: 23337, high: 23338, low: 23165, close: 23263, volume: 480000000 },
        { date: '2024-06-04', open: 23179, high: 23179, low: 21281, close: 21884, volume: 1150000000 },
        { date: '2024-06-05', open: 22128, high: 22620, low: 21790, close: 22620, volume: 850000000 },
        { date: '2024-06-06', open: 22798, high: 22910, low: 22642, close: 22821, volume: 620000000 },
        { date: '2024-06-07', open: 22930, high: 23320, low: 22789, close: 23290, volume: 540000000 },
        { date: '2024-06-10', open: 23319, high: 23411, low: 23227, close: 23340, volume: 460000000 },
        { date: '2024-06-12', open: 23344, high: 23441, low: 22810, close: 23322, volume: 420000000 },
        { date: '2024-06-14', open: 23460, high: 23490, low: 23380, close: 23465, volume: 410000000 },
        { date: '2024-06-19', open: 23629, high: 23664, low: 23412, close: 23516, volume: 510000000 },
        { date: '2024-06-25', open: 23544, high: 23754, low: 23524, close: 23721, volume: 490000000 },
        { date: '2024-06-27', open: 23881, high: 24087, low: 23805, close: 24044, volume: 620000000 },
        { date: '2024-07-03', open: 24291, high: 24307, low: 24207, close: 24286, volume: 580000000 },
        { date: '2024-07-08', open: 24329, high: 24344, low: 24240, close: 24320, volume: 450000000 },
        { date: '2024-07-12', open: 24396, high: 24592, low: 24331, close: 24502, volume: 520000000 },
        { date: '2024-07-15', open: 24587, high: 24867, low: 24522, close: 24850, volume: 590000000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 5, y1: 23340, x2Index: 8, y2: 23340, color: '#38bdf8', label: 'Neckline Resistance (₹23,340)', dashed: true }
        ],
        zones: [
          { startIdx: 1, endIdx: 6, top: 22800, bottom: 21281, color: '#10b98122', label: 'Double Bottom Support Zone (₹21,281 - ₹22,800)' },
          { startIdx: 9, endIdx: 14, top: 24867, bottom: 24200, color: '#10b98133', label: 'Measured Move Target (₹24,200 - ₹24,850)' }
        ],
        markers: [
          { idx: 1, price: 21281, type: 'pivot', text: 'Trough 1 (₹21,281)' },
          { idx: 5, price: 23340, type: 'pivot', text: 'Neckline (₹23,340)' },
          { idx: 6, price: 22810, type: 'pivot', text: 'Trough 2 (₹22,810)' },
          { idx: 7, price: 23465, type: 'entry', text: 'Breakout Buy (₹23,465)' },
          { idx: 6, price: 22480, type: 'stop', text: 'Stop Loss (₹22,480)' },
          { idx: 14, price: 24850, type: 'target', text: 'Target 2 Met (₹24,850)' }
        ]
      }
    }
  },
  {
    id: 'double-top',
    name: 'Double Top (M-Pattern)',
    category: 'reversal',
    bias: 'bearish',
    difficulty: 'beginner',
    winRateEstimate: '73% - 78%',
    avgRiskReward: '1 : 2.5',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'A classic bearish reversal pattern resembling the letter "M", showing bulls failing twice to sustain higher prices above an Indian market all-time high resistance barrier.',
    marketPsychology: 'After an extensive bullish rally, Bank Nifty hits heavy call writing and institutional profit-taking at Peak 1. A pullback establishes the neckline support. On the second rally attempt, volume is conspicuously thinner at Peak 2. The failure to breach higher levels confirms distribution. When neckline support snaps, long unwindings and stop hunts trigger an accelerated decline.',
    identificationRules: [
      'Preceded by an extended bullish rally.',
      'Two distinct peaks at nearly identical price levels (within 0.5%).',
      'Reaction trough establishing a clear horizontal neckline support.',
      'Noticeably lower volume on the second peak.'
    ],
    tradingRules: {
      entryTrigger: 'Short on candle close breaking below the neckline support, or on a 15-min retest of the broken neckline.',
      stopLossPlacement: 'Place stop loss slightly above the neckline retest high or above Peak 2.',
      targetCalculation: 'Measure height from highest peak to neckline, project downward from the breakdown level.',
      volumeConfirmation: 'Surging sell volume and open interest expansion on the breakdown candle.'
    },
    beginnerChecklist: [
      'Do not short while price is testing Peak 2; wait for the neckline to be decisively breached.',
      'Ensure the neckline level is horizontal across multiple trading sessions.',
      'Watch for weekly options expiry gamma spikes.'
    ],
    advancedNuances: [
      'Bearish RSI divergence between Peak 1 and Peak 2 is an indispensable confirmation factor in Indian index options.',
      'If Peak 2 creates a false wick breakout above Peak 1 before immediately closing lower, it marks an ultra-high-probability stop hunt.'
    ],
    schematicSummary: 'Rally -> Peak 1 -> Neckline Low -> Peak 2 (Failed New High) -> Breakdown Under Neckline -> Measured Downside.',
    schematicSteps: [
      { label: 'Bull Surge', description: 'Strong index rally reaches initial resistance peak.' },
      { label: 'Trough', description: 'Profit taking forms the baseline neckline support.' },
      { label: 'Peak 2', description: 'Buyers fail to print higher high on dwindling volume.' },
      { label: 'Neckline Breakdown', description: 'Decisive sell candle shatters neckline support.' }
    ],
    realStockExample: {
      ticker: 'BANKNIFTY',
      companyName: 'Nifty Bank Index (NSE: BANKNIFTY)',
      timeframe: 'Daily (1D)',
      dateRange: 'Jul 04, 2024 - Aug 06, 2024',
      tradeType: 'Short',
      entryPrice: 52100,
      stopLossPrice: 53350,
      target1Price: 50800,
      target2Price: 49800,
      riskReward: '1 : 2.5',
      outcome: 'Target 2 reached at ₹49,700 (+2,400 pts, 2.5R return)',
      caseStudyNotes: 'Bank Nifty recorded its all-time high at ₹53,180 (Peak 1) on Jul 04, retraced to ₹52,100 (Neckline), made a secondary failed test at ₹52,800 (Peak 2) on Jul 15 on lower volume, then broke through ₹52,100 down to ₹49,700 during the August correction.',
      candles: [
        { date: '2024-07-02', open: 52400, high: 52850, low: 52250, close: 52780, volume: 180000000 },
        { date: '2024-07-04', open: 52900, high: 53180, low: 52750, close: 53100, volume: 210000000 },
        { date: '2024-07-08', open: 53050, high: 53120, low: 52400, close: 52500, volume: 160000000 },
        { date: '2024-07-10', open: 52450, high: 52700, low: 52100, close: 52180, volume: 190000000 },
        { date: '2024-07-12', open: 52200, high: 52550, low: 52150, close: 52400, volume: 140000000 },
        { date: '2024-07-15', open: 52500, high: 52800, low: 52350, close: 52600, volume: 130000000 },
        { date: '2024-07-19', open: 52400, high: 52500, low: 52100, close: 52150, volume: 175000000 },
        { date: '2024-07-23', open: 52200, high: 52300, low: 51200, close: 51780, volume: 290000000 },
        { date: '2024-07-26', open: 51600, high: 51800, low: 51000, close: 51300, volume: 220000000 },
        { date: '2024-08-01', open: 51500, high: 51650, low: 50800, close: 50900, volume: 240000000 },
        { date: '2024-08-05', open: 50200, high: 50500, low: 49700, close: 50050, volume: 380000000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 3, y1: 52100, x2Index: 6, y2: 52100, color: '#f43f5e', label: 'Neckline Support (₹52,100)', dashed: true }
        ],
        zones: [
          { startIdx: 1, endIdx: 5, top: 53180, bottom: 52600, color: '#f43f5e22', label: 'Double Top Supply Ceiling' },
          { startIdx: 7, endIdx: 10, top: 50800, bottom: 49700, color: '#10b98122', label: 'Downside Target Basin (₹49,800)' }
        ],
        markers: [
          { idx: 1, price: 53180, type: 'pivot', text: 'Peak 1 (₹53,180)' },
          { idx: 3, price: 52100, type: 'pivot', text: 'Neckline Low' },
          { idx: 5, price: 52800, type: 'pivot', text: 'Peak 2 (₹52,800)' },
          { idx: 7, price: 52100, type: 'entry', text: 'Short Breakdown (₹52,100)' },
          { idx: 5, price: 53350, type: 'stop', text: 'Stop Loss (₹53,350)' },
          { idx: 10, price: 49700, type: 'target', text: 'Target 2 Met (₹49,700)' }
        ]
      }
    }
  },
  {
    id: 'head-and-shoulders',
    name: 'Head and Shoulders (Bearish)',
    category: 'reversal',
    bias: 'bearish',
    difficulty: 'intermediate',
    winRateEstimate: '75% - 81%',
    avgRiskReward: '1 : 2.9',
    recommendedTimeframes: ['1D', '4H', '1H'],
    summary: 'A highly reliable structural reversal pattern in heavy-weight Indian banking stocks, characterized by a central higher peak (Head) flanked by two lower peaks (Shoulders) resting on a support baseline.',
    marketPsychology: 'The Left Shoulder represents a healthy uptrend. The Head marks a euphoric final momentum push where retail traders buy at peak prices. The Right Shoulder confirms institutional distribution as smart money fails to lift price to the Head’s high. Once the Neckline is shattered, stop losses from leveraged long traders cascade into heavy selling.',
    identificationRules: [
      'Prior established uptrend.',
      'Left Shoulder: distinct peak followed by retracement.',
      'Head: higher peak followed by retracement back to the neckline.',
      'Right Shoulder: lower peak that fails below the Head.',
      'Neckline: support line drawn connecting the two swing lows between the shoulders.'
    ],
    tradingRules: {
      entryTrigger: 'Short when daily candle closes below the neckline; or wait for a retest from underneath.',
      stopLossPlacement: 'Place stop loss above the peak of the Right Shoulder.',
      targetCalculation: 'Measure vertical distance in rupees from Head apex to neckline, project downward from the breakdown point.',
      volumeConfirmation: 'Volume spikes decisively on the neckline breakdown candle.'
    },
    beginnerChecklist: [
      'Never short before the neckline breaks; anticipation leads to whipsaws.',
      'Downward-sloping necklines indicate even heavier selling pressure in Indian equities.',
      'Always use closing prices rather than intraday wicks to confirm breakdown.'
    ],
    advancedNuances: [
      'FII Flow Confluence: If the breakdown coincides with net FII selling data in cash market, the move often carries 1.5x further.',
      'Check the 200-day Simple Moving Average: If the neckline aligns with the 200 SMA, the breakdown is catastrophic.'
    ],
    schematicSummary: 'Left Shoulder -> Head (Higher Peak) -> Right Shoulder (Lower Peak) -> Neckline Crack -> Measured Target.',
    schematicSteps: [
      { label: 'Left Shoulder', description: 'Healthy rally creates first peak with strong volume.' },
      { label: 'Head Apex', description: 'Exhaustion rally prints higher high with fading volume.' },
      { label: 'Right Shoulder', description: 'Weak rally stalls well below the head.' },
      { label: 'Neckline Breakdown', description: 'Heavy selling shatters baseline support.' }
    ],
    realStockExample: {
      ticker: 'HDFCBANK',
      companyName: 'HDFC Bank Limited (NSE: HDFCBANK)',
      timeframe: 'Daily (1D)',
      dateRange: 'Dec 2023 - Feb 2024',
      tradeType: 'Short',
      entryPrice: 1640,
      stopLossPrice: 1715,
      target1Price: 1520,
      target2Price: 1420,
      riskReward: '1 : 2.9',
      outcome: 'Target 2 reached at ₹1,380 (+₹260 decline, 2.9R return)',
      caseStudyNotes: 'HDFC Bank formed a Left Shoulder at ₹1,680, Head at ₹1,722, and Right Shoulder at ₹1,685. The breakdown of the ₹1,640 neckline coincided with disappointing post-merger NIM results, triggering a multi-week fall directly to ₹1,380.',
      candles: [
        { date: '2023-12-08', open: 1650, high: 1682, low: 1645, close: 1675, volume: 18000000 },
        { date: '2023-12-15', open: 1670, high: 1690, low: 1650, close: 1655, volume: 16000000 },
        { date: '2023-12-28', open: 1680, high: 1722, low: 1678, close: 1710, volume: 22000000 },
        { date: '2024-01-03', open: 1705, high: 1715, low: 1680, close: 1685, volume: 15000000 },
        { date: '2024-01-09', open: 1680, high: 1688, low: 1640, close: 1648, volume: 14000000 },
        { date: '2024-01-15', open: 1660, high: 1685, low: 1655, close: 1672, volume: 13000000 },
        { date: '2024-01-17', open: 1560, high: 1575, low: 1528, close: 1536, volume: 85000000 },
        { date: '2024-01-24', open: 1450, high: 1465, low: 1420, close: 1428, volume: 62000000 },
        { date: '2024-02-05', open: 1430, high: 1445, low: 1380, close: 1405, volume: 48000000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 1, y1: 1650, x2Index: 4, y2: 1640, color: '#f43f5e', label: 'Neckline Support (₹1,640)', dashed: true }
        ],
        zones: [
          { startIdx: 0, endIdx: 5, top: 1722, bottom: 1670, color: '#f43f5e22', label: 'H&S Institutional Distribution Zone' },
          { startIdx: 6, endIdx: 8, top: 1536, bottom: 1380, color: '#10b98122', label: 'Measured Move Target (₹1,380 - ₹1,420)' }
        ],
        markers: [
          { idx: 0, price: 1682, type: 'pivot', text: 'Left Shoulder (₹1,682)' },
          { idx: 2, price: 1722, type: 'pivot', text: 'Head Apex (₹1,722)' },
          { idx: 5, price: 1685, type: 'pivot', text: 'Right Shoulder (₹1,685)' },
          { idx: 6, price: 1640, type: 'entry', text: 'Breakdown Short (₹1,640)' },
          { idx: 5, price: 1715, type: 'stop', text: 'Stop Loss (₹1,715)' },
          { idx: 8, price: 1380, type: 'target', text: 'Target Hit (₹1,380)' }
        ]
      }
    }
  },
  {
    id: 'bull-flag',
    name: 'Bull Flag (Continuation)',
    category: 'continuation',
    bias: 'bullish',
    difficulty: 'beginner',
    winRateEstimate: '76% - 82%',
    avgRiskReward: '1 : 3.2',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'The premier momentum trend continuation setup in Indian equities. A sharp impulse surge (flagpole) followed by a shallow, orderly downward channel (flag) before continuing the bull rally.',
    marketPsychology: 'The sharp flagpole represents heavy institutional accumulation by mutual funds and FIIs that leaves sideline traders behind. During the flag, institutions refuse to dump their holdings; instead, short-term retail option traders take minor profits in a shallow channel with light volume. Once selling dries up near the rising 20 EMA, fresh capital rushes in on the breakout.',
    identificationRules: [
      'Flagpole: near-vertical price advance on surging volume.',
      'Flag: tight downward or sideways sloping channel containing 3 to 12 candles.',
      'Retracement should not exceed 50% of the flagpole.',
      'Volume dries up during the flag and explodes on the breakout.'
    ],
    tradingRules: {
      entryTrigger: 'Buy on candle close above the upper flag resistance trendline, or buy on the intraday bounce off the 20 EMA.',
      stopLossPlacement: 'Place stop loss just below the lowest swing point of the flag channel.',
      targetCalculation: 'Measure flagpole height from origin, project upward from the breakout point.',
      volumeConfirmation: 'Breakout candle volume must clearly exceed the flag consolidation average.'
    },
    beginnerChecklist: [
      'Check that the consolidation is orderly and drifting gently downward.',
      'Do not trade flags that retrace deeper than 61.8% of the pole.',
      'The rising 20 EMA serves as dynamic institutional support.'
    ],
    advancedNuances: [
      'High & Tight Flags: In high-beta Indian momentum leaders (e.g. Reliance, Tata Motors, PSU banks), flags lasting only 3-5 days offer the most violent breakout expansions.',
      'Watch Delivery Volume: high delivery percentage (>60%) inside the flag proves long-term accumulation.'
    ],
    schematicSummary: 'Impulse Flagpole -> Sloping Consolidation -> 20 EMA Support -> Upper Channel Breakout -> Second Wave Rally.',
    schematicSteps: [
      { label: 'Flagpole', description: 'Aggressive institutional buying creates the impulse pole.' },
      { label: 'Flag Channel', description: 'Orderly pullback on light volume shakes out impatient retail.' },
      { label: 'Dynamic Support', description: 'Price bounces cleanly off the rising 20-period EMA.' },
      { label: 'Breakout Expansion', description: 'Turnover explodes as price duplicates flagpole height.' }
    ],
    realStockExample: {
      ticker: 'RELIANCE',
      companyName: 'Reliance Industries Limited (NSE: RELIANCE)',
      timeframe: 'Daily (1D)',
      dateRange: 'Jan 2024 - Mar 2024',
      tradeType: 'Long',
      entryPrice: 2750,
      stopLossPrice: 2660,
      target1Price: 2920,
      target2Price: 3050,
      riskReward: '1 : 3.3',
      outcome: 'Target 2 reached at ₹3,025 (+₹275 per share, 3.1R return)',
      caseStudyNotes: 'Reliance experienced an aggressive rally from ₹2,550 to ₹2,750 (Flagpole), then drifted downward in a tight parallel channel between ₹2,680 and ₹2,740 over 8 sessions. On Feb 02, price burst above ₹2,750 on 12M share volume, marching straight to ₹3,025.',
      candles: [
        { date: '2024-01-15', open: 2560, high: 2610, low: 2550, close: 2605, volume: 8500000 },
        { date: '2024-01-18', open: 2610, high: 2690, low: 2600, close: 2680, volume: 11000000 },
        { date: '2024-01-24', open: 2685, high: 2750, low: 2680, close: 2740, volume: 14500000 },
        { date: '2024-01-25', open: 2740, high: 2750, low: 2690, close: 2705, volume: 6200000 },
        { date: '2024-01-29', open: 2710, high: 2730, low: 2680, close: 2695, volume: 5400000 },
        { date: '2024-01-31', open: 2700, high: 2725, low: 2675, close: 2710, volume: 5800000 },
        { date: '2024-02-02', open: 2720, high: 2815, low: 2715, close: 2810, volume: 18500000 },
        { date: '2024-02-07', open: 2820, high: 2890, low: 2810, close: 2880, volume: 12500000 },
        { date: '2024-02-14', open: 2890, high: 2950, low: 2880, close: 2940, volume: 9800000 },
        { date: '2024-02-23', open: 2950, high: 3025, low: 2940, close: 3020, volume: 14200000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 2, y1: 2750, x2Index: 5, y2: 2725, color: '#38bdf8', label: 'Flag Upper Resistance' },
          { x1Index: 3, y1: 2690, x2Index: 5, y2: 2675, color: '#38bdf8', label: 'Flag Lower Support' }
        ],
        zones: [
          { startIdx: 0, endIdx: 2, top: 2750, bottom: 2550, color: '#10b98122', label: 'Flagpole Rally (+₹200)' },
          { startIdx: 6, endIdx: 9, top: 3025, bottom: 2750, color: '#10b98133', label: 'Measured Move Expansion' }
        ],
        markers: [
          { idx: 0, price: 2550, type: 'pivot', text: 'Pole Start (₹2,550)' },
          { idx: 2, price: 2750, type: 'pivot', text: 'Pole Apex (₹2,750)' },
          { idx: 6, price: 2750, type: 'entry', text: 'Breakout Buy (₹2,750)' },
          { idx: 5, price: 2660, type: 'stop', text: 'Stop Loss (₹2,660)' },
          { idx: 9, price: 3025, type: 'target', text: 'Target 2 Hit (₹3,025)' }
        ]
      }
    }
  },
  {
    id: 'ascending-triangle',
    name: 'Ascending Triangle (Bullish)',
    category: 'continuation',
    bias: 'bullish',
    difficulty: 'beginner',
    winRateEstimate: '75% - 81%',
    avgRiskReward: '1 : 2.7',
    recommendedTimeframes: ['1D', '4H', '1H'],
    summary: 'A powerful accumulation formation characterized by a flat horizontal resistance ceiling and an ascending lower trendline forming higher swing lows.',
    marketPsychology: 'Sellers are consistently willing to sell at a round psychological barrier (e.g. ₹1,000 on Tata Motors). However, buyers are becoming increasingly aggressive on each dip, stepping in at higher and higher prices (higher lows). This constant upward pressure steadily absorbs all overhead supply until sellers run dry and price rockets through the ceiling.',
    identificationRules: [
      'Horizontal resistance ceiling with at least 2 to 3 touchpoints.',
      'Ascending lower support line connecting successively higher lows.',
      'Volatility contracts as the triangle approaches its apex.',
      'Volume diminishes during the squeeze and explodes on the breakout.'
    ],
    tradingRules: {
      entryTrigger: 'Enter on daily candle close above horizontal resistance; or on retest of the broken ceiling.',
      stopLossPlacement: 'Place stop loss just below the most recent higher low inside the triangle.',
      targetCalculation: 'Measure the widest vertical distance of the triangle, add it to the horizontal breakout level.',
      volumeConfirmation: 'Breakout candle must have above-average volume (RVOL > 1.8).'
    },
    beginnerChecklist: [
      'Never short an ascending triangle just because price hits resistance for the 3rd time.',
      'Ensure the lower trendline has at least two clear swing points.',
      'Wait for the candle to close outside the horizontal barrier.'
    ],
    advancedNuances: [
      'Apex Timing: The highest quality breakouts in Indian markets occur between 60% and 75% of the distance to the apex. If price crawls to the very tip, momentum dies.',
      'Watch Open Interest: In stock futures, rising OI on the breakout confirms aggressive institutional long build-up.'
    ],
    schematicSummary: 'Horizontal Ceiling -> Ascending Floor (Higher Lows) -> Supply Absorption -> Upward Breakout.',
    schematicSteps: [
      { label: 'Horizontal Wall', description: 'Sellers cap rallies at a fixed resistance price.' },
      { label: 'Higher Lows', description: 'Buyers bid up every pullback higher than the previous one.' },
      { label: 'Apex Compression', description: 'Trading range tightens into a coiled spring.' },
      { label: 'Expansion Breakout', description: 'Overhead supply depleted; price surges upward.' }
    ],
    realStockExample: {
      ticker: 'TATAMOTORS',
      companyName: 'Tata Motors Limited (NSE: TATAMOTORS)',
      timeframe: 'Daily (1D)',
      dateRange: 'May 2024 - Jul 2024',
      tradeType: 'Long',
      entryPrice: 1005,
      stopLossPrice: 945,
      target1Price: 1085,
      target2Price: 1175,
      riskReward: '1 : 2.8',
      outcome: 'Target 2 reached at ₹1,175 (+₹170 per share, 2.8R return)',
      caseStudyNotes: 'Tata Motors was capped at the ₹1,000 psychological milestone three times while printing higher lows from ₹880 to ₹935 to ₹960. On Jul 02, price burst above ₹1,005 with a surge in volume, racing to ₹1,175 within weeks.',
      candles: [
        { date: '2024-05-10', open: 960, high: 1002, low: 950, close: 995, volume: 18000000 },
        { date: '2024-05-20', open: 950, high: 975, low: 885, close: 920, volume: 14000000 },
        { date: '2024-06-05', open: 890, high: 965, low: 880, close: 955, volume: 22000000 },
        { date: '2024-06-12', open: 960, high: 1004, low: 950, close: 998, volume: 16000000 },
        { date: '2024-06-20', open: 980, high: 995, low: 940, close: 960, volume: 11000000 },
        { date: '2024-06-26', open: 965, high: 1000, low: 962, close: 992, volume: 13000000 },
        { date: '2024-07-02', open: 1002, high: 1030, low: 998, close: 1025, volume: 24000000 },
        { date: '2024-07-08', open: 1030, high: 1075, low: 1025, close: 1068, volume: 19000000 },
        { date: '2024-07-16', open: 1070, high: 1120, low: 1065, close: 1115, volume: 17000000 },
        { date: '2024-07-24', open: 1120, high: 1175, low: 1110, close: 1165, volume: 21000000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 0, y1: 1002, x2Index: 5, y2: 1000, color: '#f59e0b', label: 'Resistance Ceiling (₹1,000)' },
          { x1Index: 2, y1: 880, x2Index: 4, y2: 940, color: '#10b981', label: 'Ascending Higher-Lows Floor' }
        ],
        zones: [
          { startIdx: 6, endIdx: 9, top: 1175, bottom: 1005, color: '#10b98122', label: 'Breakout Expansion Zone' }
        ],
        markers: [
          { idx: 0, price: 1002, type: 'pivot', text: 'Touch 1 (₹1,002)' },
          { idx: 3, price: 1004, type: 'pivot', text: 'Touch 2 (₹1,004)' },
          { idx: 4, price: 940, type: 'pivot', text: 'Higher Low (₹940)' },
          { idx: 6, price: 1005, type: 'entry', text: 'Breakout Buy (₹1,005)' },
          { idx: 4, price: 945, type: 'stop', text: 'Stop Loss (₹945)' },
          { idx: 9, price: 1175, type: 'target', text: 'Target 2 Met (₹1,175)' }
        ]
      }
    }
  },
  {
    id: 'fair-value-gap',
    name: 'Fair Value Gap (FVG / Imbalance)',
    category: 'smc_liquidity',
    bias: 'bullish',
    difficulty: 'advanced',
    winRateEstimate: '78% - 84%',
    avgRiskReward: '1 : 3.6',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'A core Smart Money Concept (SMC) pattern created during violent institutional displacement on the Indian stock exchange. A 3-candle sequence where Candle 1’s high and Candle 3’s low do not overlap, leaving an unfilled price imbalance.',
    marketPsychology: 'When major FIIs, DIIs, or algos purchase index futures aggressively, orders cannot be matched at market prices evenly. The market prints an outsized displacement Candle 2 that skips liquidity. This leaves an inefficiency. Price will systematically gravitate back toward this void (re-balancing the order book) where institutional limit buy orders wait to be filled.',
    identificationRules: [
      'Three consecutive candles: Candle 1, Candle 2 (large displacement impulse), Candle 3.',
      'Bullish FVG: Space exists between Candle 1 High and Candle 3 Low.',
      'Bearish FVG: Space exists between Candle 1 Low and Candle 3 High.',
      'The gap must remain open until the intentional retracement.'
    ],
    tradingRules: {
      entryTrigger: 'Enter limit order at the top of the Bullish FVG zone or at the 50% midpoint (Consequent Encroachment).',
      stopLossPlacement: 'Place stop loss below Candle 1 low or below the candle that formed the pre-displacement swing low.',
      targetCalculation: 'Target opposing swing highs (Buy-side liquidity) or bearish supply zones.',
      volumeConfirmation: 'Candle 2 must demonstrate huge volume and body-to-wick dominance (>75% body).'
    },
    beginnerChecklist: [
      'Do not trade FVGs against the higher-timeframe trend direction.',
      'The 50% level of the gap (Consequent Encroachment) is the sweet spot for institutional reaction.',
      'Once a gap is closed completely, it is considered mitigated and loses validity.'
    ],
    advancedNuances: [
      'Inversion FVG: If a bullish FVG is completely breached by sellers, it flips to become a fierce bearish resistance zone for shorting.',
      'Combine with Weekly VWAP: If the FVG lines up with Weekly VWAP, the bounce is nearly instantaneous.'
    ],
    schematicSummary: 'Candle 1 -> Violent Candle 2 Impulse -> Candle 3 -> Unfilled Imbalance Zone -> Retest Mitigation -> Explosive Continuation.',
    schematicSteps: [
      { label: 'Candle 1', description: 'Establishes initial wick ceiling before displacement.' },
      { label: 'Displacement Candle', description: 'Massive full-bodied candle surges through multiple price ticks.' },
      { label: 'Candle 3', description: 'Leaves a clean gap between its low and Candle 1 high.' },
      { label: 'Mitigation Tap', description: 'Price returns cleanly to fill the gap, triggering institutional reload.' }
    ],
    realStockExample: {
      ticker: 'NIFTY 50',
      companyName: 'Nifty 50 Index (NSE: NIFTY)',
      timeframe: 'Daily (1D)',
      dateRange: 'Sep 10, 2024 - Sep 27, 2024',
      tradeType: 'Long',
      entryPrice: 25420,
      stopLossPrice: 25180,
      target1Price: 25850,
      target2Price: 26270,
      riskReward: '1 : 3.5',
      outcome: 'Target 2 reached at ₹26,277 (+850 pts, 3.5R return)',
      caseStudyNotes: 'On Sep 12, Nifty 50 printed an immense 300-point displacement bar. The high of Sep 11 was ₹25,050 and the low of Sep 13 was ₹25,380, leaving an unfilled daily Bullish FVG between ₹25,050 and ₹25,380. On Sep 16, price dipped to ₹25,400, mitigated the top of the FVG, and rallied to ₹26,277.',
      candles: [
        { date: '2024-09-09', open: 24860, high: 24960, low: 24750, close: 24936, volume: 380000000 },
        { date: '2024-09-10', open: 24950, high: 25050, low: 24920, close: 25041, volume: 410000000 },
        { date: '2024-09-12', open: 25050, high: 25400, low: 25020, close: 25388, volume: 680000000 },
        { date: '2024-09-13', open: 25420, high: 25450, low: 25380, close: 25415, volume: 440000000 },
        { date: '2024-09-16', open: 25420, high: 25445, low: 25390, close: 25418, volume: 390000000 },
        { date: '2024-09-18', open: 25450, high: 25520, low: 25380, close: 25477, volume: 460000000 },
        { date: '2024-09-20', open: 25500, high: 25849, low: 25450, close: 25790, volume: 720000000 },
        { date: '2024-09-24', open: 25850, high: 26010, low: 25820, close: 25940, volume: 610000000 },
        { date: '2024-09-27', open: 26180, high: 26277, low: 26120, close: 26178, volume: 690000000 }
      ],
      annotations: {
        trendlines: [],
        zones: [
          { startIdx: 1, endIdx: 4, top: 25380, bottom: 25050, color: '#3b82f633', label: 'Bullish FVG Imbalance (₹25,050 - ₹25,380)' },
          { startIdx: 6, endIdx: 8, top: 26277, bottom: 25790, color: '#10b98122', label: 'Buy-Side Liquidity Target' }
        ],
        markers: [
          { idx: 1, price: 25050, type: 'pivot', text: 'Candle 1 High (₹25,050)' },
          { idx: 2, price: 25388, type: 'signal', text: 'Displacement Candle' },
          { idx: 3, price: 25380, type: 'pivot', text: 'Candle 3 Low (₹25,380)' },
          { idx: 4, price: 25418, type: 'entry', text: 'FVG Tap Entry (₹25,418)' },
          { idx: 2, price: 25180, type: 'stop', text: 'Invalidation Stop (₹25,180)' },
          { idx: 8, price: 26277, type: 'target', text: 'All-Time High Met (₹26,277)' }
        ]
      }
    }
  },
  {
    id: 'bullish-order-block',
    name: 'Bullish Order Block (OB / Demand)',
    category: 'smc_liquidity',
    bias: 'bullish',
    difficulty: 'advanced',
    winRateEstimate: '77% - 83%',
    avgRiskReward: '1 : 3.8',
    recommendedTimeframes: ['1D', '4H', '1H'],
    summary: 'The specific down-candle immediately preceding an explosive institutional displacement that causes a Break of Structure (BOS) in Indian blue-chip equities.',
    marketPsychology: 'Banks and domestic mutual funds cannot execute orders for crores of shares in a single market buy order without pushing price against themselves. They induce liquidity by selling first (creating the down candle), then absorb all market orders with massive limit bids. The subsequent return to this Order Block allows institutions to mitigate remaining short hedges and add to long holdings.',
    identificationRules: [
      'The last bearish (down) candle before an aggressive multi-day rally.',
      'The rally MUST cause a Break of Structure (BOS) by closing above a prior swing high.',
      'Ideally leaves an accompanying Fair Value Gap directly above the order block.',
      'Unmitigated: The block has not yet been touched by subsequent candles.'
    ],
    tradingRules: {
      entryTrigger: 'Place limit order at the open (or wick high) of the bullish order block candle upon retracement.',
      stopLossPlacement: 'Place stop loss just below the absolute low of the order block candle.',
      targetCalculation: 'Target opposing swing highs (Buy-side liquidity) or bearish supply zones.',
      volumeConfirmation: 'The displacement candle breaking structure must have heavy volume.'
    },
    beginnerChecklist: [
      'Never treat every down candle as an order block; it MUST produce a valid Break of Structure (BOS).',
      'The faster and cleaner the return to the OB, the better the reaction.',
      'If price spends excessive time inside the OB, the probability of failure increases.'
    ],
    advancedNuances: [
      'Refine the OB from the Daily to the 15-minute timeframe to reduce stop loss distance significantly, boosting R:R to over 1:4.',
      'Mean Threshold: The 50% midpoint of the OB candle body is the critical line in the sand.'
    ],
    schematicSummary: 'Final Down-Candle -> Aggressive Displacement Up -> Break of Structure (BOS) -> Retracement Tap into OB -> Explosive Surge.',
    schematicSteps: [
      { label: 'Down Candle', description: 'Institutions build long liquidity during the last sell candle.' },
      { label: 'BOS Displacement', description: 'Sudden impulsive rally violates prior swing high.' },
      { label: 'Pullback', description: 'Orderly return to re-test the institutional block.' },
      { label: 'Reaction', description: 'Vicious buying rejection on first touch.' }
    ],
    realStockExample: {
      ticker: 'ICICIBANK',
      companyName: 'ICICI Bank Limited (NSE: ICICIBANK)',
      timeframe: 'Daily (1D)',
      dateRange: 'Aug 2024 - Oct 2024',
      tradeType: 'Long',
      entryPrice: 1210,
      stopLossPrice: 1165,
      target1Price: 1285,
      target2Price: 1340,
      riskReward: '1 : 2.9',
      outcome: 'Target 2 reached at ₹1,340 (+₹130 per share, 2.9R return)',
      caseStudyNotes: 'ICICI Bank printed its last down candle at ₹1,180-₹1,215 on Aug 05 before surging through ₹1,245 to break structure (BOS). Price gently returned to test the unmitigated OB at ₹1,210 on Sep 04, printing a clean hammer and skyrocketing to ₹1,340.',
      candles: [
        { date: '2024-08-02', open: 1220, high: 1230, low: 1205, close: 1210, volume: 14000000 },
        { date: '2024-08-05', open: 1170, high: 1205, low: 1165, close: 1195, volume: 28000000 },
        { date: '2024-08-08', open: 1205, high: 1235, low: 1200, close: 1230, volume: 15000000 },
        { date: '2024-08-14', open: 1235, high: 1260, low: 1230, close: 1255, volume: 16000000 },
        { date: '2024-08-20', open: 1260, high: 1275, low: 1245, close: 1265, volume: 12000000 },
        { date: '2024-09-03', open: 1235, high: 1240, low: 1208, close: 1212, volume: 14000000 },
        { date: '2024-09-04', open: 1210, high: 1225, low: 1205, close: 1220, volume: 15000000 },
        { date: '2024-09-12', open: 1230, high: 1270, low: 1225, close: 1265, volume: 16500000 },
        { date: '2024-09-24', open: 1280, high: 1342, low: 1275, close: 1340, volume: 19000000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 0, y1: 1230, x2Index: 4, y2: 1275, color: '#38bdf8', label: 'BOS (Break of Structure)' }
        ],
        zones: [
          { startIdx: 1, endIdx: 6, top: 1215, bottom: 1165, color: '#3b82f633', label: 'Daily Bullish Order Block (₹1,165 - ₹1,215)' },
          { startIdx: 7, endIdx: 8, top: 1342, bottom: 1275, color: '#10b98122', label: 'Buy-Side Target Expansion' }
        ],
        markers: [
          { idx: 1, price: 1195, type: 'pivot', text: 'OB Down-Candle' },
          { idx: 4, price: 1275, type: 'signal', text: 'BOS Confirmed' },
          { idx: 6, price: 1210, type: 'entry', text: 'OB Tap Entry (₹1,210)' },
          { idx: 6, price: 1165, type: 'stop', text: 'Stop Loss (₹1,165)' },
          { idx: 8, price: 1340, type: 'target', text: 'Target Hit (₹1,340)' }
        ]
      }
    }
  },
  {
    id: 'liquidity-sweep',
    name: 'Liquidity Sweep / Turtle Soup (Stop Hunt)',
    category: 'smc_liquidity',
    bias: 'bilateral',
    difficulty: 'advanced',
    winRateEstimate: '76% - 82%',
    avgRiskReward: '1 : 3.8',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'A signature institutional trap in Indian derivative indices where price spikes past a prominent previous day high or low to trigger breakout buyer stops, only to reverse violently back into the range.',
    marketPsychology: 'Retail intraday traders place stop-loss buy orders right above yesterday’s high, and breakout buyers place buy stops. Market makers require counterparty liquidity to fill massive short orders. They deliberately engineer a 9:15 AM opening gap-and-spike above the high, absorb all retail buy stops, and slam the market down.',
    identificationRules: [
      'Prominent swing high (or previous day high) obvious to retail participants.',
      'Price punches beyond the level with a rapid wick.',
      'Candle body closes back INSIDE the previous range, leaving a prominent rejection shadow.',
      'Immediate follow-through candle in the opposite direction.'
    ],
    tradingRules: {
      entryTrigger: 'Enter as soon as the sweep candle closes back inside the level, or on break of the sweep candle’s internal low.',
      stopLossPlacement: 'Place tight stop loss 10-20 points beyond the extreme tip of the sweep wick.',
      targetCalculation: 'Target the opposing liquidity pool (e.g. Previous Day Low or range support).',
      volumeConfirmation: 'Volume spike during the sweep wick indicating institutional absorption.'
    },
    beginnerChecklist: [
      'Do not jump in while the breakout bar is green and moving up; WAIT for the candle close.',
      'If the candle closes firmly above the level with a full body, it is a REAL breakout, not a sweep.',
      'Risk-reward is exceptionally high because the stop is placed right at the wick extreme.'
    ],
    advancedNuances: [
      'SFP (Swing Failure Pattern): When a swing failure occurs on Bank Nifty at 09:30 AM while India VIX is falling, the probability of a range dump is over 80%.',
      'Look for Open Interest divergence in Option Chain: heavy call writing despite the spike.'
    ],
    schematicSummary: 'Range High -> Wick Pierces High (Stop Hunt) -> Immediate Close Inside Range -> Rapid Reverse to Range Low.',
    schematicSteps: [
      { label: 'Equal Highs', description: 'Prominent resistance where retail cluster buy-stop orders.' },
      { label: 'Liquidity Sweep', description: 'Fast wick spikes above high to execute institutional orders.' },
      { label: 'Rejection Close', description: 'Candle closes back below the level with a long upper wick.' },
      { label: 'Impulsive Dump', description: 'Price accelerates towards opposing range bottom.' }
    ],
    realStockExample: {
      ticker: 'BANKNIFTY',
      companyName: 'Nifty Bank Index (NSE: BANKNIFTY)',
      timeframe: '1-Hour (1H)',
      dateRange: 'Sep 24, 2024 - Sep 27, 2024',
      tradeType: 'Short',
      entryPrice: 53850,
      stopLossPrice: 54250,
      target1Price: 53100,
      target2Price: 52400,
      riskReward: '1 : 3.6',
      outcome: 'Target 2 hit at ₹52,400 (+1,450 pts, 3.6R return on futures)',
      caseStudyNotes: 'Bank Nifty had a prominent high at ₹54,100. On Sep 25, an opening surge spiked to ₹54,198 triggering breakout longs. Within 45 minutes, price collapsed back below ₹53,850, printing a massive 1H shooting star rejection wick. The trade delivered a straight cascade down to ₹52,400.',
      candles: [
        { date: '09/24 11:15', open: 53600, high: 54100, low: 53550, close: 54050, volume: 22000000 },
        { date: '09/24 13:15', open: 54050, high: 54100, low: 53800, close: 53950, volume: 18000000 },
        { date: '09/25 09:15', open: 54000, high: 54198, low: 53800, close: 53850, volume: 45000000 },
        { date: '09/25 11:15', open: 53850, high: 53900, low: 53450, close: 53520, volume: 28000000 },
        { date: '09/26 09:15', open: 53500, high: 53600, low: 53100, close: 53180, volume: 32000000 },
        { date: '09/26 13:15', open: 53180, high: 53250, low: 52750, close: 52850, volume: 35000000 },
        { date: '09/27 09:15', open: 52850, high: 52950, low: 52380, close: 52420, volume: 41000000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 0, y1: 54100, x2Index: 2, y2: 54100, color: '#f59e0b', label: 'Buy-Side Liquidity Pool (₹54,100)', dashed: true }
        ],
        zones: [
          { startIdx: 2, endIdx: 2, top: 54198, bottom: 54100, color: '#f43f5e33', label: 'Liquidity Grab Zone (False Break)' },
          { startIdx: 4, endIdx: 6, top: 53180, bottom: 52380, color: '#10b98122', label: 'Sell-Side Target Basin' }
        ],
        markers: [
          { idx: 0, price: 54100, type: 'pivot', text: 'Original High (₹54,100)' },
          { idx: 2, price: 54198, type: 'signal', text: 'Stop Hunt Wick (₹54,198)' },
          { idx: 2, price: 53850, type: 'entry', text: 'Re-entry Short (₹53,850)' },
          { idx: 2, price: 54250, type: 'stop', text: 'Tight Stop (₹54,250)' },
          { idx: 6, price: 52420, type: 'target', text: 'Target Cleared (₹52,420)' }
        ]
      }
    }
  },
  {
    id: 'falling-wedge',
    name: 'Falling Wedge (Bullish Reversal)',
    category: 'reversal',
    bias: 'bullish',
    difficulty: 'intermediate',
    winRateEstimate: '75% - 81%',
    avgRiskReward: '1 : 2.9',
    recommendedTimeframes: ['1D', '4H', '1H'],
    summary: 'A high-conviction bullish reversal pattern formed by two downward sloping, converging trendlines where selling momentum dries up in Indian IT leaders.',
    marketPsychology: 'Although the stock prints lower lows, the slope of the lower trendline is noticeably shallower than the upper line. This indicates that bears are running out of steam and DII value buyers are stepping in sooner. As the pattern narrows into the apex, selling volume evaporates, priming the stock for an aggressive upward expansion.',
    identificationRules: [
      'Two downward-sloping trendlines converging toward an apex.',
      'Both highs and lows are declining, but contractions become smaller.',
      'Volume steadily diminishes throughout the wedge formation.',
      'Breakout occurs decisively to the upside through the upper resistance line.'
    ],
    tradingRules: {
      entryTrigger: 'Buy on daily candle close breaking above upper falling trendline, or wait for the classic retest.',
      stopLossPlacement: 'Place stop loss below the lowest point of the wedge.',
      targetCalculation: 'First target is the origin of the wedge (highest point where the wedge began).',
      volumeConfirmation: 'Massive surge in green volume on the breakout candle.'
    },
    beginnerChecklist: [
      'Do not confuse a falling wedge with a channel (channel lines are parallel; wedge lines converge).',
      'Look for at least 3 touches on one trendline and 2 on the other.',
      'Check that the wedge points DOWN before breaking UP.'
    ],
    advancedNuances: [
      'Bullish RSI divergence is almost universally present at the final low of a valid falling wedge.',
      'Wedges that form after extended sector-wide corrections (e.g. Nifty IT) have the fastest velocity of recovery.'
    ],
    schematicSummary: 'Downtrend -> Converging Lower Highs & Lows -> Momentum Squeeze -> Bullish Breakout -> Wedge Origin Target.',
    schematicSteps: [
      { label: 'Initial Impulse', description: 'Sharp selloff initiates the upper and lower boundary rails.' },
      { label: 'Contraction', description: 'Price swings narrow as lower lows become shallow.' },
      { label: 'Exhaustion', description: 'Volume dries up completely at the apex.' },
      { label: 'Expansion Breakout', description: 'Buyers overwhelm sellers and explode through resistance.' }
    ],
    realStockExample: {
      ticker: 'INFY',
      companyName: 'Infosys Limited (NSE: INFY)',
      timeframe: 'Daily (1D)',
      dateRange: 'Apr 2024 - Jun 2024',
      tradeType: 'Long',
      entryPrice: 1460,
      stopLossPrice: 1390,
      target1Price: 1580,
      target2Price: 1675,
      riskReward: '1 : 3.0',
      outcome: 'Target 2 reached at ₹1,675 (+₹215 per share, 3.0R return)',
      caseStudyNotes: 'Following a steep IT correction, Infosys carved out a textbook falling wedge between ₹1,520 and ₹1,390 with converging downward trendlines. On June 05, price broke above ₹1,460 on heavy volume and rallied relentlessly to ₹1,675.',
      candles: [
        { date: '2024-04-18', open: 1510, high: 1525, low: 1480, close: 1490, volume: 12000000 },
        { date: '2024-04-26', open: 1475, high: 1495, low: 1420, close: 1435, volume: 9500000 },
        { date: '2024-05-08', open: 1430, high: 1460, low: 1410, close: 1445, volume: 8200000 },
        { date: '2024-05-22', open: 1440, high: 1455, low: 1395, close: 1410, volume: 7400000 },
        { date: '2024-06-04', open: 1410, high: 1420, low: 1385, close: 1395, volume: 16500000 },
        { date: '2024-06-05', open: 1420, high: 1465, low: 1415, close: 1460, volume: 18000000 },
        { date: '2024-06-12', open: 1470, high: 1520, low: 1465, close: 1515, volume: 14000000 },
        { date: '2024-06-25', open: 1525, high: 1590, low: 1520, close: 1585, volume: 13500000 },
        { date: '2024-07-08', open: 1600, high: 1675, low: 1590, close: 1665, volume: 16000000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 0, y1: 1525, x2Index: 3, y2: 1455, color: '#38bdf8', label: 'Upper Wedge Resistance' },
          { x1Index: 1, y1: 1420, x2Index: 4, y2: 1385, color: '#38bdf8', label: 'Lower Wedge Support' }
        ],
        zones: [
          { startIdx: 5, endIdx: 8, top: 1675, bottom: 1460, color: '#10b98122', label: 'Expansion to Wedge Origin' }
        ],
        markers: [
          { idx: 0, price: 1525, type: 'pivot', text: 'Wedge High (₹1,525)' },
          { idx: 4, price: 1385, type: 'pivot', text: 'Exhaustion Low (₹1,385)' },
          { idx: 5, price: 1460, type: 'entry', text: 'Breakout Buy (₹1,460)' },
          { idx: 4, price: 1390, type: 'stop', text: 'Stop Loss (₹1,390)' },
          { idx: 8, price: 1675, type: 'target', text: 'Target Achieved (₹1,675)' }
        ]
      }
    }
  },
  {
    id: 'cup-and-handle',
    name: 'Cup and Handle (Continuation)',
    category: 'continuation',
    bias: 'bullish',
    difficulty: 'intermediate',
    winRateEstimate: '76% - 83%',
    avgRiskReward: '1 : 3.4',
    recommendedTimeframes: ['1D', '1W', '4H'],
    summary: 'A classic institutional accumulation pattern in Indian telecom and bluechips. Features a smooth, rounded U-shaped base (the cup) followed by a shallow, orderly downward drift (the handle).',
    marketPsychology: 'The rounded cup represents methodical institutional accumulation: after an initial drop, selling pressure slows to a crawl, creating a gradual rounded floor where institutions quietly absorb supply. As price retests the previous peak, nervous retail traders sell, creating a shallow handle pullback. Once this weak-handed selling is absorbed, price explodes through the rim.',
    identificationRules: [
      'Preceding uptrend of at least 30% prior to cup formation.',
      'The Cup should be rounded ("U" shaped), not sharp ("V" shaped).',
      'Cup depth typically ranges between 15% and 30% from the rim.',
      'The Handle forms in the upper half of the cup, gently sloping downward with declining volume.',
      'Handle should not retrace more than 1/3 of the cup depth.'
    ],
    tradingRules: {
      entryTrigger: 'Buy on daily candle close breaking above the rim resistance line; or buy on early break of the downward handle trendline.',
      stopLossPlacement: 'Place stop loss below the lowest point of the handle consolidation.',
      targetCalculation: 'Measure the vertical depth of the cup from rim to lowest point, add that distance to the breakout point.',
      volumeConfirmation: 'Substantially above-average volume on the rim breakout day.'
    },
    beginnerChecklist: [
      'Avoid cups that are too deep (>45% drop) as overhead resistance is too heavy.',
      'Ensure the handle forms near the high of the cup, not near the bottom.',
      'The best handles look like tight bull flags.'
    ],
    advancedNuances: [
      'Handle Volume Dry-up: The lowest volume day of the entire multi-month base should ideally occur inside the handle just prior to breakout.',
      'Sector Confluence: When Indian telecom sector index is in an uptrend, Cup and Handle setups in Bharti Airtel have over 80% success rate.'
    ],
    schematicSummary: 'Prior Uptrend -> U-Shaped Rounded Cup -> Resistance Rim -> Shallow Handle Flag -> Breakout Explosion.',
    schematicSteps: [
      { label: 'Cup Left Rim', description: 'Initial peak before gradual selloff begins.' },
      { label: 'Rounded Floor', description: 'Gentle U-shaped base with light volume indicates accumulation.' },
      { label: 'Cup Right Rim', description: 'Rally re-tests the original resistance ceiling.' },
      { label: 'Handle Shakeout', description: 'Shallow orderly pullback shakes out remaining weak hands.' }
    ],
    realStockExample: {
      ticker: 'BHARTIARTL',
      companyName: 'Bharti Airtel Limited (NSE: BHARTIARTL)',
      timeframe: 'Daily (1D)',
      dateRange: 'Feb 2024 - May 2024',
      tradeType: 'Long',
      entryPrice: 1225,
      stopLossPrice: 1165,
      target1Price: 1340,
      target2Price: 1460,
      riskReward: '1 : 3.8',
      outcome: 'Target 2 exceeded at ₹1,460 (+₹235 per share, 3.8R return)',
      caseStudyNotes: 'Bharti Airtel formed a textbook rounded cup bottom with Left Rim at ₹1,215 in Feb 2024, bottoming near ₹1,080, rounding up to ₹1,220 in April. It then carved out a tight 8-day handle between ₹1,170 and ₹1,220 before exploding past ₹1,460.',
      candles: [
        { date: '2024-02-15', open: 1180, high: 1215, low: 1175, close: 1210, volume: 6800000 },
        { date: '2024-03-01', open: 1190, high: 1205, low: 1140, close: 1150, volume: 5400000 },
        { date: '2024-03-15', open: 1130, high: 1145, low: 1080, close: 1095, volume: 7200000 },
        { date: '2024-03-28', open: 1110, high: 1160, low: 1105, close: 1155, volume: 6100000 },
        { date: '2024-04-10', open: 1170, high: 1222, low: 1165, close: 1218, volume: 8500000 },
        { date: '2024-04-18', open: 1215, high: 1225, low: 1170, close: 1185, volume: 4200000 },
        { date: '2024-04-26', open: 1190, high: 1235, low: 1185, close: 1230, volume: 11500000 },
        { date: '2024-05-10', open: 1240, high: 1320, low: 1235, close: 1315, volume: 14200000 },
        { date: '2024-05-24', open: 1325, high: 1465, low: 1320, close: 1460, volume: 16800000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 0, y1: 1215, x2Index: 4, y2: 1222, color: '#f59e0b', label: 'Cup Rim Resistance (₹1,220)' },
          { x1Index: 4, y1: 1222, x2Index: 5, y2: 1185, color: '#38bdf8', label: 'Handle Pullback Drift' }
        ],
        zones: [
          { startIdx: 1, endIdx: 3, top: 1145, bottom: 1080, color: '#3b82f622', label: 'Rounded Cup Base (₹1,080 - ₹1,145)' },
          { startIdx: 6, endIdx: 8, top: 1465, bottom: 1230, color: '#10b98122', label: 'Target Expansion Zone' }
        ],
        markers: [
          { idx: 0, price: 1215, type: 'pivot', text: 'Left Rim (₹1,215)' },
          { idx: 2, price: 1080, type: 'pivot', text: 'Cup Low (₹1,080)' },
          { idx: 4, price: 1222, type: 'pivot', text: 'Right Rim (₹1,222)' },
          { idx: 6, price: 1230, type: 'entry', text: 'Breakout Buy (₹1,230)' },
          { idx: 5, price: 1165, type: 'stop', text: 'Stop Loss (₹1,165)' },
          { idx: 8, price: 1460, type: 'target', text: 'Target Achieved (₹1,460)' }
        ]
      }
    }
  },
  {
    id: 'bullish-engulfing',
    name: 'Bullish Engulfing (Candlestick)',
    category: 'candlestick',
    bias: 'bullish',
    difficulty: 'beginner',
    winRateEstimate: '71% - 77%',
    avgRiskReward: '1 : 2.4',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'A powerful two-candle bullish reversal pattern where a small red candle is completely engulfed (covered from open to close) by an authoritative green expansion candle at major Indian market support.',
    marketPsychology: 'On Day 1, bears are in command, closing red. On Day 2, price opens lower, leading bears to believe the downtrend is continuing. However, immense institutional buying power enters the market, reversing price all the way back above Day 1’s opening price. This complete takeover by buyers traps short sellers and initiates a sharp momentum shift.',
    identificationRules: [
      'Preceded by a clear downtrend or sharp pullback to support.',
      'Candle 1 is a small bearish red candle.',
      'Candle 2 is a large green candle whose body completely covers Candle 1’s body.',
      'Most potent when Candle 2 also engulfs Candle 1’s wicks.'
    ],
    tradingRules: {
      entryTrigger: 'Buy on the close of Candle 2, or place a buy-stop 1 tick above Candle 2’s high.',
      stopLossPlacement: 'Place stop loss just below Candle 2’s low.',
      targetCalculation: 'Target the nearest major resistance level or 2x the range of the engulfing candle.',
      volumeConfirmation: 'Volume on Candle 2 must be significantly higher than Candle 1.'
    },
    beginnerChecklist: [
      'Never trade an engulfing candle in the middle of a choppy range; location at key support is everything.',
      'Ensure the body of the green candle is genuinely large and authoritative.',
      'Beware if the green candle has an excessively long upper wick.'
    ],
    advancedNuances: [
      'Multi-Candle Engulfing: When Candle 2 engulfs 2 or 3 prior red candles in a single bar, institutional participation is exceptionally high.',
      'Confluence with Key Moving Averages (e.g. 50 SMA / 200 SMA) increases win rate by over 15%.'
    ],
    schematicSummary: 'Downtrend -> Small Red Candle -> Lower Open Gap -> Massive Green Reversal Candle Engulfing Red Body.',
    schematicSteps: [
      { label: 'Prior Selloff', description: 'Sellers drive price down toward key support.' },
      { label: 'Candle 1', description: 'Modest bearish candle prints continuation.' },
      { label: 'Gap Open', description: 'Price opens lower, exhausting remaining seller limit orders.' },
      { label: 'Engulfing Surge', description: 'Violent bull takeover closes firmly above previous open.' }
    ],
    realStockExample: {
      ticker: 'SBIN',
      companyName: 'State Bank of India (NSE: SBIN)',
      timeframe: 'Daily (1D)',
      dateRange: 'Jun 04, 2024 - Jun 12, 2024',
      tradeType: 'Long',
      entryPrice: 795,
      stopLossPrice: 745,
      target1Price: 850,
      target2Price: 895,
      riskReward: '1 : 2.0',
      outcome: 'Target 2 reached at ₹895 (+₹100 per share, 2.0R return)',
      caseStudyNotes: 'Following the June 04 election crash down to ₹750, SBIN printed an immense Bullish Engulfing candle on June 05 from ₹760 to ₹805, completely engulfing the prior day with 62M shares traded. The stock rallied straight to ₹895.',
      candles: [
        { date: '2024-06-03', open: 880, high: 912, low: 875, close: 905, volume: 38000000 },
        { date: '2024-06-04', open: 890, high: 895, low: 750, close: 775, volume: 85000000 },
        { date: '2024-06-05', open: 765, high: 810, low: 760, close: 805, volume: 62000000 },
        { date: '2024-06-06', open: 810, high: 835, low: 800, close: 825, volume: 35000000 },
        { date: '2024-06-10', open: 830, high: 860, low: 825, close: 855, volume: 29000000 },
        { date: '2024-06-18', open: 860, high: 895, low: 855, close: 892, volume: 31000000 }
      ],
      annotations: {
        trendlines: [],
        zones: [
          { startIdx: 1, endIdx: 2, top: 810, bottom: 750, color: '#10b98133', label: 'Bullish Engulfing Reversal Bar' }
        ],
        markers: [
          { idx: 1, price: 775, type: 'pivot', text: 'Crash Low (₹750)' },
          { idx: 2, price: 805, type: 'entry', text: 'Engulfing Entry (₹805)' },
          { idx: 1, price: 745, type: 'stop', text: 'Stop Loss (₹745)' },
          { idx: 5, price: 892, type: 'target', text: 'Target 2 Met (₹892)' }
        ]
      }
    }
  },
  {
    id: 'hammer-candlestick',
    name: 'Hammer / Pin Bar (Reversal)',
    category: 'candlestick',
    bias: 'bullish',
    difficulty: 'beginner',
    winRateEstimate: '72% - 78%',
    avgRiskReward: '1 : 2.7',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'A single-candlestick reversal pattern marked by a small upper body and a long lower shadow (wick) at least twice the length of the body, signaling fierce intraday price rejection in Indian equities.',
    marketPsychology: 'During the session, bears push price aggressively downward to create fresh lows. However, institutional buyers step in heavily at key support, completely overpowering the sellers and driving price all the way back up to close near the session high. The long tail proves that lower prices were emphatically rejected.',
    identificationRules: [
      'Occurs at the bottom of a downtrend or at major horizontal/moving average support.',
      'Lower shadow (wick) must be at least 2 to 3 times the height of the real body.',
      'Little to no upper shadow.',
      'The real body is at the upper end of the trading range.'
    ],
    tradingRules: {
      entryTrigger: 'Enter long on the close of the hammer candle, or place a buy-stop above the high of the hammer.',
      stopLossPlacement: 'Place stop loss just beneath the tip of the lower rejection wick.',
      targetCalculation: 'Measure 2x to 3x the total range of the hammer candle.',
      volumeConfirmation: 'Volume should be elevated, indicating active absorption of selling pressure.'
    },
    beginnerChecklist: [
      'Do not trade a hammer in the middle of a consolidating range; it MUST be preceded by a selloff.',
      'Check if the wick pierces and reclaims an important support level (support sweep).',
      'Always wait for candle completion before entering.'
    ],
    advancedNuances: [
      'The "Spring Hammer": When the lower wick sweeps previous swing lows into an unfilled Fair Value Gap or Order Block, it produces one of the highest expectancy setups in price action.',
      'Compare with next candle: A green follow-through candle confirms institutional acceptance.'
    ],
    schematicSummary: 'Downtrend -> Intraday Dump -> Massive Buyer Absorption -> Small High Body with Long Lower Wick.',
    schematicSteps: [
      { label: 'Prior Decline', description: 'Price trending lower into major support.' },
      { label: 'Intraday Low', description: 'Sellers aggressively push price to session lows.' },
      { label: 'Violent Rebound', description: 'Buyers absorb all orders, lifting price to top of range.' },
      { label: 'Reversal Confirm', description: 'Next candle opens and rallies higher.' }
    ],
    realStockExample: {
      ticker: 'TCS',
      companyName: 'Tata Consultancy Services Ltd (NSE: TCS)',
      timeframe: 'Daily (1D)',
      dateRange: 'Jun 2024 - Jul 2024',
      tradeType: 'Long',
      entryPrice: 3820,
      stopLossPrice: 3670,
      target1Price: 4050,
      target2Price: 4280,
      riskReward: '1 : 3.0',
      outcome: 'Target 2 reached at ₹4,280 (+₹460 per share, 3.0R return)',
      caseStudyNotes: 'TCS dropped to ₹3,680 on heavy IT sector profit-taking. On June 04, it printed a massive Hammer candle with a ₹150 lower shadow, closing at ₹3,810 near the session high. The stock rallied directly to ₹4,280.',
      candles: [
        { date: '2024-05-24', open: 3920, high: 3940, low: 3850, close: 3865, volume: 2200000 },
        { date: '2024-05-31', open: 3860, high: 3880, low: 3780, close: 3795, volume: 2800000 },
        { date: '2024-06-04', open: 3800, high: 3825, low: 3680, close: 3810, volume: 6800000 },
        { date: '2024-06-07', open: 3820, high: 3900, low: 3815, close: 3890, volume: 3400000 },
        { date: '2024-06-19', open: 3900, high: 3980, low: 3880, close: 3965, volume: 3100000 },
        { date: '2024-07-08', open: 3980, high: 4110, low: 3970, close: 4095, volume: 3800000 },
        { date: '2024-07-16', open: 4120, high: 4285, low: 4110, close: 4280, volume: 4600000 }
      ],
      annotations: {
        trendlines: [],
        zones: [
          { startIdx: 2, endIdx: 2, top: 3825, bottom: 3680, color: '#10b98133', label: 'Hammer Wick Rejection Zone (₹3,680 - ₹3,825)' }
        ],
        markers: [
          { idx: 2, price: 3680, type: 'pivot', text: 'Hammer Low (₹3,680)' },
          { idx: 3, price: 3890, type: 'entry', text: 'Follow-Through Entry (₹3,890)' },
          { idx: 2, price: 3670, type: 'stop', text: 'Stop Loss (₹3,670)' },
          { idx: 6, price: 4280, type: 'target', text: 'Target Hit (₹4,280)' }
        ]
      }
    }
  },
  {
    id: 'breakout-retest',
    name: 'Breakout & Retest with Volume Climax',
    category: 'continuation',
    bias: 'bullish',
    difficulty: 'intermediate',
    winRateEstimate: '78% - 84%',
    avgRiskReward: '1 : 3.2',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'The holy grail of structured swing trading in Indian markets: price bursts above multi-month resistance on climactic volume, then calmly drifts down to kiss the prior ceiling, flipping it to rock-solid support.',
    marketPsychology: 'Traders who sold at resistance regret their decision as price breaks out. When price pulls back to the breakout level, former sellers buy to cover at breakeven, breakout traders add to their positions, and sideline traders finally get their entry. This confluence creates an immense wall of buy orders that catapults price to new highs.',
    identificationRules: [
      'Clear, horizontal multi-month resistance line with several failed tests.',
      'Decisive expansion breakout candle that closes well above resistance on 2x+ volume.',
      'Orderly pullback (retest) on noticeably declining volume that kisses the previous resistance level.',
      'Bullish rejection candle (hammer, pin bar, or green engulfing) formed on the retest.'
    ],
    tradingRules: {
      entryTrigger: 'Buy on the first bullish reversal candle printed during the retest of the broken level.',
      stopLossPlacement: 'Place stop loss 1 ATR below the broken resistance level.',
      targetCalculation: 'Target next major macro resistance or 1.618 Fibonacci extension of the pre-breakout base.',
      volumeConfirmation: 'Volume MUST dry up on the retest pullback and expand again on the resumption.'
    },
    beginnerChecklist: [
      'Do NOT FOMO buy at the very top of the breakout candle; patient traders wait for the retest.',
      'Check if the broken level holds as support on a closing basis.',
      'If price sinks deeply back inside the old range, it is a failed breakout.'
    ],
    advancedNuances: [
      'Polarity Principle: The more times a level acted as resistance, the more aggressively it will act as support once breached.',
      'Look for the "Volume Pocket": light volume on the retest confirms that institutions are not selling.'
    ],
    schematicSummary: 'Multi-Touch Resistance -> Volume Breakout -> Low-Volume Retest Kiss -> Support Flip -> Trend Expansion.',
    schematicSteps: [
      { label: 'Resistance Ceiling', description: 'Multiple failed attempts establish strong supply ceiling.' },
      { label: 'Volume Breakout', description: 'Institutional buying surges above resistance on high volume.' },
      { label: 'Orderly Retest', description: 'Price drifts back to kiss the broken ceiling on fading volume.' },
      { label: 'Support Confirmation', description: 'Buyers defend the level, launching the second wave.' }
    ],
    realStockExample: {
      ticker: 'ITC',
      companyName: 'ITC Limited (NSE: ITC)',
      timeframe: 'Daily (1D)',
      dateRange: 'Jul 2024 - Sep 2024',
      tradeType: 'Long',
      entryPrice: 498,
      stopLossPrice: 482,
      target1Price: 525,
      target2Price: 545,
      riskReward: '1 : 2.9',
      outcome: 'Target 2 reached at ₹545 (+₹47 per share, 2.9R return)',
      caseStudyNotes: 'ITC was capped at ₹495-₹500 for over 8 months. In July 2024, it broke out decisively to ₹515 on heavy volume, then drifted down calmly to kiss ₹498 on Sep 02. The support held perfectly, and ITC rocketed to ₹545.',
      candles: [
        { date: '2024-06-25', open: 475, high: 495, low: 472, close: 492, volume: 16000000 },
        { date: '2024-07-08', open: 495, high: 502, low: 488, close: 496, volume: 18000000 },
        { date: '2024-07-24', open: 500, high: 518, low: 496, close: 514, volume: 38000000 },
        { date: '2024-08-08', open: 512, high: 522, low: 505, close: 510, volume: 15000000 },
        { date: '2024-08-27', open: 508, high: 512, low: 496, close: 498, volume: 11000000 },
        { date: '2024-09-04', open: 500, high: 515, low: 498, close: 512, volume: 22000000 },
        { date: '2024-09-18', open: 515, high: 535, low: 512, close: 532, volume: 24000000 },
        { date: '2024-09-27', open: 535, high: 548, low: 532, close: 545, volume: 26000000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 1, y1: 500, x2Index: 5, y2: 500, color: '#f59e0b', label: 'Resistance Turned Support (₹500)', dashed: true }
        ],
        zones: [
          { startIdx: 2, endIdx: 2, top: 518, bottom: 496, color: '#10b98122', label: 'Initial High-Volume Breakout' },
          { startIdx: 4, endIdx: 5, top: 502, bottom: 496, color: '#38bdf833', label: 'Textbook Retest & Kiss' }
        ],
        markers: [
          { idx: 1, price: 500, type: 'pivot', text: 'Resistance Cap (₹500)' },
          { idx: 2, price: 518, type: 'signal', text: 'Volume Breakout' },
          { idx: 4, price: 498, type: 'entry', text: 'Retest Entry (₹498)' },
          { idx: 4, price: 482, type: 'stop', text: 'Stop Loss (₹482)' },
          { idx: 7, price: 545, type: 'target', text: 'Target 2 Hit (₹545)' }
        ]
      }
    }
  },
  {
    id: 'bear-flag',
    name: 'Bear Flag (Continuation)',
    category: 'continuation',
    bias: 'bearish',
    difficulty: 'beginner',
    winRateEstimate: '74% - 80%',
    avgRiskReward: '1 : 2.9',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'A high-probability bearish continuation pattern featuring an initial vertical plunge (the flagpole) followed by an upward-sloping consolidation channel (the flag) before resuming the downtrend.',
    marketPsychology: 'After an aggressive institutional selloff catches retail longs off guard, the market temporarily halts as panic selling eases. A weak, low-volume counter-trend drift occurs as retail bottom-fishers buy calls or futures. Because institutional money is absent, the upward bounce lacks momentum. When channel support snaps, trapped buyers panic sell alongside aggressive short sellers.',
    identificationRules: [
      'Flagpole: sharp, vertical decline on heavy selling volume.',
      'Flag: upward-sloping or sideways parallel channel consisting of 3 to 12 candles.',
      'Volume diminishes significantly during the upward drift.',
      'Breakout candle closes decisively below the lower trendline of the flag.'
    ],
    tradingRules: {
      entryTrigger: 'Short on candle close breaking below the lower support line of the flag channel.',
      stopLossPlacement: 'Place stop loss just above the highest swing point of the flag channel.',
      targetCalculation: 'Measure the height of the flagpole and project that same distance downward from the channel breakdown point.',
      volumeConfirmation: 'Surge in red selling volume on the channel breakdown bar.'
    },
    beginnerChecklist: [
      'Do not short while the flag is actively bouncing inside the channel; wait for the breakdown.',
      'Check that the upward slope is gentle, not aggressive (steep bounces invalidate the flag).',
      'The 20 EMA frequently caps the upper line of a bear flag.'
    ],
    advancedNuances: [
      'Bear flags that retrace to test the underside of a broken 200 EMA or broken daily support level carry an exceptionally high statistical expectancy.',
      'Look for the "fakeout pump": an intraday wick above the flag that gets quickly rejected into the breakdown.'
    ],
    schematicSummary: 'Sharp Plunge -> Upward Sloping Channel -> Fading Volume -> Lower Channel Breakdown -> Measured Downside Extension.',
    schematicSteps: [
      { label: 'Down Impulse', description: 'Massive selling creates the flagpole drop.' },
      { label: 'Ascending Flag', description: 'Weak upward drift with light volume.' },
      { label: 'Breakdown Bar', description: 'Heavy selling closes below channel floor.' },
      { label: 'Downside Leg 2', description: 'Second wave mirrors original flagpole height.' }
    ],
    realStockExample: {
      ticker: 'BAJFINANCE',
      companyName: 'Bajaj Finance Limited (NSE: BAJFINANCE)',
      timeframe: 'Daily (1D)',
      dateRange: 'Dec 2023 - Feb 2024',
      tradeType: 'Short',
      entryPrice: 7180,
      stopLossPrice: 7450,
      target1Price: 6750,
      target2Price: 6400,
      riskReward: '1 : 2.9',
      outcome: 'Target 2 reached at ₹6,400 (+₹780 short gain, 2.9R return)',
      caseStudyNotes: 'Bajaj Finance plunged from ₹7,800 to ₹7,100 (Flagpole), then drifted upward in a low-volume parallel channel up to ₹7,380 over 10 sessions. On Jan 29, price sliced through the lower channel at ₹7,180, cascading straight down to ₹6,400.',
      candles: [
        { date: '2023-12-15', open: 7800, high: 7850, low: 7650, close: 7710, volume: 1100000 },
        { date: '2023-12-28', open: 7650, high: 7680, low: 7150, close: 7190, volume: 2800000 },
        { date: '2024-01-05', open: 7200, high: 7280, low: 7120, close: 7220, volume: 950000 },
        { date: '2024-01-12', open: 7220, high: 7320, low: 7180, close: 7290, volume: 820000 },
        { date: '2024-01-19', open: 7290, high: 7380, low: 7240, close: 7340, volume: 760000 },
        { date: '2024-01-29', open: 7300, high: 7320, low: 7150, close: 7160, volume: 2400000 },
        { date: '2024-02-05', open: 7120, high: 7150, low: 6720, close: 6780, volume: 2200000 },
        { date: '2024-02-16', open: 6750, high: 6780, low: 6380, close: 6410, volume: 2600000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 2, y1: 7120, x2Index: 4, y2: 7240, color: '#f43f5e', label: 'Bear Flag Support Floor' },
          { x1Index: 2, y1: 7280, x2Index: 4, y2: 7380, color: '#f43f5e', label: 'Bear Flag Resistance' }
        ],
        zones: [
          { startIdx: 0, endIdx: 1, top: 7850, bottom: 7150, color: '#f43f5e22', label: 'Flagpole Dump (-₹700)' },
          { startIdx: 5, endIdx: 7, top: 7160, bottom: 6380, color: '#10b98122', label: 'Downside Target Basin' }
        ],
        markers: [
          { idx: 0, price: 7800, type: 'pivot', text: 'Pole Top (₹7,800)' },
          { idx: 1, price: 7150, type: 'pivot', text: 'Pole Low (₹7,150)' },
          { idx: 4, price: 7380, type: 'pivot', text: 'Flag High (₹7,380)' },
          { idx: 5, price: 7160, type: 'entry', text: 'Breakdown Short (₹7,160)' },
          { idx: 4, price: 7450, type: 'stop', text: 'Stop Loss (₹7,450)' },
          { idx: 7, price: 6410, type: 'target', text: 'Target Hit (₹6,410)' }
        ]
      }
    }
  },
  {
    id: 'inverse-head-and-shoulders',
    name: 'Inverse Head and Shoulders (Bullish)',
    category: 'reversal',
    bias: 'bullish',
    difficulty: 'intermediate',
    winRateEstimate: '76% - 82%',
    avgRiskReward: '1 : 2.8',
    recommendedTimeframes: ['1D', '4H', '1H'],
    summary: 'The ultimate bottom-reversal pattern in Indian capital goods. Formed by a central lowest trough (Head) flanked by two higher troughs (Shoulders), indicating bears cannot sustain lower lows.',
    marketPsychology: 'After an extended bear market, the Left Shoulder marks early exhaustion. The Head plunges to a final climactic capitulation low. The bounce sets up the Neckline resistance. When the Right Shoulder forms, bears cannot even push price down to the Head’s low; buyers eagerly defend a higher low, proving institutional accumulation. The neckline breakout signals the launch of a new bull trend.',
    identificationRules: [
      'Clear preceding downtrend.',
      'Left Shoulder: distinct trough followed by a bounce.',
      'Head: significantly lower trough followed by a rally back to neckline.',
      'Right Shoulder: higher low that fails to reach the Head low.',
      'Neckline connects the high peaks between the shoulders.'
    ],
    tradingRules: {
      entryTrigger: 'Buy on candle close breaking above the neckline resistance, or on the retest of the neckline flipping to support.',
      stopLossPlacement: 'Place stop loss just beneath the low of the Right Shoulder.',
      targetCalculation: 'Measure vertical distance from lowest point of Head to neckline, add to breakout point.',
      volumeConfirmation: 'Volume expands sharply on the breakout candle.'
    },
    beginnerChecklist: [
      'Do not buy the Right Shoulder until the neckline is actually penetrated.',
      'An upward-slanted neckline shows stronger buyer aggression.',
      'Ensure the Right Shoulder is formed with at least several candles of consolidation.'
    ],
    advancedNuances: [
      'Right Shoulder Volume Contraction: Diminishing volume on the Right Shoulder decline proves sellers have completely abandoned the asset.',
      'SMC Confluence: The Right Shoulder usually forms inside an unmitigated Bullish Order Block or Fair Value Gap.'
    ],
    schematicSummary: 'Downtrend -> Left Shoulder -> Head (Lowest Dip) -> Right Shoulder (Higher Low) -> Neckline Breakout -> Measured Target.',
    schematicSteps: [
      { label: 'Left Shoulder', description: 'First exhaustion trough with relief bounce to neckline.' },
      { label: 'Head Low', description: 'Final capitulation low followed by strong rebound.' },
      { label: 'Right Shoulder', description: 'Buyers absorb selling, establishing a clear higher low.' },
      { label: 'Neckline Breakout', description: 'Decisive surge over neckline triggers massive rally.' }
    ],
    realStockExample: {
      ticker: 'LT',
      companyName: 'Larsen & Toubro Limited (NSE: LT)',
      timeframe: 'Daily (1D)',
      dateRange: 'Jun 2024 - Aug 2024',
      tradeType: 'Long',
      entryPrice: 3620,
      stopLossPrice: 3440,
      target1Price: 3850,
      target2Price: 4020,
      riskReward: '1 : 2.5',
      outcome: 'Target 2 hit at ₹4,020 (+₹400 advance, 2.5R return)',
      caseStudyNotes: 'L&T developed an Inverse Head and Shoulders with Left Shoulder at ₹3,450, Head capitulation at ₹3,320 on June 04, and Right Shoulder higher low at ₹3,510. On July 04, L&T sliced above the ₹3,620 neckline on 4.5M volume, surging to ₹4,020.',
      candles: [
        { date: '2024-05-28', open: 3550, high: 3580, low: 3450, close: 3465, volume: 2800000 },
        { date: '2024-06-04', open: 3500, high: 3520, low: 3320, close: 3390, volume: 6800000 },
        { date: '2024-06-12', open: 3480, high: 3625, low: 3460, close: 3615, volume: 3900000 },
        { date: '2024-06-21', open: 3600, high: 3630, low: 3505, close: 3520, volume: 2200000 },
        { date: '2024-07-04', open: 3580, high: 3680, low: 3570, close: 3670, volume: 4600000 },
        { date: '2024-07-18', open: 3680, high: 3860, low: 3670, close: 3840, volume: 3800000 },
        { date: '2024-08-01', open: 3850, high: 4025, low: 3840, close: 4015, volume: 4100000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 2, y1: 3625, x2Index: 4, y2: 3625, color: '#38bdf8', label: 'Neckline Resistance (₹3,625)', dashed: true }
        ],
        zones: [
          { startIdx: 1, endIdx: 1, top: 3520, bottom: 3320, color: '#3b82f622', label: 'Capitulation Head Trough' },
          { startIdx: 4, endIdx: 6, top: 4025, bottom: 3670, color: '#10b98122', label: 'Measured Move Expansion' }
        ],
        markers: [
          { idx: 0, price: 3450, type: 'pivot', text: 'Left Shoulder (₹3,450)' },
          { idx: 1, price: 3320, type: 'pivot', text: 'Head (₹3,320)' },
          { idx: 3, price: 3505, type: 'pivot', text: 'Right Shoulder (₹3,505)' },
          { idx: 4, price: 3670, type: 'entry', text: 'Neckline Buy (₹3,670)' },
          { idx: 3, price: 3440, type: 'stop', text: 'Stop Loss (₹3,440)' },
          { idx: 6, price: 4015, type: 'target', text: 'Target Hit (₹4,015)' }
        ]
      }
    }
  },
  {
    id: 'descending-triangle',
    name: 'Descending Triangle (Bearish)',
    category: 'continuation',
    bias: 'bearish',
    difficulty: 'beginner',
    winRateEstimate: '73% - 79%',
    avgRiskReward: '1 : 2.6',
    recommendedTimeframes: ['1D', '4H', '1H'],
    summary: 'A classic bearish continuation formation featuring a flat horizontal support floor and a descending upper trendline forming lower highs, indicating aggressive seller pressure chipping away at support.',
    marketPsychology: 'Buyers are willing to defend a specific support level repeatedly. However, on every bounce, sellers step in earlier and earlier at lower prices (lower highs). This shows that buyers are losing conviction while sellers are becoming more eager to exit. Eventually, the buy orders at the floor are completely exhausted, causing support to crack violently.',
    identificationRules: [
      'Horizontal lower support line tested at least 2 to 3 times.',
      'Downward-sloping upper trendline connecting successively lower swing highs.',
      'Trading volume steadily contracts during triangle formation.',
      'Breakout candle decisively penetrates the flat support floor on expanded volume.'
    ],
    tradingRules: {
      entryTrigger: 'Short on candle close breaking below the horizontal support line, or on the retest from beneath.',
      stopLossPlacement: 'Place stop loss just above the most recent lower high inside the triangle.',
      targetCalculation: 'Measure the widest vertical distance of the triangle and project it downward from the support breakdown point.',
      volumeConfirmation: 'Volume spike on the breakdown bar.'
    },
    beginnerChecklist: [
      'Do not buy the floor just because it has held multiple times; lower highs mean the floor is weakening.',
      'Wait for the candle close below support before executing.',
      'Check if market benchmark (Nifty/Bank Nifty) is also weak.'
    ],
    advancedNuances: [
      'Liquidity Drain: Notice how each bounce off the support floor becomes shorter in time and smaller in percentage gain. This is an indicator of depleted liquidity.',
      'Support Retest Short: The safest entry is often the light-volume retest of the broken floor from underneath.'
    ],
    schematicSummary: 'Flat Support Floor -> Descending Resistance (Lower Highs) -> Floor Exhaustion -> Downside Squeeze.',
    schematicSteps: [
      { label: 'Support Floor', description: 'Buyers absorb dips at the same horizontal price level.' },
      { label: 'Lower Highs', description: 'Sellers sell earlier and earlier on each relief rally.' },
      { label: 'Apex Compression', description: 'Range narrows into a tight squeeze near support.' },
      { label: 'Floor Breakdown', description: 'Support collapses as buy orders are overwhelmed.' }
    ],
    realStockExample: {
      ticker: 'WIPRO',
      companyName: 'Wipro Limited (NSE: WIPRO)',
      timeframe: 'Daily (1D)',
      dateRange: 'Jul 2024 - Sep 2024',
      tradeType: 'Short',
      entryPrice: 505,
      stopLossPrice: 535,
      target1Price: 470,
      target2Price: 440,
      riskReward: '1 : 2.5',
      outcome: 'Target 2 reached at ₹445 (+₹60 decline, 2.5R return)',
      caseStudyNotes: 'Wipro formed a flat floor at ₹505 tested multiple times while printing lower highs at ₹560, ₹540, and ₹522. When ₹505 snapped on Sep 02, Wipro cascaded straight to ₹445.',
      candles: [
        { date: '2024-07-04', open: 535, high: 562, low: 530, close: 558, volume: 9200000 },
        { date: '2024-07-18', open: 550, high: 555, low: 505, close: 512, volume: 11000000 },
        { date: '2024-07-30', open: 515, high: 540, low: 508, close: 535, volume: 8500000 },
        { date: '2024-08-12', open: 530, high: 535, low: 505, close: 515, volume: 7600000 },
        { date: '2024-08-22', open: 518, high: 522, low: 505, close: 510, volume: 6800000 },
        { date: '2024-09-02', open: 508, high: 510, low: 485, close: 490, volume: 18500000 },
        { date: '2024-09-16', open: 485, high: 490, low: 445, close: 448, volume: 14000000 }
      ],
      annotations: {
        trendlines: [
          { x1Index: 1, y1: 505, x2Index: 4, y2: 505, color: '#f43f5e', label: 'Support Floor (₹505)' },
          { x1Index: 0, y1: 562, x2Index: 4, y2: 522, color: '#f59e0b', label: 'Descending Resistance (Lower Highs)' }
        ],
        zones: [
          { startIdx: 5, endIdx: 6, top: 490, bottom: 445, color: '#f43f5e33', label: 'Floor Breakdown Leg' }
        ],
        markers: [
          { idx: 0, price: 562, type: 'pivot', text: 'High 1 (₹562)' },
          { idx: 1, price: 505, type: 'pivot', text: 'Floor Touch 1 (₹505)' },
          { idx: 3, price: 505, type: 'pivot', text: 'Floor Touch 2 (₹505)' },
          { idx: 5, price: 490, type: 'entry', text: 'Breakdown Short (₹490)' },
          { idx: 4, price: 535, type: 'stop', text: 'Stop Loss (₹535)' },
          { idx: 6, price: 448, type: 'target', text: 'Target 2 Met (₹448)' }
        ]
      }
    }
  },
  {
    id: 'shooting-star',
    name: 'Shooting Star / Rejection Candle (Reversal)',
    category: 'candlestick',
    bias: 'bearish',
    difficulty: 'beginner',
    winRateEstimate: '73% - 79%',
    avgRiskReward: '1 : 2.8',
    recommendedTimeframes: ['1D', '4H', '1H', '15m'],
    summary: 'A single-candlestick bearish reversal pattern characterized by a small lower body and a long upper shadow (wick) at least twice the length of the body, signaling aggressive rejection of all-time highs in the Indian market.',
    marketPsychology: 'Bulls open the session and aggressively push prices higher to reach new heights. However, at higher levels, institutional sellers step in and dump heavy volume, completely erasing the day’s gains. Price retreats all the way back down to close near the session low. The long upper wick proves that buyers were utterly rejected and are now trapped at the top.',
    identificationRules: [
      'Preceded by an uptrend or strong momentum surge into resistance.',
      'Upper shadow must be at least 2 times the length of the real body.',
      'Small or no lower shadow.',
      'The real body is near the low of the session.'
    ],
    tradingRules: {
      entryTrigger: 'Short on the close of the shooting star candle, or place a sell-stop order below the candle’s low.',
      stopLossPlacement: 'Place stop loss just above the high of the upper rejection wick.',
      targetCalculation: 'Target the nearest support zone or 2x the range of the candle.',
      volumeConfirmation: 'High volume on the shooting star session indicates heavy distribution.'
    },
    beginnerChecklist: [
      'Must occur at the TOP of an uptrend or at major resistance.',
      'Do not confuse with an Inverted Hammer (identical shape, but occurs at the bottom of a downtrend as a bullish signal).',
      'Look for next-day red confirmation candle.'
    ],
    advancedNuances: [
      'Liquidity Purge Shooting Star: When the long upper wick sweeps prior all-time highs and slams shut, it represents a textbook institutional stop hunt.',
      'In index options: Heavy call unwinding and massive put addition confirms continuation.'
    ],
    schematicSummary: 'Uptrend -> Morning Pump -> Violent Seller Rejection -> Small Low Body with Long Upper Wick.',
    schematicSteps: [
      { label: 'Prior Advance', description: 'Bulls push asset into major overhead resistance.' },
      { label: 'Intraday Peak', description: 'Early morning buying spikes price to new high.' },
      { label: 'Institutional Dump', description: 'Sellers flood market, driving price back to low.' },
      { label: 'Bearish Close', description: 'Session closes near the bottom, trapping breakout buyers.' }
    ],
    realStockExample: {
      ticker: 'NIFTY 50',
      companyName: 'Nifty 50 Index (NSE: NIFTY)',
      timeframe: 'Daily (1D)',
      dateRange: 'Sep 25, 2024 - Oct 08, 2024',
      tradeType: 'Short',
      entryPrice: 25980,
      stopLossPrice: 26320,
      target1Price: 25200,
      target2Price: 24750,
      riskReward: '1 : 3.6',
      outcome: 'Target 2 reached at ₹24,750 (+1,230 pts decline, 3.6R return)',
      caseStudyNotes: 'On Sep 27, 2024, Nifty 50 surged to its all-time peak of ₹26,277. Heavy institutional selling slammed the index into the close at ₹26,178, creating a shooting star rejection wick. Over the next 7 sessions, Nifty crashed 1,500 points down to ₹24,750.',
      candles: [
        { date: '2024-09-24', open: 25850, high: 26010, low: 25820, close: 25940, volume: 610000000 },
        { date: '2024-09-26', open: 26000, high: 26250, low: 25980, close: 26216, volume: 680000000 },
        { date: '2024-09-27', open: 26250, high: 26277, low: 26080, close: 26178, volume: 740000000 },
        { date: '2024-09-30', open: 26150, high: 26180, low: 25790, close: 25810, volume: 720000000 },
        { date: '2024-10-03', open: 25750, high: 25780, low: 25230, close: 25250, volume: 880000000 },
        { date: '2024-10-08', open: 25150, high: 25200, low: 24750, close: 24795, volume: 820000000 }
      ],
      annotations: {
        trendlines: [],
        zones: [
          { startIdx: 2, endIdx: 2, top: 26277, bottom: 26080, color: '#f43f5e33', label: 'All-Time High Rejection Wick (₹26,080 - ₹26,277)' }
        ],
        markers: [
          { idx: 2, price: 26277, type: 'pivot', text: 'All-Time High (₹26,277)' },
          { idx: 3, price: 25810, type: 'entry', text: 'Reversal Short (₹25,810)' },
          { idx: 2, price: 26320, type: 'stop', text: 'Stop Loss (₹26,320)' },
          { idx: 5, price: 24750, type: 'target', text: 'Target Hit (₹24,750)' }
        ]
      }
    }
  },
  {
    id: 'morning-star',
    name: 'Morning Star (3-Candle Bullish Reversal)',
    category: 'candlestick',
    bias: 'bullish',
    difficulty: 'intermediate',
    winRateEstimate: '75% - 81%',
    avgRiskReward: '1 : 2.8',
    recommendedTimeframes: ['1D', '4H', '1H'],
    summary: 'A premier three-candle bottom reversal pattern: a large red candle, followed by an indecision star, followed by a large green candle that closes well past the midpoint of the first red candle in Indian index derivatives.',
    marketPsychology: 'On Day 1, panic bears dominate with a steep drop. On Day 2, a small gap down or low-range star shows that selling momentum has abruptly stalled into equilibrium. On Day 3, buyers step in with force, driving price deeply back into Day 1’s range. This 3-phase transition from bear dominance -> hesitation -> bull takeover represents a definitive trend reversal.',
    identificationRules: [
      'Preceding defined downtrend.',
      'Candle 1: long bearish red candle.',
      'Candle 2: small real body (star/doji) showing momentum compression.',
      'Candle 3: strong bullish green candle closing at least 50% into Candle 1’s body.'
    ],
    tradingRules: {
      entryTrigger: 'Buy on the close of Candle 3, or on a break above Candle 3’s high.',
      stopLossPlacement: 'Place stop loss below the lowest point of Candle 2 (the star).',
      targetCalculation: 'Target the high where the prior downtrend originated.',
      volumeConfirmation: 'Volume should contract on Candle 2 and expand significantly on Candle 3.'
    },
    beginnerChecklist: [
      'Ensure Candle 3 closes comfortably above the 50% midpoint of Candle 1.',
      'Look for the formation at major horizontal support or 200 EMA.',
      'The smaller Candle 2 is, the more potent the reversal.'
    ],
    advancedNuances: [
      'Abandoned Baby: If Candle 2 gaps completely below both Candle 1 and Candle 3 (including wicks), it carries an 85%+ win rate.',
      'Option Buying Confluence: Buying ATM call options on Candle 3 close provides massive multi-day delta gains.'
    ],
    schematicSummary: 'Downtrend -> Big Red Candle -> Small Indecision Star -> Big Green Candle (50%+ Retracement) -> Upward Reversal.',
    schematicSteps: [
      { label: 'Bear Day', description: 'Strong downward expansion candle creates Candle 1.' },
      { label: 'Indecision Star', description: 'Momentum halts as buyers and sellers fight to a standstill.' },
      { label: 'Bull Takeover', description: 'Massive green candle swallows over half of Candle 1.' },
      { label: 'Trend Shift', description: 'New upward trend confirms with follow-through.' }
    ],
    realStockExample: {
      ticker: 'FINNIFTY',
      companyName: 'Nifty Financial Services (NSE: FINNIFTY)',
      timeframe: 'Daily (1D)',
      dateRange: 'Jun 03, 2024 - Jun 12, 2024',
      tradeType: 'Long',
      entryPrice: 22400,
      stopLossPrice: 21200,
      target1Price: 23300,
      target2Price: 24100,
      riskReward: '1 : 2.8',
      outcome: 'Target 2 hit at ₹24,100 (+1,700 pts rally, 2.8R return)',
      caseStudyNotes: 'On June 04, FINNIFTY plunged to ₹21,250 on election results (Candle 1). On June 05, it printed a small spinning star (Candle 2). On June 06, it exploded with a giant green candle closing at ₹22,400 (reclaiming 70% of the drop). The index rallied to ₹24,100.',
      candles: [
        { date: '2024-06-03', open: 23600, high: 23800, low: 23450, close: 23720, volume: 140000000 },
        { date: '2024-06-04', open: 23500, high: 23550, low: 21250, close: 21650, volume: 420000000 },
        { date: '2024-06-05', open: 21700, high: 22050, low: 21550, close: 21980, volume: 280000000 },
        { date: '2024-06-06', open: 22100, high: 22450, low: 22050, close: 22400, volume: 290000000 },
        { date: '2024-06-10', open: 22500, high: 23100, low: 22450, close: 23050, volume: 220000000 },
        { date: '2024-06-18', open: 23150, high: 23800, low: 23100, close: 23750, volume: 240000000 },
        { date: '2024-06-25', open: 23800, high: 24150, low: 23750, close: 24100, volume: 260000000 }
      ],
      annotations: {
        trendlines: [],
        zones: [
          { startIdx: 1, endIdx: 3, top: 22450, bottom: 21250, color: '#10b98122', label: 'Morning Star Triplet Reversal' }
        ],
        markers: [
          { idx: 1, price: 21650, type: 'pivot', text: 'Candle 1 Bearish' },
          { idx: 1, price: 21250, type: 'pivot', text: 'Star Low (₹21,250)' },
          { idx: 3, price: 22400, type: 'entry', text: 'Morning Star Buy (₹22,400)' },
          { idx: 1, price: 21200, type: 'stop', text: 'Stop Loss (₹21,200)' },
          { idx: 6, price: 24100, type: 'target', text: 'Target Met (₹24,100)' }
        ]
      }
    }
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Patterns' },
  { id: 'reversal', label: 'Reversal Patterns' },
  { id: 'continuation', label: 'Continuation Patterns' },
  { id: 'candlestick', label: 'Candlestick Formations' },
  { id: 'smc_liquidity', label: 'SMC & Liquidity' }
];
