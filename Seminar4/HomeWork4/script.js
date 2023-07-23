// Необходимо получить список всех пользователей с помощью бесплатного API 
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.
// Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
// При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const contentEl = document.querySelector('.content');

const generateCard = (user) => {

    const cardEl = document.createElement("div");
    cardEl.classList.add("item");
    cardEl.id = user.id;

    const titleEl = document.createElement("p");
    titleEl.textContent = `Имя ${user.name}, Адрес проживания: ${user.address.city}, ${user.address.street}, email: ${user.email}`;

    const infoEl = document.createElement("p");
    infoEl.innerHTML = `Телефон: ${user.phone}`;

    cardEl.append(titleEl);
    cardEl.append(infoEl);
    contentEl.append(cardEl);

    const removeCardEl = document.createElement("p");
    removeCardEl.classList.add("removeBtn");
    removeCardEl.textContent = "Удалить";
    removeCardEl.style.marginTop = "10px";

    cardEl.append(removeCardEl);

    removeCardEl.addEventListener('click', function(e) {
        const parent = removeCardEl.parentElement;
        localStorage.removeItem(parent.id);
        parent.remove();
    });
}

const url = "https://jsonplaceholder.typicode.com/users";

const getData = async(url) => {
    return await fetch(url)
        .then(res => res.json());
}

const data = await getData(url);

data.forEach(user => {
    generateCard(user);
    localStorage.setItem(JSON.stringify(user.id), JSON.stringify(user))
});