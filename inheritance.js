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
class Student extends Person{
    constructor(name,age){
        super(name,age);
        this.school = school;
    }
    profession(){
        console.log('I am a student at ${this.school}');
    }
};

const amanda = new Student('Amanda', 19,"AkiraChix");

console.log({amanda});
console.log('nationality', 'amanda.nationality');
amanda.greet();