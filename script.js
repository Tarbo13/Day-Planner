


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

	
	// var entryEl = document.querySelector("#entry");

	$(".saveBtn").click(function(event){
		event.preventDefault();    
	  
		var value = $(this).siblings(".description").val();
		console.log('The value of the text is:', value);
				
		
		$(".row").each(function(){
			var key = $(this).attr("id");
			localStorage.getItem(key);
			console.log('The key (hour) is: ', key);

			localStorage.setItem(key, value);
			$("<textarea>").text(value);
		  });
		  
	});
	

	  

	 // var saveButton = document.querySelector(".saveBtn");
	
	// var tasks = document.querySelector("#entry");
	
	

	// var value = localStorage.getItem("input");
	// tasks.textContent = value;



	// saveButton.addEventListener("click", function(event){
	// 	event.preventDefault();	
		

	// 	var value = $(this).siblings(".description").val();
	// 	console.log('The value of the text is:', value);
		
		
	// 	entryEl.textContent = value;
	// 	console.log(value);

	// 	localStorage.setItem("input", value);
	
	// });

	

});






