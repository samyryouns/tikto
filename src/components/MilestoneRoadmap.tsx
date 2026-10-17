/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, Lock, Sparkles, Trophy } from 'lucide-react';
import { Language, translations } from '../utils/translations';
import { MILESTONES, formatCompactNumber } from '../utils/growthLogic';

interface MilestoneRoadmapProps {
  followers: number;
  lang: Language;
  onJumpToMilestone: (threshold: number) => void;
}

export const MilestoneRoadmap: React.FC<MilestoneRoadmapProps> = ({
  followers,
  lang,
  onJumpToMilestone,
}) => {
  const t = translations[lang];

  return (
    <div className="rounded-3xl p-6 bg-[#12131a] border border-white/10 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-white">{t.milestonesTitle}</h3>
        </div>
        <span className="text-xs text-white/50">تیکتۆک بۆ ٥٠ ملیۆن</span>
      </div>

      <div className="space-y-3">
        {MILESTONES.map((m) => {
          const isAchieved = followers >= m.threshold;
          const progressPercent = Math.min(100, Math.round((followers / m.threshold) * 100));

          const title =
            lang === 'ckb' ? m.titleKurdish : lang === 'ar' ? m.titleArabic : m.titleEnglish;
          const perk =
            lang === 'ckb' ? m.perkKurdish : lang === 'ar' ? m.perkArabic : m.perkEnglish;

          return (
            <div
              key={m.id}
              onClick={() => onJumpToMilestone(m.threshold)}
              className={`p-4 rounded-2xl border transition cursor-pointer relative overflow-hidden group ${
                isAchieved
                  ? 'bg-gradient-to-r from-emerald-950/40 via-[#161823] to-[#12131a] border-emerald-500/30 hover:border-emerald-500/60'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                      isAchieved
                        ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30'
                        : 'bg-white/5 text-white/40 ring-1 ring-white/10'
                    }`}
                  >
                    <span>{m.badge}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-extrabold text-white group-hover:text-[#25f4ee] transition">
                        {title}
                      </h4>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white/10 text-white/80">
                        {formatCompactNumber(m.threshold)}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 mt-1">{perk}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  {isAchieved ? (
                    <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t.unlocked}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-white/40 text-xs font-medium bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                      <Lock className="w-3 h-3" />
                      <span>{progressPercent}%</span>
                    </span>
                  )}
                  <span className="text-[10px] text-white/40 mt-1.5 group-hover:text-[#25f4ee] transition">
                    کلیک بکە بۆ گەیشتن ↗
                  </span>
                </div>
              </div>

              {/* Mini progress bar if in progress */}
              {!isAchieved && progressPercent > 0 && (
                <div className="mt-3 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
