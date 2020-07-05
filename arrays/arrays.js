function getRandomArray(len = 5) {
	let arr = [];
		for( let i = 0; i < len; i++){
			arr[i] = Math.random();
		}
		return arr;
}		

console.log (getRandomArray());



function arrSum (array){
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	let dev = sum / array.length;
	for (let i = 0; i < array.length; i++) {
		if (div < array[i]){
			console.log(array[i]);
		}
	}

}

console.log (arrSum(getRandomArray));


