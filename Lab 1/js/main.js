/*
	File: main.js

	Created by Jonathan E. Ortiz
*/

var movieList = ["Star Wars",];

(function(){


	prompt(" Hello Welcome To Jon's Program -____- ");

	// User's input First and last name
 	var first = prompt(" Enter your First Name: ");

 	var last = prompt(" Enter your Last Name: ");

 	// Calling the FullName function to add the name together
 	var userName =  FullName(first,last);

 	var input = 0;

 	prompt(" Hello " + userName + " it's nice to meet you");

 	


 	prompt("Welcome " + userName + " your Movie List");

 	while(input != 3){


 		input = prompt(userName + "'s Movie List" + "\n" +
 		"----------------------------" + "\n" +
 		 movieList + "\n" +
		"----------------------------" + "\n" +
		"1)Add" + "\n" +
		"2)Delete" + "\n"+
		"3)Quit");
 		

 		if( input == 1){

 			movie = prompt("Enter a movie:");

 			Add(movie);

 		}else if(input == 2){

 			dMovie = prompt(" Whch Movie do you want to remove:" + "\n" +
 				movieList+" " + "\n"+
 				" Enter the number of the movie in the list. Starts at 1 After Star Wars");

 			Delete(dMovie);

 		}

 	}




})();
function FullName(first, last){

	var fullname = first + " " + last 

	return fullname;
}
function Add(m){

	movieList.push(m);

}
function Delete(m){

	if(parseInt(m) == 1){

	var counter =  parseInt(m);

	}else{
		var counter =  parseInt(m) - 1;
	}

	movieList.splice(m,counter);

}