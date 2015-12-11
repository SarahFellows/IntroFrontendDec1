
document.getElementById("count").onclick = add_inventory; 
// element id needds to match the button Id
document.getElementById("remove").onclick = remove_inventory; 
//these are click listeners 
document.getElementById("take").onclick= take_inventory; 
document.getElementById("add").onclick= top_add; 


var products = []

function add_inventory() {
//Get the numbers from the inputs 

	var new_product = document.getElementById("new_product").value; 
	//this is assigning the variable as what the user puts into the box to add it below so the count doesnt go above what the user puts in 

	products.push(new_product); 

	printing(); 

}
	// this is the loop, saying that the var starts at 0, it will keep looping until the number the user puts in and increment by i (i++)


	
function remove_inventory(){ 
//take the top item from the list 

	products.shift(); 
	// you dont need to do "var anything" because you dont need to assign the variable

	printing(); 

}



function take_inventory(){
	//take from the bottom of the list

	products.pop(); 

	printing(); 
}



function top_add(){
	//add an item to the top of the list 

	var new_add = document.getElementById("new_product").value; 
	//assigns the variable 

	products.unshift(new_add); 
	//array function

	printing(); 
}


function printing(){

	var new_HTML = "<ol><p>"; 

	for (var i = 0; i <products.length; i++) {

		new_HTML += "<li>" + products[i] + "</li>"; 
	}

	document.getElementById("results").innerHTML = new_HTML + "</ol></p>"; 
}
