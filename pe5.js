//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var divisible = function(num1, num2) {
    var allDivided = false;
	var smallestNum = num1;
	while (allDivided === false) {
		for (var i = num1; i <= num2; i++) {
			if (smallestNum % i !== 0){
				smallestNum++;
                allDivided = false;
				break;
			}
            allDivided = true;
		}		
	}
    return smallestNum;
};

console.log(divisible(11,20));