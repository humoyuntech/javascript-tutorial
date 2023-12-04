// console.log("new Set, new Map, new WeakMap, new WeakSet");
// https://learn.javascript.ru/map-set
// 1------------
let map = new Map();

map.set("str1", "1");   
map.set("num2", "2");      
map.set("num3", 3);      
map.set("bool1", true);

// console.log(map);

//2
let deviceColor = new Map();
deviceColor.set("phone", "black");
deviceColor.set("laptop", "silver");
deviceColor.set("PC", "white")

// console.log(deviceColor);
// console.log(deviceColor.get("laptop")); // murojat qilish

// deviceColor.delete("laptop");
// deviceColor.clear();
console.log(deviceColor.keys()); // keylarni chiqarish
console.log(deviceColor.entries()); // keylarni chiqarish
// console.log(deviceColor.values());
//
// console.log(deviceColor.entries());

//"forEach" va "for of" ishlaydi



//=================================================================

//new Set() =array, new Map = object => data structure
// let arr = [1, 2, 2, 3, 4, 4, "hello", "hello"];
/*
 new Set - dublikatlarni olib tashaydi va object
ko'rinishida arrayni qaytaradi
*/
// let set = new Set([1, 2, 2, 3, 4, 4, "hello", "hello"]);

// let uniqueArray = [...set]
// console.log(arr);
// console.log(set);
// console.log(uniqueArray);

//=============================
// let arrSet = new Set();
//1. add -orqali ma'lumot qo'shiladi
// arrSet.add(100);
// arrSet.add(25);
// arrSet.add("Hello");
// arrSet.add([2,"Hello"]);
//  console.log(arrSet);

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













