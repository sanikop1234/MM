/*let arr = [1, 2, 3, 4]
console.log(arr)

arr.push(5)
console.log(arr)
arr.unshift(0)

arr.pop()
arr.shift()
console.log(arr)

let num = [10, 20, 30, 40, 50]
num.splice(1, 2, 35, 45, 55)
console.log(num)

let num1 = [10, 20, 30, 40, 50]
let num2 = num1.slice(3, 5)
console.log(num2)
console.log(num1)

let fruits = ["apple","banana", "Cherray", "Mango"]
console.log(fruits.indexOf("banana"))
console.log(fruits.includes("cherry"))
console.log(fruits.sort())
console.log(fruits.reverse())

let fruitss = ["banana", "mango", "apple", "cherry"]
fruitss.forEach(friut => console.log(friut))

let number = [2, 3, 4, 5, 6]
number.map(num => console.log(num * 20))
let even = number.filter(num1 => num1 % 2 ===0)
console.log(even)*/

/*class Employee {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    display() {
    console.log(`Employee: ${this.name}, age: ${this.age}, role: ${this.role}, desg: ${this.desg}`);
    }

    designation() {
       console.log("done")
}
}

class Developer extends Employee {
    work() {
        console.log("I do coding")
    }
}

class Tester extends Employee {
    constructor(desg) {
        this.desg = desg
    }


    work() {
        console.log("I do debugging")
    }
}

let d = new Developer("Nithin", 34, "Java")
d.display();
d.designation("Senior soft");
d.work();

let d1 = new Tester("Sumit", 55, "junior")
d1.display();
d1.designation("Junior soft");
d1.work();*/




function order(callprepare, callserve) {
    console.log("1. order Food");
    callprepare();
    callserve();
}

function prepare() {
    console.log("2. Preparation started");
}

function servecustomer() {
    console.log("3. enjoy your food");
}

order(prepare, servecustomer);

function greet(name) {
    console.log(`hello, ${name}!`);
}

function processUser(name, callback) {
    callback(name);
}

processUser("Alice", greet);

const numbers = [1,2,3,4,5,6];

const doubled = numbers.map(num => num * 2);
const filtered = doubled.filter(num => num > 5);

const total = filtered.reduce((sum, num) => sum + num, 0);

console.log(doubled);
console.log(filtered);
console.log(total);