const mc = require("mcprotocol");
const conn = new mc();
const axios = require("axios")

let doneReading = false;

let variables = {
  modelNo: "RSTR0,10 ", // String that is 10 characters (5 words) starting at R0
  lotNo: "RSTR10,10", //String that is 10 characters (5 words) starting at R10
  downTimeType: "D100,1",
  cycleTime: "D101,1",
  machineOn: "M100",
  stateStatus: "M101",
  productOk: "M102",

  downTimeType2: "D110,1",
  cycleTime2: "D111,1",
  machineOn2: "M110",
  stateStatus2: "M111",
  productOk2: "M112",

  downTimeType3: "D120,1",
  cycleTime3: "D121,1",
  machineOn3: "M120",
  stateStatus3: "M121",
  productOk3: "M122",

  downTimeType4: "D130,1",
  cycleTime4: "D131,1",
  machineOn4: "M130",
  stateStatus4: "M131",
  productOk4: "M132",

  downTimeType5: "D140,1",
  cycleTime5: "D141,1",
  machineOn5: "M140",
  stateStatus5: "M141",
  productOk5: "M142",

  downTimeType6: "D150,1",
  cycleTime6: "D151,1",
  machineOn6: "M150",
  stateStatus6: "M151",
  productOk6: "M152",
};

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
    return variables[tag];
  });

  conn.addItems("modelNo");
  conn.addItems("lotNo");
  conn.addItems("downTimeType");
  conn.addItems("cycleTime");
  conn.addItems("machineOn");
  conn.addItems("stateStatus");
  conn.addItems("productOk");

  conn.addItems("downTimeType2");
  conn.addItems("cycleTime2");
  conn.addItems("machineOn2");
  conn.addItems("stateStatus2");
  conn.addItems("productOk2"); //////////xxx

  conn.addItems("downTimeType3");
  conn.addItems("cycleTime3");
  conn.addItems("machineOn3"); ///////xxx
  conn.addItems("stateStatus3");
  conn.addItems("productOk3");

  conn.addItems("downTimeType4");
  conn.addItems("cycleTime4");
  conn.addItems("machineOn4");
  conn.addItems("stateStatus4");
  conn.addItems("productOk4");

  conn.addItems("downTimeType5");
  conn.addItems("cycleTime5");
  conn.addItems("machineOn5");
  conn.addItems("stateStatus5");
  conn.addItems("productOk5");

  conn.addItems("downTimeType6");
  conn.addItems("cycleTime6");
  conn.addItems("machineOn6");
  conn.addItems("stateStatus6");
  conn.addItems("productOk6");

  setInterval(() => {
    conn.readAllItems(valuesReady);
  }, 100);
}

function cutString(arr){
	let newName = ''
	for (let i = 0; i < arr.length; i++) {			
		if (arr[i] != '\x00') {
			newName += arr[i]
		}
}
return newName
}

function regex(str) {
  return str.replace(/[ ]/g,'')
}

// define new Data
let prodTemp = 0; let prodTemp2 = 0; let prodTemp3= 0; let prodTemp4 = 0; let prodTemp5 = 0; let prodTemp6 = 0;
let confirmSignal = false; let confirmSignal2 = false; let confirmSignal3 = false; let confirmSignal4 = false; let confirmSignal5 = false; let confirmSignal6 = false;
let machineOn; let machineOn2; let machineOn3; let machineOn4; let machineOn5; let machineOn6;
let stateStatus; let stateStatus2; let stateStatus3; let stateStatus4; let stateStatus5; let stateStatus6; 
let machineNo; let machineNo2; let machineNo3; let machineNo4; let machineNo5; let machineNo6;
let lotNo;
let modelNo;
let target;
let cycleTime; let cycleTime2; let cycleTime3; let cycleTime4; let cycleTime5; let cycleTime6;
let prodTotal; let prodTotal2; let prodTotal3; let prodTotal4; let prodTotal5; let prodTotal6;
let prodPassed; let prodPassed2; let prodPassed3; let prodPassed4; let prodPassed5; let prodPassed6;
let prodFailed; let prodFailed2; let prodFailed3; let prodFailed4; let prodFailed5; let prodFailed6;
let downTimeType; let downTimeType2; let downTimeType3; let downTimeType4; let downTimeType5; let downTimeType6;
let oeeIndicator;
let availableIndicator;
let performanceIndicator;
let qualityIndicator;

function valuesReady(err, values) {
  if (err) {
    console.log("SOMETHING WENT WRONG READING VALUES!!!!");
  }
  doneReading = true;
  if (doneReading) {
    // counting product 1 
    if (values.productOk == false) {
      confirmSignal = true;
    }
    if (values.productOk && confirmSignal) {
      prodTemp++;
      confirmSignal = false;
    }
     // counting product 2 
     if (values.productOk2 == false) {
      confirmSignal2 = true;
    }
    if (values.productOk2 && confirmSignal2) {
      prodTemp2++;
      confirmSignal2 = false;
    }
     // counting product 3 
     if (values.productOk3 == false) {
      confirmSignal3 = true;
    }
    if (values.productOk3 && confirmSignal3) {
      prodTemp3++;
      confirmSignal3 = false;
    }
     // counting product 4 
     if (values.productOk4 == false) {
      confirmSignal4 = true;
    }
    if (values.productOk4 && confirmSignal4) {
      prodTemp4++;
      confirmSignal4 = false;
    }
     // counting product 5 
     if (values.productOk5 == false) {
      confirmSignal5 = true;
    }
    if (values.productOk5 && confirmSignal5) {
      prodTemp5++;
      confirmSignal5 = false;
    }
     // counting product 6 
     if (values.productOk6 == false) {
      confirmSignal6 = true;
    }
    if (values.productOk6 && confirmSignal6) {
      prodTemp6++;
      confirmSignal6 = false;
    }
    // define data from PLC to PC
    machineOn = values.machineOn; machineOn2 = values.machineOn2; machineOn3 = values.machineOn3; machineOn4 = values.machineOn4; machineOn5 = values.machineOn5; machineOn6 = values.machineOn6;
    stateStatus = values.stateStatus; stateStatus2 = values.stateStatus2; stateStatus3 = values.stateStatus3; stateStatus4 = values.stateStatus4; stateStatus5 = values.stateStatus5; stateStatus6 = values.stateStatus6;
    machineNo = "STEM_ROUGH"; machineNo2 = "LATHE_HEAD1"; machineNo3 = "LATHE_HEAD2"; machineNo4 = "LATHE_SEAT1"; machineNo5 = "LATHE_SEAT2"; machineNo6 = "LATHE_CHAMBER";
    lotNo = regex(cutString(values.lotNo));
    modelNo = regex(cutString(values.modelNo));
    cycleTime = values.cycleTime / 10; cycleTime2 = values.cycleTime2 / 10; cycleTime3 = values.cycleTime3 / 10; cycleTime4 = values.cycleTime4 / 10; cycleTime5 = values.cycleTime5 / 10; cycleTime6 = values.cycleTime6 / 10;
    downTimeType = values.downTimeType; downTimeType2 = values.downTimeType2; downTimeType3 = values.downTimeType3; downTimeType4 = values.downTimeType4; downTimeType5 = values.downTimeType5; downTimeType6 = values.downTimeType6;
  }
}

initData = () => {
  let present = new Date();
  let year = present.getFullYear();
  let month = present.getMonth() + 1;
  let day = present.getDate();
  let hour = present.getHours();
  let minute = present.getMinutes();

  if (month < 10 || month == 0) {
    month = `0${month}`;
  } else {
    month = month;
  }

  if (day < 10 || day == 0) {
    day = `0${day}`;
  } else {
    day = day;
  }
  if (hour < 10 || hour == 0) {
    hour = `0${hour}`;
  } else {
    hour = hour;
  }

  if (minute < 10 || minute == 0) {
    minute = `0${minute}`;
  } else {
    minute = minute;
  }

  let dateCreated = `${year}-${month}-${day}T${hour}:${minute}:00.000Z`;
  target = 0;
  prodTotal = prodTemp; prodTotal2 = prodTemp2; prodTotal3 = prodTemp3; prodTotal4 = prodTemp4; prodTotal5 = prodTemp5; prodTotal6 = prodTemp6;
  prodPassed = prodTemp; prodPassed2 = prodTemp2; prodPassed3 = prodTemp3; prodPassed4 = prodTemp4; prodPassed5 = prodTemp5; prodPassed6 = prodTemp6;
  prodFailed = 0; prodFailed2 = 0; prodFailed3 = 0; prodFailed4 = 0; prodFailed5 = 0; prodFailed6 = 0;
  // oeeIndicator = 0;
  // availableIndicator = 0;
  // performanceIndicator = 0;
  // qualityIndicator = 0;

  //___calculating OEE___\\
  //A
  if (stateStatus == true) {
    availableIndicator = 1;
  } else {
    availableIndicator = 0;
  }
  //P
  performanceIndicator = (cycleTime * prodTemp) / 60;
  //Q
  if (prodTemp > 0) {
    qualityIndicator = 1;
  } else {
    qualityIndicator = 0;
  }
  //OEE
  oeeIndicator = availableIndicator * performanceIndicator * qualityIndicator;

  return (
    prodTemp, prodTemp2, prodTemp3, prodTemp4, prodTemp5, prodTemp6, 
    testData = {
      machineNo: machineNo,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime,
      prodTotal: prodTotal,
      prodPassed: prodPassed,
      prodFailed: prodFailed,
      downTimeType: downTimeType,
      stateStatus: stateStatus,
      machineOn: machineOn,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    demoData = {
      machineNo: "First",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime,
      prodTotal: prodTotal,
      prodPassed: prodPassed,
      prodFailed: prodFailed,
      downTimeType: downTimeType,
      stateStatus: stateStatus,
      machineOn: machineOn,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    testData2 = {
      machineNo: machineNo2,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime2,
      prodTotal: prodTotal2,
      prodPassed: prodPassed2,
      prodFailed: prodFailed2,
      downTimeType: downTimeType2,
      stateStatus: stateStatus2,
      machineOn: machineOn2,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    demoData2 = {
      machineNo: "SECOND",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime2,
      prodTotal: prodTotal2,
      prodPassed: prodPassed2,
      prodFailed: prodFailed2,
      downTimeType: downTimeType2,
      stateStatus: stateStatus2,
      machineOn: machineOn2,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    testData3 = {
      machineNo: machineNo3,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime3,
      prodTotal: prodTotal3,
      prodPassed: prodPassed3,
      prodFailed: prodFailed3,
      downTimeType: downTimeType3,
      stateStatus: stateStatus3,
      machineOn: machineOn3,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    demoData3 = {
      machineNo: "THIRD",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime3,
      prodTotal: prodTotal3,
      prodPassed: prodPassed3,
      prodFailed: prodFailed3,
      downTimeType: downTimeType3,
      stateStatus: stateStatus3,
      machineOn: machineOn3,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    testData4 = {
      machineNo: machineNo4,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime4,
      prodTotal: prodTotal4,
      prodPassed: prodPassed4,
      prodFailed: prodFailed4,
      downTimeType: downTimeType4,
      stateStatus: stateStatus4,
      machineOn: machineOn4,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    demoData4 = {
      machineNo: "FOURTH",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime4,
      prodTotal: prodTotal4,
      prodPassed: prodPassed4,
      prodFailed: prodFailed4,
      downTimeType: downTimeType4,
      stateStatus: stateStatus4,
      machineOn: machineOn4,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    testData5 = {
      machineNo: machineNo5,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime5,
      prodTotal: prodTotal5,
      prodPassed: prodPassed5,
      prodFailed: prodFailed5,
      downTimeType: downTimeType5,
      stateStatus: stateStatus5,
      machineOn: machineOn5,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    demoData5 = {
      machineNo: "FIFTH",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime5,
      prodTotal: prodTotal5,
      prodPassed: prodPassed5,
      prodFailed: prodFailed5,
      downTimeType: downTimeType5,
      stateStatus: stateStatus5,
      machineOn: machineOn5,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    testData6 = {
      machineNo: machineNo6,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime6,
      prodTotal: prodTotal6,
      prodPassed: prodPassed6,
      prodFailed: prodFailed6,
      downTimeType: downTimeType6,
      stateStatus: stateStatus6,
      machineOn: machineOn6,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    },
    demoData6 = {
      machineNo: "SIXTH",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime6,
      prodTotal: prodTotal6,
      prodPassed: prodPassed6,
      prodFailed: prodFailed6,
      downTimeType: downTimeType6,
      stateStatus: stateStatus6,
      machineOn: machineOn6,
      oeeIndicator: oeeIndicator,
      availableIndicator: availableIndicator,
      performanceIndicator: performanceIndicator,
      qualityIndicator: qualityIndicator,
      year: String(year),
      month: String(month),
      day: String(day),
      hour: String(hour),
      minute: String(minute),
      dateCreated: String(dateCreated),
    }
  );
};

const main = async (rawDataItem,demoData) => {
  try {
    await axios.post("https://oee.pambu.org/nittan/api/v1/rawData", rawDataItem);
    await axios.post("https://oee.pambu.org/demo/api/v1/rawData", demoData);
    console.log("New Data Added");
  }
  catch (error) {
    console.log(error);
  }
}

setInterval(() => {
  initData();
  if (testData.lotNo != "undefined" || testData.lotNo != "BAD 255") {
    console.log(testData)
    console.log(testData2)
    console.log(testData3)
    console.log(testData4)
    console.log(testData5)
    console.log(testData6)
    main(testData, demoData)
    main(testData2, demoData2)
    main(testData3, demoData3)
    main(testData4, demoData4)
    main(testData5, demoData5)
    main(testData6, demoData6)
    prodTemp = 0; prodTemp2 = 0; prodTemp3= 0; prodTemp4 = 0; prodTemp5 = 0; prodTemp6 = 0;
    testData.machineOn = false; testData2.machineOn = false; testData3.machineOn = false; testData4.machineOn = false; testData5.machineOn = false; testData6.machineOn = false;
    demoData.machineOn = false; demoData2.machineOn = false; demoData3.machineOn = false; demoData4.machineOn = false; demoData5.machineOn = false; demoData6.machineOn = false;
    testData.stateStatus = false; testData2.stateStatus = false; testData3.stateStatus = false; testData4.stateStatus = false; testData5.stateStatus = false; testData6.stateStatus = false;
    demoData.stateStatus = false; demoData2.stateStatus = false; demoData3.stateStatus = false; demoData4.stateStatus = false; demoData5.stateStatus = false; demoData6.stateStatus = false;
    testData.machineNo = "0"; testData2.machineNo = "0"; testData3.machineNo = "0"; testData4.machineNo = "0"; testData5.machineNo = "0"; testData6.machineNo = "0";
    demoData.machineNo = "0"; demoData2.machineNo = "0"; demoData3.machineNo = "0"; demoData4.machineNo = "0"; demoData5.machineNo = "0"; demoData6.machineNo = "0";
    testData.lotNo = "0"; testData2.lotNo = "0"; testData3.lotNo = "0"; testData4.lotNo = "0"; testData5.lotNo = "0"; testData6.lotNo = "0";
    demoData.lotNo = "0"; demoData2.lotNo = "0"; demoData3.lotNo = "0"; demoData4.lotNo = "0"; demoData5.lotNo = "0"; demoData6.lotNo = "0";
    testData.modelNo = "0"; testData2.modelNo = "0"; testData3.modelNo = "0"; testData4.modelNo = "0"; testData5.modelNo = "0"; testData6.modelNo = "0";
    demoData.modelNo = "0"; demoData2.modelNo = "0"; demoData3.modelNo = "0"; demoData4.modelNo = "0"; demoData5.modelNo = "0"; demoData6.modelNo = "0";
    testData.target = 0;
    testData.cycleTime = 0; testData2.cycleTime = 0; testData3.cycleTime = 0; testData4.cycleTime = 0; testData5.cycleTime = 0; testData6.cycleTime = 0;
    demoData.cycleTime = 0; demoData2.cycleTime = 0; demoData3.cycleTime = 0; demoData4.cycleTime = 0; demoData5.cycleTime = 0; demoData6.cycleTime = 0;
    testData.prodTemp = prodTemp; testData2.prodTemp = prodTemp; testData3.prodTemp = prodTemp; testData4.prodTemp = prodTemp; testData5.prodTemp = prodTemp; testData6.prodTemp = prodTemp;
    demoData.prodTemp = prodTemp; demoData2.prodTemp = prodTemp; demoData3.prodTemp = prodTemp; demoData4.prodTemp = prodTemp; demoData5.prodTemp = prodTemp; demoData6.prodTemp = prodTemp;
    testData.prodTotal = prodTemp; testData2.prodTotal = prodTemp; testData3.prodTotal = prodTemp; testData4.prodTotal = prodTemp; testData5.prodTotal = prodTemp; testData6.prodTotal = prodTemp;
    demoData.prodTotal = prodTemp; demoData2.prodTotal = prodTemp; demoData3.prodTotal = prodTemp; demoData4.prodTotal = prodTemp; demoData5.prodTotal = prodTemp; demoData6.prodTotal = prodTemp;
    testData.prodPassed = prodTemp; testData2.prodPassed = prodTemp; testData3.prodPassed = prodTemp; testData4.prodPassed = prodTemp; testData5.prodPassed = prodTemp; testData6.prodPassed = prodTemp;
    demoData.prodPassed = prodTemp; demoData2.prodPassed = prodTemp; demoData3.prodPassed = prodTemp; demoData4.prodPassed = prodTemp; demoData5.prodPassed = prodTemp; demoData6.prodPassed = prodTemp;
    testData.prodFailed = 0; testData2.prodFailed = 0; testData3.prodFailed = 0; testData4.prodFailed = 0; testData5.prodFailed = 0; testData6.prodFailed = 0;
    demoData.prodFailed = 0; demoData2.prodFailed = 0; demoData3.prodFailed = 0; demoData4.prodFailed = 0; demoData5.prodFailed = 0; demoData6.prodFailed = 0;
    testData.downTimeType = 0; testData2.downTimeType = 0; testData3.downTimeType = 0; testData4.downTimeType = 0; testData5.downTimeType = 0; testData6.downTimeType = 0;
    demoData.downTimeType = 0; demoData2.downTimeType = 0; demoData3.downTimeType = 0; demoData4.downTimeType = 0; demoData5.downTimeType = 0; demoData6.downTimeType = 0;
    testData.oeeIndicator = 0;
    testData.availableIndicator = 0;
    testData.performanceIndicator = 0;
    testData.qualityIndicator = 0;
  }
}, 4000);
