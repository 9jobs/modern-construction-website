'use client';

import React, { useState } from 'react';
import { TrendingUp, ShieldAlert, ArrowUpRight } from 'lucide-react';

export const InvestmentCalculator: React.FC = () => {
  // Inputs
  const [purchasePrice, setPurchasePrice] = useState(800000);
  const [constructionCost, setConstructionCost] = useState(350000);
  const [holdingCost, setHoldingCost] = useState(40000);
  const [sellingPrice, setSellingPrice] = useState(1450000);

  const totalCost = purchasePrice + constructionCost + holdingCost;
  const profit = sellingPrice - totalCost;
  const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
  const margin = sellingPrice > 0 ? (profit / sellingPrice) * 100 : 0;

  const formatCurrency = (val: number) => {
    return val.toLocaleString('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0
    });
  };

  const getRiskRating = () => {
    if (roi >= 20 && margin >= 15) {
      return { rating: 'Very Lucrative', color: 'text-emerald-700 bg-emerald-50 border-emerald-200', desc: 'Excellent project buffers and high ROI. Strongly recommended subdivision site.' };
    }
    if (roi >= 12 && margin >= 10) {
      return { rating: 'Moderate Yield', color: 'text-brand-primary bg-brand-sand border-brand-border', desc: 'Standard Australian residential build profit. Solid development parameters.' };
    }
    return { rating: 'High Risk / Thin Margin', color: 'text-rose-700 bg-rose-50 border-rose-200', desc: 'Profits are tight. Consider reducing purchase price or optimization.' };
  };

  const risk = getRiskRating();

  return (
    <div className="bg-brand-card border border-brand-border rounded-xl shadow-premium overflow-hidden font-sans grid grid-cols-1 lg:grid-cols-5 bg-white">
      
      {/* Left 3 Columns: Inputs */}
      <div className="lg:col-span-3 p-6 md:p-8 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-brand-border">
        <div>
          <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-2">
            Calculate Development Feasibility
          </h3>
          <p className="text-xs text-brand-textMuted leading-relaxed">
            Estimate subdivision profit and renovation yield. Adjust purchase price, improvement budgets, and final market values to verify capital efficiency.
          </p>
        </div>

        {/* Input Sliders */}
        <div className="flex flex-col gap-5">
          {/* Purchase Price */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-brand-charcoal">Land / Site Purchase Price</span>
              <span className="text-brand-primary text-sm font-bold">{formatCurrency(purchasePrice)}</span>
            </div>
            <input
              type="range"
              min="200000"
              max="4000000"
              step="25000"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full accent-brand-primary bg-brand-sand rounded-lg h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-brand-textMuted uppercase font-bold">
              <span>$200k</span>
              <span>$4.0M</span>
            </div>
          </div>

          {/* Improvement Cost */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-brand-charcoal">Development / Renovation Cost</span>
              <span className="text-brand-primary text-sm font-bold">{formatCurrency(constructionCost)}</span>
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="10000"
              value={constructionCost}
              onChange={(e) => setConstructionCost(Number(e.target.value))}
              className="w-full accent-brand-primary bg-brand-sand rounded-lg h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-brand-textMuted uppercase font-bold">
              <span>$50k</span>
              <span>$2.0M</span>
            </div>
          </div>

          {/* Holding Costs */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-brand-charcoal">Holding Costs (Interest, Council Fees)</span>
              <span className="text-brand-primary text-sm font-bold">{formatCurrency(holdingCost)}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="250000"
              step="5000"
              value={holdingCost}
              onChange={(e) => setHoldingCost(Number(e.target.value))}
              className="w-full accent-brand-primary bg-brand-sand rounded-lg h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-brand-textMuted uppercase font-bold">
              <span>$5k</span>
              <span>$250k</span>
            </div>
          </div>

          {/* Target Resale Price */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span className="text-brand-charcoal">Projected Gross Sale Value (Exit)</span>
              <span className="text-brand-primary text-sm font-bold">{formatCurrency(sellingPrice)}</span>
            </div>
            <input
              type="range"
              min="300000"
              max="7000000"
              step="50000"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(Number(e.target.value))}
              className="w-full accent-brand-primary bg-brand-sand rounded-lg h-1.5 cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-brand-textMuted uppercase font-bold">
              <span>$300k</span>
              <span>$7.0M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right 2 Columns: Outputs Summary */}
      <div className="lg:col-span-2 p-6 md:p-8 bg-brand-sand/50 flex flex-col gap-6 justify-between">
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
            Profitability Projections
          </h4>

          {/* Total Capital */}
          <div className="flex justify-between items-center py-2 border-b border-brand-border text-xs">
            <span className="text-brand-textMuted font-medium">Total Outlay Cost</span>
            <span className="font-bold text-brand-charcoal">{formatCurrency(totalCost)}</span>
          </div>

          {/* ROI Big Output */}
          <div className="py-4 bg-white border border-brand-border rounded-xl px-4 flex justify-between items-center relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5 text-brand-primary">
              <TrendingUp size={100} className="translate-y-6 translate-x-4" />
            </div>
            <div>
              <span className="text-[9px] text-brand-textMuted uppercase font-bold block">Estimated Return</span>
              <span className="text-2xl md:text-3xl font-bold font-serif text-brand-primary leading-none mt-1 inline-block">
                {roi.toFixed(1)}%
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-brand-textMuted uppercase font-bold block">Gross Profit</span>
              <span className={`text-sm md:text-base font-bold ${profit >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {profit >= 0 ? '+' : ''}{formatCurrency(profit)}
              </span>
            </div>
          </div>

          {/* Profit Margin */}
          <div className="flex justify-between items-center py-2 border-b border-brand-border text-xs">
            <span className="text-brand-textMuted font-medium">Net Profit Margin</span>
            <span className="font-bold text-brand-charcoal">{margin.toFixed(1)}%</span>
          </div>

          {/* Risk assessment box */}
          <div className={`p-4 rounded-xl border flex flex-col gap-1.5 ${risk.color}`}>
            <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider">
              <ShieldAlert size={14} />
              Project Buffer: {risk.rating}
            </div>
            <p className="text-[10px] leading-relaxed font-sans font-medium text-brand-charcoal/90">
              {risk.desc}
            </p>
          </div>
        </div>

        <button
          onClick={() => alert('Consultation Request Submitted! We will contact you with site feasibility templates.')}
          className="w-full bg-brand-primary hover:bg-brand-secondary text-white text-center py-3.5 rounded-full text-xs font-bold shadow transition-all flex items-center justify-center gap-2"
        >
          Request Site Feasibility Assessment
          <ArrowUpRight size={14} />
        </button>
      </div>

    </div>
  );
};
