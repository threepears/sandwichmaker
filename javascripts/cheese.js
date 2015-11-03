define(function () {
	
	// List available cheeses
	var cheeses = {
		american: 0.25,
		swiss: 0.30,
		cheddar: 0.25,
		mozzarella: 0.75,
		nocheese: 0
	};

	return {
	// Take price so far and desired type of cheese, add to sandwich, return new price
		addCheese: function (sandwichSoFar, cheese) {
			sandwichSoFar += cheeses[cheese];
			return sandwichSoFar;
		}
	};

});