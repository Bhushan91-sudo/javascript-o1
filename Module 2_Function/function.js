function myFunction(g1, g2) {
    return g1 / g2;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);


/**basic declaration of a function in javascript. */

function calcAddition(number1, number2) { 
    return number1 + number2; 
}
console.log(calcAddition(6,9));

const square = function (number) {
    return number * number;
};
const x = square(4); // x gets the value 16
console.log(x);


/**describes the usage of the Arrow function. */

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
 
const a2 = a.map(function (s) {
    return s.length;
});
 
console.log("Normal way ", a2); // [8, 6, 7, 9]
 
const a3 = a.map((s) => s.length);
 
console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]


/**we pass the argument to the function. */

function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    return a * b;
}
 
console.log(multiply(69)); // 69


/**
 * Here is a basic example to describe the use of the call() method. 
 */

function product(a, b) {
    return a * b;
}
 
// Calling product() function
let result = product.call(this, 20, 5);
 
console.log(result);

/**
 * describes the use of function calls with arguments.
 */

let employee1 = {
    details: function (designation, experience) {
        return this.name
            + " "
            + this.id
            + designation
            + experience;
    }
}
 
// Objects declaration
let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456",
}
let y = employee.details.call(emp2, " Manager ", "4 years");
console.log(y);


/**
 * the method that is invoked with an object called employee.
 */

let employee = {
    empname: "Rahul",
    department: "sales",
    details: function () {
        return this.empname +
            " works with Department " +
            this.department;
    }
};
console.log(employee.details());