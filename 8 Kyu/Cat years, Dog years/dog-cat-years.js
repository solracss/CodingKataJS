var humanYearsCatYearsDogYears = function (humanYears) {
	switch (humanYears) {
		case 1:
			return [1, 15, 15]
		case 2:
			return [2, 24, 24]
		default:
			var catYears = 24 + (humanYears - 2) * 4
			var dogYears = 24 + (humanYears - 2) * 5
			return [humanYears, catYears, dogYears]
	}
}
// Tests
console.log(humanYearsCatYearsDogYears(1)) //  [1,15,15]
console.log(humanYearsCatYearsDogYears(2)) //  [2,24,24]
console.log(humanYearsCatYearsDogYears(10)) // [10,56,64]
