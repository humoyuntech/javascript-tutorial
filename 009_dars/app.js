// pasga tushirib beradi
// let str = "Rustamov \n Khumoyun"; 
// let str = "Rustamov \
//  Khumoyun"; 

// console.log(str);

let str1 = "Khumoyun";
let str2 = "KHUMOYUN";
let str3 = "  Khumoyun  ";

// console.log(str1[1]); //h
// console.log(str1[-1]); // undefined
// console.log(str1.at(1)); //h
// console.log(str1.at(-1)); //n-orqadan chiqradi
// console.log(str1.charAt(1)); //h

// console.log(str1.length);

// ============katta harfga o'tqazadi
// console.log(str1.toUpperCase()); //KHUMOYUN 

// ============kichik harfga o'tqazadi
// console.log(str1.toLowerCase()) //khumoyun

// ============nechinchi indexdan boshlanganini ko'rsatadi
// console.log(str1.indexOf("moy")); //3

// ============includes- so'z bor yo'qligini tekshirish true yoki false qytaradi
// console.log(str1.includes("yun"));

// ============ so'zni nima bilan boshlangan va
// tugatani tekshirish (true yoki false qytaradi)
// console.log(str1.startsWith("Khu"));
// console.log(str1.endsWith("yun"));

// ============ oldiniga va ortiga element qo'shish
// let title = "Lorem ipsum dolor sit amet consectetur";
// console.log(title.padStart(title.length + 3, "..."));
// console.log(title.padEnd(title.length + 3, '.'));

// console.log(str1.padStart(str1.length + 3, "."));
// console.log(str1.padEnd(str1.length + 3, '.'));
// ============  Kesish
// console.log(title.slice(0, 3));
/**
 * slice() usuli satrning bir qismini ajratib oladi va
 *  asl satrni o'zgartirmasdan yangi qatorni qaytaradi.

 **/

// console.log(str1.substring(0, 3)); //berilgan raqamlardan boshlab ikkinchi raqamgacha kesib oladi
// console.log(str1.substr(0, 3)); //eskirgan: yuqoridagilar bilan birxil vazifani bajaradi
// console.log(str1.substring(0, 3)); //substr() -o'rniga qo'llaniladi

// ============ Stringda arfimetik amal bajarish
// console.log(eval("2 + 3")); 

/* === ikki tarafdagi bo'shliqni o'chirib beradi === */
// console.log(str3.length); // 12
// console.log(str3.trim());
// console.log(str3.trim().length); //8


// ============ Stringni Array qilib beradi
// console.log(title.split(""));
// ============ Stringga qo'shish
// console.log(str1.concat("shoh", "lar"));

// ============ faqat qiymatini olish
// const strNew = new String('приветики');
// console.log(strNew);
// console.log(strNew.valueOf());
/* === Stringda elementlarni almashtirish ===*/
// console.log(str1.replace('K', 'G'));

// console.log(str1.repeat(3));
//=================
// for(i of title){
//     console.log(i);
// }






// let str5 = 'JavaScript 1 - learm 12';
//katta harflarni topadi
// console.log(str5.match(/[A-Z]/g));  // ['J', 'S']
//kichik harflarni topadi
// let value = str5.match(/[a-z]/g).join("");
// console.log(typeof(value), value); //['a', 'v', 'a', 'c', 'r', 'i', 'p', 't', 'l', 'e', 'a', 'r', 'm']
// raqam qaytaradi
// console.log(str5.match(/[0-9]/g))
// console.log(str5.match(/[Java]/g))

//========================================================================================

//==============Stringni harflarini teskarisiga Stringga va massivga yozish=================
// let myName = "Khumoyun";
// let newMyName = "";
// let arr =[];
// for(let i = 0; i < myName.length; i++){
//     // Arrayga aylantirish
//     arr.push(myName[myName.length -`${i +1}`]);
//     // String-1 usul
//     // newMyName +=myName[myName.length -`${i +1}`];
//     // String-2 usul
//     newMyName = newMyName+ myName[myName.length -`${i +1}`];

// };
// console.log(arr); // ['n', 'u', 'y', 'o', 'm', 'u', 'h', 'K']
// console.log(newMyName); // nuyomuhK

//========================================================================================

//==============Stringda katta harflarni ajratib olish=================
/*
let strText = "LorEm IpsUm doLor siT aMet.";
let newStrText = "";

for (let i = 0; i < strText.length; i++) {
    if(strText[i] === strText[i].toUpperCase()){
        newStrText += strText[i];
    }
    
}

console.log(newStrText);
*/

//===========================================================


// Calculator
// function hisobla(a, b, amal) {
//     switch (amal) {
//       case "+":
//         return a + b;
//       case "-":
//         return a - b;
//       case "*":
//         return a * b;
//       case "/":
//         if (b === 0) {
//           return "Nolga bo'lish mumkin emas";
//         }
//         return a / b;
//       default:
//         return "Noto'g'ri amal";
//     }
//   }
  
//   // Misol:
//   let son1 = 10;
//   let son2 = 4;
//   let amal = "+";
//   let natija = hisobla(son1, son2, amal);
//   console.log(son1 + " " + amal + " " + son2 + " = " + natija);
  











