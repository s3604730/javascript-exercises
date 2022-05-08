const removeFromArray = function(numArray, ...removeNums) {
    let difference = numArray.filter(x => !removeNums.includes(x));
    console.log(difference);
    return difference;


};

removeFromArray([1, 2, 3, 4], 3,4,5);

// Do not edit below this line
module.exports = removeFromArray;
