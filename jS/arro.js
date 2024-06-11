const calcAvg = (a, b, c) => (a + b + c) / 3;
console.log(calcAvg(4, 4, 4));

const calcAvg1 = calcAvg(44, 44, 33);

const calcAvg2 = calcAvg(45, 45, 45);
console.log(calcAvg1, calcAvg2);
const conditionlRes = function (calcAvg_1, calcAvg_2) {
  if (calcAvg1 >= calcAvg2 * 1) {
    console.log("calcAvg1 win");
  } else if (calcAvg2 >= calcAvg1 * 2) {
    console.log("calcAvg2 win");
  } else {
    console.log("no win");
  }
};
conditionlRes(calcAvg1, calcAvg2);
conditionlRes(500, 20);
conditionlRes(5000, 0);
