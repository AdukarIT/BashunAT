//задача 1

// let cilinder ={
// 	radius: 5,
// 	height: 7,

// 	vol: function () {
// 		return  (3.141592 * this.radius ** 2 * this.height);
// 	}
// }

// console.log (cilinder.vol());

//задача 2

// let pinguin = {
// 	name: 'Pen Pen',
// 	anime: 'Neon Genesis Evangelion',
// 	studio: ' Gainax',
// 	canFly: false,

// 	sayHello: function () {
// 		return( 'Hi, my neme is ' + this.name + ' i\'m from anime ' + this.anime + ' created by studio '+ this.studio);
// 	},

// 	canFly: function(){
// 		let fly;
// 		if (this.canFly == true) {
// 			fly = 'конечно умею, но это не точно';
// 		}else{
// 			fly = 'Я же пингвин, мы скользим на брюхе';
// 		}
// 		return(fly);
// 	}

// }

// console.log(pinguin.sayHello());
// console.log(pinguin.canFly());


//задача 3

// let scullSleeve = {
// 	name: 'Череп на рукаве',
// 	author: 'Ник Перумов',
// 	releaseDate : '2002 году',
// 	motto: ' \"Империя превыше всего\"',

// 	releaseBook: function(){
// 		return( 'Книга ' + this.name + ' вышедшая в ' + this.releaseDate + ' , автор ' + this.author +'. Первая книга входящая в дилогию ' +this.motto);
// 	}
// }


// let castleValentine = {
// 	name: 'Замок Лорда Валентина',
// 	author: 'Роберт Сильверберг',
// 	releaseDate : '1980 году',
// 	motto: ' \"Маджипур\"',

// 	releaseBook: function(){
// 		return( 'Книга ' + this.name + ' вышедшая в ' + this.releaseDate + ' , автор ' + this.author +'. Первая книга входящая в цикл ' +this.motto);
// 	}
// }


// let inquisitor = {
// 	name: 'Инквизитор. Ордо Ксенос',
// 	author: 'Ден Абнет',
// 	releaseDate : '2007 году',
// 	motto: ' \"Инквизитор Эйзенхорн\"',

// 	releaseBook: function(){
// 		return( 'Книга ' + this.name + ' вышедшая в ' + this.releaseDate + ' , автор ' + this.author +'. Первая книга входящая в цикл ' +this.motto);
// 	}
// }


// console.log(inquisitor.releaseBook());

// задача 4

// не понял как вывести сразу метод releaseBook. Было бы красивее.

// function releaseDate(obj1, obj2){
// 	if (obj1.releaseDate < obj2.releaseDate) {
// 		return obj1;
// 	}else{
// 		return obj2;
// 	}
// }

// console.log(releaseDate(castleValentine,scullSleeve ).releaseBook());