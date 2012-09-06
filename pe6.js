//Find the difference between the sum of the squares 
//of the first one hundred natural numbers and the square of the sum.

var squareDiff = function(num){
	var squaredSum = 0;
	var sumSquares = 0;
	var difference = 0;
	for(var i = 1; i <= num; i++){
		sumSquares += i * i;
		squaredSum += i;
	}
	squaredSum *= squaredSum;
	difference = squaredSum - sumSquares;
	return difference;
};

console.log(squareDiff(100));