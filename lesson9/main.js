//- є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
//Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.

 //Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

console.log(simpsons);
for (const simpson of simpsons) {
    let div = document.createElement('div');
    div.classList.add('member');
    let h2 = document.createElement("h2");
    h2.innerText = `${simpson.name} ${simpson.surname}`;
    let info = document.createElement('p');
    info.innerText = `${simpson.name} ${simpson.surname} ${simpson.age} ${simpson.info} `;
    let imgSimpson = document.createElement('img');
    imgSimpson.src =  simpson.photo;
    div.append(h2, imgSimpson, info);
    document.body.appendChild(div);
}


//Цикл в циклі
//- Є масив
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
console.log(coursesArray);
for (const course of coursesArray) {
    let wholeCourse = document.createElement('div');
    let titleCourse = document.createElement("div");
    titleCourse.innerText = `${course.title}`;
    let courseDuration = document.createElement('div');
    courseDuration.innerText = `${course.monthDuration}`;
    let hourCourse = document.createElement('div');
    hourCourse.innerText = `${course.hourDuration}`;
    let ul = document.createElement('ul');
    wholeCourse.append(ul);
    for (const itemElement of course.modules) {
        let li = document.createElement('li');
        li.innerText = `${itemElement}`;
        ul.append(li);
    }
    wholeCourse.append(titleCourse, courseDuration, hourCourse);
    document.body.appendChild(wholeCourse);
}
/*Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
Приклад структири знаходиться у файлі example.png*/
//------------------

//    - створити блок,
    let
newDiv = document.createElement('div');
newDiv.innerText = 'test';
//    - додати йому класи wrap, collapse, alpha, beta
newDiv.classList.add("wrap", "collapse", "alpha", "beta");

//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
newDiv.style.background = "silver";
newDiv.style.color = "red";
newDiv.style.fontSize = '15px';
//- додати цей блок в body.
document.body.append(newDiv);
document.body.append(newDiv.cloneNode(true));
//- клонувати його повністю, та додати клон в body.

//- Є масив:
 let array = ['Main','Products','About us','Contacts'];
//Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
//Завдання робити через цикли.

let ul = document.getElementsByClassName('menu')[0];
  for (const section of array) {

    let li = document.createElement('li');
    li.innerText = `${section} `;
    ul.append(li);
    }



//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divCourse = document.createElement("div");
    divCourse.innerText = `${coursesAndDurationArrayElement.title} ${coursesAndDurationArrayElement.monthDuration}`;

    document.body.appendChild(divCourse);
}


/*- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
*/

//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//    Завдання робити через цикли.

for (const item of coursesAndDurationArray) {
    let divItem = document.createElement('div');
    divItem.classList.add('item');
    let h1Item = document.createElement('h1');
    h1Item.classList.add('heading');
    divItem.innerText = `${item.title}`;
    let pItem = document.createElement('p');
    pItem.classList.add('description');
    pItem.innerText = `${item.monthDuration}`;
    divItem.append(h1Item, pItem);
    document.body.appendChild(divItem);
 }


//-----------

//    - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let del = document.getElementById('text');
    del.onclick = function (){
    document.body.removeChild(del);
}



//    - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

/*
*** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додаткова частина для завдання) */

let grid = document.forms.grids;
    let columns = grid.columns;
    let rows = grid.rows;
    let text = grid.someText;
    let button = grid.button;

button.onclick = ()=> {
    let createGrid = (col, row, txt) => {
        let newGrid = document.createElement('grid2');
        document.body.append(newGrid);
        for (let i = 0; i < col; i++) {
            let column = document.createElement('columns');
            newGrid.append(column);

            for (let j = 0; j < row; j++) {
                const rw = document.createElement('rows');
                rw.innerText = `${txt}`;
                column.append(rw);


            }

        }
    }
    createGrid(columns, rows, text);
};