import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatCompactNumber,
  formatWithCommas,
  clampFollowers,
  calculateProgress,
  calculateEarnings,
  calculateEngagementRate,
  generateSimulatedVideoStats,
  TARGET_GOAL,
  MILESTONES,
} from './growthLogic.ts';

test('formatCompactNumber formats values accurately', () => {
  assert.equal(formatCompactNumber(950), '950');
  assert.equal(formatCompactNumber(1500), '1.5K');
  assert.equal(formatCompactNumber(25000), '25K');
  assert.equal(formatCompactNumber(1000000), '1M');
  assert.equal(formatCompactNumber(50000000), '50M');
  assert.equal(formatCompactNumber(1200000000), '1.2B');
});

test('formatWithCommas formats integers with standard separators', () => {
  assert.equal(formatWithCommas(0), '0');
  assert.equal(formatWithCommas(50000000), '50,000,000');
  assert.equal(formatWithCommas(1234567.89), '1,234,567');
});

test('clampFollowers constrains values to boundaries', () => {
  assert.equal(clampFollowers(-50), 0);
  assert.equal(clampFollowers(25000000), 25000000);
  assert.equal(clampFollowers(60000000), TARGET_GOAL);
  assert.equal(clampFollowers(NaN), 0);
});

test('calculateProgress tracks milestones up to 50M', () => {
  // Test starting state
  const startProgress = calculateProgress(0);
  assert.equal(startProgress.percentage, 0);
  assert.equal(startProgress.currentMilestone, null);
  assert.equal(startProgress.nextMilestone?.threshold, 1000);
  assert.equal(startProgress.isCompleted, false);

  // Test 10K milestone
  const fundProgress = calculateProgress(10000);
  assert.equal(fundProgress.currentMilestone?.id, 'creator_fund');
  assert.equal(fundProgress.nextMilestone?.id, 'silver_creator');

  // Test 50M target achieved
  const finalProgress = calculateProgress(50000000);
  assert.equal(finalProgress.percentage, 100);
  assert.equal(finalProgress.currentMilestone?.id, 'ultimate_legend');
  assert.equal(finalProgress.nextMilestone, null);
  assert.equal(finalProgress.isCompleted, true);
  assert.equal(finalProgress.unlockedMilestones.length, MILESTONES.length);
});

test('calculateEarnings provides realistic estimates for 50M creators', () => {
  const lowFollowerEarnings = calculateEarnings(500);
  assert.equal(lowFollowerEarnings.monthlyCreatorFundMin, 0);

  const starEarnings = calculateEarnings(50000000);
  assert(starEarnings.monthlyCreatorFundMin >= 40000, '50M monthly fund should be substantial');
  assert(starEarnings.perSponsoredPostMin >= 25000, '50M sponsored post min should be substantial');
  assert(starEarnings.annualEstimatedTotal > 0);
});

test('calculateEngagementRate computes correct percentages', () => {
  assert.equal(calculateEngagementRate(0, 0, 0), 0);
  // 1,000,000 likes across 10 videos = 100,000 avg likes. With 1,000,000 followers = 10%
  const rate = calculateEngagementRate(1000000, 1000000, 10);
  assert.equal(rate, 10);
});

test('generateSimulatedVideoStats produces positive metrics and gained followers', () => {
  const stats = generateSimulatedVideoStats(1000000);
  assert(stats.views > 0);
  assert(stats.likes > 0);
  assert(stats.shares > 0);
  assert(stats.comments > 0);
  assert(stats.gainedFollowers > 0);
});
