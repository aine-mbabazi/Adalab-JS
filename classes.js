class Person{
    constructor(name,age,hello){
        this.name;
        this.age;
        this.hello = 'Hello World';
    }
    greet(){
        console.log('Hello, my name is ${this.name} and I am ${this.age} years old');

    }
};
const jane = new Person('Jane',30, 'ola');
console.log(jane);
jane.greet();
console.log('prototype',Person.prototype)

Person.prototype.nationality ='Kenyan';
console.log('nationality', jane.nationality)
console.log(jane.hello);