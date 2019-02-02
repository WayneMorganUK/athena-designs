var sourceUrl = [
  "http://450618802882455e9f9f4308fc72335e.azureedge.net/fbd4c9f6-237d-489b-9152-0239058c265c/60cf9cdc-5354-499e-8c67-53212ebea2ac.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "http://92.241.132.11:1935/live/_definst_/ngrp:bris_all/playlist.m3u8",

  "http://sidovlerovle.azureedge.net/l/playlist.m3u8",

  "https://barrystantonofficial.azureedge.net/5307bef2-3e9b-4655-8887-7648107b86ef/b6e0a94c-d1c1-4653-8507-ca578a140754.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8",

  "https://hls305304.r-cdn.com/trn_61810/561/playlist.m3u8?st=mR2XE9TY52uOhnHk364SLQ&e=1547999424",

  "http://whostreams.net/87546f8d-fcfd-4ea5-be7e-e672476813d7.ism/manifest(video,format=m3u8-aapl-v3,audiotrack=audio).m3u8"
]
var title = [
  "Spurs v Newcastle",
  "Bristol v Swans",
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
