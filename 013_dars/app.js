// Objectda destructuring qilish
const obj = {
    name: "Khumoyun",
    title: "Brather",
    age: 30,
    data: {
        year: 1993
    }
}

const {name, title: status, age, data: {year}} = obj;

// console.log(year);

//=============== Arrayni destructuring qilish
/**
// у нас есть массив с именем и фамилией
let arr = ["John", "Smith", "Mike", "Liz"];

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
let [firstName, surname, ...res] = arr;

console.log(firstName); // John
console.log(surname);  // Smith
console.log(res); // yangi array qaytaradi
*/

// nested  array 

//=================== Functionda destructuring qilish

function getData({name, id}) {
    console.log(name, id);
}

// getData({name: "Khumoyun", id: 1})
//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================
// https://momentjs.com//  - kutubxona

// Yaratish
let data = new Date(); //Hozirgi vaqtni chiqaradi
// console.log(data); //Sun Dec 03 2023 20:27:32 GMT+0500 (Uzbekistan Standard Time)

// возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.
// console.log(data.getTime());


/**
 * Haftaning kunini 0 (yakshanba) dan 6 (shanba) ga qaytaring. 
 * Ba'zi mamlakatlarda dushanba haftaning birinchi kuni sifatida qabul 
 * qilinganiga qaramay, JavaScript-da hafta boshi yakshanba kuniga to'g'ri keladi.
 */
// console.log(data.getDay());

//===Sanani chiqaradi
// console.log(data.getDate());
//===oyni chiqarish
//===Получить месяц, от 0 до 11
// console.log(data.getMonth() + 1);
//===yilni chiqaradi
// console.log(data.getFullYear());
//===Метод getHours() возвращает часы указанной даты по местному времени.
// console.log(data.getHours());
//===Метод getMinutes() возвращает минуты указанной даты по местному времени.
// console.log(data.getMinutes());
//===Метод getSeconds() возвращает секунды указанной даты по местному времени.
// console.log(data.getSeconds());
//===Метод getMilliseconds() возвращает миллисекунды указанной даты по местному времени.
// console.log(data.getMilliseconds());

//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================
//===========================================================================================================================================

let user = {
    name: "John",
    age: 30,
    adress: "Vobkent",
    data: {
        fullName: "Rustamov Khumoyun",
        dateBirth: 1993,
        city: "Bukhara",
    },

};
  

// ===Objectni JSONga o'tqazish
let dataJson = JSON.stringify(user);
console.log(dataJson);
// ===faqat keraklisini ajratib yuborish
// console.log(JSON.stringify(user, ["adress"]));
//=== oxirgi raqam tabulatsiya qiladi
// console.log(JSON.stringify(user, ["adress", "data", "fullName", "dateBirth", "city"], 4));

//=== JSONdan qaytib Objectga o'tqazish
let obj2 = JSON.parse(dataJson);
console.log(obj2);























// https://ant.design/