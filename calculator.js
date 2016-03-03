var handleClick = function(){
	console.log(window.event);
	var choice = window.event.target.id;
	console.log(choice)
	var number1 = document.getElementById("firstNum").value;
	var number2 = document.getElementById("secondNum").value;
	var parsedNumber1 = parseFloat (number1);
	var parsedNumber2 = parseFloat (number2);

	if (choice == "addition") {
		var answer = parsedNumber1 + parsedNumber2;	
		document.write("The answer is " + answer);
		console.log("The answer is " + answer);
}		else if(choice =="subtraction") {
		var answer = parsedNumber1 - parsedNumber2;
		document.write("The answer is " + answer);
		console.log("The answer is " + answer);
}		else if(choice =="multiplication") {
		var answer = parsedNumber1 * parsedNumber2;
		document.write("The answer is " + answer);
		console.log("The answer is " + answer);
}		else if(choice =="divide") {
		var answer = parsedNumber1 / parsedNumber2;
		document.write("The answer is " + answer);
		console.log("The answer is " + answer);
	}
}