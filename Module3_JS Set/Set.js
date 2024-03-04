/**
 * A set is a collection of items that are unique i.e.
 *  no element can be repeated. Set in ES6 are ordered:
 *  elements of the set can be iterated in the insertion order.
 *  The set can store any type of value whether primitive or objects.
 * The implementation of a JavaScript set.
 */
let set1 =new Set(["sumit","sumit","amit","anil","anish"]);

//it contains 'f', 'o', 'd'
let set2 = new Set("fooooooood");

//it contains [10, 20, 30, 40]
let set3 = new Set([10, 20, 30, 30, 40, 40]);

//it is an empty set
let set4 = new Set();


/**
 * we are adding values into the set by using add() method.
 */
let set5 = new Set();

set1.add(10);
set1.add(20);

//As this method returns
//the set object hence chaining
//of add method can be done.
set5.add(30).add(40).add(50);

console.log(set5);
/**set(5) {10,20,30,40,50} */

/**
 * we are deleting the values into the set by using delete() method.
 */
let set6 = new Set("foooodiiiieee");

//deleting e from the set
//it print true
console.log(set1.delete('e'));

console.log(set1);

//deleting an element which is
//not in the set
//prints false
console.log(set1.delete('g'));
/**Output
 * set(4) {'f', 'o', 'd', 'i'}
 * false
 */

/**
 * we are clearing the values into the set by using clear() method.
 */

let set7 = new set1([10,20,30,40,50]);

console.log(set2);

set2.clear()

console.log(set2);

/**Output
 * set(5) {10, 20, 30, 40, 50}
 * set(0) {size: 0}
 */

/** we are using enteries() method. */
let set8 = new set1();

set8.add(50);
set8.add(30);
set8.add(40);
set8.add(20);
set8.add(10);

//using entries to get iterator
let getEntriesArry = set8.entries();

//each iterator os array of [value, value]
console.log(getEntriesArry.next().value);

console.log(getEntriesArry.next().value);

console.log(getEntriesArry.next().value);

/**Output
 * (2) [50, 50]
 * (2) [30, 30]
 * (2) [40, 40]
 */

/**we are checking whether the value is present in the set
 *  by using has() method. */
let set9 = new set1();

//adding element to the set
set9.add(50);
set9.add(30);

console.log(set9.has(50));

console.log(set9.has(10));
/**Output
 * true
 * false
 */

/**we are printing all the values of the set by using keys() method. */
let set11 = new set1();

// adding element to the set
set11.add(50);
set11.add(30);
set11.add(40);
set11.add("patle");
set11.add("bhushan");

//getting all the values
let getValues = set11.values();

console.log(getvalues);

let getkeys = set11.keys();

console.log(getkeys);

/**Output
 * setIterator {50, 30, 40, 'patle', 'bhushan'}
 * setIterator {50, 30, 40, 'patle', 'bhushan'}
 */

/**
 * we are checking whether the given subset is present in the given set
 *  or not and returning the result according to it.
 */
Set.prototype.subSet = function(otherSet)
{
    // if size of this set is greater
    // than otherSet then it can't be 
    //  a subset
    if(this.size > otherSet.size)
        return false;
    else
    {
        for(let elem of this)
        {
            // if any of the element of 
            // this is not present in the
            // otherset then return false
            if(!otherSet.has(elem))
                return false;
        }
        return true;
    }
}
 
// using the subSet function
 
// Declaring different sets
let setA = new Set([10, 20, 30]);
let setB = new Set([50, 60, 10, 20, 30, 40]);
let setC = new Set([10, 30, 40, 50]);
 
// prints true
console.log(setA.subSet(setB));
 
// prints false
console.log(setA.subSet(setC));
 
// prints true
console.log(setC.subSet(setB));
/**
 * true
 * false
 * true
 */



/**we are finding the insersection of two sets. */
Set.prototype.intersection = function(otherSet)
{
    // creating new set to store intersection
    let intersectionSet = new Set();
 
    // Iterate over the values 
    for(let elem of otherSet)
    {
        // if the other set contains a 
        // similar value as of value[i]
        // then add it to intersectionSet
        if(this.has(elem))
            intersectionSet.add(elem);
    }
 
// return values of intersectionSet
return intersectionSet;                
}
// using intersection function
// Declaring values for set1 and set2
let set12 = new Set([10, 20, 30, 40, 50]);
let set14 = new Set([40, 50, 60, 70, 80]);  
 
// performing union operation
// and storing the resultant set in 
// intersectionset
let intersectionSet = set1.intersection(set2);
 
console.log(intersectionSet.values());

/**Output
 * SetIterator {40, 50}
 */

