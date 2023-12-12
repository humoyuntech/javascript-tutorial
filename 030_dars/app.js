// console.log(document);
// console.log(window);

// let by = document.getElementsByTagName("body");
// let bir = document.getElementById("bir");

// console.log(by[0]);
// console.log(bir.textContent = "hey");
// yashirib qoyish
// bir.hidden = true;

//===========================================================================
let parent = document.querySelector(".parent");


//===========================================================================
//==============Attributecnfgu  
//=== atributni tekshirish true yoki false qaytadi
// console.log(parent.hasAttribute("class"));
//=== atributni tekshirish va atributni o'zini qaytadi
// console.log(parent.getAttribute("class"));
//===== atribute o'rnatish
// parent.setAttribute("id", "border");
//===== atribute o'chirish
// parent.removeAttribute("id");

//===========================================================================
let div = document.createElement("div");
let txt = document.createTextNode = ("Hey Guy");
div.setAttribute("id", "border");
div.prepend(txt);

// parent.before(div);
parent.after(div)

div.remove();


// cloneNode() -orqali kerakli ma'lumotlarni clone qilish mumkin
let newDiv = parent.cloneNode(true);
// console.log(newDiv);
//===========================================================================
//style
// parent.style.fontSize = "25px";
// parent.style.backgroundColor = "chartreuse";
parent.style.cssText = `
    font-size: 25px;
    background-color: chartreuse;
    
`;
let li = document.querySelectorAll("li");

li.forEach(element => {
    element.style.cssText =  `list-style-type: none;`
});

//========================================================================================================================================
//========================================================================================================================================
/**
 *  У элементов есть следующие геометрические свойства (метрики):

*  offsetParent – ближайший CSS-позиционированный родитель или ближайший td, th, table, body.
*  offsetLeft/offsetTop – позиция в пикселях верхнего левого угла относительно offsetParent.
*  offsetWidth/offsetHeight – «внешняя» ширина/высота элемента, включая рамки.
*  clientLeft/clientTop – расстояние от верхнего левого внешнего угла до внутренного. Для операционных систем с ориентацией слева-направо эти свойства равны ширинам левой/верхней рамки. Если язык ОС таков, что ориентация справа налево, так что вертикальная полоса прокрутки находится не справа, а слева, то clientLeft включает в своё значение её ширину.
*  clientWidth/clientHeight – ширина/высота содержимого вместе с внутренними отступами padding, но без полосы прокрутки.
*  scrollWidth/scrollHeight – ширины/высота содержимого, аналогично clientWidth/Height, но учитывают прокрученную, невидимую область элемента.
*  scrollLeft/scrollTop – ширина/высота прокрученной сверху части элемента, считается от верхнего левого угла.


* https://learn.javascript.ru/size-and-scroll
 */
//========================================================================================================================================
//========================================================================================================================================
// console.log(parent.offsetTop);
// console.log(parent.offsetLeft);
// console.log(parent.offsetWidth);
// console.log(parent.clientWidth);
// console.log(parent.clientHeight);
// console.log(parent.offsetTop);

//========================================================================================================================================
//========================================================================================================================================
let box = document.querySelector(".box");
let btn = document.querySelector("button");
let scroll = document.querySelector("scroll");

console.log(box.clientHeight);
console.log(box.scrollWidth);
console.log(box.clientWidth);


function expand() {
    if(box.clientHeight === box.scrollHeight){
        box.style.height = `150px`;
        btn.innerText = "Show more";
    }else{
        box.style.height = `${box.scrollHeight}px`;
        btn.textContent = "Show less"
    }
    
}

function sr() {
    // box.scroll(0, box.scrollHeight);
    // box.scrollBy(0, 10); // ko'rsatilgan px-dan qo'shib boradi
    // box.scrollTo(0, 80); // ko'rsatilgan pixselga keladi
}






