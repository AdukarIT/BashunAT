//задача 1

// let adgeX = prompt ('грань X');
// let adgeY = prompt ('грань Y');
// let adgeZ = prompt ('грань Z');

// function triangle(adgeX, adgeY, adgeZ) {
// 	let x = parseInt(adgeX);
// 	let y = parseInt(adgeY);
// 	let z = parseInt(adgeZ);
		
// 	if (x < y + z && y < x + z && z < x + y) {
// 		let a = Math.abs(Math.cos(x**2 + y**2 - z**2/ 2 * x* y) * 180 / Math.PI);
// 		let b = Math.abs(Math.cos(z**2 + y**2 - x**2/ 2*z*y)*180 / Math.PI);
// 		let c = 180 - (a + b);

// 		console.log(angle = {a, b, c});
// 		console.log(possible = {poss :  true});
// 	}else {
// 		console.log(possible = {poss : false});
// 	}
// }

// console.log(triangle(adgeX, adgeY, adgeZ));



//задача 2

// let str = prompt ('пaлидром, или нет. уже не существенно');

// function palidrome() {
// 	str = str.toLowerCase();
// 	let endIndex = str.length - 1;

// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] == str[endIndex]){   // если str[endIndex - 1] и !== то все работает на обрато но проверяет. не до понял.  
// 			return true;
// 		}else {
// 		return false;
// 	}
// 	}
// }


//не забыть уточнить методы.

// function palidrome() {
// 	str = str.toLowerCase();

// 	if (str === str.split('').reverse().join('')){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }

// console.log(palidrome(str));

//задача 3 

// ну тут понятно ( 