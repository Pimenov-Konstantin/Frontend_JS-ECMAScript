// Промисы Promise

const myPromise = new Promise((resolve, reject) => {
    // выполняются асинхронные действия
});

console.log(myPromise);

myPromise
    .then((value) => {
        // действие в случе выполнения промиса
    });

// .catch((error) => {
//     // действие в случае отклонения промиса
// });

// Реальный пример
//  https://jsonplaceholder.typicode.com/

const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error.message));

// Упрощение - заготовка
const getData = (url) =>
    new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .catch((error) => reject(error));
    });

// работа с заготовкой

getData('https://jsonplaceholder.typicode.com/posts')
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));

// миграция на async await (так чаще пишут)

const getData2 = async(url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

try {
    const data = await getData2('https://jsonplaceholder.typicode.com/users');
    console.log(data);
} catch (error) {
    console.log(error.message);
}