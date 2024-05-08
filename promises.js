// const internship = false;
// let ourPromise = new Promise((resolve, reject)=>{
//     If(internship){
//         resolve('I have made it');
//     }
//     else{
//         reject('Pray for me');
//     }
// })
const internship = true;
let ourPromise = new Promise((resolve,reject)=>{
    if(internship){
        resolve(`I made it`)
    }
    else{
        reject(`Pray for me`)
    }
})

ourPromise
.then(()=>{
    console.log("I will be confirmed");
})
.catch(()=>{
    console.log("I will continue applying for jobs")
})
.finally(()=>{
    console.log("I will still be succcesful")
});

console.log({ ourPromise});


// Async
const successWish = async ()=>{
    try{
        await ourPromise
        console.log('My successful wish');
    }catch{
        console.log('I will continue applying for jobs and I will be successful');
    }
}
successWish();