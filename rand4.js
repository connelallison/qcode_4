const rand4 = function () {
  return Math.floor(Math.random() * 5)
}

// console.log(rand4());
// console.log(rand4());
// console.log(rand4());


const rand5 = function () {
  let results = rollRand4();
  return (results[0] + results[1]) % 6;
}


const rollRand4 = function () {
  let result1 = rand4();
  let result2 = rand4();
  if (result1 === 2 & result2 === 2) {
    return rollRand4();
  }
  return [result1, result2];
}
// console.log(rand5());
// console.log(rand5());
// console.log(rand5());


const testTable = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 12000000; i++) {
  testTable[rand5()]++;
}

console.log(testTable);
