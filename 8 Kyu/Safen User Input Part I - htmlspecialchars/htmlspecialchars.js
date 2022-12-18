function htmlspecialchars(formData) {
	const charsToReplace = /[<>"&]/g;
	return formData.replace(
		charsToReplace,
		x =>
			({
				'<': '&lt;',
				'>': '&gt;',
				'"': '&quot;',
				'&': '&amp;',
			}[x])
	);
}
