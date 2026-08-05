# 해담

부산의 7개 주요 해수욕장을 위한 반응형 해양 안전 웹앱입니다. 해파리, 이안류, 미세플라스틱 정보를 종합해 해수욕장별 위험도를 안내합니다.

## 기술

- React + Vite
- Leaflet + OpenStreetMap
- Browser LocalStorage (즐겨찾기·다크 모드·알림·위치·언어 설정)
- Browser Geolocation API (현재 위치 요청)

## 실행

```bash
npm install
npm run dev
```

배포용 빌드는 `npm run build`입니다.

## 파일 구조

```text
.
├── index.html
├── package.json
├── src/
│   ├── main.jsx       # 화면, 지도, 시연 데이터, 상태 관리
│   └── styles.css     # 반응형 UI 및 다크 모드
└── README.md
```

## 확인할 기능

- 홈 지도: 마커를 누르면 해당 해수욕장 상세 화면으로 이동합니다.
- 지도 필터: 해파리·이안류·미세플라스틱·산책로 표시를 켜고 끌 수 있습니다.
- 위험도: 7개 해수욕장이 종합 점수 내림차순으로 정렬됩니다.
- 즐겨찾기: 위험도 카드 및 상세 화면에서 저장하며 설정 화면에서 관리합니다.
- 설정: 다크 모드, 알림, 위치 권한, 언어 선택이 LocalStorage에 유지됩니다.

## 실제 데이터 연동

`src/main.jsx` 상단의 `beaches` 배열이 시연 데이터입니다. 각 항목의 `score`, `jelly`, `rip`, `micro`, `weather`, `temp`, 좌표 및 안내 문구를 실제 API 응답으로 변환해 교체하면 나머지 화면과 정렬 로직은 그대로 동작합니다.
