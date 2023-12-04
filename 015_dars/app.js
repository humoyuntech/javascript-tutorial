
//=====================================  Sardorni videosidan =====================================
//1-misol
// const sum = (n) => {
//     console.log(n)
//     if(n === 1) {
//         return 1
//     }else{
//         return sum (n - 1)
//     }
// };


// sum(4)


//1.2-misol
// let res = 0;
// const sum = (n) => {
//     if(n === 1) {
//         return (res = res +1)
//     }else{
//         res +=n;
//         return sum (n - 1)
//     }
// };


// sum(4)
// console.log(res);

//2-misol

/*
let company = {
    sales: [
      { name: "John", salary: 1000 },
      { name: "Alice", salary: 1600 },
    ],

    development: {
      sites: [
        { name: "Peter", salary: 2000 },
        { name: "Alex", salary: 1800 },
      ],

      internals: [{ name: "Jack", salary: 1300 }],
    },
};
  

function getCalc(company) {
    if (Array.isArray(company)) {
      // case (1)
      return company.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else {
      // case (2)
      let sum = 0;
      for (let subdep of Object.values(company)) {
        sum += getCalc(subdep); // recursively call for subcompanys, sum the results
      }
      return sum;
    }
  }
  
  
console.log(getCalc(company));

*/

//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
//======================================================================================================================
// =====================================Darsga tushintirilgan =====================================
//recursion or recursive function
/**
 * 
function recurese(num) {
    console.log(num);
    let newNum = num - 1;

    // base condition
    if(newNum > 0) {
        recurese(newNum)
    }
}


recurese(5)
 * 
 */
// =====================================Darsga tushintirilgan =====================================

let user = {
    name: "test",
    age: 30, 
    child: {
        name: "test2",
        age: 20,
        child: {
            age: 10
        }
    }
};

let sum = 0; 

function getAge(obj) {
    sum += obj.age;

    if(obj.child) {
        getAge(obj.child)
    }
}

getAge(user);
console.log(sum);


//======================================================================================================================
//======================================================================================================================
//====================================================Youtube===========================================================
//======================================================================================================================
//======================================================================================================================

/* 
Рекурсия в JavaScript - Рекурсивные функции
https://www.youtube.com/watch?v=M47vuXqRKsI&list=TLPQMDExMDIwMjO2ZFBpYfKqUA&index=9
*/


// function pow(basa, exp) {
//     if(exp === 0){
//         return 1;
//     }else{
//         let res = basa * pow(basa, exp -1);
//         return res
//     }
// }

// console.log(pow(2, 3));
// console.log(pow(2, 8));


// =================

/*

let items = [{
    id: 1,
    items: [{
        id: 11,
        items: [{
            id: 111,
            items: [{
                id: 1111,
                items: []
            }]
        }]
    }]
}, {
    id: 2,
    items:[{
        id: 21,
        items: [{
            id:211,
            items:[{
                id:2111,
                items: []
            }]
        }]
    }, {
        id: 22,
        items: []
    }]
}]

let ids = [];

function getItemsIds(items){
    for(let i = 0; i < items.length; i++){
        let _item = items[i];
        ids.push(_item.id);
        _item.items && getItemsIds(_item.items)
    }
}

getItemsIds(items);
console.log(ids);

*/








//====================================================================================================


//===========================================
// const struct ={
//     left: 12,
//     right: 12,
//     children: [
//         {
//             left: 12,
//             right: 12,
//             children: []
//         },
//         {
//             left: 64,
//             right: 14,
//             children: [
//                 {
//                     left: 20,
//                     right: 2,
//                 }
//             ]
//         }
//     ]
// };

// function calculateLeftRight(struct) {
//     const leftResult = [];
//     const rightResult = [];
//     const result = {left: leftResult, right: rightResult}

//     function flutter(struct){
//         for(let key in struct){
//             const value = struct[key]
//             if(key === "left") leftResult.push(value);
//             if(key === "right") rightResult.push(value);
//             if(Array.isArray(value)) {
//                 value.forEach(elem =>{
//                     flutter(elem)
//                 })
//             }
//         }
//     }

//     flutter(struct)


//     return result
// }

// console.table(calculateLeftRight(struct));

//======================================================================
/* 
            webDev
https://www.youtube.com/watch?v=bh5TKVync9M&t=556s
*/

// const users = {
//     "ivanov": {
//         age: 25,
//         parent: {
//             "ivanov-a": {
//                 age:45
//             },
//             "ivanov-b": {
//                 age: 43, 
//                 parent: {
//                     "sergeev-a": {
//                         age: 88,
//                         parent: {
//                             "lionenko": {}
//                         }
//                     },
//                 }
//             }
//         }
//     },
//     "konstenko":{
//         age: 56,
//         parent: {
//             "ignatenko": {

//             },
//             "sniezko": {
//                 age: 45
//             }
//         }
//     }
// }







// function userParentRecursion(obj){
//     if(obj.parent !== undefined){
//         for(let key in obj.parent) {
//             console.log(key);
//             userParentRecursion(obj.parent[key])
//         }
//     }



// }

// for(let key in users){
//     // console.table(key);
//     userParentRecursion(users[key])
// }














