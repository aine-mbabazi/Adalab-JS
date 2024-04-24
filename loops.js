// For loop
const multiplyByTwo = (num) => {
    let newArr = [];

    for (let i = 0; i < num.length; i++){
        const result = num[i] * 2;
        newArr.push(result)

    }
    return newArr;

};

console.log(multiplyByTwo([2,3,4,5,6,7]));

// for ..of loop
const totalSum = (num) => {
    let sum = 0
    for (let element of num){
        sum += element;
    }
    return sum;
}
console.log(totalSum([1,2,3,4,5,6,7,8]));

// while loop
const teachStudents = (students) => {
while(students.length>=2){
    console.log('Teach Students');
    students.pop()
    // if (students.includes('John')){
    //     continue;
    // }

    if (students.includes('Monica')){
        break
    }
}
}

teachStudents(['Max','Anita','John','Monica'])

const childrenNames = (children) => {
    do{
        console.log('There are many children') 
    }
    while(children.length > 5)
}
childrenNames(['Max','Anita','John','Evans','Monica'])


// switch statement
const checkDayofWeek = (day) => {
    switch(day){
        case 'Monday':
            console.log('Today is Monaday');
            break;
        case 'Tuesday':
            console.log('Today is Tuesday');
            break;
        default:
            console.log('The day is not found')    
            break;

    }
    checkDayofWeek('Wednesday')
}