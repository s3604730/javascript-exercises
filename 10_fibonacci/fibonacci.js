const fibonacci = function(n) {
    if(n < 0){
        return "OOPS";

    }else{
    if(n <= 1){
        return parseInt(n);
    
    }
    let a = fibonacci(n-1)+ fibonacci(n-2);
    let b = parseInt(a);
   

    return b;
}

};

fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
