
//add a event listener to the sum button 

document.getElementById("sum").onclick = calculate; 

//document is the "tree" of html, used to grab certain sections fro the tree. First would need to name the section id then reference it in the document.getElementId("Put special name here or section ID")

function calculate() {
//Get the numbers from the inputs 
var number1= document.getElementById("number1").value; 
var number2= document.getElementById("number2").value; 

//Pass them to add
var sum = add(parseInt(number1), parseInt(number2)); 

//Update the div with the sum 
document.getElementById("solution").textContent = sum; 

}



function add (number1, number2) { 
	// add together the two passed numbers 
	var sum = number1 + number2; 

	// return the sum of the passed number 
	return sum; 
}