var sourceUrl = [
  "https://brexitmatthew.azureedge.net/370bb267-1cbd-4834-be54-89f7008c5ca5/26f50ee5-dc9b-4cbf-a1c9-d7e7eff33eb8.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "https://fmodeds.azureedge.net/7f056f42-e22c-496f-9bf2-8608dbc64079/309a1b54-259d-4cdd-bd08-e74c58ab60ab.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "https://video-weaver.m3u8",

  "http://dubsavm.azureedge.net/live/cnbc/chunks.m3u8",

  "https://hls305304.r-cdn.com/trn_61810/561/playlist.m3u8?st=mR2XE9TY52uOhnHk364SLQ&e=1547999424",

  "http://whostreams.net/87546f8d-fcfd-4ea5-be7e-e672476813d7.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8"
]

var player = []
for (var i = 0; i < 6; i++) {
  player[i] = new Clappr.Player({
  source: sourceUrl[i],
  width: '384px',
  height: '216px',
  parentId: "#player" + (i+1)
  })
}
