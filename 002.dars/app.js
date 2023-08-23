//=========================== Type Conversion ===========================

let a = 1,
    b = "1";

    console.log(a + b); // 11 - string
    console.log(a + +b); // 2 - number
    console.log(isNaN(b)); // false

//===========================

let c = "10";
let d = "10.8";

console.log(Number(c));
console.log(Number.parseInt(c));
console.log(Number.parseFloat(c));

console.log(Number(d));
console.log(Number.parseInt(d));
console.log(Number.parseFloat(d));

//=========================== boolean
// true = "0, null, undefined"dan boshqa nara.

console.log(false == 0); //true
console.log(true == 1); //true
console.log(false == null); //false
console.log(false == undefined); //false
console.log(undefined == null); //true

console.log(true == "1"); //true
console.log(true == "0"); //false



//=========================== Basic operators, maths ===========================

/*
Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
Reminder %.
Braces ()
Equality =, ==, ===
Observations +=, -=, /=, *=
Increment ++
Decrement --
*/

//=============== Remainder %,
console.log(100%8);

//=============== Observations +=, -=, /=, *=

let z =50;

z = z + 10; // 50 + 10 = 60
z += 10; // 60 + 10 = 70
console.log(z);


//=========================== Comparision(taqqoslash) ===========================
/*
 
<, >, ==, ===, <=, >=, !  

*/

console.log("112" < "21"); // true

//=========================== Logical operators ===========================
// ==================== || (OR)

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false

// ==================== && (AND)

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

// ==================== !(NOT)

console.log( !true ); // false
console.log( !0 ); // true
console.log( !!"non-empty string" ); // true
console.log( !!null ); // false
