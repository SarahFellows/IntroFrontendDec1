document.getElementById("quote").onclick = get_quote; 


function get_quote(){
//get the words from the input
  
  event.preventDefault();
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
      .done(update);
	
}

function update(response){
//update HTML to have new quote 

	document.getElementById("quotes").innerHTML = response.quoteText; 
	//Find the element on the HTML and update the HTML to whatever is stored inside .quoteText

	document.getElementById("author").innerHTML = response.quoteAuthor; 

}

