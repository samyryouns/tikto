/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Flame,
  Zap,
  RotateCcw,
  Play,
  Pause,
  Crown,
  CheckCircle,
  TrendingUp,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { Language, translations } from '../utils/translations';
import {
  calculateProgress,
  formatCompactNumber,
  formatWithCommas,
  TARGET_GOAL,
} from '../utils/growthLogic';
import { UserProfileData } from './PhoneProfilePreview';

interface BoosterControlsProps {
  followers: number;
  onBoost: (amount: number) => void;
  onInstant50M: () => void;
  onReset: () => void;
  isAutoBoosting: boolean;
  onToggleAutoBoost: () => void;
  lang: Language;
  profile: UserProfileData;
  onUpdateProfile: (updated: Partial<UserProfileData>) => void;
}

export const AVATAR_PRESETS = [
  {
    name: 'Kurdish Sun Creator',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Modern Cyber Guy',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'TikTok Star Girl',
    url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Gaming & Tech Influencer',
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
  },
];

export const BoosterControls: React.FC<BoosterControlsProps> = ({
  followers,
  onBoost,
  onInstant50M,
  onReset,
  isAutoBoosting,
  onToggleAutoBoost,
  lang,
  profile,
  onUpdateProfile,
}) => {
  const t = translations[lang];
  const progress = calculateProgress(followers);

  const presets = [
    { label: '+1,000', amount: 1000, desc: 'دەستپێک / Initial' },
    { label: '+50,000', amount: 50000, desc: 'ترێند / Trending' },
    { label: '+1,000,000', amount: 1000000, desc: '١ ملیۆن / 1M Jump' },
    { label: '+10,000,000', amount: 10000000, desc: '١٠ ملیۆن / 10M Diamond' },
  ];

  return (
    <div className="space-y-6">
      {/* 50M Progress Showcase Card */}
      <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-[#161823] via-[#101118] to-[#090a0d] border border-white/10 shadow-xl">
        {/* Neon accent glows */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#fe2c55]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#25f4ee]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-gradient-to-r from-[#fe2c55] to-[#ff0050] text-white shadow-md">
                <Crown className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <span>{t.targetBadge}</span>
                </h3>
                <p className="text-xs text-white/60">
                  {progress.isCompleted ? t.congrats50M : t.progressTo50M}
                </p>
              </div>
            </div>

            <div className="text-end">
              <span className="text-2xl sm:text-3xl font-black text-[#25f4ee] tabular-nums">
                {progress.percentage}%
              </span>
              <p className="text-[11px] text-white/50">
                {formatWithCommas(followers)} / 50,000,000
              </p>
            </div>
          </div>

          {/* Progress Bar with milestone ticks */}
          <div className="relative w-full h-4 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 mb-3">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#fe2c55] via-[#a855f7] to-[#25f4ee] transition-all duration-500 ease-out shadow-lg"
              style={{ width: `${Math.min(100, Math.max(1, progress.percentage))}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-white/60 font-semibold px-1">
            <span>0</span>
            <span>10K</span>
            <span>100K</span>
            <span>1M</span>
            <span>10M</span>
            <span className="text-[#25f4ee] font-black">50M 👑</span>
          </div>
        </div>
      </div>

      {/* Main Boost Action Grid */}
      <div className="rounded-3xl p-6 bg-[#12131a] border border-white/10 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>{t.quickBoost}</span>
          </h3>
          <span className="text-xs text-white/40">بۆ گەیشتن بە ٥٠ ملیۆن</span>
        </div>

        {/* Big 50M Legend Button */}
        <button
          onClick={onInstant50M}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#fe2c55] via-[#ff0050] to-[#25f4ee] text-white font-black text-base sm:text-lg shadow-xl shadow-[#fe2c55]/30 hover:scale-[1.01] active:scale-[0.99] transition duration-200 flex items-center justify-center gap-3 cursor-pointer group"
        >
          <Crown className="w-6 h-6 text-yellow-300 animate-bounce" />
          <span>{t.instant50M}</span>
          <Sparkles className="w-5 h-5 text-yellow-300" />
        </button>

        {/* Incremental Boost buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => onBoost(p.amount)}
              className="py-3 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#25f4ee]/40 text-white transition flex flex-col items-center justify-center gap-1 cursor-pointer group active:scale-95"
            >
              <span className="text-base font-extrabold text-[#25f4ee] group-hover:scale-105 transition">
                {p.label}
              </span>
              <span className="text-[10px] text-white/50">{p.desc}</span>
            </button>
          ))}
        </div>

        {/* Auto Boost & Reset Controls */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onToggleAutoBoost}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer ${
              isAutoBoosting
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
            }`}
          >
            {isAutoBoosting ? (
              <>
                <Pause className="w-4 h-4 text-amber-400" />
                <span>{t.autoBoostStop} (+15,000/s)</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-[#25f4ee]" />
                <span>{t.autoBoostStart}</span>
              </>
            )}
          </button>

          <button
            onClick={onReset}
            className="py-3 px-4 rounded-xl bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 text-white/70 hover:text-red-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer"
            title={t.resetCounter}
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">{t.resetCounter}</span>
          </button>
        </div>
      </div>

      {/* Profile Details Customizer Accordion */}
      <div className="rounded-3xl p-6 bg-[#12131a] border border-white/10 shadow-lg space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#25f4ee]" />
            <span>{t.customizeProfile}</span>
          </h3>
          <span className="text-xs text-white/40">تایبەتمەندکردن</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1">
              {t.usernameLabel}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 start-0 flex items-center ps-3 text-white/40 text-xs">
                @
              </span>
              <input
                type="text"
                value={profile.username}
                onChange={(e) => onUpdateProfile({ username: e.target.value.replace(/^@/, '') })}
                className="w-full ps-7 pe-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#25f4ee] focus:outline-none text-white text-xs sm:text-sm"
                placeholder="samer_kurdi"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1">
              {t.displayNameLabel}
            </label>
            <input
              type="text"
              value={profile.displayName}
              onChange={(e) => onUpdateProfile({ displayName: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#25f4ee] focus:outline-none text-white text-xs sm:text-sm"
              placeholder="Samer Kurdi | سامەر"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/70 mb-1">
            {t.bioLabel}
          </label>
          <textarea
            rows={2}
            value={profile.bio}
            onChange={(e) => onUpdateProfile({ bio: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#25f4ee] focus:outline-none text-white text-xs"
            placeholder="دروستکەری فەرمی ٥٠ ملیۆن لە تیکتۆک"
          />
        </div>

        {/* Verified Blue Checkbox Toggle */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#20d5ec]" />
            <span className="text-xs font-semibold text-white">{t.verifiedLabel}</span>
          </div>
          <button
            onClick={() => onUpdateProfile({ verified: !profile.verified })}
            className={`w-11 h-6 rounded-full transition-colors p-1 cursor-pointer flex items-center ${
              profile.verified ? 'bg-[#20d5ec] justify-end' : 'bg-white/20 justify-start'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-white shadow-md" />
          </button>
        </div>

        {/* Avatar Presets Selection */}
        <div>
          <label className="block text-xs font-semibold text-white/70 mb-2">
            {t.selectAvatar}
          </label>
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {AVATAR_PRESETS.map((av) => (
              <button
                key={av.name}
                onClick={() => onUpdateProfile({ avatarUrl: av.url })}
                className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition shrink-0 cursor-pointer ${
                  profile.avatarUrl === av.url
                    ? 'border-[#fe2c55] ring-2 ring-[#fe2c55]/50 scale-105'
                    : 'border-white/20 opacity-70 hover:opacity-100'
                }`}
                title={av.name}
              >
                <img src={av.url} alt={av.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
