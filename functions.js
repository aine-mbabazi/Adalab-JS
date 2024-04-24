function add(num1,num2){
    const sum = num1 + num2
    console.log({console:sum});
    return {'return':sum}
}
console.log(add(2,3));
add(4,5);
// when using functions, it is advisable to return then console later outside the function.

// global and local scope


// function expressions: the function is annonymus, It takes the name of the varaiable
const subtraction =  function (num1,num2){
    console.log(num1-num2);
}
subtraction(20,10)

// Arrow functions is another way of writing functions
const multiply = (num1,num2) => console.log(num1 * num2);
addition(20,11);


// IFEs=the code has to be called immediately, starts with parenthensis
(function(){
    console.log('Hello')
})();

// hoisting: calling a variable before you defining it: checks if the var exists,It does not work with "let"
console.log({greet});

const greet = 'Hello there'
console.log({greet2:greet})