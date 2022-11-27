function foo (obj){
    try { // tut sproba shos' zrobyty
        console.log(obj.name);
    } catch (e) { // tut hopaiemo tsy pomylku
        console.log(e);
    }
    console.log('end');
}

foo();

function divider (a, b){
    if (b === 0){
        throw new Error('wow wow wow B is Zero');
    }
    return a / b;
}

try {
    divider(3, 0);
} catch (e) {
    divider(10, 2);
} finally {
    console.log('sdfsdfs');
}

//let user = {
//    name: 'sdfsdf',

//}
//console.log(user?.name); // optional chain operator
//console.log(user?.wife?.age);

/*let name = 'galyna';
let age = 35;

let user ={
    name,
    age,
}
console.log(user);
*/

/*let user ={
    name : 'galyna',
    age : 35,
    wife: {
        name: 'azeaze',
        age: 34,

    }

}
let {name, age, wife, wife: {name: wName, age:wAge}} = user;// let name = ... let age = ...
console.log(age, name, wName, wAge);*/

/*let user = {
    name: "userchik",
    age: 123,

}
let user2 = {...user};// {name: user.name, age: user.age}
let user3 = {...user, status: true, name:"abrikos"};
console.log(user3.status);
console.log(user.status);
*/
/*let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
users.map((value, index) => ({
    name : value.name,
    age : value.age,
    status : value.status,
    id : index+1,
})
)// old approach

console.log(users.map((value, index) => ({...value, id: index + 1})));
*/
/*
let user = {
    name: 'marco',
    age : 46,
    wife: {
        name: 'galyna',
        age: 35,

    }
}

let stringify = JSON.stringify(user);
console.log(typeof stringify, stringify)

let parse = JSON.parse(stringify);
console.log(parse);

function copyCenter (obj) {
    return JSON.parse(JSON.stringify((obj)));
}

const copyC = (obj) => JSON.parse(JSON.stringify((obj)));
console.log(copyC);*/
/*let user4 = {
    ...user
};
user4.wife.name = 'olya';
console.log(user.wife);*/

//CLOSURES

function userBuilder(name, age){
    let user = {name, age};
    return {
        setAge: function (age) {
            if (typeof age === 'string') {
                throw new Error('newAge must be a number')
            } else {
                user.age = newAge;
            }

        },
        userInfo: function () {
            return {...user}
        },
        getAge: function (){
            return user.age; //returns only specific method of the object
        },
    };
}

let builder = userBuilder(('asd'), 123);
builder.setAge((100));
console.log(builder.userInfo());
