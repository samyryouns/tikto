/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  CheckCircle2,
  Grid,
  Lock,
  Bookmark,
  Heart,
  Share2,
  MoreVertical,
  Play,
  Flame,
  Sparkles,
  UserCheck,
  TrendingUp,
} from 'lucide-react';
import { formatCompactNumber, formatWithCommas } from '../utils/growthLogic';
import { Language } from '../utils/translations';

export interface UserProfileData {
  username: string;
  displayName: string;
  bio: string;
  verified: boolean;
  avatarUrl: string;
  category: string;
}

interface PhoneProfilePreviewProps {
  profile: UserProfileData;
  followers: number;
  lang: Language;
  onQuickBoost: (amount: number) => void;
}

export const PhoneProfilePreview: React.FC<PhoneProfilePreviewProps> = ({
  profile,
  followers,
  lang,
  onQuickBoost,
}) => {
  const [activeTab, setActiveTab] = useState<'videos' | 'locked' | 'saved' | 'liked'>('videos');
  const [isFollowing, setIsFollowing] = useState(true);

  // Scaled likes based on followers
  const estimatedLikes = Math.max(1200, Math.round(followers * 24.5));
  const is50MAchieved = followers >= 50000000;

  // Video thumbnails with realistic view metrics
  const videos = [
    {
      id: 1,
      title: '٥٠ ملیۆن فۆڵۆوەر پیرۆزە! 🔥',
      views: followers >= 50000000 ? '128.4M' : formatCompactNumber(Math.max(15000, followers * 1.8)),
      pinned: true,
      gradient: 'from-pink-600 via-rose-500 to-amber-500',
    },
    {
      id: 2,
      title: 'ترێندی نوێی تیکتۆک 🚀',
      views: formatCompactNumber(Math.max(8000, followers * 0.95)),
      pinned: true,
      gradient: 'from-cyan-600 via-blue-600 to-indigo-950',
    },
    {
      id: 3,
      title: 'کۆمیدی و کەیف 😂✨',
      views: formatCompactNumber(Math.max(5000, followers * 0.72)),
      pinned: false,
      gradient: 'from-purple-600 via-fuchsia-600 to-pink-800',
    },
    {
      id: 4,
      title: 'کوردستان لە دڵمانە ❤️',
      views: formatCompactNumber(Math.max(3500, followers * 0.54)),
      pinned: false,
      gradient: 'from-emerald-600 via-teal-700 to-slate-900',
    },
    {
      id: 5,
      title: 'سوپاس بۆ پشتگیریتان 👑',
      views: formatCompactNumber(Math.max(2200, followers * 0.38)),
      pinned: false,
      gradient: 'from-amber-600 via-orange-600 to-red-900',
    },
    {
      id: 6,
      title: 'تایبەت بە هەواداران ⚡',
      views: formatCompactNumber(Math.max(1100, followers * 0.22)),
      pinned: false,
      gradient: 'from-violet-700 via-purple-900 to-black',
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Phone Case Mockup */}
      <div className="relative w-full max-w-[360px] sm:max-w-[390px] rounded-[48px] p-3.5 bg-gradient-to-b from-[#23232c] via-[#15151c] to-[#0c0c10] shadow-2xl shadow-[#fe2c55]/20 ring-1 ring-white/20">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b] ring-1 ring-white/10" />
        </div>

        {/* Screen Bezel */}
        <div className="relative bg-[#010101] rounded-[38px] overflow-hidden border border-white/10 flex flex-col min-h-[680px]">
          {/* Top Status Bar */}
          <div className="pt-2 px-6 pb-2 flex items-center justify-between text-white/70 text-xs font-semibold z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]">5G</span>
              <div className="w-4 h-2.5 border border-white/60 rounded-xs p-0.5 flex items-center">
                <div className="w-full h-full bg-white rounded-xs" />
              </div>
            </div>
          </div>

          {/* TikTok In-App Top Navigation */}
          <div className="px-4 py-2 flex items-center justify-between border-b border-white/5">
            <div className="w-7" />
            <div className="flex items-center gap-1.5 cursor-pointer">
              <span className="text-sm font-bold text-white tracking-tight">
                @{profile.username || 'samer_kurdi'}
              </span>
              <span className="text-[10px] text-white/50">▼</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Share2 className="w-4 h-4 cursor-pointer hover:text-white" />
              <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Profile Header Content */}
          <div className="px-4 pt-4 pb-2 flex flex-col items-center text-center">
            {/* Avatar with TikTok live ring */}
            <div className="relative group cursor-pointer mb-2.5">
              <div
                className={`w-22 h-22 rounded-full p-0.5 ${
                  is50MAchieved
                    ? 'bg-gradient-to-tr from-[#ffd700] via-[#fe2c55] to-[#25f4ee] animate-spin'
                    : 'bg-gradient-to-tr from-[#fe2c55] via-white/20 to-[#25f4ee]'
                }`}
                style={{ animationDuration: '8s' }}
              >
                <img
                  src={profile.avatarUrl}
                  alt={profile.displayName}
                  className="w-full h-full object-cover rounded-full bg-neutral-900 border-2 border-black"
                />
              </div>

              {is50MAchieved && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
                  <span>👑 50M VIP</span>
                </div>
              )}

              <button
                onClick={() => onQuickBoost(1000)}
                className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#fe2c55] text-white flex items-center justify-center font-bold text-sm shadow hover:scale-110 active:scale-95 transition cursor-pointer"
                title="Boost +1,000"
              >
                +
              </button>
            </div>

            {/* Display Name & Verification Badge */}
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <h2 className="text-base font-extrabold text-white">
                {profile.displayName || 'Samer Kurdi'}
              </h2>
              {profile.verified && (
                <span title="Verified Creator" className="text-[#20d5ec]">
                  <CheckCircle2 className="w-4 h-4 fill-[#20d5ec] text-black" />
                </span>
              )}
            </div>

            <p className="text-xs text-white/50 mb-3 font-medium">
              @{profile.username || 'samer_kurdi'} • {profile.category}
            </p>

            {/* TikTok Stats Row */}
            <div className="flex items-center justify-center gap-6 sm:gap-7 py-2 w-full max-w-xs border-y border-white/5 my-1">
              <div className="text-center">
                <div className="text-sm font-extrabold text-white">184</div>
                <div className="text-[11px] text-white/50">Following</div>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div className="text-center">
                <div
                  className={`text-base font-black tabular-nums transition-colors ${
                    is50MAchieved ? 'text-[#25f4ee] animate-pulse' : 'text-white'
                  }`}
                >
                  {formatCompactNumber(followers)}
                </div>
                <div className="text-[11px] text-white/70 font-semibold flex items-center justify-center gap-1">
                  <span>Followers</span>
                  {is50MAchieved && <span className="text-[10px]">👑</span>}
                </div>
              </div>
              <div className="w-[1px] h-6 bg-white/10" />
              <div className="text-center">
                <div className="text-sm font-extrabold text-white tabular-nums">
                  {formatCompactNumber(estimatedLikes)}
                </div>
                <div className="text-[11px] text-white/50">Likes</div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-2 mt-3 w-full px-2">
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                  isFollowing
                    ? 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                    : 'bg-[#fe2c55] text-white hover:bg-[#fe2c55]/90 shadow-md shadow-[#fe2c55]/30'
                }`}
              >
                {isFollowing ? (
                  <>
                    <UserCheck className="w-3.5 h-3.5 text-[#25f4ee]" />
                    <span>Following</span>
                  </>
                ) : (
                  <span>Follow</span>
                )}
              </button>

              <button
                onClick={() => onQuickBoost(50000)}
                className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-cyan-600/30 to-blue-600/30 hover:from-cyan-600/40 hover:to-blue-600/40 text-[#25f4ee] border border-[#25f4ee]/30 text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+50K Boost</span>
              </button>
            </div>

            {/* Bio section */}
            <div className="mt-3 px-3 text-xs text-white/80 leading-relaxed max-w-xs">
              <p className="whitespace-pre-line font-normal">{profile.bio}</p>
              <div className="mt-1 text-[#25f4ee] font-semibold text-[11px] truncate flex items-center justify-center gap-1">
                <span>🔗 tiktok.com/@{profile.username || 'samer_kurdi'}</span>
              </div>
            </div>
          </div>

          {/* TikTok Content Tabs */}
          <div className="flex items-center justify-around border-b border-white/10 mt-2 text-white/60">
            <button
              onClick={() => setActiveTab('videos')}
              className={`py-2 px-4 relative transition cursor-pointer ${
                activeTab === 'videos' ? 'text-white' : 'hover:text-white/80'
              }`}
            >
              <Grid className="w-4 h-4" />
              {activeTab === 'videos' && (
                <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-white rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('locked')}
              className={`py-2 px-4 relative transition cursor-pointer ${
                activeTab === 'locked' ? 'text-white' : 'hover:text-white/80'
              }`}
            >
              <Lock className="w-4 h-4" />
              {activeTab === 'locked' && (
                <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-white rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`py-2 px-4 relative transition cursor-pointer ${
                activeTab === 'saved' ? 'text-white' : 'hover:text-white/80'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              {activeTab === 'saved' && (
                <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-white rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('liked')}
              className={`py-2 px-4 relative transition cursor-pointer ${
                activeTab === 'liked' ? 'text-white' : 'hover:text-white/80'
              }`}
            >
              <Heart className="w-4 h-4" />
              {activeTab === 'liked' && (
                <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-white rounded-full" />
              )}
            </button>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-3 gap-0.5 p-1 bg-black overflow-y-auto max-h-[220px]">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className={`relative aspect-[3/4] bg-gradient-to-b ${vid.gradient} rounded-xs overflow-hidden group cursor-pointer flex flex-col justify-between p-1.5 transition hover:brightness-110`}
              >
                {vid.pinned && (
                  <span className="self-start text-[9px] font-black bg-[#fe2c55] text-white px-1 rounded-xs uppercase tracking-tighter">
                    Pinned
                  </span>
                )}
                <div className="mt-auto flex items-center gap-1 text-[10px] font-bold text-white drop-shadow">
                  <Play className="w-2.5 h-2.5 fill-white" />
                  <span className="tabular-nums">{vid.views}</span>
                </div>
              </div>
            ))}
          </div>

          {/* TikTok In-App Bottom Bar */}
          <div className="mt-auto border-t border-white/10 px-4 py-2 flex items-center justify-between text-white/50 text-[10px] font-medium bg-[#010101]">
            <div className="flex flex-col items-center text-white cursor-pointer">
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <span>Friends</span>
            </div>
            <div className="w-8 h-6 rounded-md bg-gradient-to-r from-[#25f4ee] via-white to-[#fe2c55] p-0.5 flex items-center justify-center cursor-pointer shadow">
              <div className="w-full h-full bg-black rounded-[4px] flex items-center justify-center font-black text-white text-xs">
                +
              </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-white">
              <span>Inbox</span>
            </div>
            <div className="flex flex-col items-center text-white font-bold cursor-pointer">
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Odometer Footnote */}
      <div className="mt-3 text-center">
        <div className="text-xs text-white/50 flex items-center justify-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>کۆی ڕاستەوخۆ:</span>
          <span className="text-white font-extrabold tabular-nums tracking-wider">
            {formatWithCommas(followers)}
          </span>
          <span>/ 50,000,000</span>
        </div>
      </div>
    </div>
  );
};
