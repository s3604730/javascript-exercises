const palindromes = function (a) {
let b = a.toLowerCase();
let newString="";
let c = b.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "");
let d = c.replace(/\s/g, '');
for(var i =d.length-1; i >=0; i--){
    newString+=d[i];


}
console.log(d);
console.log(newString);

if (d == newString){
    return true;
}else{
    return false;
}

};
palindromes('A car, a man, a maraca.')
// Do not edit below this line
module.exports = palindromes;
