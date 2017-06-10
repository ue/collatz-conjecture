function clickButton() {
	var number = document.getElementById("number").value;
	var elem = document.getElementById("result");
	elem.innerHTML = calc(number);
};
	
var calc = function collatz(number) {

	if (number > 0) {

		if (number % 2 == 0) {
			number = number / 2;
			console.log(number);

			if (number != 1) {
				calc(number);
				return "prossesed";
				console.log(number);
			} else {
				alert("Result is "+ number +". You didn't find the correct number :(");
				document.getElementById("result").innerHTML = "";
			}

		} else{
			number = number * 3 + 1;
			console.log(number);

			if (number != 1) {
				calc(number);
				return "prossesed";
				console.log(number);
			} else {
				alert("Result is "+ number +". You didnt find the correct number :(");
				return "Done";
			}
		}

	} else {
	    return "Must be bigger than zero!!";
	}
};