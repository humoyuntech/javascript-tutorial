// let title = document.querySelector('#title');

// title.addEventListener("contextmenu", ()=> console.log("Hey"));

//==============================================================
let inputChange = document.querySelector(".inputchange");
let text = document.querySelector("#text");

inputChange.addEventListener("change", (e) => {
    e.preventDefault();
    // text.textContent = "";
    text.textContent = e.target.value;

});



