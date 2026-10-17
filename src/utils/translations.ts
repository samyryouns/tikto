/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ckb' | 'en' | 'ar';

export interface Translations {
  appTitle: string;
  appSubtitle: string;
  targetBadge: string;
  quickBoost: string;
  instant50M: string;
  autoBoostStart: string;
  autoBoostStop: string;
  resetCounter: string;
  currentFollowers: string;
  progressTo50M: string;
  remainingFollowers: string;
  congrats50M: string;
  congratsDesc: string;
  profileTab: string;
  viralTab: string;
  analyticsTab: string;
  tipsTab: string;
  certificateTab: string;
  customizeProfile: string;
  usernameLabel: string;
  displayNameLabel: string;
  bioLabel: string;
  verifiedLabel: string;
  selectAvatar: string;
  categoryLabel: string;
  postVideo: string;
  videoTitle: string;
  soundLabel: string;
  selectTag: string;
  simulatePost: string;
  liveFeed: string;
  viewsLabel: string;
  likesLabel: string;
  sharesLabel: string;
  commentsLabel: string;
  monthlyEarnings: string;
  creatorRewards: string;
  sponsorshipPerPost: string;
  annualProjection: string;
  topTipsTitle: string;
  bestHoursTitle: string;
  trophyTitle: string;
  downloadCard: string;
  copiedSuccess: string;
  soundToggle: string;
  soundOn: string;
  soundOff: string;
  milestonesTitle: string;
  unlocked: string;
  locked: string;
}

export const translations: Record<Language, Translations> = {
  ckb: {
    appTitle: 'ستۆدیۆی ٥٠ ملیۆن فۆڵۆوەری تیکتۆک',
    appSubtitle: 'سیستەمی گەشەپێدان، زیادکردنی فۆڵۆوەر، شیکاری داهات و ستراتیژی ڕاستەقینەی گەیشتن بە ٥٠،٠٠٠،٠٠٠ فۆڵۆوەر لە تیکتۆک',
    targetBadge: 'ئامانج: ٥٠ ملیۆن فۆڵۆوەر 👑',
    quickBoost: 'زیادکردنی خێرا',
    instant50M: '⚡ گەیاندن بە ٥٠ ملیۆن (Instant 50M Legend)',
    autoBoostStart: 'دەستپێکردنی گەشەی ئۆتۆماتیکی',
    autoBoostStop: 'ڕاگرتنی گەشەی ئۆتۆماتیکی',
    resetCounter: 'سفرکردنەوەی ژمارە',
    currentFollowers: 'کۆی فۆڵۆوەرەکان',
    progressTo50M: 'ڕێژەی پێشکەوتن بۆ ٥٠ ملیۆن',
    remainingFollowers: 'ماوە بۆ گەیشتن بە ٥٠ ملیۆن',
    congrats50M: 'پیرۆزە! گەیشتیتە ٥٠ ملیۆن فۆڵۆوەر لە تیکتۆک! 🎉👑',
    congratsDesc: 'ئێستا ئەفسانەیەکی جیهانیت لە تیکتۆک، لە ڕیزی گەورەترین دروستکەرانی ناوەڕۆک لە جیهاندا!',
    profileTab: '📱 پڕۆفایل و زیادکەر',
    viralTab: '🎬 ڤیدیۆی ترێند',
    analyticsTab: '📊 شیکاری و داهات',
    tipsTab: '💡 نهێنییەکانی ٥٠ ملیۆن',
    certificateTab: '🏆 کارتی فەرمی ٥٠M',
    customizeProfile: 'دەستکاریکردنی زانیارییەکانی پڕۆفایل',
    usernameLabel: 'ناوی بەکارهێنەر (Username)',
    displayNameLabel: 'ناوی پڕۆفایل (Display Name)',
    bioLabel: 'ناساندن (Bio)',
    verifiedLabel: 'نیشانەی باوەڕپێکراوی شین (Verified Badge)',
    selectAvatar: 'هەڵبژاردنی وێنەی پڕۆفایل',
    categoryLabel: 'جۆری ناوەڕۆک',
    postVideo: 'بڵاوکردنەوەی ڤیدیۆیەکی نوێ بۆ تیکتۆک',
    videoTitle: 'سەردێڕی ڤیدیۆکە',
    soundLabel: 'دەنگ یان گۆرانی ترێند',
    selectTag: 'هاشتاگی سەرەکی',
    simulatePost: 'بڵاوکردنەوە و زیادکردنی بینەر 🔥',
    liveFeed: 'کۆمێنت و چالاکییە ڕاستەوخۆکانی تیکتۆک',
    viewsLabel: 'بینەر (Views)',
    likesLabel: 'لایکەکان (Likes)',
    sharesLabel: 'شەیر (Shares)',
    commentsLabel: 'کۆمێنتەکان (Comments)',
    monthlyEarnings: 'داهاتی مانگانەی پێشبینیکراو بە ٥٠ ملیۆن فۆڵۆوەر',
    creatorRewards: 'پاداشتی تیکتۆک لەسەر بینەر (Creator Rewards)',
    sponsorshipPerPost: 'نرخی یەک ڕیکلامی تایبەت (Sponsorship)',
    annualProjection: 'کۆی داهاتی ساڵانەی پێشبینیکراو',
    topTipsTitle: 'ستراتیژییەکانی گەیشتن بە ٥٠ ملیۆن لە تیکتۆک',
    bestHoursTitle: 'باشترین کاتەکانی پۆستکردن لە کوردستان و ڕۆژهەڵاتی ناوەڕاست',
    trophyTitle: 'بڕوانامەی فەرمی دروستکەری ٥٠ ملیۆنی',
    downloadCard: 'کۆپیکردنی کارتی پیرۆزبایی',
    copiedSuccess: 'زانیارییەکان کۆپی کران بۆ کلیپبۆرد!',
    soundToggle: 'دەنگی سیستەم',
    soundOn: 'دەنگ چالاکە',
    soundOff: 'دەنگ بێدەنگە',
    milestonesTitle: 'پلە و بەربەستەکانی تیکتۆک',
    unlocked: 'کراوەتەوە',
    locked: 'قوفڵە',
  },
  en: {
    appTitle: 'TikTok 50M Growth Studio',
    appSubtitle: 'Interactive follower growth simulator, viral video studio, earnings calculator, and real algorithm strategies to reach 50,000,000 followers on TikTok.',
    targetBadge: 'Goal: 50 Million Followers 👑',
    quickBoost: 'Quick Boost',
    instant50M: '⚡ Instant 50M Legend Boost',
    autoBoostStart: 'Start Auto Growth',
    autoBoostStop: 'Stop Auto Growth',
    resetCounter: 'Reset Counter',
    currentFollowers: 'Current Followers',
    progressTo50M: 'Progress towards 50M',
    remainingFollowers: 'Remaining to 50M',
    congrats50M: 'CONGRATULATIONS! 50 Million Followers Achieved! 🎉👑',
    congratsDesc: "You are now in the top 0.001% of global TikTok creators worldwide!",
    profileTab: '📱 Profile & Booster',
    viralTab: '🎬 Viral Studio',
    analyticsTab: '📊 Analytics & Earnings',
    tipsTab: '💡 50M Secrets & Guide',
    certificateTab: '🏆 50M Trophy Card',
    customizeProfile: 'Customize Profile Details',
    usernameLabel: 'TikTok Username',
    displayNameLabel: 'Display Name',
    bioLabel: 'Bio Description',
    verifiedLabel: 'Verified Blue Badge',
    selectAvatar: 'Choose Avatar',
    categoryLabel: 'Content Niche',
    postVideo: 'Publish Viral Video Simulation',
    videoTitle: 'Video Caption / Hook',
    soundLabel: 'Trending Audio Track',
    selectTag: 'Primary Hashtags',
    simulatePost: 'Post & Trigger Viral Surge 🔥',
    liveFeed: 'Live TikTok Activity & Comments',
    viewsLabel: 'Views',
    likesLabel: 'Likes',
    sharesLabel: 'Shares',
    commentsLabel: 'Comments',
    monthlyEarnings: 'Projected Monthly Earnings at 50M Followers',
    creatorRewards: 'TikTok Creator Rewards Program',
    sponsorshipPerPost: 'Brand Sponsorship (per post)',
    annualProjection: 'Estimated Annual Revenue',
    topTipsTitle: 'Real Masterclass: How Creators Reach 50M on TikTok',
    bestHoursTitle: 'Optimal Posting Times (Kurdistan, Middle East & Global)',
    trophyTitle: 'Official 50 Million Creator Certificate',
    downloadCard: 'Copy Trophy Badge Summary',
    copiedSuccess: 'Trophy summary copied to clipboard!',
    soundToggle: 'Audio Effects',
    soundOn: 'Sound On',
    soundOff: 'Sound Muted',
    milestonesTitle: 'TikTok Milestone Roadmap',
    unlocked: 'Unlocked',
    locked: 'Locked',
  },
  ar: {
    appTitle: 'استوديو نمو تيك توك ٥٠ مليون',
    appSubtitle: 'محاكي زيادة المتابعين، استوديو الفيديو الفيروسي، حاسبة الأرباح، وأسرار خوارزمية تيك توك للوصول إلى ٥٠,٠٠٠,٠٠٠ متابع.',
    targetBadge: 'الهدف: ٥٠ مليون متابع 👑',
    quickBoost: 'زيادة سريعة',
    instant50M: '⚡ الوصول المباشر إلى ٥٠ مليون',
    autoBoostStart: 'بدء الزيادة التلقائية',
    autoBoostStop: 'إيقاف الزيادة التلقائية',
    resetCounter: 'إعادة التعيين',
    currentFollowers: 'إجمالي المتابعين',
    progressTo50M: 'نسبة التقدم نحو ٥٠ مليون',
    remainingFollowers: 'المتبقي للوصول إلى ٥٠ مليون',
    congrats50M: 'ألف مبروك! حققت ٥٠ مليون متابع على تيك توك! 🎉👑',
    congratsDesc: 'أصبحت رسمياً من أساطير تيك توك وبين أكبر صناع المحتوى في العالم!',
    profileTab: '📱 الملف والزيادة',
    viralTab: '🎬 استوديو الفيديوهات',
    analyticsTab: '📊 التحليلات والأرباح',
    tipsTab: '💡 أسرار الـ ٥٠ مليون',
    certificateTab: '🏆 درع وشهادة الـ 50M',
    customizeProfile: 'تعديل بيانات الحساب',
    usernameLabel: 'اسم المستخدم (Username)',
    displayNameLabel: 'الاسم الظاهر',
    bioLabel: 'النبذة التعريفية (Bio)',
    verifiedLabel: 'شارة التوثيق الزرقاء (Verified)',
    selectAvatar: 'اختر الصورة الرمزية',
    categoryLabel: 'مجال المحتوى',
    postVideo: 'نشر فيديو فيروسي تجريبي',
    videoTitle: 'عنوان أو مقدمة الفيديو',
    soundLabel: 'الصوت أو الموسيقى الرائجة',
    selectTag: 'الهاشتاغات المستهدفة',
    simulatePost: 'نشر وإطلاق الانتشار السريع 🔥',
    liveFeed: 'التعليقات والتفاعلات المباشرة',
    viewsLabel: 'المشاهدات',
    likesLabel: 'الإعجابات',
    sharesLabel: 'المشاركات',
    commentsLabel: 'التعليقات',
    monthlyEarnings: 'الأرباح الشهرية المتوقعة عند ٥٠ مليون متابع',
    creatorRewards: 'برنامج مكافآت صانعي المحتوى',
    sponsorshipPerPost: 'عقد الرعاية الإعلانية (للفيديو الواحد)',
    annualProjection: 'إجمالي الإيرادات السنوية التقديرية',
    topTipsTitle: 'استراتيجيات واقعية للوصول إلى ٥٠ مليون متابع',
    bestHoursTitle: 'أفضل أوقات النشر في كردستان والشرق الأوسط والعالم',
    trophyTitle: 'شهادة درع الـ ٥٠ مليون الرسمية',
    downloadCard: 'نسخ بطاقة الإنجاز',
    copiedSuccess: 'تم نسخ ملخص الإنجاز للحافظة!',
    soundToggle: 'المؤثرات الصوتية',
    soundOn: 'الصوت مفعل',
    soundOff: 'الصوت مكتوم',
    milestonesTitle: 'مراحل ومكافآت التيك توك',
    unlocked: 'متاح',
    locked: 'مقفل',
  },
};
