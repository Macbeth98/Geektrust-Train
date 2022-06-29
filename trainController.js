const { trainA_route, trainB_route, merge_station, trainA_merge_distance, trainB_merge_distance } = require("./train_routes");

const getTrainsFromInput = async (input_arr) => {
  try {

    let trainA = input_arr[0].split(" ");
    let trainB = input_arr[1].split(" ");

    getMergeTrain(trainA, trainB);

    return ;

  } catch (e) {
    console.log(e);
    return ;
  }
}

let fromMerge_distance = []

const checkBogieAndDistance = async (bogie)=> {
  return new Promise(async (resolve)=>{
    try {

      let distance;

      if(trainA_route[bogie]) {
        if (trainA_route[bogie] >= trainA_merge_distance) {
          distance = trainA_route[bogie] - trainA_merge_distance;
        } else return resolve(false)
      } else if (trainB_route[bogie]) {
        if(trainB_route[bogie] >= trainB_merge_distance) {
          distance = trainB_route[bogie] - trainB_merge_distance;
        } else return resolve(false);
      } else {
        return resolve(false);
      }

      if(bogie !== merge_station) {
        fromMerge_distance.push({
          bogie, distance
        })
      }

      return resolve(bogie);

    } catch (e){
      console.log(e);
      return resolve(false)
    }
  })
}

const getMergeTrain = async (trainA, trainB) => {
  try {

    let trainA_str = "ARRIVAL TRAIN_A ENGINE";
    let trainB_str = "ARRIVAL TRAIN_B ENGINE";

    let length = trainA.length > trainB.length ? trainA.length: trainB.length;
    let startIndex = 2;

    for (let i=startIndex; i<length; i++) {

      let bogieA = trainA[i];
      let bogieB = trainB[i];
      let bogie

      if(bogieA) {
        bogie = await checkBogieAndDistance(bogieA)

        if(bogie) trainA_str += " " + bogie;
      }

      if(bogieB) {
        bogie = await checkBogieAndDistance(bogieB);

        if(bogie) trainB_str += " " + bogie;
      }

    }

    printTrains(trainA_str, trainB_str, fromMerge_distance);
    
    return ;

  } catch (e) {
    console.log(e);
    return ;
  }
}

const printTrains = async (trainA_str, trainB_str, fromMerge_distance) => {
  try {

    if(fromMerge_distance.length === 0) {
      console.log("JOURNEY_ENDED");
      return ;
    }

    fromMerge_distance.sort((a, b) => {
      return b.distance - a.distance
    });

    let trainAB_str = "DEPARTURE TRAIN_AB ENGINE ENGINE"

    for (const bogie_data of fromMerge_distance) {
      let bogie = bogie_data.bogie;
      trainAB_str += " " + bogie;
    }

    console.log(trainA_str);
    console.log(trainB_str);
    console.log(trainAB_str);

    return ;

  } catch (e) {
    console.log(e);
    return ;
  }
}

module.exports = {
  getTrainsFromInput
}

class Train {
  constructor () {
    this._id = "Train A";
  }

  get ID() {
    return this._id;
  }
}

const train1 = new Train();
console.log(train1.ID);