
//add a event listener to the sum button 
document.getElementById("sum").onclick = calculate; 
//document is the "tree" of html, used to grab certain sections fro the tree. First would need to name the section id then reference it in the document.getElementId("Put special name here or section ID")

function calculate() {
//Get the numbers from the inputs 
var number1 = parseInt(document.getElementById("number1").value); 
var number2 = parseInt(document.getElementById("number2").value); 

//Pass them to add
var sum = add(number1, number2); 
var sub = subtract(number1, number2); 
var multi = multiple (number1, number2); 
var div = divide (number1, number2); 
var avg = average (number1, number2)

//Update the div with the sum 
document.getElementById("solution").innerHTML = "<h2>Sum:</h2>" + sum + "<h2>Difference</h2>" + sub + "<h2>Multiplied</h2>" + multi + "<h2>Divide</h2>" + div + "<h2>Average</h2>" + avg
}

function add (number1, number2) { 
	// add together the two passed numbers 
	var sum = number1 + number2; 

// return the sum of the passed number 
	return sum; 
}

function subtract (number1, number2){
	//subtract the two numbers
	var total = number1 - number2; 

	//return the difference of the passes numbers 
	return total; 
}
	
function multiple (number1, number2){
var total = number1 * number2; 

	return total; 
}

function divide (number1, number2){
	var total = number1 / number2 

	return total;
}

function average (number1, number2){ 
	var total = ((number1 + number2) / 2)

	return total; 
}


