// Добавление в localStorage (приложение в f12)

localStorage.setItem('name', 'Alex');
localStorage.setItem('pass', '1234');
localStorage.setItem('login', true);

// Удаление из localStorage
localStorage.removeItem('pass');

//
console.log(localStorage.key(0));

const data = localStorage.getItem('login');
console.log(data);

// localStorage.user = { name: 'bob' };
// console.log(localStorage.user);

localStorage.user = JSON.stringify({ name: false });
const user = JSON.parse(localStorage.user);
console.log(user);

// localStorage.clear;

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(key);
}