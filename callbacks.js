function greet(userName, callback){
    console.log(`Hello there ${userName}`);
    callback();
};

function intro(){
    console.log('This is me');
}

greet('Hellen', intro)

// set timeout
setTimeout(intro,2000)

// set interval
const interval  = () => {
    console.log('Execute me');
}
setInterval(interval,3000)

// closures

