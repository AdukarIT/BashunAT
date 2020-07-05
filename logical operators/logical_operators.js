// задача 1


// let x = prompt (' хотите узнать подъезд?');
// if (x <= 0) {
// 	console.log('введите число от 1 до 60');
// }
// if (isNaN(x)) {
// 	console.log('введите число от 1 до 60');
// }

// if (x > 60) {
// 	console.log('введите число от 1 до 60');
// }
// if (x >=1 && x <= 20) {
// 	console.log('первый подъезд, первая парадная');
// }
// if (x >=21 && x <=40) {
// 	console.log('второй подъезд, второая парадная');
// }
// if ( x>= 41 && x <= 60) {
// 	console.log('третий подъезд, третья парадная');
// }



//задача 2

// let x = prompt ('введите марку автомобиля');
// switch (x){
// 	case 'BMW':
// 		console.log( x + ' страна происхождения Германия');
// 		break;
// 	case 'Opel':
// 		console.log( x + ' страна происхождения Германия');
// 		break;
// 	case 'Reno':
// 		console.log( x + ' страна происхождения Франция');
// 		break;
// 	case 'Ford':
// 		console.log( x + ' страна происхождения США');
// 		break;
// 	case 'Dodge':
// 		console.log( x + ' страна происхождения США');
// 		break;
// 	case 'Pegout':
// 		console.log( x + ' страна происхождения Франция');
// 		break;
// 	case 'Жигули':
// 		console.log( x + ' страна происхождения Россия');
// 		break;
// 	default:
// 		console.log(x + ' страна происхождения неизвестна');
// }



//задача 3

// let x = prompt ('введите год рождения');
// if (isNaN(x)) {
// 	console.log('введите число');
// }
//  else if ((x % 4 == 0 && x % 100 != 0) || x % 400 ==0)  {
// 	console.log('високосный');
// }else{
// 	console.log('не високосный')
// }


//задача 4

// let x = prompt ('введите число от 0 до 20');
// if (isNaN(x)){
// 	alert('введите число');
// }

// if (x < 0 || x > 20){
// 	alert('число больше 0 но меньше 20');
// } 

// for (let i = 1; i <= 10; i++) {
// 	let multi = x* i;
// 	console.log( x + " x " + i + " = " + multi);
// }


//задча 5 (отставить на потом)


// let x = 0;
// let y = 1;
// let fib;

// for(let i = 1; i <= 15; i++) {
//     fib = x + y;
//     x = y;
//     y = fib;
//     console.log(fib);
// }

// задача 6

// ведет себя крайне странно

// let n = prompt ('число < 2');
// let i = 2;


// if (n < i) {
// 	console.log('вы ввели не то число');
// } else {
// 	let pr = true;
// 	for (let i = 2; i*i <= n; i++) {
// 		if (n % i == 0) {
// 			console.log ("Составное число");
// 			pr = false;
// 			break;
// 		}
// 	}
// 	if (pr) {
// 		console.log ("Простое число");
// 	}
// }

//задача 7

// let n = prompt ('число < 2');
// let i = 2;
// let j = 2;

// if (n < i) {
// 	console.log('вы ввели не то число');
// } else {
// 	for ( let  j = 2; j<= n; j++){
// 		let pr = true;
// 		for (let i = 2; i*i <= j; i++) {
// 			if (j % i == 0) {
// 				pr = false;
// 				break;
// 			}
// 		}
// 		if (pr) {
// 			console.log (j);
// 		}
// 	}

// }





