function getData(a) {
    return (b) => {
        return (c) => {
            console.log(a + b + c);
        };
    };
};


// getData();
console.log(getData(1)(2)(3));


































































































