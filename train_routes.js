const trainA_route = {
  CHN: 0,
  SLM: 350,
  BLR: 550,
  KRN: 900,
  HYB: 1200,
  NGP: 1600,
  ITJ: 1900,
  BPL: 2000,
  AGA: 2500,
  NDL: 2700
}

const trainB_route = {
  TVC: 0,
  SRR: 300,
  MAQ: 600,
  MAO: 1000,
  PNE: 1400,
  HYB: 2000,
  NGP: 2400,
  ITJ: 2700,
  BPL: 2800,
  PTA: 3800,
  NJP: 4200,
  GHY: 4700
}

const merge_station = "HYB";
const split_station = "BPL";

const trainA_merge_distance = trainA_route[merge_station];
const trainB_merge_distance = trainB_route[merge_station];

module.exports = {
  trainA_route,
  trainB_route,
  merge_station,
  split_station,
  trainA_merge_distance,
  trainB_merge_distance
}