
$(document).ready(function () {

	$("#currentDay").text(moment().format("LLLL"));


	// function to check each hour against current time.
		function timeFrame() {
			var currentHour = moment().hour();
			console.log(moment().hour());
			
			$(".time-block").each(function(){
				var hourEl = $(this).attr("id");
				var hourDay = hourEl.substring(5, hourEl.length);
				var inHourDay = parseInt(hourDay);
				var intCurrentHours = parseInt(currentHour);
				if (parseInt(inHourDay) < parseInt(intCurrentHours)) {
					$(this).addClass("past");
					$(this).removeClass("future");
					$(this).removeClass("present");
				}
			})
		}
timeFrame();
	// crate local storage to save user input for each hour

});






