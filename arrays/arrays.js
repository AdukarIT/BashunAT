// function getRandomArray(len = 5) {
// 	let arr = [];

// 		for( let i = 0; i < len; i++){
// 			arr[i] = Math.floor(Math.random() * 10);
// 		}
// 		return arr;
// }		

// console.log (getRandomArray());

//задача 2

// function arrSum (arr){
// 	let sum = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	let dev = sum / arr.length;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (dev < arr[i]){
			
// 		}
// 		return(arr[i]);
// 	}

// }

// console.log (arrSum(getRandomArray()));


// //задача 3

 /*сортирует но слайс не прикрутил. извините что так мало успел. я все дни работал. 
 да и сортировка берет откуда то undifinde */

// function sortNumber(arr) {
// 	let = arr;
// 	arr.sort();
	
// }



// console.log (sortNumber(getRandomArray()));



// function minNumber(arr) {
	
// 	let  smallNum = Infinity;
// 	let  smallerNum = Infinity;

// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] < smallNum) {
// 			smallNum = arr[i];
// 		}

// 	}

// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] < smallerNum && arr[i] > smallNum) {
// 			smallerNum = arr[i];
// 		}
// 	}
// 	return[smallerNum, smallNum];

// }

// console.log (minNumber(getRandomArray()));


//задача 4

// должна работать, но работает не так ка я задумывал

// function shitArr(arr) {
// 	let temp;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < 3) {
// 			arr[i] = 0;
// 		}
	

// 	for (j = i; j < arr.length; j++) {
// 		if (j == arr.length - 1) {
// 			arr[j] = 0;
// 			break;
// 		}
// 		temp = arr[j];
// 		arr[j] = arr[j + 1];
// 		arr[j + 1] = temp;
// 	}
// 	}
// 	return arr;
// }

// console.log (shitArr(getRandomArray()));
