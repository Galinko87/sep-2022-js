/*- Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
let x = 2;
if (x!==0) {
    console.log('correct') ;
} else {
    console.log('not correct');}

//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години)

    let time = +prompt('choose the number between 0 and 59');
    if (time >= 0 && time < 15) {
        console.log('1st quarter')
    } else if (time >= 15 && time < 30){
        console.log('2nd quarter')
    } else if (time >= 30 && time < 45){
        console.log('3rd quarter')
    } else if (time >= 45 && time <= 59){
        console.log('4th quarter')
    } else {
        console.log('wrong data. Choose the number between 0 and 59')}
//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

    let day = +prompt('choose the number between 1 and 31');
    if (day >= 1 && day < 10){
        console.log('1st decade')
    } else if (day >= 10 && day < 20){
        console.log('2nd decade')
    } else if (day >= 20 && day <=31){
        console.log('3rd decade')
    } else {
        console.log('wrong data. Choose the number between 1 and 31')}


//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

        let weekday = prompt('write day of the week');
        switch (weekday) {
        case 'Monday':
            console.log('work');
            break;
        case 'Tuesday':
            console.log('learn');
            break;
        case 'Wednesday':
            console.log('work');
            break;
        case 'Thursday':
            console.log('study');
            break;
        case 'Friday':
            console.log('workout');
            break;
        case 'Saturday':
            console.log('sleep');
            break;
        case 'Sunday':
            console.log('sleep');
            break;
        }

//Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно врахувати коли введені рівні числа.
        let num1 = +prompt('put number 1');
        let num2 = +prompt('put number 2');
        if (num1 === num2) {
            console.log('equal');
        } else if (num1 > num2) {
            console.log('number 1 is higher')
        } else if (num2 > num1) {
            console.log('number 2 is higher')
        } else {
            console.log('something went wrong');
        }
//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let y = +prompt() || 'default';
console.log(y);

let smth = '';
if (!!smth === false){
    console.log('default');
} else{
    console.log('hello');
}