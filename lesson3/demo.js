/*let a = confirm("are your older than 18?");
console.log(a);

if (a) {
    document.write("<h1>CORN</h1>");
} else {
    document.write("<h1>POPCORN</h1>");
}*/

/*let age = +prompt("how old are you?");
if (age < 18){
    document.write("<h1>cartoon</h1>");
} else if (age>=18 && age<90){
    document.write("<h1>corn hub</h1>");
} else if (age>=90){
    document.write("<h1>casablanca</h1>");
} else {
    document.write("<h1>whaaaat?</h1>");

}*/

let color = prompt('enter color that you see');
let roadStatus = confirm('road is clear');
if (color === 'green'){
    if (roadStatus){
        document.write('you can go');

    }
} else if (color === 'yellow') {
    document.write('you can go');
} else if (color === 'red'){
    document.write('stop');
}

