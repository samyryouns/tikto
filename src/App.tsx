/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Flame,
  Smartphone,
  Video,
  DollarSign,
  Lightbulb,
  Award,
  Crown,
  Sparkles,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { PhoneProfilePreview, UserProfileData } from './components/PhoneProfilePreview';
import { BoosterControls } from './components/BoosterControls';
import { MilestoneRoadmap } from './components/MilestoneRoadmap';
import { ViralSimulator } from './components/ViralSimulator';
import { EarningsCalculator } from './components/EarningsCalculator';
import { GrowthSecrets } from './components/GrowthSecrets';
import { TrophyCertificate } from './components/TrophyCertificate';
import { Language, translations } from './utils/translations';
import { clampFollowers, TARGET_GOAL, calculateProgress } from './utils/growthLogic';
import { sounds } from './utils/soundEffects';

export default function App() {
  const [lang, setLang] = useState<Language>('ckb');
  const [followers, setFollowers] = useState<number>(12800);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isAutoBoosting, setIsAutoBoosting] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'booster' | 'viral' | 'analytics' | 'tips' | 'trophy'>(
    'booster'
  );

  const [profile, setProfile] = useState<UserProfileData>({
    username: 'samer_kurdi',
    displayName: 'Samer Kurdi | سامەر',
    bio: '🔥 لەسەر ڕێگای ٥٠ ملیۆن فۆڵۆوەر لە تیکتۆک\n👑 بەردەوام بە بەرهەمی نوێ و تایبەت • کوردستان\n💌 هاوکاری و ڕیکلام: direct',
    verified: true,
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    category: 'کۆمیدیا و کەیف (Comedy & Viral)',
  });

  const celebrationFiredRef = useRef<boolean>(false);

  // Sync HTML document direction and language attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  }, [lang]);

  // Handle URL query parameters for testability (e.g. ?50m=1 or ?autostart=1)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('50m') === '1') {
      setFollowers(TARGET_GOAL);
    }
  }, []);

  // Check 50M achievement and fire confetti
  useEffect(() => {
    if (followers >= TARGET_GOAL && !celebrationFiredRef.current) {
      celebrationFiredRef.current = true;
      sounds.playMilestone();
      try {
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#fe2c55', '#25f4ee', '#ffd700', '#ffffff'],
        });
      } catch {
        // Safe fallback
      }
    } else if (followers < TARGET_GOAL) {
      celebrationFiredRef.current = false;
    }
  }, [followers]);

  // Auto boost interval timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isAutoBoosting) {
      interval = setInterval(() => {
        setFollowers((prev) => {
          if (prev >= TARGET_GOAL) {
            setIsAutoBoosting(false);
            return TARGET_GOAL;
          }
          const increment = 25000 + Math.floor(Math.random() * 20000);
          sounds.playPop();
          return clampFollowers(prev + increment);
        });
      }, 700);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoBoosting]);

  const handleBoost = (amount: number) => {
    sounds.playViralWhoosh();
    setFollowers((prev) => clampFollowers(prev + amount));
  };

  const handleInstant50M = () => {
    sounds.playMilestone();
    setFollowers(TARGET_GOAL);
    try {
      confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#fe2c55', '#25f4ee', '#ffd700', '#ffffff'],
      });
    } catch {
      // Safe fallback
    }
  };

  const handleReset = () => {
    sounds.playPop();
    setIsAutoBoosting(false);
    setFollowers(1000);
  };

  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      sounds.enabled = next;
      return next;
    });
  };

  const t = translations[lang];
  const progress = calculateProgress(followers);

  const tabs = [
    {
      id: 'booster' as const,
      label: t.profileTab,
      icon: Smartphone,
      badge: followers >= TARGET_GOAL ? '👑 50M' : `${progress.percentage}%`,
    },
    {
      id: 'viral' as const,
      label: t.viralTab,
      icon: Video,
      badge: 'ترێند',
    },
    {
      id: 'analytics' as const,
      label: t.analyticsTab,
      icon: DollarSign,
      badge: '$',
    },
    {
      id: 'tips' as const,
      label: t.tipsTab,
      icon: Lightbulb,
    },
    {
      id: 'trophy' as const,
      label: t.certificateTab,
      icon: Award,
      badge: 'پیرۆزبایی',
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-white flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        followers={followers}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onInstant50M={handleInstant50M}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Congratulations Banner if 50M Achieved */}
        {progress.isCompleted && (
          <div className="mb-6 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-500/20 via-[#fe2c55]/20 to-[#25f4ee]/20 border-2 border-amber-400/40 shadow-2xl flex flex-wrap items-center justify-between gap-4 animate-pulse">
            <div className="flex items-center gap-3">
              <span className="p-3 rounded-2xl bg-amber-400 text-black font-black text-2xl shadow-lg">
                👑
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-amber-300">
                  {t.congrats50M}
                </h2>
                <p className="text-xs sm:text-sm text-white/80">{t.congratsDesc}</p>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('trophy')}
              className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-extrabold text-xs sm:text-sm shadow-lg hover:brightness-110 transition cursor-pointer flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              <span>بینینی کارتی ٥٠ ملیۆن 🏆</span>
            </button>
          </div>
        )}

        {/* Studio Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playPop();
                  setActiveTab(tab.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-white shadow-lg shadow-[#fe2c55]/20'
                    : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                      isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-[#25f4ee]'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Booster & Profile View */}
        {activeTab === 'booster' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Live Phone Mockup Preview */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <PhoneProfilePreview
                profile={profile}
                followers={followers}
                lang={lang}
                onQuickBoost={handleBoost}
              />
            </div>

            {/* Booster Controls and Milestones */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <BoosterControls
                followers={followers}
                onBoost={handleBoost}
                onInstant50M={handleInstant50M}
                onReset={handleReset}
                isAutoBoosting={isAutoBoosting}
                onToggleAutoBoost={() => {
                  sounds.playPop();
                  setIsAutoBoosting(!isAutoBoosting);
                }}
                lang={lang}
                profile={profile}
                onUpdateProfile={(updated) => setProfile((p) => ({ ...p, ...updated }))}
              />

              <MilestoneRoadmap
                followers={followers}
                lang={lang}
                onJumpToMilestone={(threshold) => {
                  sounds.playMilestone();
                  setFollowers(threshold);
                }}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Viral Video Simulator */}
        {activeTab === 'viral' && (
          <ViralSimulator
            followers={followers}
            lang={lang}
            onFollowersGained={(amount) => {
              setFollowers((prev) => clampFollowers(prev + amount));
            }}
          />
        )}

        {/* Tab 3: Analytics & Creator Rewards */}
        {activeTab === 'analytics' && (
          <EarningsCalculator followers={followers} lang={lang} />
        )}

        {/* Tab 4: 50M Growth Secrets & Peak Times */}
        {activeTab === 'tips' && <GrowthSecrets lang={lang} />}

        {/* Tab 5: Trophy Certificate */}
        {activeTab === 'trophy' && (
          <TrophyCertificate followers={followers} profile={profile} lang={lang} />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 py-5 px-4 text-center text-xs text-white/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25f4ee] animate-pulse" />
            <span>TikTok 50 Million Follower Creator Growth Studio</span>
          </div>
          <div>
            <span>دروستکراوە بۆ دروستکەرانی ناوەڕۆک لە کوردستان و جیهاندا 👑</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
