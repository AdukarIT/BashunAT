//задача 3


// let acaGrade = prompt ('введите отметку от 10 до 100');
// function grade() {
// 	switch(acaGrade){
// 		case '100':
// 		case '90':
// 			return ('BDN Brilliant Dynamite Neon оценка отлично');
// 		case '80':
// 		case '70':
// 			return ('хорошо');	
// 		case '60':
// 		case '50':
// 			return ('средне');	
// 		case '40':
// 		case '30':
// 			return ('удовлетворительно');	
// 		case '20':
// 		case '10':
// 			return ('тобi хана кiдай краiну. неуд!!');	
// 		default: 
// 			return('вы ввели не подходящее значение');	
// 	}
// }

// console.log(grade());

//задача 4

// let timeYear = prompt ('введите номер месяц от 1 до 12');
// function year() {
	

// 	switch(timeYear){
// 		case '12':
// 		case '1':
// 		case '2':
// 			return ('зима');
// 		case '3':
// 		case '4':
// 		case '5':
// 			return('весна');
// 		case '6':
// 		case '7':
// 		case '8':
// 			return ('лето');
// 		case '9':
// 		case '10':
// 		case '11':
// 			return ('осень');
// 		default:
// 			return ('нет такого месяца');
// 	}
// }

// console.log(year());

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
// 	 if (draw % 100 == 12 || draw % 100 == 13 || draw % 100 == 14 || draw % 100 == 11 ) {
// 		return (draw +' карандашей');
// 	}else if (draw % 10 == 2 || draw % 10 == 3 || draw % 10 == 4) {
// 		return (draw + ' карандаша');
// 	}else if (draw % 10 == 1) {
// 		return (draw + ' карандаш');
// 	}else {
// 		return (draw + ' карандашей');
// 	}
// }

// console.log(drawEnds(draw));

// задача 11 

//делает левую итерацию %(

// let x = prompt ('введите число');

// function div() {
// 	for ( let i = 0; i <= x; i++){
// 		if( x % i == 0 ){
// 			console.log(i);
// 		}
// 	}
// }

// console.log (div());