/*
	File: main.js

	Created by Jonathan E. Ortiz
*/

(function(){


	prompt(" Hello Welcome To Jon's Program -____- ");

	// User's input First and last name
 	var first = prompt(" Enter your First Name: ");

 	var last = prompt(" Enter your Last Name: ");

 	// Calling the FullName function to add the name together
 	var userName =  FullName(first,last);

 	var input = 0;

 	prompt(" Hello " + userName + " it's nice to meet you");

 	var movieList = ["Star Wars",];


 	prompt("Welcome " + userName + " your Movie List");

 	while(input != 4){


 		for( var i = 0; i < movieList.length;i++){
 		input = prompt(userName + "'s Movie List" + "\n" +
 		"----------------------------" + "\n" +
 		 movieList[i] + "\n" +
		"----------------------------" + "\n" +
		"1)Add" + "\n" +
		"2)Delete" + "\n");
 		}


 	}




})();
function FullName(first, last){

	var fullname = first + " " + last 

	return fullname;
}