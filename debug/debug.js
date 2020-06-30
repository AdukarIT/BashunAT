//задача 3


// let acaGrade = prompt ('введите отметку от 10 до 100');
// switch(acaGrade){
// 	case '100':
// 	case '90':
// 		console.log ('BDN Brilliant Dynamite Neon оценка отлично');
// 		break;
// 	case '80':
// 	case '70':
// 		console.log ('хорошо');
// 		break;
// 	case '60':
// 	case '50':
// 		console.log ('средне');
// 		break;
// 	case '40':
// 	case '30':
// 		console.log ('удовлетворительно');
// 		break;
// 	case '20':
// 	case '10':
// 		console.log ('тобi хана кiдай краiну. неуд!!');
// 		break;
// 	default: 
// 		console.log('вы ввели не подходящее значение');
// 		break;
// }


//задача 4

// let timeYear = prompt ('введите номер месяц от 1 до 12');

// switch(timeYear){
// 	case '12':
// 	case '1':
// 	case '2':
// 		console.log ('зима');
// 		break;
// 	case '3':
// 	case '4':
// 	case '5':
// 		console.log ('весна');
// 		break;
// 	case '6':
// 	case '7':
// 	case '8':
// 		console.log ('лето');
// 		break;
// 	case '9':
// 	case '10':
// 	case '11':
// 		console.log ('осень');
// 		break;
// 	default:
// 		console.log ('нет такого месяца');
// 		break;
// }

//задача 6

// let n = 0;
// let i = 0;
// let x = 13;

// do {
// 	let n = +prompt ('введите число меньше 100');
// 	x = x + n;
// 	i++;
// }while (x < 100);
// console.log(x);
// console.log (i);

//задача 8 

//закончить чуть позже

// let stud = +prompt ('введите количество учеников');
// let desk = +prompt ('введите количество парт');

// function studDesks(stud, desk) {
// 	if ( stud == 1 && stud <= desk){
// 		return ( 'лишних парт '+ (desk - stud) );
	
// 	}else if (stud >= desk){
// 		return ('не хватает парт ' + (desk*2 - stud)/2);
// 	}else if (stud <= desk){
// 		return ('лишних парт ' + (desk*2-stud)/2);
// 	}
// }

// console.log(studDesks(stud, desk));

//задача 9

// let draw = +prompt ('введите число');

// function drawEnds(draw){
// 	if (draw % 10 == 1){
// 		return (draw + ' карандаш');
// 	}else if (draw % 10 == 2 || draw % 10 == 3 || draw % 10 == 4) {
// 		return (draw + ' карандаша');
// 	}else {
// 		return (draw + ' карандашей');
// 	}
// }

// console.log(drawEnds(draw));

// задача 11 

//в ттырнетах написали что то, а мне кажется что что-то не то. разобраться.

// let x = prompt ('введите число');

// function div(x) {
// 	for ( let i = 1; x <= i; i++){
// 		if( x % i == 0){
// 			console.log(i);
// 		}
// 	}
// }

// console.log (div(x));