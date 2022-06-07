const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let b=0;
	for(i=0; i<a.length;i++){
    b = b + a[i];
  }
  return b;
};

//continue this part
const multiply = function(a) {
  b = 1;
  for(i=0; i<a.length; i++){
  b = b * a[i];
  } 
  return b;
};

const power = function(a,b) {
	let c = Math.pow(a,b);
  return c;
};

const factorial = function(a) {
	let x = 1;
  if(a== 0 || a == 1){
    return x;

  }else{
    for(var i = a; i>=1; i--){
     
      x = x * i;
    }
    return x;

  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
