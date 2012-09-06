//Find the 10001st prime.

var findPrime = function(num){
  var primes = [2];

  for(var i = primes[0] + 1; num > primes.length; i++){
    var isPrime = false;
     for(var j = 0; j < primes.length; j++){
         if(i % primes[j] === 0){
            isPrime = false;
            break;
         }
       isPrime = true;
     }
     if(isPrime === true){
     primes.push(i);
     }
  }
  return primes.pop();
};

console.log(findPrime(10001));