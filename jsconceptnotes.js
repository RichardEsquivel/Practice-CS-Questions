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