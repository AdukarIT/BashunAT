//задача 1

let adgeX = prompt ('грань X');
let adgeY = prompt ('грань Y');
let adgeZ = prompt ('грань Z');

// let adgeX = 1;
// let adgeY = 2;
// let adgeZ = 3;

function triangle(adgeX, adgeY, adgeZ) {
	let x = parseInt(adgeX);
	let y = parseInt(adgeY);
	let z = parseInt(adgeZ);

	if (x < y + z && y < x + z && z < x + y) {
		return (false);
	}else{
		return (true);
	}
}

console.log(triangle(adgeX, adgeY, adgeZ));