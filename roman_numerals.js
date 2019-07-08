// // First (scrapped) version

// const romanNumeral = function (integer) {
//   const mCount = parseInt(integer / 1000);
//   // const dCount = (integer - mCount * 1000) % 500;
//   const cCount = (integer - parseInt(mCount * 1000) - (dCount * 500)) % 100;
//   // const lCount = (integer - mCount * 1000 - dCount * 500 - cCount * 100) % 50;
//   const xCount = (integer - mCount * 1000 - dCount * 500 - cCount * 100 - lCouunt* 50) % 10;
//   // const vCount = (integer - mCount * 1000 - dCount * 500 - cCount * 100 - lCouunt* 50 - xCount * 10) % 5;
//   const iCount = (integer - mCount * 1000 - dCount * 500 - cCount * 100 - lCouunt* 50 - xCount * 10 - vCount * 5) % 1;
//
//   let numeral = "";
//   for (let i = 0; i < mCount; i++) {
//     numeral += "M";
//   }
//   // if (dCount) {
//   //   numeral += "D";
//   // }
//   // if (cCount === 4) {
//   //   numeral +=
//   // }
//   // for (let i = 0; i < cCount; i++) {
//   //   array[i]
//   // }
//   if (cCount % 5) {
//
//   }
// }




// // Second (successful) version, with code repetition (and better readability)
//
// const romanNumeral = function (integer) {
//   const mCount = parseInt(integer / 1000);
//   const cCount = parseInt((integer - mCount * 1000) / 100);
//   const xCount = parseInt((integer - mCount * 1000 - cCount * 100) / 10);
//   const iCount = parseInt((integer - mCount * 1000 - cCount * 100 - xCount * 10) / 1);
//   let numeral = "";
//   for (var i = 0; i < mCount; i++) {
//     numeral += "M";
//   }
//
//   if (cCount > 4) {
//     if (cCount === 9) {
//       numeral += "CM";
//     } else {
//       numeral += "D";
//       for (var i = 0; i < cCount % 5; i++) {
//         numeral += "C";
//       }
//     }
//   } else {
//     if (cCount === 4) {
//       numeral += "CD";
//     } else {
//       for (var i = 0; i < cCount % 5; i++) {
//         numeral += "C";
//       }
//     }
//   }
//
//   if (xCount > 4) {
//     if (xCount === 9) {
//       numeral += "XC";
//     } else {
//       numeral += "L";
//       for (var i = 0; i < xCount % 5; i++) {
//         numeral += "X";
//       }
//     }
//   } else {
//     if (xCount === 4) {
//       numeral += "XL";
//     } else {
//       for (var i = 0; i < xCount % 5; i++) {
//         numeral += "X";
//       }
//     }
//   }
//
//   if (iCount > 4) {
//     if (iCount === 9) {
//       numeral += "IX";
//     } else {
//       numeral += "V";
//       for (var i = 0; i < iCount % 5; i++) {
//         numeral += "I";
//       }
//     }
//   } else {
//     if (iCount === 4) {
//       numeral += "IV";
//     } else {
//       for (var i = 0; i < iCount % 5; i++) {
//         numeral += "I";
//       }
//     }
//   }
//
//   return numeral;
// }
//
// console.log(romanNumeral(1));
// console.log(romanNumeral(2));
// console.log(romanNumeral(3));
// console.log(romanNumeral(4));
// console.log(romanNumeral(5));
// console.log(romanNumeral(6));
// console.log(romanNumeral(7));
// console.log(romanNumeral(8));
// console.log(romanNumeral(9));
// console.log(romanNumeral(10));
// console.log(romanNumeral(11));
// console.log(romanNumeral(12));
// console.log(romanNumeral(13));
// console.log(romanNumeral(14));
// console.log(romanNumeral(15));
// console.log(romanNumeral(16));
// console.log(romanNumeral(17));
// console.log(romanNumeral(18));
// console.log(romanNumeral(19));
// console.log(romanNumeral(20));
// console.log(romanNumeral(21));
// console.log(romanNumeral(22));
// console.log(romanNumeral(23));
// console.log(romanNumeral(24));
// console.log(romanNumeral(25));
// console.log(romanNumeral(26));
// console.log(romanNumeral(27));
// console.log(romanNumeral(28));
// console.log(romanNumeral(29));
// console.log(romanNumeral(30));
// console.log(romanNumeral(31));
// console.log(romanNumeral(40));
// console.log(romanNumeral(50));
// console.log(romanNumeral(60));
// console.log(romanNumeral(70));
// console.log(romanNumeral(80));
// console.log(romanNumeral(90));
// console.log(romanNumeral(100));
// console.log(romanNumeral(101));
// console.log(romanNumeral(150));
// console.log(romanNumeral(200));
// console.log(romanNumeral(300));
// console.log(romanNumeral(400));
// console.log(romanNumeral(500));
// console.log(romanNumeral(600));
// console.log(romanNumeral(700));
// console.log(romanNumeral(800));
// console.log(romanNumeral(900));
// console.log(romanNumeral(1000));
// console.log(romanNumeral(1100));
// console.log(romanNumeral(1600));
// console.log(romanNumeral(1700));
// console.log(romanNumeral(1900));
// console.log(romanNumeral(10000));
// console.log(romanNumeral(4984));


// // Third (revised) version with code reptition replaced with a single function.
//
// const romanNumeralRevised = function (integer) {
//   const options = {
//     C: {
//       nine: "CM",
//       four: "CD",
//       five: "D",
//       unit: "C"
//     },
//     X: {
//       nine: "XC",
//       four: "CL",
//       five: "L",
//       unit: "X"
//     },
//     I: {
//       nine: "IX",
//       four: "IV",
//       five: "V",
//       unit: "I"
//     }
//   };
//
//   const count = function (count, type) {
//     if (count > 4) {
//       if (count === 9) {
//         numeral += options[type].nine;
//       } else {
//         numeral += options[type].five;
//         for (var i = 0; i < count % 5; i++) {
//           numeral += options[type].unit;
//         }
//       }
//     } else {
//       if (count === 4) {
//         numeral += options[type].four;
//       } else {
//         for (var i = 0; i < count % 5; i++) {
//           numeral += options[type].unit;
//         }
//       }
//     }
//   }
//
//
//   const mCount = parseInt(integer / 1000);
//   const cCount = parseInt((integer - mCount * 1000) / 100);
//   const xCount = parseInt((integer - mCount * 1000 - cCount * 100) / 10);
//   const iCount = parseInt((integer - mCount * 1000 - cCount * 100 - xCount * 10) / 1);
//   let numeral = "";
//
//   for (var i = 0; i < mCount; i++) {
//     numeral += "M";
//   }
//   count(cCount, "C");
//   count(xCount, "X");
//   count(iCount, "I");
//
//   return numeral;
// }
//
//
// console.log(romanNumeralRevised(1));
// console.log(romanNumeralRevised(2));
// console.log(romanNumeralRevised(3));
// console.log(romanNumeralRevised(4));
// console.log(romanNumeralRevised(5));
// console.log(romanNumeralRevised(6));
// console.log(romanNumeralRevised(7));
// console.log(romanNumeralRevised(8));
// console.log(romanNumeralRevised(9));
// console.log(romanNumeralRevised(10));
// console.log(romanNumeralRevised(11));
// console.log(romanNumeralRevised(12));
// console.log(romanNumeralRevised(13));
// console.log(romanNumeralRevised(14));
// console.log(romanNumeralRevised(15));
// console.log(romanNumeralRevised(16));
// console.log(romanNumeralRevised(17));
// console.log(romanNumeralRevised(18));
// console.log(romanNumeralRevised(19));
// console.log(romanNumeralRevised(20));
// console.log(romanNumeralRevised(21));
// console.log(romanNumeralRevised(22));
// console.log(romanNumeralRevised(23));
// console.log(romanNumeralRevised(24));
// console.log(romanNumeralRevised(25));
// console.log(romanNumeralRevised(26));
// console.log(romanNumeralRevised(27));
// console.log(romanNumeralRevised(28));
// console.log(romanNumeralRevised(29));
// console.log(romanNumeralRevised(30));
// console.log(romanNumeralRevised(31));
// console.log(romanNumeralRevised(40));
// console.log(romanNumeralRevised(50));
// console.log(romanNumeralRevised(60));
// console.log(romanNumeralRevised(70));
// console.log(romanNumeralRevised(80));
// console.log(romanNumeralRevised(90));
// console.log(romanNumeralRevised(100));
// console.log(romanNumeralRevised(101));
// console.log(romanNumeralRevised(150));
// console.log(romanNumeralRevised(200));
// console.log(romanNumeralRevised(300));
// console.log(romanNumeralRevised(400));
// console.log(romanNumeralRevised(500));
// console.log(romanNumeralRevised(600));
// console.log(romanNumeralRevised(700));
// console.log(romanNumeralRevised(800));
// console.log(romanNumeralRevised(900));
// console.log(romanNumeralRevised(1000));
// console.log(romanNumeralRevised(1100));
// console.log(romanNumeralRevised(1600));
// console.log(romanNumeralRevised(1700));
// console.log(romanNumeralRevised(1900));
// console.log(romanNumeralRevised(10000));
// console.log(romanNumeralRevised(4984));



// // Incomplete function to turn a numeral back into an integer.
//
// const numeralToInt = function (numeral) {
//   let integer = 0;
//   let i = 0;
//   for (; i < numeral.length; i++) {
//     if (numeral[i] === "M") {
//       integer += 1000;
//     } else {
//       i++;
//       break;
//     }
//   }
//   for (; i < numeral.length; i++) {
//     if (numeral[i] === "C") {
//
//       integer += 900;
//       i++;
//       i++;
//       break;
//     } else if (numeral[i] === "D") {
//       integer += 500;
//     }
//   }
// }
