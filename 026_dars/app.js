/***/
// https://learn.javascript.ru/generators-iterators - Генераторы, продвинутая итерация
//https://learn.javascript.ru/generators - Генераторы
console.log("Generator function");
function* getData() {
    // yield 1;
    // yield 2;
    let id = 0;
    while(true){
        yield ++id;
        if(id ===3){
            return id;
        }
    }
};

const generator = getData();
const gr = getData();


console.log(generator.next());
console.log(generator.next());
console.log(gr.next());
console.log(gr.next());


//===================================================================================
//===================================================================================
//===================================================================================
/**
  function* getData() {
    let id = users.length;
    while(true){
        yield ++id;
    }
};

const generator = getData();

let users = [
    {id: 1, name: "Khumoyun1"},
    {id: 2, name: "Khumoyun2"},
    {id: 3, name: "Khumoyun3"},
    {id: 4, name: "Khumoyun4"},
    {id: 5, name: "Khumoyun5"},
    {id: 6, name: "Khumoyun6"},
];


const onDelete = (id) =>{
    let res =users.filter((vl) => vl.id !==id);
    users = res;
};

const add = (usr) => {
    users = [... users, { id: generator.next().value, name: usr}];
};

add("Gulbashakar1")
onDelete(3);
add("Gulbashakar2")
add("Gulbashakar3")
console.log(users);
onDelete(7);

console.log(users);
*/




















