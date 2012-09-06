/* 
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function isPrime(num){
    if(num % 2 === 0){
        return false;
    }
    for(var i = num - 1; i > 1; i--){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

var num = 600851475143;
for(var i = 0; i < num; i++){
    if(num % i === 0){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
