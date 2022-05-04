const reverseString = function(string) {

let stringLength = string.length-1;

let stringArray = [];

while(stringLength >= 0){
    stringArray.push(string[stringLength]);
    stringLength-=1;

}

let returnString = stringArray.join("");


return returnString;


};


// Do not edit below this line
module.exports = reverseString;
