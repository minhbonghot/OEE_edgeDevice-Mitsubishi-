const mc = require("mcprotocol");
const conn = new mc();
const axios = require("axios")

let doneReading = false;

let variables = {
  modelNo: "RSTR0,10 ", // String that is 10 characters (5 words) starting at R0
  lotNo: "RSTR10,10", //String that is 10 characters (5 words) starting at R10
  downTimeType: "D100,1",
  cycleTime: "D101,1",
  machineOn: "D102.0",
  stateStatus: "D102.1",
  productOk: "D102.2",

  downTimeType2: "D110,1",
  cycleTime2: "D111,1",
  machineOn2: "D112.0",
  stateStatus2: "D112.1",
  productOk2: "D112.2",

  downTimeType3: "D120,1",
  cycleTime3: "D121,1",
  machineOn3: "D122.0",
  stateStatus3: "D122.1",
  productOk3: "D122.2",

  downTimeType4: "D130,1",
  cycleTime4: "D131,1",
  machineOn4: "D132.0",
  stateStatus4: "D132.1",
  productOk4: "D132.2",

  downTimeType5: "D140,1",
  cycleTime5: "D141,1",
  machineOn5: "D142.0",
  stateStatus5: "D142.1",
  productOk5: "D142.2",

  downTimeType6: "D150,1",
  cycleTime6: "D151,1",
  machineOn6: "D152.0",
  stateStatus6: "D152.1",
  productOk6: "D152.2",

  downTimeType7: "D160,1",
  cycleTime7: "D161,1",
  machineOn7: "D162.0",
  stateStatus7: "D162.1",
  productOk7: "D162.2",

  downTimeType8: "D170,1",
  cycleTime8: "D171,1",
  machineOn8: "D172.0",
  stateStatus8: "D172.1",
  productOk8: "D172.2",

  downTimeType9: "D180,1",
  cycleTime9: "D181,1",
  machineOn9: "D182.0",
  stateStatus9: "D182.1",
  productOk9: "D182.2",

  downTimeType10: "D190,1",
  cycleTime10: "D191,1",
  machineOn10: "D192.0",
  stateStatus10: "D192.1",
  productOk10: "D192.2",

  downTimeType11: "D200,1",
  cycleTime11: "D201,1",
  machineOn11: "D202.0",
  stateStatus11: "D202.1",
  productOk11: "D202.2",

  downTimeType12: "D210,1",
  cycleTime12: "D211,1",
  machineOn12: "D212.0",
  stateStatus12: "D212.1",
  productOk12: "D212.2",

  downTimeType13: "D220,1",
  cycleTime13: "D221,1",
  machineOn13: "D222.0",
  stateStatus13: "D222.1",
  productOk13: "D222.2",

  downTimeType14: "D230,1",
  cycleTime14: "D231,1",
  machineOn14: "D232.0",
  stateStatus14: "D232.1",
  productOk14: "D232.2",

  downTimeType15: "D240,1",
  cycleTime15: "D241,1",
  machineOn15: "D242.0",
  stateStatus15: "D242.1",
  productOk15: "D242.2",
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

  conn.addItems("downTimeType7");
  conn.addItems("cycleTime7");
  conn.addItems("machineOn7");
  conn.addItems("stateStatus7");
  conn.addItems("productOk7");

  conn.addItems("downTimeType8");
  conn.addItems("cycleTime8");
  conn.addItems("machineOn8");
  conn.addItems("stateStatus8");
  conn.addItems("productOk8");

  conn.addItems("downTimeType9");
  conn.addItems("cycleTime9");
  conn.addItems("machineOn9");
  conn.addItems("stateStatus9");
  conn.addItems("productOk9");

  conn.addItems("downTimeType10");
  conn.addItems("cycleTime10");
  conn.addItems("machineOn10");
  conn.addItems("stateStatus10");
  conn.addItems("productOk10");

  conn.addItems("downTimeType11");
  conn.addItems("cycleTime11");
  conn.addItems("machineOn11");
  conn.addItems("stateStatus11");
  conn.addItems("productOk11");

  conn.addItems("downTimeType12");
  conn.addItems("cycleTime12");
  conn.addItems("machineOn12");
  conn.addItems("stateStatus12");
  conn.addItems("productOk12");

  conn.addItems("downTimeType13");
  conn.addItems("cycleTime13");
  conn.addItems("machineOn13");
  conn.addItems("stateStatus13");
  conn.addItems("productOk13");

  conn.addItems("downTimeType14");
  conn.addItems("cycleTime14");
  conn.addItems("machineOn14");
  conn.addItems("stateStatus14");
  conn.addItems("productOk14");

  conn.addItems("downTimeType15");
  conn.addItems("cycleTime15");
  conn.addItems("machineOn15");
  conn.addItems("stateStatus15");
  conn.addItems("productOk15");

  setInterval(() => {
    conn.readAllItems(valuesReady);
  }, 100);
}

// define new Data
let prodTemp = 0; let prodTemp2 = 0; let prodTemp3= 0; let prodTemp4 = 0; let prodTemp5 = 0; let prodTemp6 = 0; let prodTemp7 = 0; let prodTemp8 = 0; let prodTemp9 = 0; let prodTemp10 = 0; let prodTemp11 = 0; let prodTemp12 = 0; let prodTemp13 = 0; let prodTemp14 = 0; let prodTemp15 = 0;
let confirmSignal = false; let confirmSignal2 = false; let confirmSignal3 = false; let confirmSignal4 = false; let confirmSignal5 = false; let confirmSignal6 = false; let confirmSignal7 = false; let confirmSignal8 = false; let confirmSignal9 = false; let confirmSignal10 = false; let confirmSignal11 = false; let confirmSignal12 = false; let confirmSignal13 = false; let confirmSignal14 = false; let confirmSignal15 = false;
let machineOn; let machineOn2; let machineOn3; let machineOn4; let machineOn5; let machineOn6; let machineOn7; let machineOn8; let machineOn9; let machineOn10; let machineOn11; let machineOn12; let machineOn13; let machineOn14; let machineOn15;
let stateStatus; let stateStatus2; let stateStatus3; let stateStatus4; let stateStatus5; let stateStatus6; let stateStatus7; let stateStatus8; let stateStatus9; let stateStatus10; let stateStatus11; let stateStatus12; let stateStatus13; let stateStatus14; let stateStatus15;
let machineNo; let machineNo2; let machineNo3; let machineNo4; let machineNo5; let machineNo6; let machineNo7; let machineNo8; let machineNo9; let machineNo10; let machineNo11; let machineNo12; let machineNo13; let machineNo14; let machineNo15;
let lotNo;
let modelNo;
let target;
let cycleTime; let cycleTime2; let cycleTime3; let cycleTime4; let cycleTime5; let cycleTime6; let cycleTime7; let cycleTime8; let cycleTime9; let cycleTime10; let cycleTime11; let cycleTime12; let cycleTime13; let cycleTime14; let cycleTime15;
let prodTotal; let prodTotal2; let prodTotal3; let prodTotal4; let prodTotal5; let prodTotal6; let prodTotal7; let prodTotal8; let prodTotal9; let prodTotal10; let prodTotal11; let prodTotal12; let prodTotal13; let prodTotal14; let prodTotal15;
let prodPassed; let prodPassed2; let prodPassed3; let prodPassed4; let prodPassed5; let prodPassed6; let prodPassed7; let prodPassed8; let prodPassed9; let prodPassed10; let prodPassed11; let prodPassed12; let prodPassed13; let prodPassed14; let prodPassed15;
let prodFailed; let prodFailed2; let prodFailed3; let prodFailed4; let prodFailed5; let prodFailed6; let prodFailed7; let prodFailed8; let prodFailed9; let prodFailed10; let prodFailed11; let prodFailed12; let prodFailed13; let prodFailed14; let prodFailed15;
let downTimeType; let downTimeType2; let downTimeType3; let downTimeType4; let downTimeType5; let downTimeType6; let downTimeType7; let downTimeType8; let downTimeType9; let downTimeType10; let downTimeType11; let downTimeType12; let downTimeType13; let downTimeType14; let downTimeType15;
let oeeIndicator;
let availableIndicator;
let performanceIndicator;
let qualityIndicator;

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

function count({productOk, confirmSignala}) {
  if (productOk == false) {
    confirmSignal = true;
    return
  }
  if (productOk && confirmSignala) {
    prodTemp++;
    confirmSignal = false;
    console.log('minh')
  }
  console.log('productOk', productOk)
  console.log('confirmSignal', confirmSignal)
  console.log('prodTemp', prodTemp)
}

function valuesReady(err, values) {
  if (err) {
    console.log("SOMETHING WENT WRONG READING VALUES!!!!");
  }
  doneReading = true;
  if (doneReading) {
    // counting product 1 
    // if (values.productOk == false) {
    //   confirmSignal = true;
    // }
    // if (values.productOk && confirmSignal) {
    //   prodTemp++;
    //   confirmSignal = false;
    //   console.log('minh')
    // }
    // counting product 1 
    count({productOk: values.productOk, confirmSignala: confirmSignal})
    // count(values.productOk2, confirmSignal2, prodTemp2 )
    // count(values.productOk3, confirmSignal3, prodTemp3)
    // count(values.productOk4, confirmSignal4, prodTemp4)
    // count(values.productOk5, confirmSignal5, prodTemp5)
    // count(values.productOk6, confirmSignal6, prodTemp6)
    // count(values.productOk7, confirmSignal7, prodTemp7)
    // count(values.productOk8, confirmSignal8, prodTemp8)
    // count(values.productOk9, confirmSignal9, prodTemp9)
    // prodTemp10 = count(values.productOk10, confirmSignal10, prodTemp10)
    // prodTemp11 = count(values.productOk11, confirmSignal11, prodTemp11)
    // prodTemp12 = count(values.productOk12, confirmSignal12, prodTemp12)
    // prodTemp13 = count(values.productOk13, confirmSignal13, prodTemp13)
    // prodTemp14 = count(values.productOk14, confirmSignal14, prodTemp14)
    // prodTemp15 = count(values.productOk15, confirmSignal15, prodTemp15)
    // counting product 2 
    //  if (values.productOk2 == false) {
    //   confirmSignal2 = true;
    // }
    // if (values.productOk2 && confirmSignal2) {
    //   prodTemp2++;
    //   confirmSignal2 = false;
    // }
    //  // counting product 3 
    //  if (values.productOk3 == false) {
    //   confirmSignal3 = true;
    // }
    // if (values.productOk3 && confirmSignal3) {
    //   prodTemp3++;
    //   confirmSignal3 = false;
    // }
    //  // counting product 4 
    //  if (values.productOk4 == false) {
    //   confirmSignal4 = true;
    // }
    // if (values.productOk4 && confirmSignal4) {
    //   prodTemp4++;
    //   confirmSignal4 = false;
    // }
    //  // counting product 5 
    //  if (values.productOk5 == false) {
    //   confirmSignal5 = true;
    // }
    // if (values.productOk5 && confirmSignal5) {
    //   prodTemp5++;
    //   confirmSignal5 = false;
    // }
    //  // counting product 6 
    //  if (values.productOk6 == false) {
    //   confirmSignal6 = true;
    // }
    // if (values.productOk6 && confirmSignal6) {
    //   prodTemp6++;
    //   confirmSignal6 = false;
    // }
    //  // counting product 7 
    //  if (values.productOk7 == false) {
    //   confirmSignal7 = true;
    // }
    // if (values.productOk7 && confirmSignal7) {
    //   prodTemp7++;
    //   confirmSignal7 = false;
    // }  
    //  // counting product 8 
    //  if (values.productOk8 == false) {
    //   confirmSignal8 = true;
    // }
    // if (values.productOk8 && confirmSignal8) {
    //   prodTemp8++;
    //   confirmSignal8 = false;
    // }  
    //  // counting product 9 
    //  if (values.productOk9 == false) {
    //   confirmSignal9 = true;
    // }
    // if (values.productOk9 && confirmSignal9) {
    //   prodTemp9++;
    //   confirmSignal9 = false;
    // }  
     // counting product 10 
     if (values.productOk10 == false) {
      confirmSignal10 = true;
    }
    if (values.productOk10 && confirmSignal10) {
      prodTemp10++;
      confirmSignal10 = false;
    }  
     // counting product 11 
     if (values.productOk11 == false) {
      confirmSignal11 = true;
    }
    if (values.productOk11 && confirmSignal11) {
      prodTemp11++;
      confirmSignal11 = false;      
    }

     // counting product 12 
     if (values.productOk12 == false) {
      confirmSignal12 = true;
    }
    if (values.productOk12 && confirmSignal12) {
      prodTemp12++;
      confirmSignal12 = false;      
    }

     // counting product 13 
     if (values.productOk13 == false) {
      confirmSignal13 = true;
    }
    if (values.productOk13 && confirmSignal13) {
      prodTemp13++;
      confirmSignal13 = false;      
    }

     // counting product 14 
     if (values.productOk14 == false) {
      confirmSignal14 = true;
    }
    if (values.productOk14 && confirmSignal14) {
      prodTemp14++;
      confirmSignal14 = false;      
    }

     // counting product 15 
     if (values.productOk15 == false) {
      confirmSignal15 = true;
    }
    if (values.productOk15 && confirmSignal15) {
      prodTemp15++;
      confirmSignal15 = false;      
    }
    // define data from PLC to P13
    machineOn = values.machineOn; machineOn2 = values.machineOn2; machineOn3 = values.machineOn3; machineOn4 = values.machineOn4; machineOn5 = values.machineOn5; machineOn6 = values.machineOn6; machineOn7 = values.machineOn7; machineOn8 = values.machineOn8; machineOn9 = values.machineOn9; machineOn10 = values.machineOn10; machineOn11 = values.machineOn11; machineOn12 = values.machineOn12; machineOn13 = values.machineOn13; machineOn14 = values.machineOn14; machineOn15 = values.machineOn15;
    stateStatus = values.stateStatus; stateStatus2 = values.stateStatus2; stateStatus3 = values.stateStatus3; stateStatus4 = values.stateStatus4; stateStatus5 = values.stateStatus5; stateStatus6 = values.stateStatus6; stateStatus7 = values.stateStatus7; stateStatus8 = values.stateStatus8; stateStatus9 = values.stateStatus9; stateStatus10 = values.stateStatus10; stateStatus11 = values.stateStatus11; stateStatus12 = values.stateStatus12; stateStatus13 = values.stateStatus13; stateStatus14 = values.stateStatus14; stateStatus15 = values.stateStatus15;
    machineNo = "STEM_ROUGH"; machineNo2 = "LATHE_HEAD1"; machineNo3 = "LATHE_HEAD2"; machineNo4 = "LATHE_SEAT1"; machineNo5 = "LATHE_SEAT2"; machineNo6 = "LATHE_CHAMBER"; machineNo7 = "LATHE_CHAMBER7"; machineNo8 = "LATHE_CHAMBE8"; machineNo9 = "LATHE_CHAMBE9"; machineNo10 = "LATHE_CHAMBE10"; machineNo11 = "LATHE_CHAMBE11"; machineNo12 = "LATHE_CHAMBE12"; machineNo13 = "LATHE_CHAMBE13"; machineNo14 = "LATHE_CHAMBE14"; machineNo15 = "LATHE_CHAMBE15";
    lotNo = regex(cutString(values.lotNo));
    modelNo = regex(cutString(values.modelNo));
    cycleTime = values.cycleTime / 10; cycleTime2 = values.cycleTime2 / 10; cycleTime3 = values.cycleTime3 / 10; cycleTime4 = values.cycleTime4 / 10; cycleTime5 = values.cycleTime5 / 10; cycleTime6 = values.cycleTime6 / 10; cycleTime7 = values.cycleTime7 / 10; cycleTime8 = values.cycleTime8 / 10; cycleTime9 = values.cycleTime9 / 10; cycleTime10 = values.cycleTime10 / 10; cycleTime11 = values.cycleTime11 / 10; cycleTime12 = values.cycleTime12 / 10; cycleTime13 = values.cycleTime13 / 10; cycleTime14 = values.cycleTime14 / 10; cycleTime15 = values.cycleTime15 / 10;
    downTimeType = values.downTimeType; downTimeType2 = values.downTimeType2; downTimeType3 = values.downTimeType3; downTimeType4 = values.downTimeType4; downTimeType5 = values.downTimeType5; downTimeType6 = values.downTimeType6; downTimeType7 = values.downTimeType7; downTimeType8 = values.downTimeType8; downTimeType9 = values.downTimeType9; downTimeType10 = values.downTimeType10; downTimeType11 = values.downTimeType11; downTimeType12 = values.downTimeType12; downTimeType13 = values.downTimeType13; downTimeType14 = values.downTimeType14; downTimeType15 = values.downTimeType15;
  }
}

const initData = () => {
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
  prodTotal = prodTemp; prodTotal2 = prodTemp2; prodTotal3 = prodTemp3; prodTotal4 = prodTemp4; prodTotal5 = prodTemp5; prodTotal6 = prodTemp6; prodTotal7 = prodTemp7; prodTotal8 = prodTemp8; prodTotal9 = prodTemp9; prodTotal10 = prodTemp10; prodTotal11 = prodTemp11; prodTotal12 = prodTemp12; prodTotal13 = prodTemp13; prodTotal14 = prodTemp14; prodTotal15 = prodTemp15;
  prodPassed = prodTemp; prodPassed2 = prodTemp2; prodPassed3 = prodTemp3; prodPassed4 = prodTemp4; prodPassed5 = prodTemp5; prodPassed6 = prodTemp6; prodPassed7 = prodTemp7; prodPassed8 = prodTemp8; prodPassed9 = prodTemp9; prodPassed10 = prodTemp10; prodPassed11 = prodTemp11; prodPassed12 = prodTemp12; prodPassed13 = prodTemp13; prodPassed14 = prodTemp14; prodPassed15 = prodTemp15;
  prodFailed = 0; prodFailed2 = 0; prodFailed3 = 0; prodFailed4 = 0; prodFailed5 = 0; prodFailed6 = 0; prodFailed7 = 0; prodFailed8 = 0; prodFailed9 = 0; prodFailed10 = 0; prodFailed11 = 0; prodFailed12 = 0; prodFailed13 = 0; prodFailed14 = 0; prodFailed15 = 0;
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
    //prodTemp, prodTemp2, prodTemp3, prodTemp4, prodTemp5, prodTemp6, 
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
      machineNo: "FIRST",
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
    },
    testData7 = {
      machineNo: machineNo7,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime7,
      prodTotal: prodTotal7,
      prodPassed: prodPassed7,
      prodFailed: prodFailed7,
      downTimeType: downTimeType7,
      stateStatus: stateStatus7,
      machineOn: machineOn7,
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
    demoData7 = {
      machineNo: "7",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime7,
      prodTotal: prodTotal7,
      prodPassed: prodPassed7,
      prodFailed: prodFailed7,
      downTimeType: downTimeType7,
      stateStatus: stateStatus7,
      machineOn: machineOn7,
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
    testData8 = {
      machineNo: machineNo8,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime8,
      prodTotal: prodTotal8,
      prodPassed: prodPassed8,
      prodFailed: prodFailed8,
      downTimeType: downTimeType8,
      stateStatus: stateStatus8,
      machineOn: machineOn8,
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
    demoData8 = {
      machineNo: "8",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime8,
      prodTotal: prodTotal8,
      prodPassed: prodPassed8,
      prodFailed: prodFailed8,
      downTimeType: downTimeType8,
      stateStatus: stateStatus8,
      machineOn: machineOn8,
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
    testData9 = {
      machineNo: machineNo9,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime9,
      prodTotal: prodTotal9,
      prodPassed: prodPassed9,
      prodFailed: prodFailed9,
      downTimeType: downTimeType9,
      stateStatus: stateStatus9,
      machineOn: machineOn9,
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
    demoData9 = {
      machineNo: "9",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime9,
      prodTotal: prodTotal9,
      prodPassed: prodPassed9,
      prodFailed: prodFailed9,
      downTimeType: downTimeType9,
      stateStatus: stateStatus9,
      machineOn: machineOn9,
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
    testData10 = {
      machineNo: machineNo10,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime10,
      prodTotal: prodTotal10,
      prodPassed: prodPassed10,
      prodFailed: prodFailed10,
      downTimeType: downTimeType10,
      stateStatus: stateStatus10,
      machineOn: machineOn10,
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
    demoData10 = {
      machineNo: "10",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime10,
      prodTotal: prodTotal10,
      prodPassed: prodPassed10,
      prodFailed: prodFailed10,
      downTimeType: downTimeType10,
      stateStatus: stateStatus10,
      machineOn: machineOn10,
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
    testData11 = {
      machineNo: machineNo11,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime11,
      prodTotal: prodTotal11,
      prodPassed: prodPassed11,
      prodFailed: prodFailed11,
      downTimeType: downTimeType11,
      stateStatus: stateStatus11,
      machineOn: machineOn11,
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
    demoData11 = {
      machineNo: "11",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime11,
      prodTotal: prodTotal11,
      prodPassed: prodPassed11,
      prodFailed: prodFailed11,
      downTimeType: downTimeType11,
      stateStatus: stateStatus11,
      machineOn: machineOn11,
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
    testData12 = {
      machineNo: machineNo12,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime12,
      prodTotal: prodTotal12,
      prodPassed: prodPassed12,
      prodFailed: prodFailed12,
      downTimeType: downTimeType12,
      stateStatus: stateStatus12,
      machineOn: machineOn12,
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
    demoData12 = {
      machineNo: "12",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime12,
      prodTotal: prodTotal12,
      prodPassed: prodPassed12,
      prodFailed: prodFailed12,
      downTimeType: downTimeType12,
      stateStatus: stateStatus12,
      machineOn: machineOn12,
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
    testData13 = {
      machineNo: machineNo13,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime13,
      prodTotal: prodTotal13,
      prodPassed: prodPassed13,
      prodFailed: prodFailed13,
      downTimeType: downTimeType13,
      stateStatus: stateStatus13,
      machineOn: machineOn13,
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
    demoData13 = {
      machineNo: "13",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime13,
      prodTotal: prodTotal13,
      prodPassed: prodPassed13,
      prodFailed: prodFailed13,
      downTimeType: downTimeType13,
      stateStatus: stateStatus13,
      machineOn: machineOn13,
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
    testData14 = {
      machineNo: machineNo14,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime14,
      prodTotal: prodTotal14,
      prodPassed: prodPassed14,
      prodFailed: prodFailed14,
      downTimeType: downTimeType14,
      stateStatus: stateStatus14,
      machineOn: machineOn14,
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
    demoData14 = {
      machineNo: "14",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime14,
      prodTotal: prodTotal14,
      prodPassed: prodPassed14,
      prodFailed: prodFailed14,
      downTimeType: downTimeType14,
      stateStatus: stateStatus14,
      machineOn: machineOn14,
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
    testData15 = {
      machineNo: machineNo15,
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime15,
      prodTotal: prodTotal15,
      prodPassed: prodPassed15,
      prodFailed: prodFailed15,
      downTimeType: downTimeType15,
      stateStatus: stateStatus15,
      machineOn: machineOn15,
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
    demoData15 = {
      machineNo: "15",
      lotNo: lotNo,
      modelNo: modelNo,
      target: target,
      cycleTime: cycleTime15,
      prodTotal: prodTotal15,
      prodPassed: prodPassed15,
      prodFailed: prodFailed15,
      downTimeType: downTimeType15,
      stateStatus: stateStatus15,
      machineOn: machineOn15,
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

setInterval(async() => {
  await initData();
  if (testData.lotNo != "undefined" || testData.lotNo != "BAD 255") {
    console.log(testData)
    // console.log(testData2)
    // console.log(testData3)
    // console.log(testData4)
    // console.log(testData5)
    // console.log(testData6)
    // console.log(demoData)
    // console.log(demoData2)
    // console.log(demoData3)
    // console.log(demoData4)
    // console.log(demoData5)
    // console.log(demoData6)
    // console.log(demoData7)
    // console.log(demoData8)
    // console.log(demoData9)
    // console.log(demoData10)
    // console.log(demoData11)
    // console.log(demoData12)
    // console.log(demoData13)
    // console.log(demoData14)
    // console.log(demoData15)
    prodTemp = 0; prodTemp2 = 0; prodTemp3= 0; prodTemp4 = 0; prodTemp5 = 0; prodTemp6 = 0; prodTemp7 = 0; prodTemp8 = 0; prodTemp9 = 0; prodTemp10 = 0; prodTemp11 = 0; prodTemp12 = 0; prodTemp13 = 0; prodTemp14 = 0; prodTemp15 = 0;
    // await main(testData, demoData)
    // await main(testData2, demoData2)
    // await main(testData3, demoData3)
    // await main(testData4, demoData4)
    // await main(testData5, demoData5)
    // await main(testData6, demoData6)
    // await main(testData7, demoData7)
    // await main(testData8, demoData8)
    // await main(testData9, demoData9)
    // await main(testData10, demoData10)
    // await main(testData11, demoData11)
    // await main(testData12, demoData12)
    // await main(testData13, demoData13)
    // await main(testData14, demoData14)
    // await main(testData15, demoData15)
    //prodTemp = 0; prodTemp2 = 0; prodTemp3= 0; prodTemp4 = 0; prodTemp5 = 0; prodTemp6 = 0;
    //testData.machineOn = false; testData2.machineOn = false; testData3.machineOn = false; testData4.machineOn = false; testData5.machineOn = false; testData6.machineOn = false;
    //demoData.machineOn = false; demoData2.machineOn = false; demoData3.machineOn = false; demoData4.machineOn = false; demoData5.machineOn = false; demoData6.machineOn = false;
    //testData.stateStatus = false; testData2.stateStatus = false; testData3.stateStatus = false; testData4.stateStatus = false; testData5.stateStatus = false; testData6.stateStatus = false;
    //demoData.stateStatus = false; demoData2.stateStatus = false; demoData3.stateStatus = false; demoData4.stateStatus = false; demoData5.stateStatus = false; demoData6.stateStatus = false;
    //testData.machineNo = "0"; testData2.machineNo = "0"; testData3.machineNo = "0"; testData4.machineNo = "0"; testData5.machineNo = "0"; testData6.machineNo = "0";
    //demoData.machineNo = "0"; demoData2.machineNo = "0"; demoData3.machineNo = "0"; demoData4.machineNo = "0"; demoData5.machineNo = "0"; demoData6.machineNo = "0";
    //testData.lotNo = "0"; testData2.lotNo = "0"; testData3.lotNo = "0"; testData4.lotNo = "0"; testData5.lotNo = "0"; testData6.lotNo = "0";
    //demoData.lotNo = "0"; demoData2.lotNo = "0"; demoData3.lotNo = "0"; demoData4.lotNo = "0"; demoData5.lotNo = "0"; demoData6.lotNo = "0";
    //testData.modelNo = "0"; testData2.modelNo = "0"; testData3.modelNo = "0"; testData4.modelNo = "0"; testData5.modelNo = "0"; testData6.modelNo = "0";
    //demoData.modelNo = "0"; demoData2.modelNo = "0"; demoData3.modelNo = "0"; demoData4.modelNo = "0"; demoData5.modelNo = "0"; demoData6.modelNo = "0";
    //testData.target = 0;
    //testData.cycleTime = 0; testData2.cycleTime = 0; testData3.cycleTime = 0; testData4.cycleTime = 0; testData5.cycleTime = 0; testData6.cycleTime = 0;
    //demoData.cycleTime = 0; demoData2.cycleTime = 0; demoData3.cycleTime = 0; demoData4.cycleTime = 0; demoData5.cycleTime = 0; demoData6.cycleTime = 0;
    //testData.prodTemp = prodTemp; testData2.prodTemp = prodTemp; testData3.prodTemp = prodTemp; testData4.prodTemp = prodTemp; testData5.prodTemp = prodTemp; testData6.prodTemp = prodTemp;
    //demoData.prodTemp = prodTemp; demoData2.prodTemp = prodTemp; demoData3.prodTemp = prodTemp; demoData4.prodTemp = prodTemp; demoData5.prodTemp = prodTemp; demoData6.prodTemp = prodTemp;
    //testData.prodTotal = prodTemp; testData2.prodTotal = prodTemp; testData3.prodTotal = prodTemp; testData4.prodTotal = prodTemp; testData5.prodTotal = prodTemp; testData6.prodTotal = prodTemp;
    //demoData.prodTotal = prodTemp; demoData2.prodTotal = prodTemp; demoData3.prodTotal = prodTemp; demoData4.prodTotal = prodTemp; demoData5.prodTotal = prodTemp; demoData6.prodTotal = prodTemp;
    //testData.prodPassed = prodTemp; testData2.prodPassed = prodTemp; testData3.prodPassed = prodTemp; testData4.prodPassed = prodTemp; testData5.prodPassed = prodTemp; testData6.prodPassed = prodTemp;
    //demoData.prodPassed = prodTemp; demoData2.prodPassed = prodTemp; demoData3.prodPassed = prodTemp; demoData4.prodPassed = prodTemp; demoData5.prodPassed = prodTemp; demoData6.prodPassed = prodTemp;
    //testData.prodFailed = 0; testData2.prodFailed = 0; testData3.prodFailed = 0; testData4.prodFailed = 0; testData5.prodFailed = 0; testData6.prodFailed = 0;
    //demoData.prodFailed = 0; demoData2.prodFailed = 0; demoData3.prodFailed = 0; demoData4.prodFailed = 0; demoData5.prodFailed = 0; demoData6.prodFailed = 0;
    //testData.downTimeType = 0; testData2.downTimeType = 0; testData3.downTimeType = 0; testData4.downTimeType = 0; testData5.downTimeType = 0; testData6.downTimeType = 0;
    //demoData.downTimeType = 0; demoData2.downTimeType = 0; demoData3.downTimeType = 0; demoData4.downTimeType = 0; demoData5.downTimeType = 0; demoData6.downTimeType = 0;
    //testData.oeeIndicator = 0;
    //testData.availableIndicator = 0;
    //testData.performanceIndicator = 0;
    //testData.qualityIndicator = 0;
  }
}, 10000);
