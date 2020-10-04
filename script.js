


$(document).ready(function () {

	// create variable to log current hour
	var currentHour = moment().hour();
	console.log(currentHour);
	// Display current day/time
	$("#currentDay").text(moment().format("LLLL"));

	// Shade each hour block based on time of day
	if (currentHour === 9){
		$("#hour-9").addClass("present");
	}
	if (currentHour > 9){
		$("#hour-9").addClass("past");
	}
	if (currentHour < 9){
		$("#hour-9").addClass("future");
	}
	if (currentHour === 10){
		$("#hour-10").addClass("present");
	}
	if (currentHour > 10){
		$("#hour-10").addClass("past");
	}
	if (currentHour < 10){
		$("#hour-10").addClass("future");
	}	
	if (currentHour === 11){
		$("#hour-11").addClass("present");
	}
	if (currentHour > 11){
		$("#hour-11").addClass("past");
	}
	if (currentHour < 11){
		$("#hour-11").addClass("future");
	}
	if (currentHour === 12){
		$("#hour-12").addClass("present");
	}
	if (currentHour > 12){
		$("#hour-12").addClass("past");
	}
	if (currentHour < 12){
		$("#hour-12").addClass("future");
	}
	if (currentHour === 13){
		$("#hour-13").addClass("present");
	}
	if (currentHour > 13){
		$("#hour-13").addClass("past");
	}
	if (currentHour < 13){
		$("#hour-13").addClass("future");
	}
	if (currentHour === 14){
		$("#hour-12").addClass("present");
	}
	if (currentHour > 14){
		$("#hour-14").addClass("past");
	}
	if (currentHour < 14){
		$("#hour-14").addClass("future");
	}
	if (currentHour === 15){
		$("#hour-15").addClass("present");
	}
	if (currentHour > 15){
		$("#hour-15").addClass("past");
	}
	if (currentHour < 15){
		$("#hour-15").addClass("future");
	}
	if (currentHour === 16){
		$("#hour-16").addClass("present");
	}
	if (currentHour > 16){
		$("#hour-16").addClass("past");
	}
	if (currentHour < 16){
		$("#hour-16").addClass("future");
	}
	if (currentHour === 17){
		$("#hour-17").addClass("present");
	}
	if (currentHour > 17){
		$("#hour-17").addClass("past");
	}
	if (currentHour < 17){
		$("#hour-17").addClass("future");
	}	
	
	// crate local storage to save user input for each hour

	var saveButton = document.querySelector(".saveBtn");
	var descriptionEl = document.querySelector(".description");
	
	var userInput = localStorage.getItem("input");
	descriptionEl.textContent = userInput;

	saveButton.addEventListener("click", function(){
		descriptionEl.textContent = userInput;

		localStorage.setItem("input", userInput);

	});


});






