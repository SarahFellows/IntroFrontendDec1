
document.getElementById("count").onclick = counts; 
// element id needds to match the button Id

function counts() {
//Get the numbers from the inputs 

	var usernumber = document.getElementById("casino").value; 
	//this is assigning the variable as what the user puts into the box to add it below so the count doesnt go above what the user puts in 

	for (var i=0; i <=usernumber; i++) {
		console.log(i); 

		document.getElementById("results").innerHTML += i; 
	}
}
	// this is the loop, saying that the var starts at 0, it will keep looping until the number the user puts in and increment by i (i++)
	
