function countLetters(str) {
	var result = {};
	console.log(result);
	var noSpaces = str
		.split(" ")
		.join("")
		.split("");
	console.log(noSpaces);
	for (var i = 0; i < noSpaces.length; i++) {
		var key = noSpaces[i];
		if (result[key]) {
			result[key].push(i);
		} else {
			result[key] = [i];
		}
	}
	return result;
}
console.log(countLetters("lighthouse in the house"));
