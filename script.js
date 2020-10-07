


$(document).ready(function () {

	// create variables to store user input
	var text9AMEl = $("#9AM");
	var text10AMEl = $("#10AM");
	var text11AMEl = $("#11AM");
	var text12AMEl = $("#12AM");
	var text13AMEl = $("#1PM");
	var text14AMEl = $("#2PM");
	var text15AMEl = $("#3PM");
	var text16AMEl = $("#4PM");
	var text17AMEl = $("#5PM");

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
	
	// crate local storage to save user input for each hour after save button is clicked.

	

	$(".saveBtn").click(function(event){
		event.preventDefault();    
	  
	localStorage.setItem("input9", (text9AMEl.val()));
	localStorage.setItem("input10", text10AMEl.val());
	localStorage.setItem("input11", text11AMEl.val());
	localStorage.setItem("input12", text12AMEl.val());
	localStorage.setItem("input13", text13AMEl.val());
	localStorage.setItem("input14", text14AMEl.val());
	localStorage.setItem("input15", text15AMEl.val());
	localStorage.setItem("input16", text16AMEl.val());
	localStorage.setItem("input17", text17AMEl.val());
		
	
	});	

	// append loacal storage to HTML
	
	$("#9AM").append(localStorage.getItem("input9"));
	$("#10AM").append(localStorage.getItem("input10"));
	$("#11AM").append(localStorage.getItem("input11"));
	$("#12AM").append(localStorage.getItem("input12"));
	$("#1PM").append(localStorage.getItem("input13"));
	$("#2PM").append(localStorage.getItem("input14"));
	$("#3PM").append(localStorage.getItem("input15"));
	$("#4PM").append(localStorage.getItem("input16"));
	$("#5PM").append(localStorage.getItem("input17"));

});









