/**
 * Integer-butun son
 * Float - kasr
 */

// console.log(100_000_000);

// Float - kasr
// console.log(12.356);
//katta sonni yozish
// console.log(1e6); //=> e - o ni ifodalaydi undan keyin nechta nol kelishi kerakligini

let value = 10.567;

//butun yoki toq sonni tekshiradi true yoki false qaytadi
// console.log(Number.isInteger(value));

// let num = 0.1 + 0.2;
// console.log(num); 

// console.log(eval("0.2 + 0.2")); //stringda arfimetik amal bajaradi
// console.log(parseInt(num));// 0-ko'rgan birinchi raqamini oladi
// console.log(parseFloat(num));// 0-ko'rgan birinchi raqamini oladi

// console.log(parseFloat(3.4));
// console.log(parseFloat('3.14'));

// console.log(isNaN(+"1_000"));

//========================================
//Math methods => ES6da qo'shilgan

//===Sonni darajasini chiqaradi
// console.log(Math.pow(6, 2));//36
// console.log(6 ** 2);//36
// console.log(5 ** 3); //125
//===sonni ildiz ostida chiqaradi
// console.log(Math.sqrt(4));
//===sonni 3 darajasini chiqaradi
// console.log(Math.cbrt(64));
// console.log(Math.min(64, 8 , 100, 63));
// console.log(Math.max(64, 8 , 100, 63));
//===
// console.log(Math.abs(-64));

//Random son qaytaradi
// console.log(Math.random() * 10);

//Sonni yaxlitlab beradi va .5 dan katta bo'lsa 1 qo'shadi
// console.log(Math.round(value));

//Sonni yaxlitlab beradi va .5 dan katta bo'lsa ham 1 qo'shib bermaydi
// console.log(Math.floor(value));

//Sonii yaxlitlaydi .5ckichik bo'lsaham 1+ beradi
// console.log(Math.ceil(value));



// console.log(isNaN(value % 2));
// console.log(isNaN(9 % 2));
// console.log(isNaN("ghghj"));
// console.log(isNaN("a"));
// console.log(isNaN("4"));
// console.log(isNaN(4));


// function getNumber(a = 0, b = 1) {
//     return b;
// }
// console.log(getNumber(3) * 3);

//=================  Optional chaining (?.)/Оператор опциональной последовательности



const userData = {
    name: "Ivan",
    age: null
}

console.log(userData?.city?.adress);
// console.log(userData.city.adress);
console.log(userData.name);



