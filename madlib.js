
var madlib = "It was a "; 

var adverb = prompt(" Give me an adverb"); 

// this is a conditional - check that you got something in adverb
if (adverb == null) { 
	adverb = "stormy"; 
}


madlib += adverb + " night. Local sources say ";

var dogname = prompt(" give me a dog name, please"); 
if (dogname == null) {
	dogname = "Sarah";
}

madlib += dogname + ("was caught in the dark. She was ");  

var emotion = prompt(" Please give me an emotion"); 
if (emotion == null) {
	emotion = "Happy";
}

madlib = madlib + emotion + (" and felt like she needed to run away. She ran until she found ");

var store = prompt(" Please name a store "); 
if (store == null){
	store = "New Seasons"; 
}

madlib = madlib + store + (" She was so excited that she "); 

var action = prompt("Please tell me an action "); 
if (action == null){
	action = "jumped"; 
}

madlib = madlib + action + (" Then she proceeded to call her "); 

var family = prompt(" Please name a female family member "); 
if (family == null){
	family = "Mom"; 
}

madlib = madlib + family + (" to tell her that she needed her to come pick him/her up to take her home. "); 



var time = prompt ("Please tell me a time of day"); 
if (time <= 800) { 
	time = "Good Morning"; 
} else if (time > 800 && time <= 1100) {
	time = "Good Afternoon"; 
} else if (time > 1100 && time <= 1500) {
	time = "Good Evening"; 
} else if (time > 1500 && time <= 2400) {
	time = "Good Night"; 
} else {time = "Good Day";}

madlib = madlib + time 




// Print the madlib to the console 
console.log(madlib); 

// Add the Madlib to the webpage 
// Get the madlib div from the html page, store a reference to it in Javascript 
var madlib_div = document.getElementById("madlib"); 
console.log(madlib_div); 

// add the madlib into the div 
madlib_div.textContent = madlib; 










// madlib = madlib + family    is the same as    madlib += family 
