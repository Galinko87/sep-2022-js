/* part 1 arrays */

let arr = [123, "smth", [1, false, null]];
console.log(arr);
console.log(arr.length);
console.log(arr[2])
arr[3] = "hello";
arr[4] = "okten";
arr[3] = "bimbim";
arr[arr.length] = "new value";
console.log(arr);
let innerArr = arr[2];
console.log(arr[2][1])

/* part 2 objects */
let user = {
    id: 1,
    name: "vasya",
    surname: "pupkin",
    wife: {
        name: "anna",
        age: 21,
    }
}
console.log(user.id);
console.log(user["id"]);
console.log(user.wife.name);
user["status"] = true;
console.log(user);
user.skills = ['js', "html"];
console.log(user.skills[1]);
user.wife.id = 1;
console.log(user.wife);
/* part 3 party */
let friend1 = {name: "vasya", age: 21};
let friend2 = {name: "petya", age: 22, skills: ["html", "js", "css"]};
let friend3 = {name: "olya", age: 22};
let friend4 = {name: "misya", age: 23};
let friend5 = {name: "kisya", age: 24};

let party = [
    {name: "vasya", age: 21},
    {name: "petya", age: 22, skills: ["html", "js", "css"]},
    {name: "olya", age: 22},
    {name: "misya", age: 23},
    {name: "kisya", age: 24},
];
console.log(party);
console.log(party[2].age);
console.log(party[1].skills[1]);

