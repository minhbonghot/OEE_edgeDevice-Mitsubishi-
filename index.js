const mc = require("mcprotocol");
const conn = new mc();
const axios = require("axios");

const main = () => {
  const machineNames = ["MB8"];

  const totalMachines = 1;

  // Variables
  let variablesForConnection = {
    modelNo: "RSTR1000,30", // String that is 10 characters (5 words) starting at R0
    // lotNo: "RSTR10,10", //String that is 10 characters (5 words) starting at R10
    //targetByShift: "D103,1",
    //targetByLot: "D105,1",
    productTarget: "RDINT102",
  };

  let globalVariables = {
    modelNo: "",
    //lotNo: "",
    productTarget: "",
  };

  for (let i = 0; i < totalMachines; i++) {
    let interval = 100 + i * 10;
    variablesForConnection[`downTimeNo${i + 1}`] = `R${interval + 8},1`;
    variablesForConnection[`cycleTime${i + 1}`] = `R${interval + 1},1`;
    variablesForConnection[`machineOn${i + 1}`] = `R${interval + 9}.1`;
    variablesForConnection[`stateStatus${i + 1}`] = `R${interval + 9}.0`;
    variablesForConnection[`productCount${i + 1}`] = `RDINT${interval + 4}`;
    variablesForConnection[`timeRunningCount${i + 1}`] = `RDINT${interval + 6}`;

    globalVariables[`downTimeNo${i + 1}`] = "";
    globalVariables[`cycleTime${i + 1}`] = "";
    globalVariables[`machineOn${i + 1}`] = false;
    globalVariables[`stateStatus${i + 1}`] = false;
    globalVariables[`productCount${i + 1}`] = "";
    globalVariables[`timeRunningCount${i + 1}`] = "";
    globalVariables[`machineNo${i + 1}`] = machineNames[i];
  }

  // Connect to PLC

  conn.initiateConnection(
    { port: 5001, host: "10.203.32.228", ascii: false },
    connected
  );

  function connected(err) {
    if (typeof err !== "undefined") {
      // console.log(err);
      process.exit();
    }

    conn.setTranslationCB(function (tag) {
      return variablesForConnection[tag];
    });

    Object.keys(variablesForConnection).forEach((key) => {
      conn.addItems(key);
    });

    (function loop1() {
      conn.readAllItems(valuesReady);
      setTimeout(loop1, 150);
    })();
  }

  function valuesReady(err, values) {
    if (err) {
      // console.log("SOMETHING WENT WRONG READING VALUES!!!!");
      return;
    }

    for (let i = 0; i < totalMachines; i++) {
      globalVariables[`cycleTime${i + 1}`] =
        Number(values[`cycleTime${i + 1}`]) / 100;
      globalVariables[`downTimeNo${i + 1}`] = values[`downTimeNo${i + 1}`];
      globalVariables[`machineOn${i + 1}`] = values[`machineOn${i + 1}`];
      globalVariables[`stateStatus${i + 1}`] = values[`stateStatus${i + 1}`];
      globalVariables[`machineNo${i + 1}`] = machineNames[i];
      globalVariables[`productCount${i + 1}`] = values[`productCount${i + 1}`];
      globalVariables[`timeRunningCount${i + 1}`] =
        values[`timeRunningCount${i + 1}`];

      // count
      // if (values[`productOk${i + 1}`] == false) {
      //   globalVariables[`confirmSignal${i + 1}`] = true;
      // } else {
      //   if (globalVariables[`confirmSignal${i + 1}`]) {
      //     globalVariables[`prodTemp${i + 1}`]++;
      //     globalVariables[`confirmSignal${i + 1}`] = false;
      //   }
      // }
    }

    // globalVariables.lotNo = regex(cutString(values.lotNo));
    globalVariables.modelNo = regex(cutString(values.modelNo));
    // globalVariables.modelNo = values.modelNo;
    // globalVariables.targetByShift = values.targetByShift;
    // globalVariables.targetByLot = values.targetByLot;
    globalVariables.productTarget = values.productTarget;
  }

  const assignAndPushData = async () => {
    // (function assignAndPushData () {
    //   setTimeout(async function () {
    try {
      // let productVariables = {};
      // for (let i = 0; i < totalMachines; i++) {
      //   productVariables[`prodTotal${i + 1}`] = "";
      //   productVariables[`prodPassed${i + 1}`] = "";
      //   productVariables[`prodFailed${i + 1}`] = "";
      // }
      let present = new Date();
      let year = present.getFullYear();
      let month = (present.getMonth() + 1).toString().padStart(2, "0");
      let day = present.getDate().toString().padStart(2, "0");
      let hour = present.getHours().toString().padStart(2, "0");
      let minute = present.getMinutes().toString().padStart(2, "0");

      let dateCreated = `${year}-${month}-${day}T${hour}:${minute}:00.000Z`;

      // assign productTotal, productPassed, productFailed wit productTemp
      // for (let i = 0; i < totalMachines; i++) {
      //   productVariables[`prodTotal${i + 1}`] =
      //     globalVariables[`prodTemp${i + 1}`];
      //   productVariables[`prodPassed${i + 1}`] =
      //     globalVariables[`prodTemp${i + 1}`];
      //   productVariables[`prodFailed${i + 1}`] = 0;
      // }

      // reset productTemp
      // for (let i = 0; i < totalMachines; i++) {
      //   globalVariables[`prodTemp${i + 1}`] = 0;
      // }
      // push data to server
      let obj = {};
      if (
        (globalVariables.modelNo !== "undefined") &
        (globalVariables.modelNo !== "BAD 255")
      ) {
        for (let i = 0; i < totalMachines; i++) {
          obj[`rawData${i + 1}`] = {
            lineNo: "Máy Bế",
            machineNo: globalVariables[`machineNo${i + 1}`],
            // lotNo: globalVariables.lotNo,
            modelNo: globalVariables.modelNo,
            // targetByShift: globalVariables.targetByShift,
            // targetByLot: globalVariables.targetByLot,
            productTarget: globalVariables.productTarget,
            cycleTime: globalVariables[`cycleTime${i + 1}`],
            // prodTotal: productVariables[`prodTotal${i + 1}`],
            // prodPassed: productVariables[`prodPassed${i + 1}`],
            // prodFailed: productVariables[`prodFailed${i + 1}`],
            downTimeNo: globalVariables[`downTimeNo${i + 1}`],
            stateStatus: globalVariables[`stateStatus${i + 1}`],
            machineOn: globalVariables[`machineOn${i + 1}`],
            productCount: globalVariables[`productCount${i + 1}`],
            timeRunningCount: globalVariables[`timeRunningCount${i + 1}`],
            // year: String(year),
            // month: String(month),
            // day: String(day),
            // hour: String(hour),
            // minute: String(minute),
            dateCreated: String(dateCreated),
          };

          // obj[`demoData${i + 1}`] = {
          //   ...obj[`rawData${i + 1}`],
          //   lineNo: "Máy Ra Khổ",
          //   machineNo: demoMachineNames[i],
          // };
        }

        // Ouput final data
        // console.log(obj);
        const retryPushData = async () => {
          let currentTry = 0;

          while (true) {
            try {
              await pushRawData();
              break;
            } catch (error) {
              currentTry++;
              console.log(error);
              console.log("push Data failed, retry attemps: ", currentTry);
              if (currentTry >= 5) {
                break;
              }
            }
            await sleepFunc(5000);
          }
        };

        const sleepFunc = async (ms) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, ms);
          });
        };

        const pushRawData = async () => {
          let queries = Object.keys(obj).map((key) => {
            if (key.includes("")) {
              return axios.post(
                "https://oee-rebuild.pambu.org/duc-thanh/api/v1/rawData",
                obj[key]
              );
            }
            // if (key.includes("raw")) {
            //   return axios.post(
            //     "https://oee-rebuild.pambu.org/duc-thanh/api/v1/rawData",
            //     obj[key]
            //   );
            // }
          });

          await Promise.any(queries);
        };
        retryPushData();
      }
    } catch (error) {
      console.log(error);
    }
    globalVariables.modelNo = "BAD 255";
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

  setInterval(() => {
    assignAndPushData();
  }, 60000);
};

main();
