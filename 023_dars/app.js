// https://learn.javascript.ru/class - Класс: базовый синтаксис
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes - Классы




// class Users {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }


//     fullName(name, age){
//         console.log(`Hello Mr ${this.name}, your age: ${this.age}`);
//     }
// };

// let usr1 = new Users('Khumoyun', 30);

// usr1.fullName();
// console.log(usr1);
//==========================================================================================================================================
//==========================================================================================================================================
//==========================================================================================================================================


class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    clacArea() {
        return this.height * this.width;
    }
};
/*
const square = new Rectangle(43, 36);
const long = new Rectangle(20, 100);

console.log(square.clacArea());
console.log(long.clacArea());
*/

//===============
/**
 *  extends- yuqoridagi metodlarni meros qilib oladi
 * super() ota onadagi kerakli xossalarni chaqiradi
 */ 

class ColorRectangleText extends Rectangle {
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`My text: ${this.text}, my color: ${this.bgColor}`);
    }
}


const div = new ColorRectangleText(25, 10, "Hello World", "red")


div.showMyProps();
console.log(div.clacArea());






