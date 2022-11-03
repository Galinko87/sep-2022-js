//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [];
arr[0] = 1;
arr[1] = false;
arr[2] = "something";
arr[3] = 100500;
arr[4] = [2, true, "book"];
arr[5] = 7;
arr[6] = true;
arr[7] = "Hello";
arr[8] = "stuff";
arr[9] = "World";
console.log(arr);

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "JavaScript for dummies",
    pageCount: 300,
    genre: "sci-fi",
};
let book2 = {
    title: "Russkij korabl idi...",
    pageCount: 100,
    genre: "historical",
};
let book3 = {
    title: "Putin Huilo",
    pageCount: 1,
    genre: "politics",
};

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let library1 = {
    title: "Skin in the Game",
    pageCount: 304,
    genre: "Philosophy",
    authors: [
        {name:"Taleb", age: 62}],

};
let library2 = {
    title: "Some book",
    pageCount: 200,
    genre: "Romance",
    authors: [
        {name:"SomeAuthor", age: 38}],

};
let library3 = {
    title: "Principles",
    pageCount: 592,
    genre: "Biography",
    authors: [{name:"Ray Dalio", age: 73}],

};

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
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
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);