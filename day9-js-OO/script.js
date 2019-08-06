/*
function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(sum(4)(6)(1));

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getAge = () => this.age;
}

let myObjArr = [];

for(let i = 0; i < 10; i++) {
    myObjArr.push(new Person("Horea", 20+i)); 
}
console.log(myObjArr);
let computeAge = function(myObjArr) {
    let generalAge = 0;
    for (let index = 0; index < myObjArr.length; index++) {
        generalAge = generalAge + myObjArr[index].getAge();
    }
    return generalAge/myObjArr.length;
}

console.log(computeAge(myObjArr));


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
let arrayP = [];
function popArr(array, nmbr) {
    for(let i = 0; i < nmbr; i++) {
        array.push(new Person("Name", 10+i));
    }
    return array;
} 

popArr(arrayP, 2000);

const computeAge = function(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element.getAge();
    });
    return sum/array.length;
}

console.log(computeAge(arrayP));



var person1 = {
    firstName: "Horea",
    lastName: "Crisan",
    age: 20,
    showName: function() {
        return this.firstName;
    }
}

var person2 = {
    firstName: "Bob",
    lastName: "John",
    age: 20,
    showName: function() {
        return this;
    }
}

var person3 = {
    firstName: "Michael",
    lastName: "Jackson",
    age: 20
}




console.log(person1.showName());
console.log(person2.showName());

console.log(this);
*/

var calculator = {

    a: null, 
    b: null,

    read: function() {
        this.a = parseInt(prompt("First number: ", "42"));
        this.b = parseInt(prompt("First number: ", "42"));
    },
    

    sum: function(a, b) {
        alert("Sum is: " + ((this.a) + (this.b)));
    },

    mul: function(a, b) {
        alert("Multiplication is: " + ((this.a) * (this.b)));
    }

}

calculator.read();
calculator.sum();
calculator.mul();