/**
 * What are classes?

Classes are a template/blueprint for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes.

In Modern Javascript, classes act as special functions.

 

Class Declaration

To declare a class we can use a special keyword class followed by class name and then pair of curly braces which wraps the body of the class.

class Student{

//Body of class

}
One can also declare a class as:

const Student = class {
 // Body of class
};
Instance of a class

An instance is an object containing data and behavior described by the class.

We can create an instance of a class (initiate the class), by using new keyword.

var student1 = new Student();  //student1 is now an instance of class Student
We can initialise the data that an instance may contain by defining a constructor function in the class body which is called whenever a class instance is created.

class Student{
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

const student1 = new Student("max", 20)
console.log(student1.name)   //prints max
console.log(student1.age)   //prints 20
 

static 

The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class. Instead, they’re called on the class itself. Static methods are often utility functions.

We dont need to create any instance to call or access the static members.

class A{
    static propA = "propA";
    static methodA() {
        console.log("methodA");
    }
}

console.log(A.propA); //prints "propA"
A.methodA();  //prints "methodA"
const a1 = new A(); //creating an instance of class A
console.log(a1.propA); //prints undefined (propA is not a member of instance a1)
a1.methodA(); //gives an error
 

Try the following example in the editor below.

For the given class Employee, define a constructor function so that we can initialise the name, position and skill properties with default input strings while creating instances of the class.

Sample Input

 Max
 SDE1
 C++
 */
 var defaultName = readLine();  
 var defaultPosition = readLine();
 var defaultSkill = readLine();
 
 class Employee{
 // define the constructor function here
 constructor(name = "John Doe", position = "Software Developer", skill = "JavaScript") {
         this.name = name;
         this.position = position;
         this.skill = skill;
     }
 }
 
 // Creating an instance of the Employee class with default values
 const employee1 = new Employee("Max", "SDE1", "C++");
 
 console.log(employee1.name); // Output: Max
 console.log(employee1.position); // Output: SDE1
 console.log(employee1.skill); // Output: C++
 
 