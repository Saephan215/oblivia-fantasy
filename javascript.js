// This function is used to scroll the playlist left and right on arrow created on the video scss file

$(document).ready(function() {
	$(".arrow-right").bind("click", function (event) {
		event.preventDefault();
		$(".vid-list-container").stop().animate({
			scrollLeft: "+=336"
		}, 750);
	});

	$(".arrow-left").bind("click", function(event) {
		event.preventDefault();
		$(".vid-list-container").stop().animate({
			scrollLeft: "-=336"
		}, 750);
	});
});

/* This function is used to creating alternating div colors*/

$(document).ready(function(){ //Find out how to run script after 


	var section = document.getElementsByClassName("general-section");

		for(var i=0;i<section.length;i++) {

		  section[i].classList.add(i % 2 === 0 ? "even" : "odd");

	}

});




/* This function tests the contact form inputs to see if the current browswer supports a functionality
of CSS. It also changes the submit button after submitting the form */
(function() {
 //Creating an input element for testing
var input = document.createElement('input');

// Create the Supports object
var supports = {};


supports.autofocus ='autofocus' in input;
supports.required = 'required' in input;
supports.placeholder = 'placeholder' in input;

//Fallback for autofocus attribute
if(!supports.autofocus) {
		document.getElementId('contact-submit').focus();
} 

//Fallback for required attribute
if(!supports.required) {

}

//Fallback for placeholder attribute
if(!supports.placeholder) {

}

//Change text inside send button on submit

var send = document.getElementById('contact-submit');
if (send) {
	send.onclick = function () {
		this.innerHTML = "...Sending";
		}
	}
})();
