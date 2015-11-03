define(function() {
	
	// List available veggies
	var veggies = {
		lettuce: 0.50,
		pickles: 0.25,
		blackolives: 0.25,
		tomatoes: 0.50, 
		noveggies: 0
	};

	return {
	// Take price so far and desired veggies, add to sandwich, return new price
		addVeggies: function (sandwichSoFar, veggie) {

			var listofVeg = [];
	        $.each(veggie, function(){            
	          	listofVeg.push($(this).val());
	        });

			for (var i = 0; i < listofVeg.length; i++) {
				sandwichSoFar += veggies[listofVeg[i]];
			}

			return sandwichSoFar;
		}
	};

});