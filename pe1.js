//Add all the natural numbers below one thousand that are multiples of 3 or 5.

var multiplesSum = function(n) {
    var sumThreeFive = 0;
    for (var i = 1; i < n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumThreeFive += i;
        }
    }
    return sumThreeFive;
};

console.log(multiplesSum(1000));