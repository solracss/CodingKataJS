function saleHotdogs(n) {
	if (n < 5) {
		return n * 100
	} else if (n >= 5 && n < 10) {
		return n * 95
	} else if (n >= 10) {
		return n * 90
	}
}

// Tests
console.log(saleHotdogs(1)) // 100
console.log(saleHotdogs(4)) // 400
console.log(saleHotdogs(9)) // 855
console.log(saleHotdogs(100)) // 900
