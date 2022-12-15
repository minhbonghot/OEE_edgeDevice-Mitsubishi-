const mc = require("mcprotocol");
const conn = new mc();
const axios = require("axios");

const main = () => {
  const machineNames = [
    "STEM_ROUGH",
    "LATHE_HEAD1",
    "LATHE_HEAD2",
    "LATHE_SEAT1",
    "LATHE_SEAT2",
    "LATHE_CHAMBER",
    "LATHE_7",
    "LATHE_8",
    "LATHE_9",
    "LATHE_10",
    "LATHE_11",
    "LATHE_12",
    "LATHE_13",
    "LATHE_14",
    "LATHE_15",
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
    variablesForConnection[`stateStatus${i + 1}`] = `D${interval + 2}.1`;
    variablesForConnection[`productOk${i + 1}`] = `D${interval + 2}.2`;
  
    globalVariables[`downTimeType${i + 1}`] = "";
    globalVariables[`cycleTime${i + 1}`] = "";
    globalVariables[`machineOn${i + 1}`] = false;
    globalVariables[`stateStatus${i + 1}`] = false;
    globalVariables[`productOk${i + 1}`] = false;
  
    globalVariables[`prodTemp${i + 1}`] = 0;
    globalVariables[`confirmSignal${i + 1}`] = false;
    globalVariables[`machineNo${i + 1}`] = machineNames[i];
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
  
    (function loop1() {
      conn.readAllItems(valuesReady)
      setTimeout(loop1, 150)
    })();
    
    // let readVar = () => {
    //   conn.readAllItems(valuesReady)
    //   timer1 = setTimeout(readVar, 100)
    // }  
  
    // timer1 = setTimeout(readVar, 100)
  
  //   setInterval(() => {
  //     conn.readAllItems(valuesReady);
  //   }, 100);
  } 
  
  function valuesReady(err, values) {
    if (err) {
      console.log("SOMETHING WENT WRONG READING VALUES!!!!");
      return;
    }
  
    for (let i = 0; i < totalMachines; i++) {
      globalVariables[`cycleTime${i + 1}`] =
        Number(values[`cycleTime${i + 1}`]) / 10;
      globalVariables[`downTimeType${i + 1}`] = values[`downTimeType${i + 1}`];
      globalVariables[`machineOn${i + 1}`] = values[`machineOn${i + 1}`];
      globalVariables[`stateStatus${i + 1}`] = values[`stateStatus${i + 1}`];
      globalVariables[`machineNo${i + 1}`] = machineNames[i];
  
      // count
      if (values[`productOk${i + 1}`] == false) {
        globalVariables[`confirmSignal${i + 1}`] = true;
      } else { 
        if (globalVariables[`confirmSignal${i + 1}`]) {
          globalVariables[`prodTemp${i + 1}`]++;
          globalVariables[`confirmSignal${i + 1}`] = false;
        }
      }
  
    //   if (values[`productOk${i + 1}`] == false) {
    //     globalVariables[`confirmSignal${i + 1}`] = true;
    //   }
    //   if (
    //     values[`productOk${i + 1}`] &&
    //     globalVariables[`confirmSignal${i + 1}`]
    //   ) {
    //     globalVariables[`prodTemp${i + 1}`] =
    //       globalVariables[`prodTemp${i + 1}`] + 1;
    //     globalVariables[`confirmSignal${i + 1}`] = false;
    //   }
    }
  
    globalVariables.lotNo = regex(cutString(values.lotNo));
    globalVariables.modelNo = regex(cutString(values.modelNo));
  }
  
  
  const assignAndPushData = async () => {
    // (function assignAndPushData () {
    //   setTimeout(async function () {
        try {
          let productVariables = {};
          for (let i = 0; i < totalMachines; i++) {
            productVariables[`prodTotal${i + 1}`] = "";
            productVariables[`prodPassed${i + 1}`] = "";
            productVariables[`prodFailed${i + 1}`] = "";
          }
          let present = new Date();
          let year = present.getFullYear();
          let month = (present.getMonth() + 1).toString().padStart(2, "0");
          let day = present.getDate().toString().padStart(2, "0");
          let hour = present.getHours().toString().padStart(2, "0");
          let minute = present.getMinutes().toString().padStart(2, "0");
      
          let dateCreated = `${year}-${month}-${day}T${hour}:${minute}:00.000Z`;
      
          // assign productTotal, productPassed, productFailed wit productTemp
          for (let i = 0; i < totalMachines; i++) {
            productVariables[`prodTotal${i + 1}`] =
              globalVariables[`prodTemp${i + 1}`];
            productVariables[`prodPassed${i + 1}`] =
              globalVariables[`prodTemp${i + 1}`];
            productVariables[`prodFailed${i + 1}`] = 0;
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
                prodTotal: productVariables[`prodTotal${i + 1}`],
                prodPassed: productVariables[`prodPassed${i + 1}`],
                prodFailed: productVariables[`prodFailed${i + 1}`],
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
            }
      
            // Ouput final data
            // console.log(obj);
      
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
      
            await Promise.any(queries);
          }
          // setTimeout(assignAndPushData, 10000)
        } catch (error) {
          console.log(error);
        }
        // assignAndPushData();
      }
  
  // Push data after 1 minute
  // timer2 = setTimeout(assignAndPushData, 10000);
  
  
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
  
  
    setInterval(() => {
      assignAndPushData();
    }, 60000);
} 

main();
