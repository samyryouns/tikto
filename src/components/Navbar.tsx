/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Volume2, VolumeX, Globe, Sparkles, Flame } from 'lucide-react';
import { Language, translations } from '../utils/translations';
import { formatCompactNumber } from '../utils/growthLogic';
import { sounds } from '../utils/soundEffects';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  followers: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onInstant50M: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  followers,
  soundEnabled,
  onToggleSound,
  onInstant50M,
}) => {
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08080a]/90 border-b border-white/10 px-3 sm:px-6 lg:px-8 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* TikTok Brand & Title */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#fe2c55] via-black to-[#25f4ee] shadow-lg shadow-[#fe2c55]/20 ring-1 ring-white/20">
            <span className="font-black text-sm sm:text-xl text-white tracking-tighter">TT</span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#25f4ee] rounded-full animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide flex items-center gap-1">
                <span>TikTok 50M</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-white font-extrabold uppercase">
                  PRO
                </span>
              </h1>
            </div>
            <p className="text-xs text-white/50 hidden sm:block truncate max-w-xs md:max-w-md">
              {t.appSubtitle}
            </p>
          </div>
        </div>

        {/* Counter Pill & Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Follower Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
            <Flame className="w-3.5 h-3.5 text-[#fe2c55] animate-pulse" />
            <span className="text-white/60 hidden md:inline">{t.currentFollowers}:</span>
            <span className="font-extrabold text-[#25f4ee] tabular-nums">
              {formatCompactNumber(followers)}
            </span>
          </div>

          {/* Quick 50M Instant Button */}
          {followers < 50000000 && (
            <button
              onClick={onInstant50M}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#fe2c55] to-[#ff0050] hover:brightness-110 text-white text-xs font-bold transition shadow-md shadow-[#fe2c55]/30 cursor-pointer"
              title={t.instant50M}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>50M 👑</span>
            </button>
          )}

          {/* Audio toggle */}
          <button
            onClick={() => {
              onToggleSound();
              if (!soundEnabled) {
                sounds.playPop();
              }
            }}
            className="p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition cursor-pointer"
            aria-label={soundEnabled ? t.soundOn : t.soundOff}
            title={soundEnabled ? t.soundOn : t.soundOff}
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25f4ee]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/40" />
            )}
          </button>

          {/* Language selector */}
          <div className="flex items-center rounded-xl bg-white/5 border border-white/10 p-0.5 text-[11px] font-semibold">
            <button
              onClick={() => onLanguageChange('ckb')}
              className={`px-2 py-0.5 rounded-lg transition cursor-pointer ${
                lang === 'ckb'
                  ? 'bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-white font-bold shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              کورد
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-1.5 py-0.5 rounded-lg transition cursor-pointer ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-white font-bold shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('ar')}
              className={`px-1.5 py-0.5 rounded-lg transition cursor-pointer ${
                lang === 'ar'
                  ? 'bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-white font-bold shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              عرب
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
