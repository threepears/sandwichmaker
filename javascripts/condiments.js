define(function() {
	
	// List available condiments
	var condiments = {
		mustard: 0.25,
		mayonnaise: 0.25,
		ketchup: 0.25,
		teriyaki: 0.50,
		nocondiments: 0
	};

	return {
	// Take price so far and desired condiments, add to sandwich, return new price
		addCondiments: function (sandwichSoFar, condiment) {

			var listofCondiments = [];
	        $.each(condiment, function(){            
	          	listofCondiments.push($(this).val());
	        });

			for (var i = 0; i < listofCondiments.length; i++) {
				sandwichSoFar += condiments[listofCondiments[i]];
			}

			return sandwichSoFar;
		}
	};

});