let students = [
    { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
    { id: 2, year: 2000, name: "Asilbek Topilov" },
    { id: 3, year: 2002, name: "Najmiddin Nazarov " },
    { id: 4, year: 2002, name: "Mominov Abdulloh" },
    { id: 5, year: 1995, name: "Sardor Tursunboyev" },
    { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra " },
    { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
    { id: 8, year: 2002, name: "Shukurov Shohruh" },
  ];

//   CRUD (Create, Read, Update, Delete)

// ====================================Update

const updeteUser = (data) => {
    let res = students.map((value) => value.id === data.id ? {...value, [data.type]: data.value} : value);
    return students = res;
};

updeteUser({id: 2, type: "name", value: "Farrux"});
updeteUser({id: 2, type: "year", value: 1992});


// ====================================Create

const addUser = (user) => {
    students = [...students, {id: students.length + 1, ...user}];
};


addUser({name: "Webbrain", year: 2019});


// ====================================Delete

const deleteUser = (id) => {
    let res = students.filter((value) => value.id !== id);
    students = res;
};

deleteUser(7);


//====================================Read 

const sortByYear = () => {
    let res = students.sort((a, b) => b.year - a.year);
    return students = res;
};

//sortByYear(students);


const sortByAlphabet = () => {
    let res = students.sort((a, b) => a.name.localeCompare(b.name));
    return students = res;
};

sortByAlphabet(students);


console.log(students);











