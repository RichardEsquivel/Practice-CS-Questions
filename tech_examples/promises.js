chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

//Written with PROMISES INSTEAD
chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) {
  return collectOrder(order);
})
.then(function(pizza) {
  eatPizza(pizza);
})
.catch(failureCallback);

//With arrow functions implicit return and only one argument needed
chooseToppings()
.then(toppings =>
  placeOrder(toppings)
)
.then(order =>
  collectOrder(order)
)
.then(pizza =>
  eatPizza(pizza)
)
.catch(failureCallback);

//Even more simplified.
chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);

//This works because with arrow functions () => x is valid shorthand 
//for () => { return x; }.

//Could even do this since the functions pass their arguments directly
chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza)
.catch(failureCallback);

//Promise.all() static method Takes an array of promises as an input parameter 
//and returns a new promise object that will fulfill if and only if when all promises
//in the array fulfill

Promise.all([a, b, c]).then(values => {
  ...
});
//Could be usefull like waiting for all the elements of a UI in order to populate 
//a component

//.finally instead of this
myPromise
.then(response => {
  doSomething(response);
  runFinalCode();
})
.catch(e => {
  returnError(e);
  runFinalCode();
});

//you can simplify and run this
myPromise
.then(response => {
  doSomething(response);
})
.catch(e => {
  returnError(e);
})
.finally(() => {
  runFinalCode();
});
//Finally runs as the final argument after the then or the .catch