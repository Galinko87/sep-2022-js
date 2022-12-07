function User(name, age, skills, wife){
    this.name = name; //future object with future properties
    this.age = age;
    this.skills = skills;
    this.wife = wife;
    this.greeting = function (msg){
        console.log( `${msg} my name is ${this.name}`)
    }
}

let user1 = new User("vasya", 31, ["js", "python"], {name: "anna", age: 34});
console.log(user1);
console.log(user1.greeting('hi'));
let user2 = new User("kokos", 312);
console.log(user2);

let friend = {
    name: "anton",
    sdfs : "sdfsdf",
}
//user1.greeting.call(friend, "hello");
//user1.greeting.apply(friend, ["aloha", "privit"]);
// call і apply міняють контекст this при виклику функції, в коллі аргументи передають через кому, а в епплай через масив.
let greetingCopy = user1.greeting.bind(friend);
greetingCopy('jobana rusnya'); // міняє контекст і робить копію

class UserPuser{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`hello my name is ${this.name}`)
    }
}

let userPuser = new UserPuser("sdfsd", 45);
console.log(userPuser);

class SuperUser extends UserPuser{
    constructor(name, age, skills) {
        super(name, age); //оце береться із батьківського обєкту
        this.skills = skills; // оце прописується руцями
    }

}

let superUser = new SuperUser('vasya', 45, [11, 22, 33]);
superUser.greeting();

function Admin, (login, password){
    this.login = login;
    this.password = password;
}

function SuperAdmin(login, password, authority) {
    Admin.apply(this, arguments);
    this.authority = authority;

}