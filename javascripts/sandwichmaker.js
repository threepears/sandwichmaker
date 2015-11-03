/*Your project should have one HTML file that has:

a section of options for each sandwich part
the ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
a button with a label of "Make me a sandwich"
an empty DOM element into which the final sandwich order and its cost will be inserted
The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": "2.00", "bacon": "1.50"}

Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient(s) selected by the user.

The team should create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

Don't worry about exposing the prices to the user until you display the final cost. This is just an exercise, not a business model.*/


define(["jquery", "bread", "cheese", "condiments", "meat", "veggies"], function($, bread, cheese, condiments, meat, veggies) {

	// Build sandwich with ingredients passed in
	var buildSandwich = function (breadAdd, meatAdd, cheeseAdd, veggieAdd, condimentAdd, sandwichValue) {

		// Add prices as you got through ingredients
		var finalPrice = bread.addBread(sandwichValue, breadAdd);
		finalPrice = meat.addMeat(finalPrice, meatAdd);
		finalPrice = cheese.addCheese(finalPrice, cheeseAdd);
		finalPrice = veggies.addVeggies(finalPrice, veggieAdd);
		finalPrice = condiments.addCondiments(finalPrice, condimentAdd);

		// Display final result in HTML
		var result = finalPrice.toFixed(2);

		$("#letseat").html("$" + result);
	};

	$("input[value='noveggies']").on('change', function() {
    	$("input[name='veggies']").not(this).prop('checked', false);  
	});

	$("input[name='veggies']").on('change', function() {
    	$("input[value='noveggies']").not(this).prop('checked', false);  
	});

	$("input[value='nocondiments']").on('change', function() {
    	$("input[name='condiments']").not(this).prop('checked', false);  
	});

	$("input[name='condiments']").on('change', function() {
    	$("input[value='nocondiments']").not(this).prop('checked', false);  
	});


	// Get values of chosen ingredients on button click, pass to Sandwich Builder
	$("#maker").click(function() {
		var breadAdd = $("input[name='bread']:checked").val();
		var meatAdd = $("input[name='meat']:checked").val();
		var cheeseAdd = $("input[name='cheese']:checked").val();
		var veggieAdd = $("input[name='veggies']:checked");
		var condimentAdd = $("input[name='condiments']:checked");
		var sandwichValue = 0;

		buildSandwich(breadAdd, meatAdd, cheeseAdd, veggieAdd, condimentAdd, sandwichValue);
	});


});



