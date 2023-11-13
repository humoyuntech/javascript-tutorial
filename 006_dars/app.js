
/* === new constractor orqali object yaratish === */
let obj = new Object({name: 'Doniyor', age: 15,});
// console.log(obj);

//======================
let person = {
    name: "Humoyun",
    status: "Developer",
    age: 30,
    "mail adress": "humoyun@gmail.com",
    100: "this is number",
}

/* ========== Objectga murojat qilish ========== */
// console.log(person.name);
// console.log(person["status"]);
// console.log(person["mail adress"]);
// console.log(person["100"]);
// console.log(person.surname); //undefined qaytaradi agar key ma'lumot so'ralsa

// ================== dynamic access to object value
// let key = "age";
// console.log(person[key]); // 10
// console.log(person["key"]); //undefined

// promptga Objectni keylarini kiritsa consolega chiqadi
// let name = prompt("Objectni Keyini kiriting", "");
// console.log(person[name]);


//Ma'lumotni o'zgartirish
// person.name = "Ibrohim";
// person.age = 2;
//Yangi ma'lumot qo'shish
// person.hobby = "Coding";
//ma'lumotni o'chirish
// delete person.age
// delete person["100"]
// console.log(person);

// ====================================================
// Object.freeze() - Objectni muzlatadi
// ma'lumot qo'shib, o'chirib, yangilab bo'lmaydi
// Object.seal() - yuqoridagidan farqi faqat ma'lumotni yangilasa bo'ladi

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};


// Object.freeze(user);
// Object.seal(user);
// user.hobbiy = "Coding";
// user.age = 10;
// delete user.isAdmin;

// console.log(user);


// ====================================================


let user1 = {
    name: "John",
    age: 30,
    isAdmin: true
};

let user2 = {
    name: "John",
    age: 30,
    isAdmin: true
};

// console.log(user1 == user2); //false
// console.log(user1 === user2); //false
// const user3 = user1;
// console.log(user1 === user3); //true
// console.log(user2 === user3); //false

/* ==================== Object clone ==================== */
// 1 shallow clone => Object.assign nested (ichma ich)qiladi
let clone = Object.assign({}, person);
console.log(clone);

// 2. deep clone =>StructuredClone();
//ichiga method bo'lsa ishlamaydi
let newPerson = {
    name: "Ahmad",
    age: 25,
}

let newClone = structuredClone(newPerson);
console.log(newClone);

// Object for loop
// for in

for( let key in clone){
    console.log(key);
    // console.log(clone[key]);
}



console.clear();





