/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DollarSign, TrendingUp, Sparkles, PieChart, Briefcase, Award } from 'lucide-react';
import { Language, translations } from '../utils/translations';
import { calculateEarnings, formatWithCommas, formatCompactNumber } from '../utils/growthLogic';

interface EarningsCalculatorProps {
  followers: number;
  lang: Language;
}

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({
  followers,
  lang,
}) => {
  const t = translations[lang];
  const earnings = calculateEarnings(followers);
  const [customMonthlyViews, setCustomMonthlyViews] = useState(
    Math.max(1000000, followers * 3)
  );

  // RPM slider ($0.40 to $1.20)
  const [rpm, setRpm] = useState(0.75);
  const estimatedQualifiedRevenue = Math.round((customMonthlyViews / 1000) * rpm);

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="rounded-3xl p-6 bg-gradient-to-br from-[#161823] via-[#12131a] to-[#0a0a0d] border border-white/10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <DollarSign className="w-5 h-5" />
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {t.monthlyEarnings}
            </h3>
          </div>
          <p className="text-xs text-white/60 mb-6">
            شیکاری داهاتی ڕاستەقینەی دروستکەرانی تیکتۆک لە بەرنامەی دروستکەران، ڕیکلامی براندەکان و لایڤ
          </p>

          {/* Key Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs text-white/50 block mb-1 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.creatorRewards}</span>
              </span>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 tabular-nums">
                ${formatWithCommas(earnings.monthlyCreatorFundMin)} - $
                {formatWithCommas(earnings.monthlyCreatorFundMax)}
              </div>
              <span className="text-[11px] text-white/40 mt-1 block">مانگانە لەسەر بینەر</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs text-white/50 block mb-1 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#25f4ee]" />
                <span>{t.sponsorshipPerPost}</span>
              </span>
              <div className="text-xl sm:text-2xl font-black text-[#25f4ee] tabular-nums">
                ${formatWithCommas(earnings.perSponsoredPostMin)} - $
                {formatWithCommas(earnings.perSponsoredPostMax)}
              </div>
              <span className="text-[11px] text-white/40 mt-1 block">بۆ هەر ١ ڤیدیۆی ڕیکلام</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs text-white/50 block mb-1 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.annualProjection}</span>
              </span>
              <div className="text-xl sm:text-2xl font-black text-amber-400 tabular-nums">
                ${formatWithCommas(earnings.annualEstimatedTotal)}
              </div>
              <span className="text-[11px] text-white/40 mt-1 block">پێشبینی ساڵانە</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive RPM & Monthly Views Calculator */}
      <div className="rounded-3xl p-6 bg-[#12131a] border border-white/10 shadow-lg space-y-5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <PieChart className="w-4 h-4 text-purple-400" />
            <span>حاسیبەی بینەری مانگانە و ڕێژەی RPM</span>
          </h4>
          <span className="text-xs text-white/50">TikTok Creator Rewards</span>
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-white/70 mb-2">
            <span>ژمارەی بینەری مانگانە (Monthly Video Views):</span>
            <span className="font-extrabold text-[#25f4ee] text-sm tabular-nums">
              {formatCompactNumber(customMonthlyViews)} ({formatWithCommas(customMonthlyViews)})
            </span>
          </div>
          <input
            type="range"
            min={100000}
            max={200000000}
            step={500000}
            value={customMonthlyViews}
            onChange={(e) => setCustomMonthlyViews(Number(e.target.value))}
            className="w-full accent-[#25f4ee] cursor-pointer"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-white/70 mb-2">
            <span>نرخی هەر ١,٠٠٠ بینەر (RPM):</span>
            <span className="font-extrabold text-emerald-400 text-sm tabular-nums">${rpm.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min={0.2}
            max={1.5}
            step={0.05}
            value={rpm}
            onChange={(e) => setRpm(Number(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer"
          />
          <div className="flex items-center justify-between text-[10px] text-white/40 mt-1">
            <span>$0.20 (ناوخۆیی)</span>
            <span>$0.75 (تێکڕا)</span>
            <span>$1.50 (ئەمریکا و ئەوروپا)</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
          <div>
            <span className="text-xs text-white/70 block">داهاتی پێشبینیکراو لەسەر ئەم ڕێژەیە:</span>
            <span className="text-2xl font-black text-emerald-400 tabular-nums">
              ${formatWithCommas(estimatedQualifiedRevenue)} / مانگانە
            </span>
          </div>
          <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
