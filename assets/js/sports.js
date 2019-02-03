var sourceUrl = [
  "https://waynerooneystream.azureedge.net/7370e1ca-6b4f-4623-93cb-56f6b7e11d52/3e131bec-8f5f-49f1-b6b3-cfeec4360e72.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "https://baldystreamer.azureedge.net/83fe2f5a-1b09-4202-b200-56f351a07fb5/92c2a94c-ff11-409e-a439-ca1b12c2bc42.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "http://roedflvoerl.azureedge.net/w/playlist.m3u8",

  "http://shacktv.com:8080/live/alessandro01/alessandro01/21797.m3u8",

  "http://192.240.113.138:8080/live/alessandro01/alessandro01/21797.m3u8",

  "http://whostreams.net/87546f8d-fcfd-4ea5-be7e-e672476813d7.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8"
]
var title = [
  "Leicester v Man Utd",
  "Leicester v Man Utd",
  "Liverpool v Leicester City",
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