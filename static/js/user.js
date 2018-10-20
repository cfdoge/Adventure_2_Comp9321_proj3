$(document).ready(function() {
	$( "#input_submit" ).on('click', function() {
		
		var suburb = document.getElementById('suburb_input').value;
		$("#suburb_input" ).val("");

		var unit_street = document.getElementById('unit_street_input').value;
		$("#unit_street_input" ).val("");


		var capacity = document.getElementById('capacity_input').value;
		$("#capacity_input" ).val("");

		var room_type = document.getElementById('type_input').value;
		$("#type_input" ).val("");

		var price = document.getElementById('price_input').value;
		$("#price_input" ).val("");
		

		var req = {};
		var location = {};
		// console.log(location);
		location["suburb"] = suburb;
		location["street_unit"] = unit_street;
		req["location"] = location;
		req["capacity"] = capacity
		req["room_type"] = room_type;
		req["price"] = price;


		console.log(req);

		//to do:
		// send this to backend


	})

});