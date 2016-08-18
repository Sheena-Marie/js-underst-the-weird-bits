// b(); //this calls the function
// console.log(a);

// Trying the call function and the console.log at the top of the page.
// You get 'undefined' for console.log(a);

var a = 'Hello World';

function b() {
  console.log('Called b!');
}

// It's better to have these at the bottom of the page.

b(); //this calls the function
console.log(a);
