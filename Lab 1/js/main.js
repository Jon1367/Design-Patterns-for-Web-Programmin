/*
	File: main.js

	Created by Jonathan E. Ortiz
*/

var movieList = ["Star Wars",];

var user = {
	name:""
};


(function(){


	prompt(" Hello Welcome To Jon's Program -____- ");

	// User's input First and last name
 	var first = prompt(" Enter your First Name: ");

 	var last = prompt(" Enter your Last Name: ");

 	// Calling the FullName function to add the name together
 	var userName =  FullName(first,last);

 	var input = 0;

 	// using object property name setting it equal to userName
 	user.name = String(userName);



 	prompt(" Hello " + user.name + " it's nice to meet you");

 	


 	prompt("Welcome " + user.name + " your Movie List");

 	// While loop to keep programing looping untill user quits
 	while(input != 3){


 		// Display Infromation and choices
 		input = prompt(user.name + "'s Movie List" + "\n" +
 		"----------------------------" + "\n" +
 		 movieList + "\n" +
		"----------------------------" + "\n" +
		"1)Add" + "\n" +
		"2)Delete" + "\n"+
		"3)Quit");
 		

 		// if statement to determind what actions to perform
 		if( input == 1){

 			movie = prompt("Enter a movie:");

 			Add(movie);

 		}else if(input == 2){

 			dMovie = prompt(" Whch Movie do you want to remove:" + "\n" +
 				movieList+" " + "\n"+
 				" Enter the number of the movie in the list. Starts at 1 After Star Wars");

 			// Calling Delete function Sending the index of the movie
 			Delete(dMovie);

 		}

 	}




})();
function FullName(first, last){

	// Add First and last name and then add them together
	var fullname = first + " " + last 

	
	return fullname;
}
function Add(m){

	//push into the array
	movieList.push(m);

}
function Delete(m){


	// Create counter for splice
	var	counter = 0;

	// Debug number 1 bug that deteles wrong index
	if(parseInt(m) == 1){

		counter =  parseInt(m);

	}else{

		// Delete a specfic index
		counter =  parseInt(m) - 1;
	}

	//splice the index
	movieList.splice(m,counter);

}