(function() {
 //Creating an input element for testing
var input = document.createElement('input');

// Create the supports object
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

var send = document.getElementId('contact-submit');
if (send) {
	send.onclick = function () {
		this.innerHTML = "...Sending";
		}
	}
})();
