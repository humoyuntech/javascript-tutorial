
// let a = "dfg";
// try{
//     console.log(num + 5);
// }catch(error){
//     console.log(error);
//     console.log(error.message);
//     console.log(error.name);
// }
//=============================
const database = {
    najmiddin: {
        login: "najmiddin",
        password: 12345,
        fullname: "Najmiddin Jon",
    },

    sardorbek: {
        login: "sardorbek",
        password: 12345,
        fullname: "Sardorbek Bek"
    },
};
// console.log("Started...");
/*

let login = (lg, pw, callback) => {
    setTimeout(() => {
        if(database.najmiddin.login === lg && database.najmiddin.password === pw){
            return callback(`${database.najmiddin.fullname}, Wellocme to Facebook`);
        }else{
          return callback( `Qo'chqorvoy aka passwort noto'g'ri`);
        }
    }, 1000)
};

const user = login ("najmiddin", 12345, (usr) => {
    console.log(usr);
    console.log("Finish");
});
*/


let user = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        if(database.najmiddin.login === "najmiddin" && database.najmiddin.password === 12345){
            resolve (`${database.najmiddin.fullname}, Wellocme to Facebook`);
        }else{
          reject ( `Qo'chqorvoy aka passwort noto'g'ri`);
        };
    },2000);
});

/**
user
    .then((res) => console.log(res))
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=> {
        console.log("Finished");
    })

*/

//======================================================

const get = async () => {
    console.log("Started...");
    let res = await user;
    console.log(res);
    console.log("finish");
};

get();











