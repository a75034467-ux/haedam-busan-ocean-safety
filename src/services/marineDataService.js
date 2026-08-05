// Replace this module with an API adapter when a live data connection is available.
const updatedAt = '2026. 08. 05. 10:00';

const rows = [
  ['haeundae','해운대해수욕장','해운대구 우동','해운대',[35.1587,129.1604],[35.1569,129.1642],430,18,24.9,.6,380,310,'관심','보름달물해파리','동남풍 2.1m/s','해안 쪽 유입','정상'],
  ['gwangalli','광안리해수욕장','수영구 광안동','광안리',[35.1532,129.1186],[35.1514,129.1183],390,46,24.9,.6,240,270,'관심','보름달물해파리','남서풍 3.3m/s','만 안쪽 분산','정상'],
  ['songjeong','송정해수욕장','해운대구 송정동','송정',[35.1797,129.1995],[35.1804,129.2015],360,35,24.9,.6,320,260,'관심','보름달물해파리','동풍 3.8m/s','해안 쪽 유입','정상'],
  ['songdo','송도해수욕장','서구 암남동','송도',[35.0764,129.0233],[35.0752,129.0244],340,64,24.9,.6,1200,800,'주의보','보름달물해파리','남풍 5.7m/s','만 안쪽 분산','입수 주의'],
  ['dadaepo','다대포해수욕장','사하구 다대동','다대포',[35.0460,128.9679],[35.0445,128.9663],420,27,23.8,.4,160,210,'관심','보름달물해파리','서풍 2.7m/s','완만한 진입','정상'],
  ['ilgwang','일광해수욕장','기장군 일광읍','일광',[35.2646,129.2338],[35.2630,129.2357],380,73,25,.6,640,430,'관심','노무라입깃해파리','동풍 6.5m/s','사선 진입','입수 주의'],
  ['imrang','임랑해수욕장','기장군 장안읍','임랑',[35.3218,129.2639],[35.3206,129.2652],350,52,25,.6,0,0,'관심','보름달물해파리','북동풍 4.2m/s','해안 쪽 유입','정상'],
];

export const getMarineData = () => rows.map(([id,name,area,shortName,center,riskCenter,radius,rip,temperature,wave,jelly,jellyPrevious,jellyAlert,species,wind,waveDirection,control]) => ({
  id,name,area,shortName,center,riskCenter,radius,rip,temperature,wave,jelly,jellyPrevious,jellyAlert,species,wind,waveDirection,control,updatedAt,
  weekly: jelly ? [Math.round(jelly*.35),Math.round(jelly*.52),Math.round(jelly*.72),jelly] : [4,7,5,0],
}));

export const refreshMarineData = data => data.map((b, i) => ({...b, updatedAt:new Date().toLocaleTimeString('ko-KR',{hour:'2-digit',minute:'2-digit'}), wave:Number(Math.max(.2,b.wave+(i%3-1)*.02).toFixed(1))}));
