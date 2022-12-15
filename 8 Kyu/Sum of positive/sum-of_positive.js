function positiveSum(arr) {
	var sum = 0
	arr.forEach(element => {
		if (element > 0) {
			sum += element
		}
	})
	return sum
}

// Tests
console.log(positiveSum([])) //0
console.log(positiveSum([1, 2, 3, 4, 5])) //15
console.log(positiveSum([1, -2, 3, 4, 5])) // 13
