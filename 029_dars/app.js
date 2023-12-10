//Прокси - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy
//Proxy и Reflect - https://learn.javascript.ru/proxy#znachenie-po-umolchaniyu-s-lovushkoy-get
/**
let user = {
    name: "Khumoyun",
    _stir: 123456
};

let proxy = new Proxy(user, {
    get(target, prop) {
        if(prop.startsWith("_")) return `access for ${prop} is dineid`;
        return target[prop]
    },
});

console.log(proxy.name);
*/
//===================================================================================================================
let user = { name: "Khumoyun", _pw: 1234};

let proxy = new Proxy(user, {
    ownKeys(target){
        return Object.keys(target).filter(vl => !vl.startsWith("_"));
    }
});

console.log(proxy);

for(vl in user) {
    console.log(vl);
}













