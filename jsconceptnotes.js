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