// API 교체 지점: 실제 관측 API 연결 시 이 모듈의 getMarineData만 교체합니다.
const updatedAt = '2026. 08. 05. 10:00';

const raw = [
  ['haeundae','해운대해수욕장','해운대구 우동','해운대',[35.15870,129.16039],[35.15788,129.16345],44,24.9,.6,18,380,310,'예비주의보','보름달물해파리','남동풍 2.1m/s','해안 수직 입사','정상'],
  ['gwangalli','광안리해수욕장','수영구 광안동','광안리',[35.15317,129.11862],[35.15160,129.11850],38,24.9,.6,46,240,270,'관심','보름달물해파리','남서풍 3.3m/s','만 안쪽 분산','정상'],
  ['songjeong','송정해수욕장','해운대구 송정동','송정',[35.17965,129.19953],[35.18025,129.20162],42,24.9,.6,35,320,260,'예비주의보','보름달물해파리','동풍 3.8m/s','해안 수직 입사','정상'],
  ['songdo','송도해수욕장','서구 암남동','송도',[35.07639,129.02332],[35.07532,129.02420],34,24.9,.6,64,1200,800,'주의보','보름달물해파리','남동풍 5.7m/s','만 안쪽 분산','현장 주의'],
  ['dadaepo','다대포해수욕장','사하구 다대동','다대포',[35.04604,128.96788],[35.04458,128.96660],36,23.8,.4,27,160,210,'관심','보름달물해파리','남풍 2.7m/s','완만한 진입','정상'],
  ['ilgwang','일광해수욕장','기장군 일광읍','일광',[35.26460,129.23380],[35.26318,129.23525],38,25,.6,73,640,430,'예비주의보','노무라입깃해파리','동풍 6.5m/s','사선 진입','현장 주의'],
  ['imrang','임랑해수욕장','기장군 장안읍','임랑',[35.32180,129.26390],[35.32062,129.26512],36,25,.6,52,0,0,'관심','보름달물해파리','북동풍 4.2m/s','해안 수직 입사','정상']
];

export const getMarineData = () => raw.map(([id,name,area,shortName,center,riskCenter,radius,temperature,wave,rip,jelly,jellyPrevious,jellyAlert,species,wind,waveDirection,control]) => ({
  id,name,area,shortName,center,riskCenter,radius,temperature,wave,rip,jelly,jellyPrevious,jellyAlert,species,wind,waveDirection,control,updatedAt,
  weekly: jelly ? [Math.max(20, Math.round(jelly*.35)),Math.max(20, Math.round(jelly*.52)),Math.max(20, Math.round(jelly*.72)),jelly] : [5,8,6,4],
  terrain: id==='gwangalli'||id==='songdo' ? '육지 안쪽으로 들어간 만 형태입니다. 파도와 흐름은 지형에 따라 분산될 수 있으나, 현재 이안류지수와 현장 통제를 우선 확인하세요.' : id==='dadaepo' ? '완만하고 평탄한 경사면이 이어지는 지형입니다. 급격한 수심 변화 가능성이 상대적으로 낮을 수 있지만, 지형만으로 안전을 보장하지 않습니다.' : '해안선과 모래사장 방향에 따라 파도와 흐름이 달라질 수 있습니다. 입수 전 현재 상태와 현장 안내를 확인하세요.'
}));

export const refreshMarineData = (data) => data.map((b,i) => ({...b, updatedAt: new Date().toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'}), wave: Number(Math.max(.2,b.wave+(i%3-1)*.02).toFixed(1))}));
