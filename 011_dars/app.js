let num = [2, 5, 90, 100, 36, 89, 12, 0, 17];
const languages = ["Java", "TypeScript", "C#", "JavaScript", "Python"];

let users =[
    {id: 1, name: 'Leanne Graham', year: 1993, username: 'Bret', email: 'Sincere@april.biz', address: "New-York",},
    {id: 2, name: 'Ervin Howell', year: 2005, username: 'Antonette', email: 'Shanna@melissa.tv', address: "New-York", },
    {id: 3, name: 'Clementine Bauch', year: 2000, username: 'Samantha', email: 'Nathan@yesenia.net', address: "New-York", },
    {id: 4, name: 'Patricia Lebsack', year: 2011, username: 'Karianne', email: 'Julianne.OConner@kory.org', address: "New-York", },
    {id: 5, name: 'Chelsey Dietrich', year: 1997, username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: "New-York", },
    {id: 6, name: 'Mrs. Dennis Schulist', year: 2015, username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', address: "New-York",}, 
    {id: 7, name: 'Kurtis Weissnat', year: 2003, username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', address: "New-York", },
    {id: 8, name: 'Nicholas Runolfsdottir V', year: 2007, username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', address: "New-York",},
    {id: 9, name: 'Glenna Reichert', year: 2004, username: 'Delphine', email: 'Chaim_McDermott@dana.io', address: "New-York",},
    {id: 10, name: 'Clementina DuBuque', year: 2009, username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address:  "New-York"},
    ];

//1. filter() ======================================================== 
/*
filter() - ko'rsatilgan shart bo'yincha yangi arrey qaytaradi:
*/

/*========================================================
item — элемент массива в текущей итерации;
index — индекс текущего элемента;
arr — сам массив, который мы перебираем.
========================================================*/

// let resault = languages.filter(function (item, index, arr) {
//   console.log("Текущий элемент " + item)
//   console.log("Индекс " + index)
//   console.log("Массив " + arr)

//   return item.length >= 5
// });

// console.log(resault); //['TypeScript', 'JavaScript', 'Python']
//========================================================

// let resault = num.filter((item, index, arr) => {
//     return item < 10;
// });

// console.log(resault); //[2, 5, 2, 0]
//========================================================

// let resault = users.filter((item) => {
//     return item.year > 2010;
// })

// console.log(resault);

//2. sort() ======================================================== 
// console.log(num.sort(compareNumbers)); //[0, 2, 5, 12, 17, 36, 89, 90, 100];

// function compareNumbers(a, b) {
//   return a - b;
// }

//========================================================
// yil bo'yincha ketma ketlik
// let resault = users.sort((a, b) => a.year - b.year);
//========================================================
// lug'atni katma-ketlikda
// let resault = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(resault);

//3. find() ======================================================== 
// find() - ko'rsatilgan shart bo'yincha birinchisini olib beradi
/**
 * Find () massiv usuli massivda topilgan birinchi elementni qaytaradi, u berilgan kolbasa funktsiyasidagi shartga mos keladi. Agar massivda bitta mos element bo'lmasa, unda undefined qiymat qaytadi.
 */

// let finded = num.find((value) => value > 3);
// console.log(finded);
//========================================================
// let resault = users.find((value) => {
//     return value.id === 8;
// });

// console.log(resault);// {id: 8, name: 'Nicholas Runolfsdottir V', year: 2007, username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', …}


// 4.findIndex ======================================================== 
// ko'rsatilgan callbackni indexni chiqaradi
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let findIndex = nums.findIndex((value) => value === 4);
// console.log(findIndex); // 3
//========================================================
// let resault = users.findIndex((value) => {
//     return value.id == 2;
// })
// console.log(resault); // 1


// 5.forEach======================================================== 

//map()dan farqli return qilmaydi, 
// ekranga chiqsa map() ishlatiladi, shunchaki amal bajarilsa forEach
/* 
============ 
item — элемент массива в текущей итерации;
index — индекс текущего элемента;
arr — сам массив, который мы перебираем.
 ============
*/


// users.forEach((item, index, arr) => {
//   console.log('Текущий элемент ', item)
//   console.log('Его индекс ',  index)
//   console.log('Исходный массив ', arr)
// });

//========================================================
// num.forEach((value) => console.log(value + 2));
// 6. map() ======================================================== 
/*
item — элемент массива в текущей итерации;
index — индекс текущего элемента;
arr — сам массив, который мы перебираем.
*/

// users.map((item, index, arr) => {
//     console.log(`Har bitta element: `, item);
//     console.log(`Har bitta element tartib raqami: `, index);
//     console.log(`Har bitta element o'zi: `, arr);
// });

//========================================================

// let newMap = users.map((item) => item.name)
// console.log(newMap); //['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'Chelsey Dietrich', 'Mrs. Dennis Schulist', 'Kurtis Weissnat', 'Nicholas Runolfsdottir V', 'Glenna Reichert', 'Clementina DuBuque']


//7.every() ========================================================   
// every()-hammasini tekshiradi
// &&  -ga o'xshash

// let check = num.every((value) => value < 300); 
// let check = num.every((value) => typeof value == "number"); // bu usul raqam string ko'rinishida bo'lsa ishlaydi
// console.log(check); //true
//========================================================
// num.every((value) => console.log(!isNaN(value))); //true


// 8. some() ========================================================   
// || -ga o'xshash
// bittasi to'g'ri kelsa bo'ldi

// let check = num.some((value) => value < 30); 
// console.log(check); 


// 9. fill() ========================================================   
// Arrayni ko'rsatilgan joygacha o'zgartiradi
// fill(value, start, end)
// yangi array qaytaradi
// let filling = num.fill("Hello", 1, 4);
// console.log(filling);

//10. reduce() ========================================================   

//========================================================
// let numbers = "5645";
// let numberArray = numbers.split("").map(num => parseInt(num));
// console.log(numberArray);

// let resault = numberArray.reduce((item, value) => item + value, 0)
// console.log(resault);

//11.  flat()========================================================   
let numbers = [2, 5, [3, 8, 47, ["hello", 84, 147], 5], 90, 100, 36, 89, 12, 0, 17];
// console.log(numbers.flat(Infinity));

//============================================================
// Copyni yoqatish
let n = [2, 1, 3, 1, 6, 7, 8, 8, 2, 6];
// let res = n.filter((value, index, array) => array.indexOf(value) === index);
// console.log(res);




//============================= 15-darsdan
// let arrSet = new Set();
 //1. add -orqali ma'lumot qo'shiladi
// arrSet.add(100);
// arrSet.add(25);
// arrSet.add("Hello");
// arrSet.add([2,"Hello"]);
// console.log(arrSet);

// 2. has - ma'lumot bor yo'g'ligini tekshirib beradi
// const isExest = arrSet.has(100)
// console.log(isExest);
// console.log(arrSet.has(256));

// 3. delete
// arrSet.delete(100);
// console.log(arrSet);
// 4.clear-ichidagi hamma ma'lumotlarni o'chiradi
// arrSet.clear();
// console.log(arrSet);
// 5."length"ni new Setdagi analogi
// console.log(arrSet.size);

//=============================
//looping set values

// let students = new Set(["Khumoyun", "Rahim", "Nursulton"])

// students.forEach((item) =>{
//     console.log(item);
// })
// console.log(students);
// /for of-ham ishlaydi

//=============================
//new WeekSet

// const users = new WeekSet()
// users.add([{name: "Ibrohim"}])
// console.log(users);

//====================================================================================================
/*
new Map-objga o'xshaydi.
*/

// let deviceColor = new Map();
// deviceColor.set("phone", "black");
// deviceColor.set("laptop", "silver");
// deviceColor.set("PC", "white")

// console.log(deviceColor.get("laptop"));

// deviceColor.delete("laptop");
// deviceColor.clear();
// console.log(deviceColor.keys());
// console.log(deviceColor.values());
//
// console.log(deviceColor.entries());

//"forEach" va "for of" ishlaydi




//====================================================================================================
// from()- orqali array yasash
// console.log(Array.from("Humoyun", (v) =>v.toUpperCase()));
// console.log(Array.from("Humoyun", (v) => 1));
//====================================================================================================


// let obj = ({
//     a: 1,
//     b: 2,
// });

// console.log(Object.entries(obj));




//====================================================================================================
//====================================================================================================
//====================================================================================================
//====================================================================================================
//====================================================================================================
//=========================================== reduce() ===============================================
//====================================================================================================
//====================================================================================================
/**
* Аргументы функции callback(previousValue, currentItem, index, arr):

* previousValue – последний результат вызова функции, он же «промежуточный результат».
* currentItem – текущий элемент массива, элементы перебираются по очереди слева-направо.
* index – номер текущего элемента.
* arr – обрабатываемый массив.
*/

let arr = [10, 5, 20]
let sum = arr.reduce((previousValue , currentItem , index) => {
    console.log("previousValue  =", previousValue );//oraliq natija 
    console.log("currentItem  =", currentItem ); // hozirgi jarayon
    console.log("index =", index); //index
    // console.log();
    return previousValue + currentItem 
}, 0);

console.log(sum); //35









































