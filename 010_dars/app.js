"use strict";
let fruits = ["Apple", "Orange", "Plum"];
fruits[3] = "charry"; //Ko'rsatilgan indexdan qo'shadi
fruits[0] = "pear";//Ko'rsatilgan indexdan yangilaydi

// console.log(fruits);
// console.log(fruits[2]);// kerakli elementni olamiz
// console.log(fruits.length);
// console.log(fruits[fruits.length -1]); // oxirgi elementni oladi
// =============================================

// let arr = new Array(["Apple", "Orange", "Plum"]);
// console.log(arr);


// =============================================
//Arrayni aniqlash
// console.log(Array.isArray(fruits));
// ====================Array method=========================


let arrey = ["a", "b", "c"];

//===================Arrayni String qilish
// let value = arrey.join("");
// console.log(value, typeof(value));

// let value2 = arrey.toString();
// console.log(value2, typeof(value2));

//===================Arrayni qo'shish
// console.log(arrey.concat(fruits, "salom"));

//===================Arrayni for loop orqali chiqarish
// ===> 1
// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// ===> 2
// qiymatni chiqarib beradi
// for (let value of fruits) {
//     console.log(value);
// };
// index raqamini chiqarib beradi
// for (let index in fruits){
//     console.log(index);
// }

//===================Arrayni oxiriga ma'lumot qo'shish
// arrey.push("d");

//===================Arrayni oxiridagi ma'lumotni o'chiradi
// arrey.pop();

//===================Arrayga boshidan ma'lumot qo'shish
// arrey.unshift("grapes");

//===================Arrayga boshidan ma'lumot o'chiradi
// arrey.shift();


//===================Kesish 
const colors = ["red", "green", "blue", "yellow"];
//splice() - ma'lumotni kesib chiqaradi yangi ma'lumot qaytaradi
//ko'rsatilgan raqamlarni(index)ni chiqarib tashlab
//qolganini qoldiradi
// bu metod delete va updete qiladi https://learn.javascript.ru/array-methods
// console.log(colors.splice(0, 2)); //['red', 'green']

// slice() - ma'lumotni kesib chiqaradi lekin yangi ma'lumot qaytarmaydi
// console.log(colors.slice(0, 2)); //['red', 'green']
//===================Arraydagi elemetni indexni chiqaradi
//yo'q bo'lsa -1chiqaradi
// console.log(colors.indexOf("blue")); //2
// console.log(colors.indexOf("bblue")); //-1

//===================Arrayda ma'lumotni bor yoki yo'qligini tekshiradi true false
console.log(colors.includes("red"));

//=================== Stringni Array qilish
// let str = "1 2 3 hello";
// console.log(str.split(" "));

//=================== Arrayni teskarisiga aylantirish
// console.log(arrey.reverse());


