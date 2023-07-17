// Задание 1 (тайминг 20 минут)
// Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

// const Person = {
//     name: this.name,
//     age: this.age,
//     gender: this.gender,
//     introduce: function() {
//         console.log(`My name ${this.name}, My age ${this.age}, My gender ${this.gender}`);
//     },
//     changeName: function(name) {
//         const newName = name;
//         console.log(newName);
//     }
// }

// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce();
// Person.changeName('Sam');
// Person.changeName('Victor');


// Задание 2 (20минут)
// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
// // Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating

// const Animal = {
//     name: this.name,
//     eat: function() {
//         console.log(`${this.name} is eating`);
//     }
// }

// const Dog = {
//     name: this.name,
//     bark: function() {
//         console.log(`${this.name} is barking`);
//     }
// }

// Animal.name = 'Tom';
// Dog.name = 'Porf';
// Animal.eat();
// Dog.bark();
// Dog.eat = Animal.eat;
// Dog.eat();

// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// const calculator = {
//     arg1: 10,
//     arg2: 20,
//     add() {
//         return this.arg1 + this.arg2;
//     },
//     subtract(num1, num2) {
//         return num1 - num2;
//     },
//     multiply(num1, num2) {
//         return num1 * num2;
//     },
// };

// const numbs = {
//     arg1: 10,
//     arg2: 3,
// };

// console.log(calculator.add.call(numbs));
// console.log(calculator.subtract.apply(null, [5, 3]));

// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce() {
//         console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
//     }
// }
// const person = new Person("John", 25);
// person.introduce();

// Задание 5 (Class 30 минут)
// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account
// 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account
// 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account
// 1234567890

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
}
const account1 = new BankAccount("1234567890", 1000);

account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500);

// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)