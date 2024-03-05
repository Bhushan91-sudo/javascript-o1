/**
 * Polymorphism in Object-Oriented Programming is an ability to create a property, a function, or an object that has more than one realization.

Polymorphism is an ability to substitute classes that have common functionality in sense of methods and data. In other words, it is an ability of multiple object types to implement the same functionality that can work in a different way but supports a common interface.

Polymorphism involves creating derivative objects from a parent object and then Derivatives objects can override a method from the parent.

Lets have a look at the code given below:

class Person {
  constructor(name) {
    this.name = name
  }

  Hi() {
      console.log("Hi, My name is " + this.name + ".");
  }
}

class Student extends Person{
    constructor(name) {
        super(name);
    }
    Hi() {
        console.log("Hi, My name is " + this.name + ". I am a student.");
    }
}

const p1 = new Person("Alex");
p1.Hi() //prints "Hi, My name is Alex."
const s1 = new Student("Mark");
s1.Hi() //prints "Hi, My name is Mark. I am a student."
In the above code, Class Student is a subclass of Class Person. In the body of Class Student, the function Hi gets overridden with new definition. So, the same function Hi has different definitions for different scenarios.

 

Try the following example in the editor below.

Given class Shape and two derived classes Square and Rectangle , all having area function as the only method. Define the area methods so that when area of a Shape is called, it always returns 0. While area of subclasses Square and Rectangle return area according to the dimensions provided as argument.

Sample

If s = 10, l = 20 and b = 4; then area of shape = 0; area of square = s * s = 100; area of rectangle = l * b = 20 * 4 = 80.

 */
class Shape{
    area() {
        console.log("This is a shape. ");
        return 0;
        // YOUR CODE GOES HERE
        
    }
}

class Square extends Shape{
    constructor(s) {
        super();
        this.s = s;
    }
    area(){
        return this.s * this.s;
        // YOUR CODE GOES HERE
        
    }
}

class Rectangle extends Shape{
    constructor(length, breadth) {
        super();
        this.length = length;
        this.breadth = breadth;
    }

    area() {
       // YOUR CODE GOES HERE 
       return this.length * this.breadth;
    }
}

// Reading input values
const s = parseInt(readLine().trim()); // side of square
const l = parseInt(readLine().trim()); // length of rectangle
const b = parseInt(readLine().trim()); // breadth of rectangle

// Creating instances of Square and Rectangle
const square = new Square(s);
const rectangle = new Rectangle(l, b);

// Calculating and printing areas
console.log("Area of shape:", new Shape().area());
console.log("Area of square:", square.area());
console.log("Area of rectangle:", rectangle.area());