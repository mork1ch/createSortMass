"use strict";

function sortMass() {
	var length = +prompt("Дайте размер массива");
	var mass = [];

	var max = document.getElementById("max");
	var min = document.getElementById("min");

	console.log(max.value, min.value, length);

	let noSortMass = "<table align='center' border='1' cellspacing='0'>";

	for (var i = 0; i < length; i++) {
		let num = parseInt(
			Math.random() * (parseInt(max.value) - parseInt(min.value)) +
				parseInt(min.value)
		);

		mass.push(num);

		noSortMass =
			noSortMass +
			"<td style='height:15px; width:15px; text-align:center'>" +
			num +
			"</td>";
	}

	document.getElementById("mass").innerHTML = noSortMass;

	mass.sort(function (a, b) {
		return a - b;
	});

	let sorted = "<table align='center' border='1' cellspacing='0'>";

	for (i = 0; i < length; i++) {
		sorted =
			sorted +
			"<td style='height:15px; width:15px; text-align:center'>" +
			mass[i] +
			"</td>";
	}

	document.getElementById("sorted").innerHTML = sorted;
}
