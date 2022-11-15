//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//- створити функцію яка обчислює та повертає площу кола з радіусом r
function square(a, b) {
    return (a * b);
}
console.log(square(2, 3));
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylindre(h, r) {
    return (h * 3.14 * r * r);
}
console.log(cylindre(2, 3));
//- створити функцію яка приймає масив та виводить кожен його елемент
function showArray(users) {
    for (const user of users) {
        console.log(user);

    }
}
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
showArray(users);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, repellendus.');
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(text) {
    document.write(`<ul>
    <li>${text}</li>
    <li>${text}</li>
    <li>${text}</li>
</ul>`)
}
ul('Lorem ipsum dolor.')
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCycle(num, text) {
    document.write(`<ul>`)
        for (i=0; i<num; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write(`</ul>`);
}

ulCycle(5, 'Lorem ipsum dolor sit amet.');
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function liConstructor(...arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
        
    }
    document.write(`<ul>`)
}
liConstructor(1, true, 'str', 534, false, 'hello', 'okten')
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let clients = [{id:1, name: "vasya", age: 21},
{id:2, name: "petya", age: 22},
{id:3, name: "olya", age: 22},
{id:4, name: "misya", age: 23},
{id:5, name: "kisya", age: 24}]

function blocks(clients) {
    for (const client of clients) {
        document.write(`<div>${client.id} ${client.name} ${client.age}</div>`);
    }
}
blocks(clients);
//- створити функцію яка повертає найменьше число з масиву
function findMin(...x) {
    return Math.min(...x)
}
function find(...x) {
    let start = x[0];
    for (const x1 of x) {
        if (x1<start){
            start = x1;
        }
    }
    return start;
}

console.log(find(3, 8, 9, 0, 554, -8, -110));
console.log(findMin(1, 3, 5, 99, -3, 24, 345));
//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sum() {
    let total = 0;
    for (const argument of arguments) {
        total += argument;
    }
    return total;
}
console.log(sum(1, 3, 10, 15));