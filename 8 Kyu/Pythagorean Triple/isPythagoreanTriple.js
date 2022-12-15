function isPythagoreanTriple(integers) {
	var a = integers[0]
	var b = integers[1]
	var c = integers[2]
	if (a ** 2 + b ** 2 === c ** 2) {
		return true
	} else {
		if (c ** 2 + a ** 2 === b ** 2) {
			return true
		} else {
			if (b ** 2 + c ** 2 === a ** 2) {
				return true
			} else {
				return false
			}
		}
	}
}

// Tests
console.log(isPythagoreanTriple([3, 4, 5])) // true
console.log(isPythagoreanTriple([3, 5, 9])) // false
