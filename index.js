/**
 * 1. Как вы думаете, что хотел сделать программист? Исправьте код и объясните свое решение
 */
// for (var i = 0; i <= 5; i++) {
// 	var j = i;
// 	setTimeout(function () {
// 		console.log(j);
// 	}, j * 1000);
// }
// МОЙ ответ: Вероятно программист хотел вывести на экран поочередно числа от 0 до 5 с интервалом в 1 секунду.
// Однако мы увидим пять раз число 5. Чтобы исправить это нужно, если мы в  ES6, исправить var на let и добавим нестрогое i <= 5,
// однако если работа ведется в ES5,  то следует создать IIFE  чтобы каждая итерация цикла имела свою i
// for (var i = 0; i <= 5; i++) {
// 	(function (j) {
// 		setTimeout(function () {
// 			console.log(j);
// 		}, j * 1000);
// 	})(i);
// }

// /**
//  * 2. Написать функцию, которая будет работать правильно при обоих вызовах,
//  * как показано на приведенном коде
//  */
// console.log(sum(2, 3)); // результат 5
// console.log(sum(2)(3)(4)...); // сумма всех элементов
//
// МОЙ ответ:

function sum(a) {
	if (arguments.length > 1) {
		let num = 0;
		for(let i = 0; i < arguments.length; i++){
			num = num + arguments[i];
		}
		return num;
	}
	else {
		let currentSum = a;

		function f(b) {
			currentSum += b;
			return f;
		}
		return f;
	}
}

console.log(sum(2, 3));
console.log(sum(2)(3));
console.log(sum(2)(3)(4));



// /**
//  * 3. Какая проблема может быть с этим кодом, если список очень длинный? Предложите и объясните свое решение
//  */
// let list = readHugeList();
// let nextListItem = function () {
//  let item = list.pop();
// 	if (item) {
// // ... обработка записи
// 		nextListItem();
// 	}
// };
// Мой ответ:
// Методом  pop  мы осекаем последний элемент массива, массив изменяется, а в переменную list  записывается последний элемент,
// а в дальнейшем мы вообще создаем рекурсию nextListItem(); Возможно в таком частом изменении переменных массива и рекурсии нет смысла, перегрузка памяти, а может массив где то еще пригодится
// Если нужно каждый элемент массива обработать, я бы лучше воспользовался циклом

// let list = readHugeList();
//
// 	for (let i = 1; i <= list.length; i++) {
// 		 let item = list[list.length - i];
// 			if (item) {
// 		// ... обработка записи
// 			}
// 	}






// /**
//  * 4. Чему будет равна переменная "a" после выполнения этого участка кода?
//  * Объясните почему.
//  */
let a = 1;
function foo() {
	a = 2;
	return 10;
}
a += foo();
a += foo();
//Мой ответ: Переменная a  будет равна 21, потому что 1+10+10 = 21, функция foo возвращает  10,
// а изменение переменной а внутри нее будет игнорироваться,
// потому что функция была обработана раньше,
// при запуске кода,
// и переменная а видна только внутри нее


// /**
//  * 5. Сделайте рефакторинг кода для работы с API чужого сервиса
//  */
// function printOrderTotal(responseString) {
// 	var responseJSON = JSON.parse(responseString);
// 	responseJSON.forEach(function (item, index) {
// 		if (item.price = undefined) {
// 			item.price = 0;
// 		}
// 		orderSubtotal += item.price;
// 	});
// 	console.log("Стоимость заказа: "+ total > 0 ? "Бесплатно": total + " руб.");
// }

const json = '[{"result":true, "price":42}, {"result":true, "price":43}]'

// Мой ответ
function printOrderTotal2(responseString) {
	var responseJSON = JSON.parse(responseString);
	var orderSubtotal = 0;
	responseJSON.forEach(function (item, index) {
		if (!item.price) {
			item.price = 0;
		}
		orderSubtotal += item.price;
	});
	let total = orderSubtotal > 0 ? orderSubtotal.toString() + ' rub' : 'Бесплатно' ;
	console.log("Стоимость заказа: ", total);
}

printOrderTotal2(json);
