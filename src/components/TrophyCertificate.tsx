/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Crown, Check, Copy, Sparkles, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language, translations } from '../utils/translations';
import { formatWithCommas } from '../utils/growthLogic';
import { UserProfileData } from './PhoneProfilePreview';
import { sounds } from '../utils/soundEffects';

interface TrophyCertificateProps {
  followers: number;
  profile: UserProfileData;
  lang: Language;
}

export const TrophyCertificate: React.FC<TrophyCertificateProps> = ({
  followers,
  profile,
  lang,
}) => {
  const t = translations[lang];
  const [copied, setCopied] = useState(false);

  const is50M = followers >= 50000000;
  const today = new Date().toLocaleDateString(lang === 'ckb' ? 'ar-IQ' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const triggerCelebration = () => {
    sounds.playMilestone();
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#fe2c55', '#25f4ee', '#ffd700', '#ffffff'],
      });
    } catch {
      // fallback
    }
  };

  const handleCopySummary = () => {
    const text = `🏆 TikTok 50M Official Milestone Certificate\nCreator: @${profile.username}\nDisplay Name: ${profile.displayName}\nFollowers: ${formatWithCommas(followers)}\nStatus: Official 50,000,000 Global TikTok Superstar 👑\nVerified at: ${today}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      triggerCelebration();
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="space-y-6">
      {/* Plaque Card Frame */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#1c1c24] via-[#101015] to-[#08080a] border-4 border-amber-400/40 shadow-2xl overflow-hidden text-center">
        {/* Shiny corner decorations */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400/60" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-400/60" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-400/60" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400/60" />

        {/* Ambient radial glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-400/10 via-[#fe2c55]/10 to-[#25f4ee]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto space-y-5">
          {/* Official Seal / Crown */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 p-1 shadow-xl shadow-amber-500/20">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <Crown className="w-10 h-10 text-amber-400 animate-pulse" />
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-extrabold mb-1">
              Official TikTok Creator Award
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
              50 MILLION FOLLOWERS
            </h3>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              پێشکەش دەکرێت بە دروستکەری بەناوبانگ و لێهاتوو
            </p>
          </div>

          {/* Recipient Details */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto">
            <h4 className="text-xl sm:text-2xl font-black text-white mb-1">
              {profile.displayName || 'Samer Kurdi'}
            </h4>
            <div className="text-sm font-bold text-[#25f4ee]">
              @{profile.username || 'samer_kurdi'}
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold">
                {is50M ? '50,000,000 Followers Verified 👑' : `${formatWithCommas(followers)} Followers`}
              </span>
            </div>
          </div>

          <p className="text-xs text-white/50 max-w-md mx-auto leading-relaxed">
            ئەم بڕوانامەیە وەک بەڵگەی فەرمی گەیشتن بە لووتکەی تۆڕی کۆمەڵایەتی تیکتۆک و یەکێک لە گەورەترین هەوادارانی ناوەڕۆک لە کوردستان و جیهاندا بەخشراوە.
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-white/40">
            <span>بەروار: {today}</span>
            <span>کۆدی فەرمی: TT-50M-{Math.floor(followers / 1000)}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={handleCopySummary}
          className="py-3 px-6 rounded-2xl bg-gradient-to-r from-[#fe2c55] to-[#ff0050] text-white font-bold text-sm shadow-lg shadow-[#fe2c55]/30 hover:brightness-110 active:scale-95 transition flex items-center gap-2 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-300" />
              <span>{t.copiedSuccess}</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>{t.downloadCard}</span>
            </>
          )}
        </button>

        <button
          onClick={triggerCelebration}
          className="py-3 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm transition flex items-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>ئاهەنگگێڕان و یاری ئاگرین (Celebrate 🎉)</span>
        </button>
      </div>
    </div>
  );
};
