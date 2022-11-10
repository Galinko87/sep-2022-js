//За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i in numbers) {
    i++;
    document.write(`<div>${i}</div>`)

}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let a = []
for (i in a < 10) {
    a++;
    document.write(`<div> div c довільним текстом і індексом всередин ${a+1}</div>`)}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let x = 0;
while (x < 20){
    document.write(`<h1>blabla</h1>`);
    x++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let y = 0;
while (y < 20){
    document.write(`<h1>blabla</h1> ${y+1}`);
    y++;
}
/*- Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Масив:
*/
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    document.write(`<ul>`);
    for (let i = 0; i < listOfItems.length; i++){
    let listOfItem = listOfItems[i];
    document.write(`<li>${listOfItem}</li>`)
}
    document.write(`</ul>`)



/*    Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону  Зробити адекватну стилізацію
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

ШАБЛОН
<div class="product-card">
    <h3 class="product-title">TITLE. Price - PRICE</h3>
<img src="IMAGE" alt="" class="product-image">
</div>
Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
*/

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`<div class="product-card">
    <h3 class="product-title">Name - ${product.title} Price - ${product.price}</h3>
<img src="${product.image}" alt="${product.title}" class="product-image">
</div>`

    )
}
/*
--------------------
 /*   є масив
let users = [
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
за допомоги циклу вивести:
- користувачів зі статусом true
- користувачів зі статусом false
- користувачів які старші за 30 років
*/
let users = [
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
for (let user of users) {
    if(user.status) {
        document.write(`<div class="user-true">
        <h4>${user.name}</h4>
        <p>${user.age} ${user.status}</p></div>`)
    }
}
for (let user of users) {
    if(!user.status) {
        document.write(`<div class="user-false">
        <h4>${user.name}</h4>
        <p>${user.age} ${user.status}</p></div>`)
    }
}
for (let user of users) {
    if(user.age >= 30) {
        document.write(`<div class="user-age">
        <h4>${user.name}</h4>
        <p>${user.age} ${user.status}</p></div>`)
    }
}

