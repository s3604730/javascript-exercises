const sumAll = function (a, b) {
  let progressNumber = 0;
  let endNumber = 0;
  let sum = 0;

  if (a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
    if (a < b) {
      progressNumber = a;
      endNumber = b;
    } else {
      progressNumber = b;
      endNumber = a;
    }

    while (progressNumber <= endNumber) {
      sum += progressNumber;
      progressNumber++;
    }
  } else {
    return "ERROR";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
