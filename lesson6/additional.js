//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.

let string = "наслаждение";
console.log(string.match(/.{1,3}/g));

let arr = []
arr.push(string.substring(0, 3));
arr.push(string.substring(3, 6));
arr.push(string.substring(6, 9));
arr.push(string.substring(9, 12));
console.log(arr);

let string1 = "наслаждение";
function cutString (str, n) {
    let arr = [];
    for (let i=0; i<str.length; i+=n) {
        arr.push(str.substring(i, i+n))
        }
    return arr;
    }
console.log(cutString(string1, 3));

/*- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
document.writeln(delete_characters(str, 7)); // Каждый*/
let str = 'Каждый охотник желает знать';
let delete_characters = (str, length) => str.slice(0, length);
console.log(delete_characters(str, 7));
//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
 /*   let str = "HTML JavaScript PHP";
    function insert_dash(string){
        return string.replaceAll(' ', '-').toUpperCase();
    }
    console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP' */

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
    let ryadok = "jobana rusnya";
    const bigLetter = (ryadok) => ryadok[0].toUpperCase() + ryadok.slice(1);


    console.log(bigLetter(ryadok));

/*- Дано список імен.
    let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger' */

let str1 = '  %#@Har ry... Pott555er  ';
const norm = (str) => {
    let string = str.split('').map(value => (value >= 'A' && value <= 'Z') || (value >= 'a' && value <= 'z') || (value >= 0 && value <= 9)? value: ' ').join('').trim()
    let arr = ['0', '1', '3', '4', '5', '6', '7', '8', '9'];
    for (let i = 0; i < arr.length; i++) {
        while (string.includes('  ') || string.includes(arr[i])){
            string = string.replace('  ', ' ').replace(arr[i], '')
        }
    }

    return string;
}
let norm1 = norm(str1);
console.log(norm1);

/*    - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
*/
//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let line = 'Каждый охотник желает знать';
const capitalize = (line) => line.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
console.log(capitalize(line));

/*- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com

Примітка
Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом,
з регулярками будете потім бавитись.*/
const val = (str) =>{
    if (!str.startsWith('@') && str.includes('@') &&
        str.includes('.', str.indexOf('@') + 3)){
        console.log('valid');
    } else{
        console.log('not valid');
    }
}

val('someemail@gmail.com');
val('ssomeeMAIL@gmail.com');
val('someeMAIL@i.ua');
val('some.email@gmail.com');

//- є масив */
//відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let duration = coursesArray.sort((a, b) => (b.modules.length - a.modules.length));
console.log(duration);

/*
- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5*/
let symb = "о";
let str2 = "Астрономия это наука о небесных объектах";
count = (str2, symb) => {
    let num = 0;
    let split = str2.split('');
    for (const splitElement of split) {
        if (splitElement === symb){
            num++;
    }
}
    return num;
}
console.log(count(str2, symb));


// Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str3 = "Сила тяжести приложена к центру масс тела";
cutString = (str3, n) => str3.split(' ').splice(0, n).join(' ');

console.log(cutString(str3, 5));

// 'Сила тяжести приложена к центру'

/*
- стоврити масив книжок (назва, кількість сторінок, автори , жанри).
-знайти наібльшу книжку.
- знайти книжку/ки з найбільшою кількістю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор
- вісортувати книжки по кількості сторінок по зростанню
*/

// 4356 --> '4000 + 300+ 50+ 6'
const  number = (number) =>{
    const arr = [];
    let index = 0;
    while(number){
        let i = number % 10 * 10 ** index++;
        arr.unshift((i)); // adds number at the beginning of array
        number /= 10;
        number = parseInt(number);

        if (i === 0){
            arr.shift(); // deletes the element at the beginning of array
        }
    }
    return arr.join('+');
}
console.log(number(30303));;
