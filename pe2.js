//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var a = 0;
var b = 1;
var total = 0;
var c = 0;
while(c < 4000000){
    c = a + b;
    if(c % 2 === 0){
        total += c;
    }
    a = b;
    b = c;
}
console.log(total);
