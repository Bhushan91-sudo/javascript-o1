/**
 * This method is concise and widely preferred for its simplicity.
 */
let name = [];
console.log(names);

//creating an array and Initializing with Values
let courses = ["HTML","CSS","JAVASCRIPT","REACT"];

console.log(courses);

/**
 * The “Array Constructor” refers to a method of creating arrays by invoking
 *  the Array constructor function. This approach allows for dynamic
 *  initialization and can be used to create arrays with a specified
 *  length or elements.
 */
//Declaration of an emty array
//using Array constructor 
let names = new Array();
console.log(names);

//creating and Initializing an array with values
let course = new Array("HTML","CSS","Javascript","React");
console.log(course);

//Initializing Array while declaring
let arr = new Array(3);
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;
console.log(arr);
/**Output
 * []
 * ['HTML', 'CSS', 'Javascript', 'React']
 * [10, 20, 30, 40]
 */

/**
 * Accessing Elements of an Array
 * Any element in the array can be accessed using the index number.
 * The index in the arrays starts with 0.
 */
let skill = ["JSP", "Servlet", "Swing", "Java"]

//Accessing Array Elements
console.log(skill[0]);
console.log(skill[1]);
console.log(skill[2]);
console.log(skill[3]);
/**
 * Output
 * JSP
 * Servlet
 * Swing
 * Java
 */

/**
 * The array indexing starts from 0,
 * so we can access first element of array using the index number.
 */
let unit = ["Table", "form", "Formating", "Bold"];

//Accesing First Array Elements
let firstItem = unit[0];

console.log("first Item:", firstItem);
/**
 * Output
 * First Item: HTML
 */

/**
 * We can 
 * access the last array element using [array.length – 1] index number.
 */
let skills = ["web", "App", "Desk", "Mobile"];

//Accessing Last Array Elements
let lastItem = skills[skills.length - 1];

console.log("First Item: ", lastItem);

/**Output
 * First Item: Mobile
 */

/**
 * Modifying the Array Elements.
 * Elements in an array can be modified
 * by assigning a new value to their corresponding index.
 */
let Dev = ["HTML", "CSS", "Javascript", "React"];
console.log(Dev);

Dev[1] = "Bootstrap";
console.log(Dev);
/**Output
 * ['HTML', 'CSS', 'Javascript', 'React']
 * ['HTML', 'Bootstrap', 'Javascript', 'React']
 */

/**
 * Elements can be added to the array using methods like push()
 *  and unshift().
 */
let web = ["HTML", "CSS", "Javascript", "React"];

//Add Element to the end of array
web.push("Node.js");

//Add Elements to the beginning
web.unshift("web Devlopment");

console.log(web);
/**Output
 * ['web Development', 'HTML', 'CSS', 'Javasctipt','React', 'Node.js']
 */

/**
 * The JavaScript typeof operator is used ot check the type of an array.
 *  It returns “object” for arrays.
 */
let webs = ["HTML", "CSS", "Javascript", "React"];

//check type of array
console.log(typeof webs);

/**Output
 * object
 */