"use strict";

/**
 * Object.defineProperties()
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
 * Флаги и дескрипторы свойств
 * https://learn.javascript.ru/property-descriptors#globalnoe-zapechatyvanie-obekta
 */

/**
 * writable – если true, свойство можно изменить, иначе оно только для чтения.
 * enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
 * configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.
 */

const car = {
    brand: "Audi",
    year: 2019
};

//flagni statusini ko'rish
console.log(Object.getOwnPropertyDescriptor(car, "brand"));

Object.defineProperty(car, "year", {
    value: 2023
    // configurable: false,
    // enumerable: false
});

// delete car.year;
// car.year = 2022;
console.log(car);



//==============================================================================================================
//==============================================================================================================
//==============================================================================================================
// https://learn.javascript.ru/property-accessors#deskriptory-svoystv-dostupa   - Свойства - геттеры и сеттеры
//==============================================================================================================
//==============================================================================================================
//==============================================================================================================


/*
 свойства-аксессоры (accessor properties). По своей сути это функции, которые используются для присвоения и 
 получения значения, но во внешнем коде они выглядят как обычные свойства объекта.

 */
/**
 *  «геттер» – для чтения и «сеттер» – для записи.
 */


const person = {
    name: "Alex",
    birthYear: 1993,
    age: 25,

    get userAge(){
        return this.age
    },

    set userAge(num) {
        this.age = num;
    }
};



console.log(person.userAge); //getter -o'qiydi
console.log(person.userAge = 30); // setter -o'rnatadi

























