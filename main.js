const mc = require("mcprotocol");
const conn = new mc();
const axios = require("axios");

const machineNames = [
  "STEM_ROUGH",
  "LATHE_HEAD1",
  "LATHE_HEAD2",
  "LATHE_HEAD3",
  "LATHE_HEAD4",
  "LATHE_HEAD5",
  "LATHE_HEAD6",
  "LATHE_HEAD7",
  "LATHE_HEAD8",
  "LATHE_HEAD9",
  "LATHE_HEAD10",
  "LATHE_HEAD11",
  "LATHE_HEAD12",
  "LATHE_HEAD13",
  "LATHE_HEAD14",
  "LATHE_HEAD15",
];

const demoMachineNames = [
  "Demo 1",
  "Demo 2",
  "Demo 3",
  "Demo 4",
  "Demo 5",
  "Demo 6",
  "Demo 7",
  "Demo 8",
  "Demo 9",
  "Demo 10",
  "Demo 11",
  "Demo 12",
  "Demo 13",
  "Demo 14",
  "Demo 15",
];
const totalMachines = 15;

// Variables
let variablesForConnection = {
  modelNo: "RSTR0,10", // String that is 10 characters (5 words) starting at R0
  lotNo: "RSTR10,10", //String that is 10 characters (5 words) starting at R10
};

let globalVariables = {
  modelNo: "",
  lotNo: "",
  target: 0,
  oeeIndicator: 0,
  availableIndicator: 0,
  performanceIndicator: 0,
  qualityIndicator: 0,
};

for (let i = 0; i < totalMachines; i++) {
  let interval = 100 + i * 10;
  variablesForConnection[`downTimeType${i + 1}`] = `D${interval},1`;
  variablesForConnection[`cycleTime${i + 1}`] = `D${interval + 1},1`;
  variablesForConnection[`machineOn${i + 1}`] = `D${interval + 2}.0`;
  variablesForConnection[`stateStatus${i + 1}`] = `D${interval + 1}.1`;
  variablesForConnection[`productOk${i + 1}`] = `D${interval + 1}.2`;

  globalVariables[`downTimeType${i + 1}`] = "";
  globalVariables[`cycleTime${i + 1}`] = "";
  globalVariables[`machineOn${i + 1}`] = "";
  globalVariables[`stateStatus${i + 1}`] = "";
  globalVariables[`productOk${i + 1}`] = "";

  globalVariables[`prodTemp${i + 1}`] = "";
  globalVariables[`confirmSignal${i + 1}`] = "";
  globalVariables[`machineNo${i + 1}`] = machineNames[i];
  globalVariables[`prodTotal${i + 1}`] = "";
  globalVariables[`prodPassed${i + 1}`] = "";
  globalVariables[`prodFailed${i + 1}`] = "";
}

// Connect to PLC

conn.initiateConnection(
  { port: 5001, host: "10.203.32.228", ascii: false },
  connected
);

function connected(err) {
  if (typeof err !== "undefined") {
    console.log(err);
    process.exit();
  }

  conn.setTranslationCB(function (tag) {
    return variablesForConnection[tag];
  });

  Object.keys(variablesForConnection).forEach((key) => {
    conn.addItems(key);
  });

  setInterval(() => {
    conn.readAllItems(valuesReady);
  }, 100);
}

function valuesReady(err, values) {
  if (err) {
    console.log("SOMETHING WENT WRONG READING VALUES!!!!");
    return;
  }
  for (let i = 0; i < totalMachines; i++) {
    globalVariables[`productOk${i + 1}`] = values[`productOk${i + 1}`];
    globalVariables[`confirmSignal${i + 1}`] = values[`confirmSignal${i + 1}`];
    globalVariables[`prodTemp${i + 1}`] = values[`prodTemp${i + 1}`];

    globalVariables[`cycleTime${i + 1}`] =
      Number(values[`cycleTime${i + 1}`]) / 10;
    globalVariables[`downTimeType${i + 1}`] = "";
    globalVariables[`machineOn${i + 1}`] = "";
    globalVariables[`stateStatus${i + 1}`] = "";
    globalVariables[`machineNo${i + 1}`] = machineNames[i];

    if (values[`productOk${i + 1}`] === false) {
      globalVariables[`confirmSignal${i + 1}`] = true;
    }
    if (
      values[`productOk${i + 1}`] &&
      globalVariables[`confirmSignal${i + 1}`]
    ) {
      globalVariables[`prodTemp${i + 1}`] =
        globalVariables[`prodTemp${i + 1}`] + 1;
      globalVariables[`confirmSignal${i + 1}`] = false;
    }
  }

  globalVariables.lotNo = regex(cutString(values.lotNo));
  globalVariables.modelNo = regex(cutString(values.modelNo));
}

const assignAndPushData = async () => {
  try {
    let present = new Date();
    let year = present.getFullYear();
    let month = (present.getMonth() + 1).toString().padStart(2, "0");
    let day = present.getDate().toString().padStart(2, "0");
    let hour = present.getHours().toString().padStart(2, "0");
    let minute = present.getMinutes().toString().padStart(2, "0");

    let dateCreated = `${year}-${month}-${day}T${hour}:${minute}:00.000Z`;

    // assign productTotal, productPassed, productFailed wit productTemp
    for (let i = 0; i < totalMachines; i++) {
      globalVariables[`prodTotal${i + 1}`] =
        globalVariables[`prodTemp${i + 1}`];
      globalVariables[`prodPassed${i + 1}`] =
        globalVariables[`prodTemp${i + 1}`];
      globalVariables[`prodFailed${i + 1}`] = 0;
    }

    // reset productTemp
    for (let i = 0; i < totalMachines; i++) {
      globalVariables[`prodTemp${i + 1}`] = 0;
    }

    // push data to server
    let obj = {};
    if (
      globalVariables.lotNo != "undefined" ||
      globalVariables.lotNo != "BAD 255"
    ) {
      for (let i = 0; i < totalMachines; i++) {
        obj[`rawData${i + 1}`] = {
          machineNo: globalVariables[`machineNo${i + 1}`],
          lotNo: globalVariables.lotNo,
          modelNo: globalVariables.modelNo,
          target: globalVariables.target,
          cycleTime: globalVariables[`cycleTime${i + 1}`],
          prodTotal: globalVariables[`prodTotal${i + 1}`],
          prodPassed: globalVariables[`prodPassed${i + 1}`],
          prodFailed: globalVariables[`prodFailed${i + 1}`],
          downTimeType: globalVariables[`downTimeType${i + 1}`],
          stateStatus: globalVariables[`stateStatus${i + 1}`],
          machineOn: globalVariables[`machineOn${i + 1}`],
          oeeIndicator: globalVariables.oeeIndicator,
          availableIndicator: globalVariables.availableIndicator,
          performanceIndicator: globalVariables.performanceIndicator,
          qualityIndicator: globalVariables.qualityIndicator,
          year: String(year),
          month: String(month),
          day: String(day),
          hour: String(hour),
          minute: String(minute),
          dateCreated: String(dateCreated),
        };

        obj[`demoData${i + 1}`] = {
          ...obj[`rawData${i + 1}`],
          machineNo: demoMachineNames[i],
        };
        // array.push(obj)
      }

      // Ouput final data
      console.log(obj);

      let queries = Object.keys(obj).map((key) => {
        if (key.includes("demo")) {
          return axios.post(
            "https://oee.pambu.org/demo/api/v1/rawData",
            obj[key]
          );
        }
        if (key.includes("raw")) {
          return axios.post(
            "https://oee.pambu.org/nittan/api/v1/rawData",
            obj[key]
          );
        }
      });

      await Promise.all(queries);
    }
  } catch (error) {
    console.log(error);
  }
};

function cutString(arr) {
  let newName = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "\x00") {
      newName += arr[i];
    }
  }
  return newName;
}

function regex(str) {
  return str.replace(/[ ]/g, "");
}

// Push data after 1 minute
setInterval(() => {
  assignAndPushData();
}, 10000);
