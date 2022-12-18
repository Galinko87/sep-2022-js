let container = document.createElement('div');
document.body.append(container);
fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
        for (const user of data){
            console.log(user);
            let divka = document.createElement('div');
            divka.innerText = `${user.name} : ${user.id}`
            container.append(divka);
            let a = document.createElement('a');
            a.innerText = `user info`;
            container.append(a);
            a.href = `userInfo.html?data=${user.id}`;

        }
    })

