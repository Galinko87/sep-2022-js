//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)


function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = []
let user1 = new User(12, "kolya", "pupkin", "sdfs@.fr", 23423525);
let user2 = new User(245, "olya", "pupkina", "sdfsdfds@.fr", 34435343525);
let user3 = new User(365, "ilya", "pdkg", "sdfdfgds@.fr", 23421233525);
let user4 = new User(489, "skolya", "dfgkn", "sdfs@.fr", 129823423525);
let user5 = new User(5888, "ksdfolya", "lsjgf", "sdwcwfs@.fr", 7823423525);
let user6 = new User(623, "kolysldfkja", "pkerthn", "sjkldfs@.fr", 0723423525);
let user7 = new User(7345, "kolyafl", "pupkisdhgrhn", "sdfuios@.fr", 86723423525);
let user8 = new User(8568, "vasya", "pupkinsv", "sdfsqdf@.fr", 123223423525);
let user9 = new User(900, "oleya", "pupkizezn", "sdfsutr@.fr", 3463723423525);
let user10 = new User(12340, "masya", "pupksdfin", "sdfsla@.fr", 986723423525);
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
users.push(user9);
users.push(user10);
console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = users.filter(function (user){
    return user.id % 2 === 0;
})
console.log(filter);
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = users.sort((user1, user2) => user1.id - user2.id);
console.log(sort);


// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;

    }
}

let client1 = new Client(12, "kolya", "pupkin", "sdfs@.fr", 23423525,[4,2,3]);
let client2 = new Client(245, "olya", "pupkina", "sdfsdfds@.fr", 34435343525,[4,5,6]);
let client3 = new Client(365, "ilya", "pdkg", "sdfdfgds@.fr", 23421233525, [9,8,7,6]);
let client4 = new Client(489, "skolya", "dfgkn", "sdfs@.fr", 129823423525, [1,3,4,5]);
let client5 = new Client(5888, "ksdfolya", "lsjgf", "sdwcwfs@.fr", 7823423525, [23,457]);
let client6 = new Client(623, "kolysldfkja", "pkerthn", "sjkldfs@.fr", 0723423525, [7,6]);
let client7 = new Client(7345, "kolyafl", "pupkisdhgrhn", "sdfuios@.fr", 86723423525, [56,7]);
let client8 = new Client(8568, "vasya", "pupkinsv", "sdfsqdf@.fr", 123223423525, [765]);
let client9 = new Client(900, "oleya", "pupkizezn", "sdfsutr@.fr", 3463723423525, [87,6]);
let client10 = new Client(12340, "masya", "pupksdfin", "sdfsla@.fr", 986723423525,[8,7,6,5]);

let clients = [];
clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);


//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, manufacturer, year, maxSpeed, engine){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function (){
        console.log(`you are driving at ${this.maxSpeed} per hour`);
    }
    this.info = function (){
        console.log(`model - ${this.model}, constructor - ${this.manufacturer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, engine - ${this.engine}`);
    }

    this.increaseMaxSpeed = function (newSpeed){
        return this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;
        console.log(`new owner - ${this.driver}`);
    }
}

let testCar = new Car('Yaris', "Toyota", 2018, 220, 1.5);
testCar.increaseMaxSpeed(300);
testCar.addDriver('vasya');
testCar.info();


/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class Car1 {
    constructor(model, constructor, year, maxSpeed, engine) {
        this.model = model;
        this.constructor = constructor;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive(){
        console.log(`you are driving at ${this.maxSpeed} per hour`);
    }
    info(){
        console.log(`model - ${this.model}, constructor - ${this.constructor}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, engine - ${this.engine}`)
    }
    increaseMaxSpeed(newSpeed){
        return this.maxSpeed += newSpeed;
    }
    changeYear(newValue){
            this.year = newValue;
    }
    addDriver(driver){
        this.driver = driver;
    }

}


/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let girls = [];
let girl1 = new Cinderella("Olya", 38, 34);
let girl2 = new Cinderella("Anya", 28, 37);
let girl3 = new Cinderella("Zhenya", 35, 40);
let girl4 = new Cinderella("Ira", 42, 39);
let girl5 = new Cinderella("Slava", 36, 41);
let girl6 = new Cinderella("Katya", 32, 37);
girls.push(girl1, girl2, girl3, girl4, girl5, girl6);

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let prince1 = new Prince('Tolik', 38, 39);
let findGirl = (array, prince) => {
    for (const item of array) {
            if (girls.footSize === prince.size){
                console.log(`${Prince.name} is a perfect match for ${girls.name}`);
            }
        }


    }
findGirl(prince1, girls);