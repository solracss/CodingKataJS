function isPalindrome(x) {
	x = x.toLowerCase();
	if (x.length <= 1) {
		return true;
	}

	for (let i = 0; i < x.length - 1; i++) {
		letterFromLeft = x[i];
		letterFromRight = x[x.length - (1 + i)];

		if (letterFromLeft != letterFromRight) {
			return false;
		}
	}
	return true;
}

