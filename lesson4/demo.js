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
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
    {name: 'max', age: 31, status: true},
];*/

// for of
/*for (let user of users) {
    document.write(`
    <div class="user-box">
        <h3>${user.name}</h3> 
        <p>${user.age} ${user.status}</p>
    </div>`);
}*/

/*let products = [
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
    document.write(
        `<div>
<h2>Name - ${product.title}, Price - ${product.price}</h2>
<img src="${product.image}" alt="${product.title}">
</div>`
    )

} */
// create new array backwards from existing one
let arr = [1, 2, false, true, 'str'];
let newArr = [];
for (let i = arr.length - 1, j=0; i >= 0; i--, j++)
{
    newArr[j] = arr[i];

}console.log(newArr);

