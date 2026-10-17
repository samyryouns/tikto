/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Lightbulb, Clock, Target, Sparkles, CheckCircle, Zap } from 'lucide-react';
import { Language, translations } from '../utils/translations';

interface GrowthSecretsProps {
  lang: Language;
}

export const GrowthSecrets: React.FC<GrowthSecretsProps> = ({ lang }) => {
  const t = translations[lang];

  const tips = [
    {
      id: 1,
      title: 'یاسای ٣ چرکەی سەرەتا (The 3-Second Hook)',
      desc: 'ئەگەر بینەر لە ٣ چرکەی یەکەم ڤیدیۆکە تێپەڕێنێت (Scroll)، ئەلگۆریتم ڤیدیۆکە ڕادەگرێت. دەستپێکێکی سەرسوڕهێنەر، پرسیارێک یان جووڵەیەکی بەهێز دابنێ.',
      icon: '⚡',
      badge: 'گرنگترین هۆکار',
    },
    {
      id: 2,
      title: 'ڕێژەی تەواوکردنی ڤیدیۆ (Completion Rate > 70%)',
      desc: 'ئەلگۆریتمی تیکتۆک زیاتر بایەخ بەوە دەدات بینەر چەند لە سەدی ڤیدیۆکەی بینیوە، نەک تەنها لایک. ڤیدیۆی کورت و خێرا باشترین ئەنجامی هەیە.',
      icon: '🎯',
      badge: 'نهێنی ئەلگۆریتم',
    },
    {
      id: 3,
      title: 'دەنگ و گۆرانی ترێند (Trending Sounds Hack)',
      desc: 'تەنانەت ئەگەر قسەش دەکەیت، دەنگێکی ترێندی بەناوبانگ لە پاشبنەما (Volume 3-5%) دابنێ بۆ ئەوەی ئەلگۆریتم ڤیدیۆکەت بخاتە بەشی دەنگە گەرمەکان.',
      icon: '🎵',
      badge: 'فێڵی بەهێز',
    },
    {
      id: 4,
      title: 'بەردەوامی و کاتی پۆستکردن (Consistency Routine)',
      desc: 'بۆ گەیشتن بە ٥٠ ملیۆن، ڕۆژانە ١ بۆ ٣ ڤیدیۆی کوالیتی بەرز لە کاتە دیاریکراوەکاندا پۆست بکە. پۆستی کتوپڕ بەبێ بەردەوامی سوودی نییە.',
      icon: '📅',
      badge: 'پابەندبوون',
    },
    {
      id: 5,
      title: 'وەڵامدانەوەی کۆمێنت بە ڤیدیۆ (Video Reply to Comments)',
      desc: 'وەڵامدانەوەی کۆمێنتەکانی بینەرانت بە ڤیدیۆی نوێ، ڕێژەی هاوبەشی و بەستنەوەی ئەکاونتەکە لەگەڵ کۆمەڵگە بە شێوەیەکی باوەڕپێنەکراو بەرز دەکاتەوە.',
      icon: '💬',
      badge: 'کۆمەڵگەسازی',
    },
  ];

  const hours = [
    { time: '6:00 PM - 8:30 PM', day: 'ڕۆژانی هەفتە', status: 'زۆر باش 🔥' },
    { time: '9:00 PM - 11:30 PM', day: 'پێنجشەممە و هەینی', status: 'لووتکەی بینەر 👑' },
    { time: '1:00 PM - 3:00 PM', day: 'پشووی نیوەڕۆ', status: 'باش بۆ کورتە ڤیدیۆ' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="rounded-3xl p-6 bg-gradient-to-r from-purple-950/40 via-[#161823] to-[#12131a] border border-purple-500/20 shadow-lg flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              {t.topTipsTitle}
            </h3>
          </div>
          <p className="text-xs text-white/60">
            ئەم ڕێنماییانە لەسەر بنەمای گەورەترین ئەکاونتە ٥٠ ملیۆنییەکانی جیهان و ئەزموونی ترێندەکانی تیکتۆک داڕێژراون
          </p>
        </div>
        <div className="text-3xl shrink-0">🚀</div>
      </div>

      {/* Strategies List */}
      <div className="space-y-3">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="p-5 rounded-2xl bg-[#12131a] border border-white/10 hover:border-[#fe2c55]/30 transition group"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl p-2 rounded-xl bg-white/5 shrink-0">
                {tip.icon}
              </span>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#25f4ee] transition">
                    {tip.title}
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fe2c55]/20 text-[#fe2c55] border border-[#fe2c55]/30">
                    {tip.badge}
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Peak Kurdistan & Middle East Hours */}
      <div className="rounded-3xl p-6 bg-[#12131a] border border-white/10 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-400" />
          <h4 className="text-sm font-bold text-white">{t.bestHoursTitle}</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {hours.map((h, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
            >
              <span className="text-xs text-white/50 block mb-1">{h.day}</span>
              <div className="text-sm font-black text-white">{h.time}</div>
              <span className="text-[11px] text-amber-400 font-bold mt-1.5 block">
                {h.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
