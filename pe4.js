//Find the largest palindrome made from the product of two 3-digit number

for (var h = 999; h >= 900; h--) {
    for (var i = 999; i >= 900; i--) {
        var number = h * i;
        var oldNum = number.toString();
        var newNum = "";
        for(j = (oldNum.length - 1); j >= 0; j--){
            newNum += oldNum[j];
        }

        if (newNum === oldNum){
            console.log(h + " times " + i + " makes " + newNum + " which is a Palidrome!");
        }
    }
}