/**
 * let user = {
    name: "Humoyun",
    lastname: "Rustamov",
    title: "Developer",

    getFull() {
        console.log(`Hi ${this.name} ${this.lastname}`);
    }
};

let user2 = {
    name: "Doniyor",
    lastname: "Rustamov",
    title: "Developer",

    getFull() {
        console.log(`Hi ${this.name} ${this.lastname}`);
    }
}

user.getFull();
*/

//============================================================================= call()


let data = [
    {
        name: "Humoyun",
        lastname: "Rustamov",
        title: "Developer",
    },

    {
        name: "Doniyor",
        lastname: "Rustamov",
        title: "Developer",
    },
];


function getFullName(a = "", b = "", c = "") {
    // console.log(a, b, c);
    console.log(`Hi ${this.name} ${this.lastname}`);
};

//==========call-apply
for(let usr of data) {
    // getFullName.call(usr, "Ibrohim", "Usmon", "Ali");
    // getFullName.apply(usr, ["Ibrohim", "Usmon", "Ali"]);
    let mt = getFullName.bind(usr, "Ibrohim", "Usmon", "Ali");
    mt();
    
};

// let mt = getFullName.bind(data);
mt();






//============================================================================= 
//============================================================================= 
//============================================================================= 
// ================================ call/apply/ bind ================================

let employee = {
    name: "Muhammad",
    salary: 3500000,

    bonus(percent =  30){
        let bonus = percent* this.salary/100;
        console.log(`${this.name}: Salary:${this.salary}, Bonus:${bonus}: Total: ${bonus + this.salary}`);
    }
};

// employee.bonus(25);

let employee2 = {
    name: "Usmon",
    salary: 4500000,

};

let employee3 = {
    name: "Ali",
    salary: 4000000,

}

//1. ====> call(object, porametr func uchun)
employee.bonus.call(employee2)
employee.bonus.call(employee3, 50)

//2. ====> apply(object, [porametr func uchun])
employee.bonus.apply(employee2)
employee.bonus.apply(employee3, [50])

//3. ====> "bind" call ga o'xshash faqat oxirida () chaqirish kerak
employee.bonus.bind(employee2, 45)()
employee.bonus.bind(employee3, 50)()

// ==========================================
// in objectdagi keylari tekshirib beradi
console.log("name" in employee); //true

