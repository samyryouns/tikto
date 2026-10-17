/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Flame,
  Send,
  Heart,
  Share2,
  MessageCircle,
  Play,
  Sparkles,
  Music,
  TrendingUp,
} from 'lucide-react';
import { Language, translations } from '../utils/translations';
import { formatCompactNumber } from '../utils/growthLogic';
import { sounds } from '../utils/soundEffects';

interface ViralSimulatorProps {
  followers: number;
  lang: Language;
  onFollowersGained: (amount: number) => void;
}

interface SimulatedComment {
  id: string;
  user: string;
  avatar: string;
  text: string;
  time: string;
  likes: number;
}

const DEFAULT_COMMENTS: SimulatedComment[] = [
  {
    id: 'c1',
    user: 'kurdish_boy_erbil',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
    text: 'ئافەرم برای بەڕێز بەردەوام بە شازە بەڕاستی 🔥🔥',
    time: '2s ago',
    likes: 1240,
  },
  {
    id: 'c2',
    user: 'sara_sulaymaniyah',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    text: 'پیرۆزە گەیشتن بە ٥٠ ملیۆن شایەنی گەورەترین شانازییت کەیفی 👑❤️',
    time: '8s ago',
    likes: 3420,
  },
  {
    id: 'c3',
    user: 'ahmed_baghdad',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80',
    text: 'مبروك يا بطل تستاهل كل التوفيق والمزيد من النجاح 🚀',
    time: '15s ago',
    likes: 890,
  },
  {
    id: 'c4',
    user: 'alex_creator',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=80',
    text: 'Road to 50M completed! Viral algorithm king! 👑✨',
    time: '24s ago',
    likes: 5600,
  },
];

export const ViralSimulator: React.FC<ViralSimulatorProps> = ({
  followers,
  lang,
  onFollowersGained,
}) => {
  const t = translations[lang];

  const [title, setTitle] = useState('ڕۆژێک لە ژیانی دروستکەرێکی ٥٠ ملیۆنی تیکتۆک 👑🔥');
  const [selectedSound, setSelectedSound] = useState('Kurdish Trending Phonk & Pop 2026');
  const [isSimulating, setIsSimulating] = useState(false);

  // Live video counters
  const [videoViews, setVideoViews] = useState(38400000);
  const [videoLikes, setVideoLikes] = useState(4820000);
  const [videoShares, setVideoShares] = useState(340000);
  const [comments, setComments] = useState<SimulatedComment[]>(DEFAULT_COMMENTS);
  const [newCommentInput, setNewCommentInput] = useState('');
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; left: number }[]>([]);

  const handlePostSimulation = () => {
    setIsSimulating(true);
    sounds.playViralWhoosh();

    // Surge in views and followers
    const addedFollowers = Math.round(50000 + Math.random() * 150000);
    const addedViews = Math.round(15000000 + Math.random() * 25000000);
    const addedLikes = Math.round(addedViews * 0.12);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setVideoViews((prev) => prev + Math.round(addedViews / 10));
      setVideoLikes((prev) => prev + Math.round(addedLikes / 10));
      setVideoShares((prev) => prev + Math.round(Math.random() * 5000));

      if (step >= 10) {
        clearInterval(interval);
        setIsSimulating(false);
        onFollowersGained(addedFollowers);
        sounds.playMilestone();
      }
    }, 150);
  };

  const handleHeartClick = () => {
    sounds.playPop();
    setVideoLikes((prev) => prev + 1);
    const newHeart = {
      id: Date.now() + Math.random(),
      left: 30 + Math.random() * 40,
    };
    setFloatingHearts((prev) => [...prev.slice(-15), newHeart]);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentInput.trim()) return;

    sounds.playPop();
    const newC: SimulatedComment = {
      id: String(Date.now()),
      user: 'kurdish_viewer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      text: newCommentInput.trim(),
      time: 'Just now',
      likes: 1,
    };

    setComments((prev) => [newC, ...prev]);
    setNewCommentInput('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Video Studio Creator Controls */}
      <div className="lg:col-span-6 space-y-6">
        <div className="rounded-3xl p-6 bg-[#12131a] border border-white/10 shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Flame className="w-5 h-5 text-[#fe2c55]" />
              <span>{t.postVideo}</span>
            </h3>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              FYP Algorithm Active
            </span>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5">
              {t.videoTitle}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-[#fe2c55] focus:outline-none text-white text-xs sm:text-sm"
              placeholder="دەقی ڤیدیۆی ترێند"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/70 mb-1.5 flex items-center gap-1.5">
              <Music className="w-3.5 h-3.5 text-[#25f4ee]" />
              <span>{t.soundLabel}</span>
            </label>
            <select
              value={selectedSound}
              onChange={(e) => setSelectedSound(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-[#1a1b24] border border-white/10 focus:border-[#25f4ee] focus:outline-none text-white text-xs sm:text-sm cursor-pointer"
            >
              <option value="Kurdish Trending Phonk & Pop 2026">
                🎵 Kurdish Trending Phonk & Pop 2026 (Viral #1)
              </option>
              <option value="Global TikTok Speedup Beat">
                🎵 Global TikTok Speedup Beat (5.8M Reels)
              </option>
              <option value="Epic Motivational Audio">
                🎵 Epic Cinematic & Motivational Glow Up
              </option>
              <option value="Funny Kurdish Sound Effects">
                🎵 Funny Kurdish Sound & Comedy Mix
              </option>
            </select>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 flex flex-wrap items-center gap-1.5">
            <span className="font-bold text-white">{t.selectTag}:</span>
            <span className="px-2 py-0.5 rounded-md bg-[#fe2c55]/20 text-[#fe2c55] font-semibold">
              #tiktok50m
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#25f4ee]/20 text-[#25f4ee] font-semibold">
              #kurdish
            </span>
            <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 font-semibold">
              #fyp
            </span>
            <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-semibold">
              #viral
            </span>
          </div>

          <button
            onClick={handlePostSimulation}
            disabled={isSimulating}
            className={`w-full py-3.5 px-6 rounded-2xl font-black text-sm transition flex items-center justify-center gap-2 cursor-pointer ${
              isSimulating
                ? 'bg-white/10 text-white/50 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-white hover:brightness-110 shadow-lg shadow-[#fe2c55]/25 active:scale-95'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>{isSimulating ? 'پۆست دەکرێت لە تیکتۆک...' : t.simulatePost}</span>
          </button>
        </div>

        {/* Live Metrics Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 rounded-2xl bg-[#12131a] border border-white/10 text-center">
            <div className="text-xs text-white/50 mb-1 flex items-center justify-center gap-1">
              <Play className="w-3 h-3 text-[#25f4ee]" />
              <span>{t.viewsLabel}</span>
            </div>
            <div className="text-lg font-black text-white tabular-nums">
              {formatCompactNumber(videoViews)}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#12131a] border border-white/10 text-center">
            <div className="text-xs text-white/50 mb-1 flex items-center justify-center gap-1">
              <Heart className="w-3 h-3 text-[#fe2c55]" />
              <span>{t.likesLabel}</span>
            </div>
            <div className="text-lg font-black text-[#fe2c55] tabular-nums">
              {formatCompactNumber(videoLikes)}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#12131a] border border-white/10 text-center">
            <div className="text-xs text-white/50 mb-1 flex items-center justify-center gap-1">
              <Share2 className="w-3 h-3 text-amber-400" />
              <span>{t.sharesLabel}</span>
            </div>
            <div className="text-lg font-black text-white tabular-nums">
              {formatCompactNumber(videoShares)}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#12131a] border border-white/10 text-center">
            <div className="text-xs text-white/50 mb-1 flex items-center justify-center gap-1">
              <MessageCircle className="w-3 h-3 text-purple-400" />
              <span>{t.commentsLabel}</span>
            </div>
            <div className="text-lg font-black text-white tabular-nums">
              {formatCompactNumber(comments.length * 1250)}
            </div>
          </div>
        </div>
      </div>

      {/* Live Video Player & Comments Stream Preview */}
      <div className="lg:col-span-6 space-y-4">
        {/* Simulated Video Preview Screen with Heart particle interaction */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-900 via-stone-900 to-black border border-white/10 h-[260px] flex flex-col justify-between p-4 shadow-xl">
          {/* Top badges */}
          <div className="flex items-center justify-between z-10">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/10 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#fe2c55]" />
              <span>For You Page #1</span>
            </span>

            <span className="px-2 py-0.5 rounded-full bg-[#fe2c55] text-white text-[10px] font-black uppercase">
              LIVE VIRAL
            </span>
          </div>

          {/* Floating animated hearts */}
          {floatingHearts.map((h) => (
            <div
              key={h.id}
              style={{ left: `${h.left}%` }}
              className="absolute bottom-16 float-heart pointer-events-none text-[#fe2c55] z-20"
            >
              <Heart className="w-7 h-7 fill-[#fe2c55]" />
            </div>
          ))}

          {/* Interactive Tap Area */}
          <div
            onClick={handleHeartClick}
            className="absolute inset-0 cursor-pointer flex items-center justify-center group"
            title="Double click or tap to like"
          >
            <Heart className="w-16 h-16 text-white/20 group-hover:scale-110 group-hover:text-[#fe2c55]/40 transition" />
          </div>

          {/* Bottom video overlay metadata */}
          <div className="z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 -mx-4 -mb-4 rounded-b-3xl">
            <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Music className="w-3 h-3 text-[#25f4ee]" />
              <span className="truncate">{selectedSound}</span>
            </div>
          </div>
        </div>

        {/* Live TikTok Comments Stream */}
        <div className="rounded-3xl p-5 bg-[#12131a] border border-white/10 shadow-lg space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <h4 className="text-xs font-bold text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#25f4ee]" />
              <span>{t.liveFeed}</span>
            </h4>
            <span className="text-[11px] text-white/40">چالاکیی ڕاستەوخۆ</span>
          </div>

          {/* Comment list */}
          <div className="space-y-2.5 max-h-[170px] overflow-y-auto pe-1">
            {comments.map((c) => (
              <div key={c.id} className="flex items-start gap-2.5 text-xs">
                <img
                  src={c.avatar}
                  alt={c.user}
                  className="w-7 h-7 rounded-full object-cover shrink-0 ring-1 ring-white/10"
                />
                <div className="flex-1 bg-white/5 rounded-xl px-3 py-1.5 border border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-white/50 mb-0.5">
                    <span className="font-semibold text-white/80">@{c.user}</span>
                    <span>{c.time}</span>
                  </div>
                  <p className="text-white/90 text-xs leading-snug">{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* User input to add comment */}
          <form onSubmit={handleAddComment} className="flex items-center gap-2 pt-1">
            <input
              type="text"
              value={newCommentInput}
              onChange={(e) => setNewCommentInput(e.target.value)}
              placeholder="کۆمێنتێکی نوێ بنووسە..."
              className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-[#25f4ee] focus:outline-none text-white text-xs"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#25f4ee] hover:bg-[#20d5ec] text-black font-bold transition cursor-pointer"
              title="ناردنی کۆمێنت"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
