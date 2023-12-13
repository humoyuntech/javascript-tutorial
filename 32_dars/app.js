// function onclick() {
//     alert("button click");
// };

// function onmousrdown(){
//     alert("buttun onmousedown");
// };

// function onmouseup() {
//     alert("button onmouseup");
// };


// button.addEventListener("click", onclick);
// button.addEventListener("onmousrdown", onmousrdown);
// button.addEventListener("click", onclick);

// class Events {
//     handleEvent(event) {
//         switch(event.type) {
//             case "click":
//                 onclick();
//                 break;
//             case "mousedown":
//                 onmousedown();
//                 break;
//         }
//     }
// }

// const evn = new Events();

// button.addEventListener("click", evn);
// button.addEventListener("mousedown", evn);

//=============Bubbling - Всплытие 
function child(event){
    // event.stopPropagation();
    console.log("child");
    console.log(event);

};

function parent(event){
    console.log("parent");
};

function grand(event){
    console.log("grand");
};



let target;
table.onclick = function (event) {
    event.preventDefault();
    target = event.target;
    target?.classList.toggle("highlite");

    // if(target.)

    setTimeout(() => {
        target?.classList.remove("highlite");
    }, 2000);
  };

