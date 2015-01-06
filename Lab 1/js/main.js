/*
	File: main.js

	Created by Jonathan E. Ortiz
*/

(function(){


	prompt(" Hello Welcome To Jon's Program -____- ");

 	var first = prompt(" Enter your First Name: ");

 	var last = prompt(" Enter your Last Name: ");

 	var userName =  FullName(first,last);

 	var input = 0;

 	prompt(" Hello " + userName + " it's nice to meet you");

 	var movies = [StarWars {rating:1}]

 	while(input != 4){


 		for( i = 0; i < movies.length;i++){
 		input = prompt(userName + "  This is your movie List Movie List"
 			+ movies[i]+ \n);
 		}


 	}




})();
function FullName(first, last){

	var fullname = first + " " + last 

	return fullname;
}