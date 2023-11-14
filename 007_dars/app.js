
let user = {
    name: "webbrain",
    title:"IT Center",
    age: 5,
    adress: "Toshkent",
    sayHi() {
        console.log(`Hi ${this.name}`);
    },
    child: {
        childName: "Academy"
    }
}

for(value in user) {
    // console.log(value);
    // console.log(user[value]);
    console.log(`key: ${value}, value: ${user[value]}`);
};

//==================== kalitlarni  tekshirish
// console.log("age" in user);

//==================== destructuring 
// const {name: newName, title, age, adress, sayHi, child:{childName}} = user;

// console.log(sayHi);

//==================== spread operator
// copy va updete uchun ishlatiladi
// let copyUser = {...user, name: "Center"};
// console.log(copyUser);


// ======== updete
// console.log({...user, name: "IT center"});



// let spreadObj = {
//     name: "Muhammad",
//     age: 20,
// }

// let value = {...spreadObj, name: "Abu Bakr", age: 25, religion: "islam"}
// console.log(value);
// console.log({...spreadObj, name: "Usmon", agr: 32});




