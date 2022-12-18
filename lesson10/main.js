let url = new URL(location.href);
let id = url.searchParams.get('data');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(value => {
        for (const user in value) {
            userDiv = document.createElement('div');
            if (typeof value[user] !== 'object') {
                userDiv.innerText = `${user} ${value[user]}`;
            } else{
                userDiv.innerText = `${user}`
                for (const userElement in value[user]) {
                    let userInnerDiv = document.createElement('div');
                    if (typeof value[user][userElement] !== 'object'){
                        userInnerDiv.innerText = `${userElement} -- ${value[user][userElement]}`
                    }
                    userDiv.append(userInnerDiv);
                }

            }
            document.body.append(userDiv)

        }
    })