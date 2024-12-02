// console.log('Начало синхронного кода');

// function longOperation() {
//     const start = Date.now();
//     while (Date.now() - start < 3000) {
//     }
//     console.log('Длительная операция завершена');
// }

// longOperation();
// console.log('Конец синхронного кода');

// console.log('Начало асинхронного кода');

// function longOperationAsync() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             console.log('Длительная операция завершена');
//             resolve();
//         }, 3000);
//     });
// }

// longOperationAsync().then(function () {
//     console.log('Асинхронная операция завершена');
// });

// console.log('Конец асинхронного кода');

fetch("https://example.shaklein.dev/weather/")
    .then(function (r) {
        return r.text();
    }).then(function (t) {
        document.querySelector('h1 span').textContent = t;
    });

// fetch("https://example.shaklein.dev/echo.php?param=name&param2=hello")
//     .then(function (r) {
//         return r.text();
//     }).then(function (t) {
//         document.querySelector('div').innerHTML = t;
//     });

fetch("https://example.shaklein.dev/echo.php", {
        method: "POST"
    })
    .then(function (r) {
        return r.text();
    }).then(function (t) {
        document.querySelector('div').innerHTML = t;
    });
    
let form = document.querySelector('form');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    }).then(function (result) {
        return result.text();
    }).then(function (data) {
        form.outerHTML = "<h3>Вы авторизовались!</h3>";
    });
});

// const user = {
//     name: 'Alice',
//     age: 25
// };
// const jsonString = JSON.stringify(user);
// console.log(jsonString);

// const jsonString = '{"name":"Alice","age":25}';
// const user = JSON.parse(jsonString);
// console.log(typeof jsonString);

function getUsers() {
    fetch("https://example.shaklein.dev/users/")
        .then(function (response) {
            return response.json();
        }).then(function (users) {
            let ul = document.querySelector('ul');
            users.forEach(function(user) {
                let li = document.createElement('li');
                li.textContent = user.id + ". " + user.email + " " + user.name + " (" + user.age + ")";
                ul.append(li);
            });
        });
}

