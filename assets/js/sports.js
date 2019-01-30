var sourceUrl = [
  "https://barrystantonofficial.azureedge.net/0f2453cc-8aa9-4a2d-87f8-3e1cb4ea7b0f/9d699859-0eef-4999-aa4b-8e30c79abf3c.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "https://fricmoddedsstrim.azureedge.net/e88d119a-84e3-4885-ac99-482fbefac399/7e2f2ab3-cff6-4309-8100-ad86909c50b0.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "http://sidovlerovle.azureedge.net/l/playlist.m3u8",

  "https://barrystantonofficial.azureedge.net/5307bef2-3e9b-4655-8887-7648107b86ef/b6e0a94c-d1c1-4653-8507-ca578a140754.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "https://hls305304.r-cdn.com/trn_61810/561/playlist.m3u8?st=mR2XE9TY52uOhnHk364SLQ&e=1547999424",

  "http://whostreams.net/87546f8d-fcfd-4ea5-be7e-e672476813d7.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8"
]
var title = [
  "Liverpool v Leicester City",
  "Liverpool v Leicester City",
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
