function countLetters(str) {
	var result = {};
	var noSpaces = str
		.split(" ")
		.join("")
		.split("");
	for (var i = 0; i < noSpaces.length; i++) {
		var key = noSpaces[i];
		if (result[key]) {
			result[key] += 1;
		} else {
			result[key] = 1;
		}
	}
	return result;
}
console.log(countLetters(1, 2, 3, 4, 5));
