/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Milestone {
  id: string;
  threshold: number;
  titleKurdish: string;
  titleEnglish: string;
  titleArabic: string;
  badge: string;
  perkKurdish: string;
  perkEnglish: string;
  perkArabic: string;
}

export const MILESTONES: Milestone[] = [
  {
    id: 'live_stream',
    threshold: 1000,
    titleKurdish: 'دەستپێکردنی پەخشی ڕاستەوخۆ (Live)',
    titleEnglish: 'TikTok Live Stream Unlocked',
    titleArabic: 'فتح البث المباشر (تيك توك لايف)',
    badge: '🎙️',
    perkKurdish: 'دەتوانیت لایڤ بکەیتەوە و خەڵاتی لایڤ (Gifts) وەربگریت',
    perkEnglish: 'Go live anytime and receive virtual gifts from viewers',
    perkArabic: 'إمكانية فتح بث مباشر واستلام الهدايا والدعم المباشر',
  },
  {
    id: 'creator_fund',
    threshold: 10000,
    titleKurdish: 'بەرنامەی پاداشتی دروستکەران (Creator Rewards)',
    titleEnglish: 'Creator Rewards Program & TikTok Shop',
    titleArabic: 'برنامج مكافآت المبدعين ومتجر تيك توك',
    badge: '💰',
    perkKurdish: 'وەرگرتنی داهات لەسەر بینەری ڤیدیۆکانی زیاتر لە ١ خولەک',
    perkEnglish: 'Earn revenue for eligible 1min+ videos and affiliate sales',
    perkArabic: 'تحقيق أرباح شهرية من المشاهدات والمبيعات',
  },
  {
    id: 'silver_creator',
    threshold: 100000,
    titleKurdish: 'پلەی زیوی دروستکەری بەناوبانگ (100K)',
    titleEnglish: 'Silver Creator Level & Brand Deals',
    titleArabic: 'مستوى المبدع الفضي وعقود الرعاية',
    badge: '🥈',
    perkKurdish: 'گرێبەستی ڕیکلامی فەرمی لەگەڵ کۆمپانیا ناوخۆیی و جیهانییەکان',
    perkEnglish: 'Access to Creator Marketplace and direct brand sponsorships',
    perkArabic: 'الوصول لسوق المبدعين وعقود الرعاية الإعلانية',
  },
  {
    id: 'gold_star',
    threshold: 1000000,
    titleKurdish: 'ئەستێرەی زێڕین و نیشانەی باوەڕپێکراو (1M)',
    titleEnglish: 'Gold Star & Blue Verification Checkmark',
    titleArabic: 'النجمة الذهبية وشارة التوثيق الزرقاء',
    badge: '🥇',
    perkKurdish: 'نیشانەی شین، بانگهێشت بۆ ڕووداوە نێودەوڵەتییەکانی تیکتۆک',
    perkEnglish: 'Official Blue checkmark verification and VIP TikTok summits',
    perkArabic: 'توثيق الحساب بالعلامة الزرقاء وحضور فعاليات تيك توك العالمية',
  },
  {
    id: 'diamond_club',
    threshold: 10000000,
    titleKurdish: 'یانەی ئەڵماس (Diamond 10M Club)',
    titleEnglish: '10 Million Diamond Elite Club',
    titleArabic: 'نادي النخبة الماسي (١٠ مليون)',
    badge: '💎',
    perkKurdish: 'کاریگەری گەورە لەسەر ترێندی جیهانی و تیمێکی تایبەت لە تیکتۆک',
    perkEnglish: 'Dedicated TikTok partner manager and global trendsetter status',
    perkArabic: 'مدير حساب مخصص من شركة تيك توك وتأثير إعلامي عالمي',
  },
  {
    id: 'ultimate_legend',
    threshold: 50000000,
    titleKurdish: 'ئەفسانەی تیکتۆکی جیهانی (50M Mega Star)',
    titleEnglish: '50 Million Global TikTok Superstar',
    titleArabic: 'أسطورة تيك توك العالمية (٥٠ مليون)',
    badge: '👑',
    perkKurdish: 'ناوبانگی جیهانی، باڵیۆزی بەناوبانگترین براندەکانی جیهان',
    perkEnglish: 'Top 0.001% creator worldwide, multi-million dollar deals',
    perkArabic: 'بين أكبر صناع المحتوى في العالم وشراكات بملايين الدولارات',
  },
];

export const TARGET_GOAL = 50000000;

export function formatCompactNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toLocaleString();
}

export function formatWithCommas(num: number): string {
  return Math.floor(num).toLocaleString('en-US');
}

export function clampFollowers(count: number, min = 0, max = TARGET_GOAL): number {
  if (isNaN(count)) return min;
  return Math.min(Math.max(count, min), max);
}

export function calculateProgress(followers: number, target = TARGET_GOAL): {
  percentage: number;
  currentMilestone: Milestone | null;
  nextMilestone: Milestone | null;
  unlockedMilestones: Milestone[];
  remainingToTarget: number;
  isCompleted: boolean;
} {
  const safeCount = Math.max(0, followers);
  const percentage = Math.min(100, Number(((safeCount / target) * 100).toFixed(2)));
  const unlockedMilestones = MILESTONES.filter((m) => safeCount >= m.threshold);
  
  const currentMilestone = unlockedMilestones.length > 0 
    ? unlockedMilestones[unlockedMilestones.length - 1] 
    : null;
    
  const nextMilestone = MILESTONES.find((m) => safeCount < m.threshold) || null;
  const remainingToTarget = Math.max(0, target - safeCount);
  const isCompleted = safeCount >= target;

  return {
    percentage,
    currentMilestone,
    nextMilestone,
    unlockedMilestones,
    remainingToTarget,
    isCompleted,
  };
}

export interface EstimatedEarnings {
  monthlyCreatorFundMin: number;
  monthlyCreatorFundMax: number;
  perSponsoredPostMin: number;
  perSponsoredPostMax: number;
  annualEstimatedTotal: number;
}

export function calculateEarnings(followers: number): EstimatedEarnings {
  // TikTok Creator Rewards Program estimates (~$0.40 - $1.10 RPM per 1,000 qualified 1m+ views)
  // Active 50M accounts typically generate 100M - 500M views per month
  const ratio = Math.max(0, followers / 1000000);
  
  if (followers < 10000) {
    return {
      monthlyCreatorFundMin: 0,
      monthlyCreatorFundMax: 0,
      perSponsoredPostMin: Math.round(followers * 0.01),
      perSponsoredPostMax: Math.round(followers * 0.03),
      annualEstimatedTotal: 0,
    };
  }

  // Monthly estimate based on average tier
  const monthlyCreatorFundMin = Math.round(ratio * 900);
  const monthlyCreatorFundMax = Math.round(ratio * 2400);
  
  // Sponsored post deals: typically $500 - $1,500 per 1M followers
  const perSponsoredPostMin = Math.round(ratio * 600);
  const perSponsoredPostMax = Math.round(ratio * 1800);

  const annualEstimatedTotal = (monthlyCreatorFundMax * 12) + (perSponsoredPostMax * 24);

  return {
    monthlyCreatorFundMin,
    monthlyCreatorFundMax,
    perSponsoredPostMin,
    perSponsoredPostMax,
    annualEstimatedTotal,
  };
}

export function calculateEngagementRate(likes: number, followers: number, videoCount: number): number {
  if (followers <= 0 || videoCount <= 0) return 0;
  const avgLikesPerVideo = likes / videoCount;
  const rate = (avgLikesPerVideo / followers) * 100;
  return Number(Math.min(rate, 100).toFixed(2));
}

export function generateSimulatedVideoStats(followerCount: number): {
  views: number;
  likes: number;
  shares: number;
  comments: number;
  gainedFollowers: number;
} {
  const baseScale = Math.max(1000, followerCount);
  // Viral ratio: views can range from 30% to 250% of follower count for a viral clip
  const multiplier = 0.4 + Math.random() * 1.6;
  const views = Math.round(baseScale * multiplier);
  const likes = Math.round(views * (0.08 + Math.random() * 0.07));
  const comments = Math.round(likes * (0.02 + Math.random() * 0.03));
  const shares = Math.round(likes * (0.04 + Math.random() * 0.05));
  const gainedFollowers = Math.round(views * (0.005 + Math.random() * 0.015));

  return {
    views,
    likes,
    shares,
    comments,
    gainedFollowers,
  };
}
