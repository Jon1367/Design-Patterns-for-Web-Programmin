/*
	File: main.js

	Created by Jonathan E. Ortiz
*/

(function(){


prompt(" Hello Welcome To Jon's Program -____- ");

 var first = prompt(" Enter your First Name: ");

 var last = prompt(" Enter your Last Name: ");


 prompt(" Hello " + FullName(first,last) + " it's nice to meet you");

})();
function FullName(first, last){

	var fullname = first + " " + last 

	return fullname;
}