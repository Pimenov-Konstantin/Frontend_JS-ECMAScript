const VacuumCleaner = {
    Model: 'vacuumcleaner',
    counterOfStatus: 0,
    isFull: false,
    isObctacle: false
};

const DancingSeries = {
    Model: 'dancingseries',
    power: 200,
    batterySize: 2100,
    workTime: 50
};

const Blues = {
    Model: 'blues-1',
    power: 250,
    batterySize: 2500,
    workTime: 50
};

Object.setPrototypeOf(DancingSeries, VacuumCleaner);
Object.setPrototypeOf(Blues, DancingSeries);

// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

// рекурсия
const prototypeList = [];

function getPrototypeChain(obj) {
    if (Object.getPrototypeOf(obj) !== null) {
        prototypeList.push(Object.getPrototypeOf(obj));
        getPrototypeChain(Object.getPrototypeOf(obj));
    }
    return prototypeList;
}
console.log(getPrototypeChain(Blues));

// не рекурсия

function getPrototypeChain(obj) {
    let prototypes = [];
    while (obj !== null) {
        prototypes.push(obj);
        obj = Object.getPrototypeOf(obj);
    }
    return prototypes;
}
console.log(getPrototypeChain({ arg1: 1 }));


// Задание 2 (20минут)
// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce = function() {
        console.log('Меня зовут ' + this.name + ' и мне ' + this.age + ' лет.');
    }
}
const person1 = new Person("John", 25);
console.log(person1);
person1.introduce();

// Задание 3 (call, apply 20 минут)
// Напишите конструктор объекта BankAccount, который будет
// представлять банковский счет. Конструктор должен принимать два
// аргумента: accountNumber (строка) и balance (число). Конструктор
// должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму, если на счету есть достаточно средств.
// Если средств недостаточно, выводится сообщение "Недостаточно
// средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета.
// (Пример )
// const account1 = new BankAccount("1234567890", 1000);
// console.log(account1.getBalance()); // Вывод: 1000
// account1.deposit(500);
// console.log(account1.getBalance()); // Вывод: 1500
// account1.withdraw(200);
// console.log(account1.getBalance()); // Вывод: 1300
// account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

class BankAccount {
    accountNumber;
    balance;
    static bankName;

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance + amount}`);
        return this.balance += amount;
    };
    withdraw(amount) {
        if (this.balance > amount) {
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance - amount}`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
        return this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}
const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());
account1.withdraw(2000);

// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} издает звук`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} лает`);
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч`);
    }
}

const animal1 = new Animal('Животное');
animal1.speak();
const dog1 = new Dog('Бобик', 'пес');
dog1.speak();
console.log(dog1.breed);
dog1.fetch();
if (animal1.fetch) {
    animal1.fetch();
} else {
    console.log('no such metod');
}

// (Пример использования)
// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.(