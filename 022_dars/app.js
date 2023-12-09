// console.log("_prototype_ __proto__");

let user1 = {
    name: "Khumoyun",
    city: "Vobkent",
    myFunc : function(){
        console.log(`Hello ${this.name}`); 
    }
};

let user2 = {
    name: "Doni",
};

user2.__proto__ = user1;

user1.myFunc();
user2.myFunc();
console.log(user2.city);

//==============================================
Object.prototype.fullName = function(){
    console.log(this.name, this.last);
    return this;
};


user1.fullName();
//=========================================================================================================================================


const soldier = {
    name: "solidar",
    health: 400,
    armor: 100,
    sayHI(){
        console.log(`How are you? ${this.name}`);
    }
};


const jonh = { 
    name: "Jonh",
    health: 100
};

/*
==============="Prototype"ning eskirgan usulo===============
*/

// jonh.__proto__ = soldier;

// console.log(jonh);
// console.log(jonh.armor);
// jonh.sayHI();

/*
==============="Prototype"ning yangi usulo===============
*/
// 1.Object.setPrototypeOf
Object.setPrototypeOf(jonh, soldier);

console.log(jonh);
console.log(jonh.armor);
jonh.sayHI();

// 2.Object.create()
let nick = Object.create(soldier);
nick.sayHI();
console.log(nick);
console.log(nick.armor);
//=========================================================================================================================================


