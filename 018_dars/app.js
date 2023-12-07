// setTimeout(callback, time, arg);
// 1000 = 1 secunt

// setTimeout(() =>{
//     console.log("one secunt");
// }, 1000)

//=======> parametr berish

// setTimeout((a, b) =>{
//     console.log("one secunt", a, b);
// }, 1000, "Salom", "Foydalanuvchi")

//=============================================
let myData = setInterval(()=> {
    let data = new Date();
    console.log(`Hozir: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
}, 1000);




setTimeout(() =>{
    clearInterval(myData)
}, 5000)

// clearInterval()-orqali setInterval() o'chiriladi
// clearTimeout() - orqali setTimeout() o'chiriladi




