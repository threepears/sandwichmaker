define(function() {
	
	// List available meats
	var meats = {
		turkey: 4,
		ham: 3.5,
		roastbeef: 4.5,
		chicken: 3.5, 
		nomeat: 0
	};

	return {
	// Take price so far and desired type of meat, add to sandwich, return new price
		addMeat: function (sandwichSoFar, meat) {
			sandwichSoFar += meats[meat];
			return sandwichSoFar;
		}
	};

});