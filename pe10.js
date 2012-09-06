//Calculate the sum of all the primes below two million.

var sumPrimes = function(highestPrime){
  var primes = [2];
  var total = 0;
  for(var i = primes[0] + 1; highestPrime > primes[primes.length - 1]; i++){
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
  for(var k = 0; k < primes.length - 1; k++){
    total += primes[k];
  }
  return total;
};

console.log(sumPrimes(2000000));