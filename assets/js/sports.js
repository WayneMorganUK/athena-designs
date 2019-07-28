var sourceUrl = [
  "https://ul.cdn946.net:8443/hls/ah1n0m8srsdrmh.m3u8",
  
  "https://baldystreamer.azureedge.net/83fe2f5a-1b09-4202-b200-56f351a07fb5/92c2a94c-ff11-409e-a439-ca1b12c2bc42.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "https://neo2cdn.azureedge.net/8bc2d448-0b1d-4785-b4d7-d2519d95e757/84441ca5-ea68-47bb-8db6-cfc97f0a9a62.ism/Manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "http://shacktv.com:8080/live/alessandro01/alessandro01/21797.m3u8",

  "http://192.240.113.138:8080/live/alessandro01/alessandro01/21797.m3u8",

  "http://whostreams.net/87546f8d-fcfd-4ea5-be7e-e672476813d7.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8"
]
var title = [
  "F1",
  "Leicester v Man Utd",
  "Ajax v Real Madrid",
  "Bournemouth v Chelsea",
  "tbc",
  "tbc"
];

var player = []
for (var i = 0; i < 6; i++) {
  document.getElementById("player" + (i+1)).innerHTML = title[i];
  player[i] = new Clappr.Player({
  source: sourceUrl[i],
  width: '384px',
  height: '216px',
  parentId: "#player" + (i+1)
  })
}
