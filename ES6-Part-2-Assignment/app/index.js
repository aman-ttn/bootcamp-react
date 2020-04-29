/* Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, 
Using arrow function, create an array of the numbers greater than `70`.
*/

var arr=[3,62,234,7,23,74,23,76,92];
let greaterArr=arr.filter((n)=>n>70);
console.log(greaterArr);
/*
Q-2)a. Select all the list items on the page and convert to array.
*/
var items = document.getElementsByTagName("li");
var itemsArray=new Array;
for (var i of items) {
    itemsArray.push(i.innerHTML);
}
console.log(itemsArray);
/*
Q-2)b. Filter for only the elements that contain the word 'flexbox'
 */
let filtered=itemsArray.filter(item=>item.includes("Flexbox"));
console.log(filtered);

/**
 * Q-2)c. Map down to a list of time strings
 */
var timeArray=new Array;
for (i of items) {
    timeArray.push(i.getAttribute('data-time'));
}
console.log(timeArray);

/**
 * Q-2)d. Map to an array of seconds
 */
var secondArray=new Array;
for(i of timeArray){
    var time=i.split(':');
    secondArray.push(time[1]);
}
console.log(secondArray)

/**
 * Q-2)e. Reduce to get total using .filter and .map.
 */
let total = 0;
secondArray.forEach((s)=> {
    total+=parseInt(s);
})
console.log(total);
 /**
  * Q3). Create a markup template using string literal
  */
 const song = {
    name: 'Dying to live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls'
   };
let mTemplate=`<div class="song">
<p>
  ${song.name} — ${song.artist}
  (Featuring ${song.featuring})
</p>
</div>`;
console.log(mTemplate);

/**
 * Q-4). Extract all keys inside address object from user object using destructuring ?
 */

const user = {
    firstName: `Sahil`,
    lastName: `Dua`,
    Address: {
    Line1: `address line 1`,
    Line2: `address line 2`,
    State: `Delhi`,
    Pin: 110085,
    Country: `India`,
    City: `New Delhi`,
    },
    phoneNo: 9999999999
    }
const key=user;
const {Address}=user;
console.log(Object.keys(key)+','+Object.keys(Address));

/**
 * Q-4).Filter unique array members using Set.
 */
function uniqueElements(elements) {
    return Array.from(new Set(elements));
  }
  
  let elements = ["John","Larry","Lee","Harry","John"];
  
  console.log( uniqueElements(elements) );

  /**
   * Q5. Find the possible combinations of a string and store them in a MAP? 
   */
  function getPermutations(string) {

    let results = [];

    if(string.length === 1) {
        results.push(string);
        return results;
    }

    for (let index = 0; index < string.length; index++) {
        const firstChar = string[index];
        let charLeft = string.slice(0, index) + string.slice(index+1);
        let innerPermutations = getPermutations(charLeft);

        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }

    return results;
}
console.log('All possible combinations of string "abc"', getPermutations('abc'));
   /**
    * Q6. Write a program to implement inheritance upto 3 classes.
    *     The Class must  public variables and static functions.
    */

class Student {
    constructor(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }

    static getDetails(studentName, age) {
        console.log(`Name : ${studentName}  Age : ${age}`)
    }

}

class Standard extends Student {

    constructor(name, age, std) {
        super(name, age);
        this.std = std;
    }

    static getDetailWithClass(name, age, std) {
        console.log(`Name : ${name} Age : ${age} Class : ${std}`);
    }
}

class Id extends Standard {

    constructor(name, age, std, id) {
        super(name, age, std);
        this.id = id;
    }

    static getDetailWithId(name, age, std, id) {
        console.log(`Name : ${name} Age : ${age} Class : ${std} Id : ${id}`)
    }
}

let student = new Student('AMAN', 21);
console.log(student)
let standard = new Standard('VINAY', 25, 'Fifth');
console.log(standard);
let classId = new Id('ARADHYA', 40, 'Seventh', 27);
console.log(classId)

//Calling Static Methods 
Student.getDetails('Naman', 21);
Standard.getDetailWithClass('himanshu', 23, 25);
Id.getDetailWithId('Anurag', 23, 'Sixth', 23);

/**
 * Q7. Write a program to implement a class having static functions?
 */

 class TestStatic{
     static staticFunc(){
         console.log("This is a static function.");
     }
 }
 TestStatic.staticFunc();

 /**
  * Q-8).Import a module containing the constants and 
  * method for calculating area of circle, rectangle, cylinder.
  */

 import {areaOfCricle,areaOfRectangle,areaOfCylinder} from './Area';

console.log('Area Of Circle : ',areaOfCricle(10));
console.log('Area Of Rectangle : ',areaOfRectangle(4,5));
console.log('Area Of Cylinder : ',areaOfCylinder(5,3));

/**
 * Q9. Import a module for filtering unique elements in an array.
 */
import {uniqueArray} from './uniqueArray';
console.log(uniqueArray([1,2,3,1,2,5]));
/**
 * export from uniqueArray.js
 */

 /**
  * Q10. Write a program to flatten a nested array to single level using arrow functions.
  */
let unFlattenedArray = [[25, 65, 24], [85, 45, 67], 25, 45, [41, 6, 8]];
let flattenedArray = unFlattenedArray.flat(Infinity);
console.log('Flattened Array : ', flattenedArray);

/**
 * Q11. Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). 
 * (without using array)
 */
 
class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    set addFirst(data) {

        const node = {
            data,
            next: null
        }

        const temp = this.head;

        this.head = node;
        this.head.next = temp;
        this.count++;

        if(this.count === 1) {
            this.tail = this.head;
        }

    }

    set addLast(data) {

        const node = {
            data,
            next: null
        }

        if(this.count === 0) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.count++;

    }

    get length() {
        return this.count;
    }

    get getFirst() {
        return { data: this.head.data };
    }

    get getLast() {
        return { data: this.tail.data };
    }

    removeFirst() {
        if(this.count > 0) {
            this.head = this.head.next;
          }

          this.count--;
    }

}

let list = new SinglyLinkedList();
list.addFirst = 12;
list.addLast = 6;
list.addFirst = 20;

console.log('First data in the list : ', list.getFirst);
console.log('Last data in the list : ', list.getLast);
console.log('Number of nodes in the list : ', list.length);
console.log('SinglyLinkedList : ',list);

/**
 * Q12. Implement Map and Set using Es6
 */
// Implementation of Set 

let set = new Set();

set.add(21);
set.add(52);
set.add(36);
set.add(84);
set.add(69);
console.log(set)
console.log('Size Of Set',set.size);

console.log('Find Value From Set : ', set.has(52));

console.log('Delete Value From Set : ', set.delete(69));
console.log(set);
// Implementation of Map
let map= new Map();

map.set('name',"aman");
map.set('age',21);
map.set('address','Noida');

console.log("Map Iterator: ", map.entries());

console.log('Fetch Value By Key : ', map.get('name'));
console.log('Fetch Value By Key : ', map.get('address'));

/**
 * Q13. Implementation of stack (using linked list)
 */
class Stack {
    constructor() {
      this.list = new SinglyLinkedList();
    }
    
    push(item) {
      this.list.addFirst = item;
    }
    
    pop() {
      if(!this.list.length) {
        return;
      };
      
      let val = this.list.head.data;
      this.list.removeFirst();
      
      return val;
    }
    
    get length() {
      return this.list.length;
    } 

}

let stack = new Stack();
stack.push(10);
stack.push(21);
stack.push(35);

console.log('Size of Stack', stack.length);
console.log('Popped Item:', stack.pop());




