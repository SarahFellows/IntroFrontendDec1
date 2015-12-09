
document.getElementById("count").onclick = counts; 
// element id needds to match the button Id

function counts() {
//Get the numbers from the inputs 

	var usernumber = document.getElementById("casino").value; 
	//this is assigning the variable as what the user puts into the box to add it below so the count doesnt go above what the user puts in 

	var dice_img = ['1.png', '2.png', '3.png', '4.png','5.png', '6.png']; 


	for (var i=0; i <=usernumber; i++) {
		console.log(i); 
		//Generate a random number between 1 and 6
		var side= 2; 

		//Show the correct dice image for the randomly generated number 


		document.getElementById("dice").innerHTML += "<img src='" + dice_img[side] + "' />";
	}; 
}
	// this is the loop, saying that the var starts at 0, it will keep looping until the number the user puts in and increment by i (i++)
