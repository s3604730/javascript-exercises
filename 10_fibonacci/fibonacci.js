const fibonacci = function(n) {
    
    if(n <= 1){
        return n;
    
    }
    let a = fibonacci(n-1)+ fibonacci(n-2);
    let b = Number(a);
    console.log(b);
    return b;

};

fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
