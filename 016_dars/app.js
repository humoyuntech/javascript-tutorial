// let num = 10;
// console.log(num);

// function myFunc() {
//    let num = 32;
//    console.log(num);

// }

// console.log(num);
// myFunc()
// console.log(num);


// block scope

// let num = 0;
// if(true){
// num = 1;
// }

// console.log(num);
 //======================================================================================================================
 //======================================================================================================================
 //======================================================================================================================
 //  https://learn.javascript.ru/closure   - Область видимости переменных, замыкание
 // https://javascript.info/closure        - Variable scope, closure
 //======================================================================================================================
 //======================================================================================================================
 //======================================================================================================================


 // ======================================== Code blocks / Блоки кода
//Agar o'zgaruvchi {} - ichida elon qilinsa faqat o'shani ichida ko'rinadi
/**
 {
    // выполняем некоторые действия с локальной переменной, которые не должны быть видны снаружи
    let message = "Hello"; // переменная видна только в этом блоке
    console.log(message); // Hello
  }
  
  console.log(message); // ReferenceError: message is not defined
*/
// if, for, while -uchunham elon qilingan o'zgaruvchi faqat ichida {} ko'rinadi
/**
 * 
if (true) {
    let phrase = "Hello";
  
    console.log(phrase); // Hello
};

console.log(phrase); // Uncaught ReferenceError: phrase is not defined
 */


//======
/**
for (let i = 0; i < 3; i++) {
    // переменная i видна только внутри for
    console.log(i); // 0, потом 1, потом 2
  }
  
  console.log(i); // Uncaught ReferenceError: i is not defined

*/
/** 

let sayHiMe = "hello"
function sayHi(){
 console.log(sayHiMe); // hello
    sayHiMe = "bye"
 console.log(sayHiMe); //bye
}
console.log(sayHiMe);// hello
sayHi();


console.log(sayHiMe); // bye

*/

//=======================================================================================
//=======================================================================================
// ========= Вложенные функции - Nested functions
/**
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }
  
let counter = makeCounter();

console.log(counter()); //0
console.log(counter()); // 1
console.log(counter()); // 2
*/
//=======================================================================================
//=======================================================================================
// ========= Lexical Environment - Лексическое окружение








































