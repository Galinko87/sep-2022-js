// Знайти та вивести довижину настипних стрінгових значень
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


//Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   ';
let clean = dirty.trim();
console.log(clean);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
let arr = str.split(" ");
console.log(arr); //['Ревуть', 'воли', 'як', 'ясла', 'повні']

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let string = nums.map(value => value.toString());
console.log(string);

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums2 = [11,21,3];
let sortNums = (nums2, direction) =>{
    if (direction === "ascending"){
        nums2.sort((a, b) => a - b);
    } else if (direction === "descending"){
        nums2.sort((a, b) => b - a);
    }
    return nums2
}
console.log(sortNums(nums2, "ascending"));
console.log(sortNums(nums2, "descending"));

/*- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 */
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}]
let Duration = coursesAndDurationArray.sort((a,b) =>(b.monthDuration - a.monthDuration));
console.log(Duration);
let longDuration = coursesAndDurationArray.filter((course) => course.monthDuration > 5);
console.log(longDuration);


// описати колоду карт
//{
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}
//let types = ['spade', 'diamond', 'heart', 'clubs'];
let names = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace', 'joker'];
//let color = ['red', 'black'];

let masti = [
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'heart', color: 'red'}

];
const cards = [];
for (cardSuit of masti){
    for (name of names){
        let card = {
            cardSuit: cardSuit.cardSuit,
            value: name,
            color: cardSuit.color,
        }
        cards.push(card);
    }
}
console.log(cards);
//- знайти піковий туз
let filter = cards.filter(value => value.cardSuit === "spade" && value.value === "ace");
console.log(filter);
//- всі шістки
let six = cards.filter(value => value.value === 6);
console.log(six);
//- всі червоні карти
let red = cards.filter(value => value.color === 'red');
console.log(red);
//- всі буби
let diamonds = cards.filter(value => value.cardSuit === 'diamond');
console.log(diamonds);
//- всі трефи від 9 та більше
let clubs = cards.filter(value => value.cardSuit === 'clubs' && value.value >= 9);
console.log(clubs);
/*
Додатково по reduce
Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
}
*/
console.log(cards);
let reduce = cards.reduce((accumulator, value) =>{
    if(value.cardSuit === 'spade') {
        accumulator.spades.push(value);
    } else if (value.cardSuit === 'clubs') {
        accumulator.clubs.push(value);
    } else if (value.cardSuit === 'diamond') {
        accumulator.diamonds.push(value);
    } else if (value.cardSuit === 'heart') {
        accumulator.hearts.push(value);}
    return accumulator
}, {spades:[], clubs:[], diamonds:[], hearts:[]})
console.log(reduce);