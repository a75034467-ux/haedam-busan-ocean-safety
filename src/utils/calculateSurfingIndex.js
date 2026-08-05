export function calculateSurfingIndex(beach, skill='beginner', period='morning') {
  let score = beach.wave < .5 ? 48 : beach.wave <= .9 ? 84 : beach.wave <= 1.4 ? 72 : beach.wave <= 2.6 ? 60 : 30;
  score += beach.temperature >= 23 ? 6 : 0;
  score += beach.wind.includes('6.') ? -18 : beach.wind.includes('5.') ? -12 : beach.wind.includes('4.') ? -6 : 6;
  if (period === 'afternoon') score -= 6;
  if (beach.rip >= 80 || beach.control === '입수 금지') score = 0;
  else if (beach.rip >= 55) score = Math.min(score, 28);
  else if (beach.rip >= 30) score = Math.min(score, 70);
  score = Math.max(0, Math.min(100, Math.round(score)));
  const status = score === 0 ? '매우 나쁨' : score < 30 ? '나쁨' : score < 52 ? '보통' : score < 76 ? '좋음' : '매우 좋음';
  const range = skill === 'beginner' ? '0.5~0.9m' : skill === 'intermediate' ? '1.0~1.4m' : '1.4~2.6m';
  return { score, status, range, reason: beach.rip >= 55 ? '이안류 단계가 서핑 이용 판단에 우선 적용됩니다.' : `선택한 숙련도의 권장 파고는 ${range}입니다.` };
}
