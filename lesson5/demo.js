
function per (longSide, shortSide) {
    let result = (longSide + shortSide) * 2;
    console.log(result);
    return result; //або return(longSide + shortSide) * 2);
}

let x = per(10, 20);
console.log(x);

function calculator(a, b, action) {
    let result = NaN;
    if(action === '+'){
        result = a + b;
    } else if (action === '-'){
        result = a - b;
    }
    return result;
}
let data = calculator(10, 30, '-')
console.log(data);

function arrayPrinter(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

arrayPrinter([11, 22, 33]);
arrayPrinter([15, 24, 36]);
let users = [
    {name: "Vasya", username: "V1", password: "sdfsdfsdf"},
    {name: "Petya", username: "sdf", password: "sdfsdfsklj"},
    {name: "Masha", username: "Fser", password: "lur;rng"},
    {name: "Olya", username: "SDFSDF", password: "sldfksldf"},
    {name: "Kirya", username: "FSD5", password: "csieussf"},
    {name: "Natasha", username: "sdfkjoo", password: "lsut34"},
    {name: "Lena", username: "45645df", password: "SECE342"},
    {name: "Sasha", username: "Vsdiu", password: "DGDTH87"},
    {name: "Marusia", username: "STRE21", password: "kshd5667"},
    {name: "Elina", username: "LSJDF0", password: "ksdfnsd2434"},

];
arrayPrinter(users)

function asd() {
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 3){
        return arguments[0] - arguments[1] - arguments[2];
    }
    return 0;
}

console.log(asd(123, 234, 568));

function restExample(y, ...xxx) {
    console.log(xxx)
}

restExample(1, 2, 3, 'sdf', true, {}, []);

/*let calculator = (a, b) => {
    return a + b;
};*/
//let calculator = (a, b) => a + b; // same stuff but shorter and will also return function
/*let calculator = (a, b) => {
    let result = a + b;
    return result;
} */

let user = {
    imya: 'vasya',
    greeting: function () {
        console.log(`hello my name is ${this.imya}`);
        console.log(this);
    },
    wife: {
        imya: 'anna',
        hi: () => { // arrow function in the object - this references to window
            console.log(this);
            return `hi my name is ${this.imya}`
        },
        privit: function() { // normal function in the object - this references to object
            console.log(this);
           return `hi my name is ${this.imya}`
        }
    }
}
user.greeting();
console.log(user.wife.hi());
console.log(user.wife.privit());