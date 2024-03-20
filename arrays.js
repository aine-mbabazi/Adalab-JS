let fruits = ['Mango','Apple','Banana','Orange'];


let array = new Array(20,30,6,7);

console.log({fruits});
console.log({array});

// replacing elements of an array based on index position since arrays are immutable
fruits[1] = 3;
console.log({fruits});
console.log('lenghth',fruits.length);
// 
// finding the last index in an array




// fruit[fruits.length-1]
let last = fruits[fruits.length-1];
console.log({last});
console.log(fruits.slice(-1));

// Array methods

// adding elements at the end of the array
let addLast = fruits.push('Kiwi');
console.log({fruits});

// add first item in the array
let addFirst = fruits.unshift('Pawpaw');
console.log({fruits});

// removing  last item from the array
let removeLast = fruits.pop();
console.log({fruits});

// remove first item
let removeFirst = fruits.shift();
console.log({fruits});



let items = [20,30,40,50,60]

// using reduce
let add = items.reduce((acc, curr)=> acc + curr)
console.log({add});

let subtract = items.reduce((acc, curr) => acc - curr);
console.log({subtract});

// map to loop through aan array and manipulate each element
let multiply = items.map(item =>item*2);
console.log({multiply});

let addit = items.map(item => item + item);
console.log({addit})

// for each

let addEach = [];
let total = 0;
items.forEach(item => {
    const add = item + 2
    console.log({add})
    addEach.push(add);
    total += items
})
console.log({addEach});
// console.log({total});

let multiplyAll = 1;

items.map(items => {
    multiplyAll *= items;
    return items
})
console.log({multiplyAll})

// Array Destructuring
let [num1, num2, num3,... rest] = items;
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest});
