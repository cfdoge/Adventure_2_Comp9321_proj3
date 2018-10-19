$(document).ready(function() {
	
	$( "#input_submit" ).on('click', function() {
		
		var date = document.getElementById('time_input').value;
		$("#time_input" ).val("");
		var date_list = date.split("-");
		var year = date_list[0];
		var month = date_list[1];
		var day = date_list[2];
		date = year+month+day;

		var suburb = document.getElementById('suburb_input').value;
		$("#suburb_input" ).val("");

		var unit_street = document.getElementById('unit_street_input').value;
		$("#unit_street_input" ).val("");

		var bathroom_num = document.getElementById('bathroom_num_input').value;
		$("#bathroom_num_input" ).val("");

		var bedroom_num = document.getElementById('bedroom_num_input').value;
		$("#bedroom_num_input" ).val("");

		var bed_num = document.getElementById('bed_num_input').value;
		$("#bed_num_input" ).val("");

		var capacity = document.getElementById('capacity_input').value;
		$("#capacity_input" ).val("");

		var period = document.getElementById('period_input').value;
		$("#period_input" ).val("");

		var period_list = period.split("-");
		var min = period_list[0];
		var max = period_list[1];

		var cleanig_fee = document.getElementById('cleanig_fee_input').value;
		$("#cleanig_fee_input" ).val("");

		var extra_fee = document.getElementById('additional_fee_input').value;
		$("#additional_fee_input" ).val("");

		//building the api
		var req = {};
		req["date"] = date;
		
		var location = {};
		// console.log(location);
		location["suburb"] = suburb;
		location["street_unit"] = unit_street;
		req["location"] = location;

		var rooms = {};
		
		rooms["bathrooms"] = bathroom_num;
		rooms["bedrooms"] = bedroom_num;
		rooms["beds_no"] = bed_num;
		req["rooms"] = rooms;

		req["capacity"] = capacity;

		var duration = {};
		duration["minimum_nights"] = min;
		duration["maximum_nights"] = max;

		req["duration"] = duration;

		var additional_fee = {};

		additional_fee["cleaning_fee"] = cleanig_fee;
		additional_fee["extra_fee"] = extra_fee;

		req["additional_fee"] = additional_fee;
		
		//console.log(req);

		/****** to do ********/
		/*** send req to back-end ******/


		//get price from back end
		var prediction_price = 2000; 
		
		var content= $('<div>'+'The predicting price for your accommodation is: $' + prediction_price +
                  '</div>');

		//information
		
		if($('#information').children().length == 0){
			$( "#information" ).append(content);
		}

		$('#house_price_modal').modal('show');

    });
    


});
