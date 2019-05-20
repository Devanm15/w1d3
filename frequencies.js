function mode(arr) {
	const frequencies = {};
	for (let num = 0; num < arr.length; num++) {
		frequencies["arr[num]"];
		if (frequencies[arr[num]]) {
			frequencies[arr[num]] += 1;
		} else {
			frequencies[arr[num]] = 1;
		}
	}

	return frequencies;
}

console.log(mode([1, 2, 6, 4, 5, 6]));
