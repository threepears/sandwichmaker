var x = 4 + 5;

$("#maker").click(function() {
	var bread = $("input[name='bread']:checked").val();
	var meat = $("input[name='meat']:checked").val();
	var cheese = $("input[name='cheese']:checked").val();
	var veggie = $("input[name='veggies']:checked");
	var condiment = $("input[name='condiments']:checked");
	var sandwichValue = 0;

	Sandwich.buildSandwich(bread, meat, cheese, veggie, condiment, sandwichValue);
});