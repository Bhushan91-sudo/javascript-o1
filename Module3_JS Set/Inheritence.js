/**
 * Inheritance

The process by which one class acquires the properties(data members) and functionalities(methods) of another class is called inheritance. The aim of inheritance is to provide the reusability of code so that a class has to write only the unique features and rest of the common properties and functionalities can be extended from the another class.

Class inheritance is a way for one class to extend another class.

So we can create new functionality on top of the existing.

Child Class
 The class that extends the features of another class is known as child class, sub class or derived class.

Parent Class
 The class whose properties and functionalities are used(inherited) by another class is known as parent class, super class or Base class.

A real life example of inheritance can between Vehicle and Car class where each car inherits the properties and functionalities of a vehicle. Hence, Car acts as a subclass of Vehicle. Similarly Truck and Bus are also subclasses of super class Vehicle.

                 image
Now, lets look at the code given below:

class X {
    constructor(a, b) {
        this.a = a;  
        this.b = b;
    }
    printHi() {
        console.log("Hi");
    }
}

class Y extends X { //Y is a subclass of X
    constructor(a, b, c) {
        super(a, b);  //refers to the constructor of parent class X
        this.c = c;   //c is exclusive to Class Y only.
    }
    printHello() {    //printHello is exclusive to class Y only.
        console.log("Hello");
    }
}

const x1 = new X(1, 2);  //x1 contains properties: a, b, printHi
console.log(x1.a);
console.log(x1.b);
console.log(x1.printHi());


const y1 = new Y("a", "b", "c");  //y1 contains properties: a, b, printHi, c, printHello
console.log(y1.a);
console.log(y1.b);
console.log(y1.c);
console.log(y1.printHi());
console.log(y1.printHello());
 

In the above code, class Y “extends” class X, which means class Y is a subclass of superclass X.

All the properties of X (a, b and printHi) also exist in class Y.

Also, class Y contains some extra properties that are specific to it only (c and printHello).

super is a special keyword which refers to the constructor function of the parent class.

 

Try the following example in the editor below.

Given a class A having properties x and y. Declare a class B which inherits class A and has properties z and printIB (prints “IB”(without quotes) to the console when called). Also, the constructor of class B should set the values of x, y and z to the values provided in the user input.

Sample

If input:

 1
 2
 3
is provided in the console then values of properties x, y and z properties should be set to 1, 2 and 3 respectively. 
 */

class A{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }   
}

class B extends A {
    constructor(x, y, z) {
         super(x, y); // Call the constructor of the parent class A with parameters x and y
        this.z = z; // Set the value of property z
    }
    
    printIB() {
        console.log("IB");
    }
}

let x = readLine();
let y = readLine();
let z = readLine();

const b1 = new B(x, y, z);

console.log(b1.x);
console.log(b1.y);
console.log(b1.z);
b1.printIB();


