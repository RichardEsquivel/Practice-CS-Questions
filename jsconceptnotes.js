## JavaScript Fundamentals:

Scope and Closure

- Global scope, available anywhere such as the window element in JS.
- Block Level Scope is within if statements and for loops, a variable declare with let or const is only available within an if statement or for loop explicitly.
- Function level scope can reach outside and grab variables outside of our scope but we cannot reach into a function to get a variable from outside it.

### Hoisting

https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

JavaScript only hoists declarations not initializations. It's not actually hoisted to the top of the code as advised but instead variable and function declarations are put into memory during the compile phase.

```jsx
//A hoisted declaration would look like this:
console.log(num);
var num = 6;
//This works with var and function keyword not let or const

//unhoisted like this
console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var num; // declaration
num = 6; // initialization

//This is just an initialization without a declartion of  and also does not compile as it does not advise what the type of the value you initialize is. 

console.log(num); // throws ReferenceError exception 
num = 6; // initialization

//in ES6 you can have block scope variables and constants without hoisting like this:
//You don't need declarations first like "var i, x, y"
for (let i = 0; i < a.length; i++) {
    let x = a[i];
    …
}
for (let i = 0; i < b.length; i++) {
    let y = b[i];
    …
}

let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2; };
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;
```

### Functions and Callbacks:

Functions can be passed as arguments within JavaScript. Also know as callback functions. 

Higher order callback functions take functions as arguments and executes a function when called with a function as the argument. 

```jsx
  function sayHello(name) {
    console.log(`Hello, ${name}`);
  }

function callSayHelloWithLars(callback) {
    const innerName = 'Lars';
    callback(innerName);
  }

callSayHelloWithLars(sayHello);        
//invocation of SayHelloWithLars with sayHello as it's argument

// Would console.log 'Hello, Lars"

```

ForEach could be used and is passed a callback to act upon like console.log()

const items = ['feather', 'coupon', 'cup', 'drill'];
items.forEach(item => console.log(item) );

## .map, .filter, .reduce (callbacks)

Or ways to utilize inbuilt functions with their own syntax.

**A parameter is a variable in a method definition, when the method is CALLED the arguments are the actual data you pass into the method's parameters.**

parameter:   throwInTrash(item1, item2)  { item1 and item 2 are the parameters

...some action

}

throwInTrash(applecore, tissue)   applecore and tissue are the ARGUMENTS

```jsx
const data = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

const mappedCityStates = data.map((state) => {
  return {'city': state.city, 'state': state.state};
});
```

Can use arrow functions when single argument is passed into a function and there's only one return statement.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a6205a1-9a9c-4ba1-beb9-a339e5c24827/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a6205a1-9a9c-4ba1-beb9-a339e5c24827/Untitled.png)

### .filter

iterative version of a filtering function 

```jsx
const largeStates = [];
for(let i = 0; i < data.length; i++) {
  if(data[i].population >= 650000) {
    largeStates.push(data[i]);
  }
}

//instead can use this
//Filter takes exactly the same arguments as .map, namely: value, index, and array.

const filterLargeStates = data.filter((state) => {
  return state.population >= 650000;
});
```

## .this and arrow functions ⇒

[https://wesbos.com/arrow-function-no-no](https://wesbos.com/arrow-function-no-no)

This when used in an arrow function is bound to the enclosing scope.

```jsx
<style>
button {font-size: 100px; }
.on {background: #ffc600;}
</style>

<button id="pushy">Push me</button>

const button = document.querySelector('#pushy');
button.addEventListener('click', () => {
    console.log(this); // Window!    this is bound to the enclosing scope in this case the window
    this.classList.toggle('on');  //it is not bound to the parent element that it is called in instead it is bound to the enclosing scope of that parent element
});

const button = document.querySelector('#pushy');
button.addEventListener('click', function() {  //this with an anonymous function will bind this to the button object and toggle it on to yellow
    console.log(this);
    this.classList.toggle('on');
});

//arrow function causes this to not be pointed to anything other than the larger enclosing scope

const person = {
    points: 23,
    score: () => {        //this will try and add points to the window object
        this.points++;
    }
}

const person = {
    points: 23,
    score: function()  {     //this works and adds points correctly 
        this.points++;
    }
}

class Car {
    constructor(make, colour) {
        this.make = make;
        this.colour = colour;
    }
}

#PROTOTYPE METHODS, with class constructor

class Car {
    constructor(make, colour) {
        this.make = make;
        this.colour = colour;
    }
}

const beemer = new Car('BMW', 'blue');
const subie = new Car('Subaru', 'white');

Car.prototype.summarize = () => {       //this prototype method calling on the class car constructor will not print this.make and this.color because this is not bound to the Car class but instead the window
    return `This car is a ${this.make} in the colour ${this.colour}`;  
};

Car.prototype.summarize = function() {   //this works and prints out due to binding to Car and prototype allows us to add methods onto Classes already defined(sort of like a parent child class in Python     
    return `This car is a ${this.make} in the colour ${this.colour}`;  
};

const orderChildren = function() {   //arguments would also not work with an arrow function
    const children = Array.from(arguments);
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    })
    console.log(arguments);
}

//console.table(win) will show a little table of the object (defined as a variable const for example
//How to implicitly return an object literal with an arrow function wrap it in parantheses
//
const win = winners.map((winner, i) => ({name: winner, race: race, place: i + 1}));

//filter can take
const old = ages.filter(age => if(age >= 60))
//equivalent statement
const old = ages.filter(age => age >= 60);
//That looks like a bit funky because you got an arrow and a greater than, but what that will do is, if the age is greater or equal to 60, it will return true and thus be put into the old array.

//That age is going to be put back into this new old array, and we can use console.log(old) to return our filtered array.
```

### .Reduce

```
let statePopulations = 0;
for(let i = 0; i < data.length; i++) {
  statePopulations += data[i].population;
}

equivalent
const reduceStatePopulations = data.reduce((total, state) => {
  return total += state.population;
}, 0);
```
## How React works under the hood:

React is a JavaScript library and not strictly a framework like .NET or Angular or Ruby On Rails. You import React like any JavaScript library and you use its methods like React.useState and ReactDom. React is an entire network of tools working together like

- React, npm, node, webpack, jsx, babel (postcss and eslint)

## JSX

https://reactjs.org/docs/introducing-jsx.html

Allows you to put HTML in your JavaScript code and allows you to put JavaScript code in your HTML.

Example below we declare a variable  called name and then can use it in jsx by wrapping it in { } braces

JSX is an expression to so you can use it inside of regular JavaScript functions. So you can use it inside of if statements and for loops(assign it to variables, accept as arguments and return it from functions)

Quotes used to specify string literals and curly braces for a javascript expression within an attribute. *JSX uses camel case naming conventions. 

- JSX transpiles to regular JavaScript code
- JSX allows you to put HTML in your JavaScript and allows you to put JavaScript code in your HTML. Both as expressions.

```jsx
import React, {useState, useEffect, useContext} from 'react';

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Watch out for ASI or automatic semicolon insertion when separating cohesive logical units and breaking them up with line breaks. 

[http://www.ecma-international.org/ecma-262/7.0/index.html#sec-rules-of-automatic-semicolon-insertion](http://www.ecma-international.org/ecma-262/7.0/index.html#sec-rules-of-automatic-semicolon-insertion)

Separations of concerns within React allow us to increase freedom for modules to do singular functions and maintenance of code only requires updating and reworking of that particular module. Also makes testing easier for each unit.

## Types in JavaScript:

Design ideas from Java and C, not concerned with input and output, relies on being hosted for input and output to be supplied.

Number

- Number
- String
- Boolean
- Function
- Object
- Symbol(new in ES2015)
- undefined and Null(changes were brought to ES2020)
- Array(special kind of object)

Must be accessed with index and not guaranteed to be dense, data can be stored at non-contiguous positions. May move to typed arrays

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

- Date date is like the Unit Epoch Time but in milliseconds and
- RegExp

```
/ab+c/i
new RegExp(/ab+c/, 'i') // literal notation
new RegExp('ab+c', 'i') // constructor use when in a loop and it will change
```

## Security in JSX and in general Cross site scripting prevention:

https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#xss-prevention-rules

[https://en.wikipedia.org/wiki/Cross-site_scripting#:~:text=Cross-site scripting (XSS),pages viewed by other users](https://en.wikipedia.org/wiki/Cross-site_scripting#:~:text=Cross%2Dsite%20scripting%20(XSS),pages%20viewed%20by%20other%20users).

*Security it is safer to embed user input in JSX, by default React Dom escapes an values embedded in JS before rendering them.  So if someone attempts to inject JavaScript within an HTML field. Everything is converted to a string before being rendered.

If you insist on putting untrusted data into nested contexts, please do a lot of cross-browser testing and let us know what you find out.

Don't do this or accept input as this:

Directly in a script:

`<script>...NEVER PUT UNTRUSTED DATA HERE...</script>`

Inside an HTML comment:

`<!--...NEVER PUT UNTRUSTED DATA HERE...-->`

In an attribute name:

`<div ...NEVER PUT UNTRUSTED DATA HERE...=test />`

In a tag name:

`<NEVER PUT UNTRUSTED DATA HERE... href="/test" />`

Directly in CSS:

`<style>
...NEVER PUT UNTRUSTED DATA HERE...
</style>`

Most importantly, never accept actual JavaScript code from an untrusted source and then run it. For example, a parameter named "callback" that contains a JavaScript code snippet. No amount of escaping can fix that.

## JSX Represents Objects

Babel compiles JSX down to React.createElement() calls. These two are identical expressions:

```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

//React creates these elements and uses them to to construct the DOM 
//and keep it up to date

// Note: this structure is simplified but React.createElement basically creates this
//and uses these to construct the DOM, known as React elements.
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

## Functions and Classes

The function keyword can be used to define a function inside of an expression

```jsx
//This is recommended 
const getRectArea = function(width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// expected output: 12

//This functions only executes in the global context but has similiar security concerns to eval.
const sum= new Function('a', 'b', 'return a +b');
new Function([arg1 [, arg2 [, ...argN]] ,] functionBody)

//The eval() function evaluates JavaScript code represented as a string.
//This allows you to execute a function from a passed in string, it is far too easy for bad actors to run any bit of arbitrary code when you use eval(). It is a function property of the global object 

```

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)

### ******DO NOT USE eval()*****

## Property Accessors

Access an object's properties using dot notation or bracket notation.

```jsx
const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(person2['lastname']);
// expected output: "Doe"
```

function declaration is 

```jsx
function calcRectArea(width, height) {
  return width * height;
}
```

function expression is using an assignment to a variable to call a function

```jsx
const getRectArea = function(width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// expected output: 12

function [name]([param1[, param2[, ..., paramN]]]) {
   statements
}
/*name Optional
The function name. Can be omitted, in which case the function is anonymous. The name is only local to the function body.
paramN Optional
The name of an argument to be passed to the function.
statements Optional
The statements which comprise the body of the function.
*/
```

ES6 Class and function declarations are equivalent

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Classes and Functions in JavaScript

Classes in JS are syntactical sugar over JS existing prototype based inheritance system. 

### Classes are special functions

- Function Expressions- not hoisted
- Function Declarations- Are hoisted
- Class Expressions- Not hoisted
- Class Declarations- Not hoisted

Class expressions can be named or unnamed, name given is local to the class body, it can be retrieved through the class's name property.

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

[https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function)

```jsx
(function () {
    statements
})();

//the first part is the anyonymous function with it's scope taken out of the gglobal scape with the grouping operator and this prevents being able to access variables within the IIFE and not polluting the global scope namespace. Second part is the () which will immediately invoke the anonymous function by the JavaSript engine.
//Assigning the variable to the IIFE stores the return value not the function definition.

//Function expressions can be anonymously named, if you want to be able to access the function within the body of the expression you must give it a name.
let math = {
  'factit': function factorial(n) {
    console.log(n)
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
};

math.factit(3) //3;2;1;

//SYNCHRONOUS CALLBACKS

function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

## Blocking Code

[https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts)

We don't want code to wait on the render of a previous bit of code before they populate as that creates an unresponsive page. 

```jsx
function expensiveOperation() {
  for(let i = 0; i < 1000000; i++) {
    ctx.fillStyle = 'rgba(0,0,255, 0.2)';
    ctx.beginPath();
    ctx.arc(random(0, canvas.width), random(0, canvas.height), 10, degToRad(0), degToRad(360), false);
    ctx.fill()
  }
}

fillBtn.addEventListener('click', expensiveOperation);

alertBtn.addEventListener('click', () =>
  alert('You clicked me!')
);

//IF we start expensive operation with the click and then try to click the button for 'you clicked me!' JS being single threaded in design will wait on the previous operation before outputting the second output.
```

Look into multi-threaded operations down the line. 

Workers allow you to offload calculation of an expensive operation to a separate thread.

[https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

Shared Workers, parent is EventTarget. Workers run in another global context, DedicatedWorkersGlobalScope

ServiceWorkers-proxy servers that sit between web applications.

ChromeWorkers Firefox, Audio Workers.

Web Workers are useful but they can' t access the DOM so they can't update UI just do the calculation of a number for it for example.  Still basically synchronous though. 

```jsx
Main thread: Task A --> Task B --> |Task D|
Worker thread: Task C -----------> |      |

//if Task B or Task D relies on the result of Task C being delivered but it is no there yet we will have an issue. 

//Another approach is with promises
Main thread: Task A                   Task B
    Promise:      |__async operation__|

//Promise is a proxy for a value that is not necessarilyt known when the promise is created and has an ability for you to associate handlers with the failure or success of an asynchronous action
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

const myPromise = 
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA,handleRejectedA)
  .then(handleFulfilledB,handleRejectedB)
  .then(handleFulfilledC,handleRejectedC);

// or, perhaps better ...

const myPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);
```

## Outside of Algorithm and Data Structure Optimizations

https://medium.com/@JohanneA/tricks-to-writing-efficient-programs-692228a4defd

# **Fundamental techniques**

- **Code Simplification:** Most fast programs are simple, so keep it simple . Sources of harmful complexity includes: A lack of understanding the task and premature optimization.
- **Problem Simplification:** To increase the efficiency of a program, simplify the problem it solves. Why store all values when you only need a few of them?
- **Relentless suspicion:** Question the necessity of each instruction in a time critical piece of code and each field in a space critical data structure.
- **Early binding:** Move work forward in time. So, do work now just once in hope of avoiding doing it many times over later on. This means storing pre-computed results, initializing variables as soon as you can and generally just moving code from places where it is executed many times to places where it is executed just once, if possible.
1. Move computations outside of loops that could have been done outside:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6d40651e-aaba-4838-aac5-e803dd436410/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6d40651e-aaba-4838-aac5-e803dd436410/Untitled.png)

2. Loop fusion: If two loops close to one another operate on the same set of elements, combine their operational parts.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cca1dee5-48b8-494c-b310-aca682709e00/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cca1dee5-48b8-494c-b310-aca682709e00/Untitled.png)

**De Morgan's Laws(often able to be used.**

---

*Not* (**A** *and* **B**) is the same as *Not* **A** *or* *Not* **B**.

*Not* (**A** *or* **B**) is the same as *Not* **A** *and* *Not* **B**.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d42f8fd7-a5b9-42ff-964c-ffb1e7bd4a89/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d42f8fd7-a5b9-42ff-964c-ffb1e7bd4a89/Untitled.png)

3. Exploit algebraic identities if a logical express can be reduced to an algebraically equivalent expression that is less expensive use that! Especially true for math functions such as square root or logarithms. 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cebc5491-d0b9-4501-8039-2db9a0d542de/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cebc5491-d0b9-4501-8039-2db9a0d542de/Untitled.png)

4. Reordering tests: Test should be arranged so the most inexpensive test and often successful tests precede expensive and rarely successful tests. Used mostly in if-else statements.

5. Remove Boolean variables by using an if-else statement for the two values of the Boolean value(true/false).

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7343641d-b499-4247-9aa1-c800e10fe1c0/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7343641d-b499-4247-9aa1-c800e10fe1c0/Untitled.png)

Overall Approach:

Use statistics and analysis tools to determine where the hot spots are in your program. Focus your work on these hot spots.When the hot spots of a system have been isolated, these are the steps to take:

- Identify the code to be changed.
- Choose a rule to apply to it. Find out which of the rules best apply. Measure the effect of the modification. It might not have made a significant change, or it might potentially have made it worse.
- Document the resulting program. Include a description of the clean code and of the modification made.

If two many speed ups reduce readability and ability to understand focus instead of future use and being able to hand off code. Also make sure to document changes for those who may not understand a particular implementation the benefits it brings. Look up the work of those who have already solved this problem! Don't reinvent the wheel if needed.

Note:Netscape and IE had different specifications for omitabilty with tags. Must give a spec document type defintion(DTD) a spec. SGML theologians. Overlapping hierarchies. Tim Bray and John Bozak lead committee of exports for HTML itself a DTD. SGML, XML specification subset of SGML, add end tags. This work was XML, just want to check that tags match to form a tree structure.


# Classes in JS

Classes in JavaScript are just special functions.

```jsx
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
} *
const newRect = new Rectangle(400, 800);
console.log(newRect);

Logs out: 
Rectangle { height: 400, width: 800 }
//constructor is foundation of every class, Remember: classes will return us objects.

class Animal { 
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

//Notice that speak() is a method with some special syntax in this class. This method will not be a method on the object, but it will live on the object’s prototype instead, which is nifty when you’re worried about memory and such.

//Sub Class from animal
class Dog extends Animal {
  constructor(name) {
    super(name);   //copies binding of this or the definition of that property
  }

  speak() {
    console.log(this.name + ' barks.');   //this will call the parent class Animal
  }
}

const doggy = new Dog('Grizzly');

doggy.speak();

---> 'Grizzly barks.'
//extends indicates that this class is a subclass of the folowing class, 
//'class Cat Extends Animal', super allows us to copy the property definition and apply it to the subclass attributes that will be passed in. 

```

- The `object` our class returns will have attributes assigned to it from the `constructor()` function.
- All methods attached to the class body will be stored on the `Objects` prototype in a special way. There is a bit more magic here than just `Object.create(Foo.prototype);` and `Class.call(this, attrs);` But now that we know this, we can accept that the class keyword does this gloriously for us.
- The ‘extends’ keyword is used to `extend` a parent object. A clue to finding out if a class is a `sub-class` is to look for extends.
- Finally, if you’re going to use `extend`, `super()` needs to be called from within the constructor function. This is to pass any new attributes back up to the constructor of the parent object.

 super() tells a parent’s constructor to be concerned with the child’s attributes and abstracts away the Object.create(this, Class)

This can now be written:

```jsx
function Child(childAttrs) {
  Person.call(this, childAttrs); // this is the special sauce
  this.isChild = childAttrs.isChild; // this will be a special attribute to Child
}

Child.prototype.checkIfChild = function() {
  if(this.isChild) {
    console.log(`${this.speak} and I am a child object`);
  }
};

//As this!

```

### break and continue

break allows us to break out of the loop, can also break out of a switch() statement

```jsx
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

/*would print out
The number is 0
The number is 1
The number is 2
So it would stop the loop at 3 and the code after would not continue*/

// A continue will skip the current step in the loop and continue on with the rest of the loop

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

//Would print A loop with a continue statement. A loop which will skip the step where i = 3.

The number is 0
The number is 1
The number is 2
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9

```

This in JS is a pronoun to use in place of an object. It gives you the object's context, it has nothing to do with where the function is written but where and when the function is called. 

### 4 Principles

- Global Binding
- Implicit binding- functions in an object are a method, object left of dot gets this context.
- New binding, this is referring to object created. whenever constructor function is used this refers to the specific instance of that object created.
- Explicit binding- .bind .call .apply overriding what the this keyword applies to. Whenever JS bind call or apply method is used this is explicitly defined.  console.log(this) will point to the global object the totality of JS. Global or window binding.

### Constructor function and Prototypes

with this.name, this. etc. Instantiated by const or let variable = new Object({properties})

Object Oriented Programming: Objects over functions, Data over logic, a logical procedure that takes in input data, processes it and returns it as output. Java and C#, pseudo-classical inheritance and. 

Constructors are also known as Object creator functions, their purpose to receive an object and produce a new object. A constructor function in JS is indicated by convention with a capitalized function. Constructor functions behave like any other function until we use the new keyword. Instantiate call upon the class of the constructor and using that constructor to produce an object. this becomes the object which will be returned by new. 

### The Object Prototype

- The mechanism by which all objects can inherit properties from one another.
- Allows one to deliberately modify an object's properties.
- Helps to avoid memory problems
- Allows one to extend an object's properties to another object
- Can be very dangerous, you can overwrite an entire object's methods.
- All objects have a prototype in JS assigned to it.

Prototypical Inheritance

```jsx
function Child(childAttributes) {
  Person.call(this, childAttributes); // binding this to Person
  this.isChild = childAttributes.isChild; // this will be a special attribute to Child
}
Child.prototype = Object.create(Person.prototype); //this will create a proptype on child that has the same properties as defined in Person\

const pebbles = new Child({
  age: 3,
  name: 'Pebbles',
  homeTown: 'Bedrock',
});
pebbles.speak()

//prints out
Hello, my name is Pebbles

//this will be object that constructor function creates
```

Weirdness of inheritance: .call allows us to pass(this, attributes) and build a new object with properties defined by the parent function. 

We need to say that Kiwi.prototype is the same as the parent's prototype = Object.create(Fruit.prototype) in order to access the parent's prototype methods. 

Classes in JS are not the same in JS in how they work. Classes are constructors and prototypes under the hood in JS.  Classes in JS are special functions. Class declarations and class expressions.

Classes are built with constructors. constructor gets passed in properties that will be used to build object and the this will refer to that object
