// doWorkPromise is pending for 2s and will fullfiled/rejected after it
const doWorkPromise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        reject('This is Error')
        /*Once any one pending promise is resolved it state cannot be changed,
        in other words it wont matter if we called again any of two func.
        */
        resolve([1,2,3]) 
    },2000)
})

doWorkPromise.then((result) => console.log(result)).catch((error) => console.log(error))

const add = (a,b) => new Promise((resolve,reject) => {

    setTimeout(() => {
        resolve(a + b)
    },2000)
})

add(1,2).then((sum) => {
    console.log(sum)
    add(sum, 5).then((sum2) => {
        console.log(sum2)
    }).catch((e) => console.log(e))
}).catch((e) => {
    console.log(e)
})


// Promise chaining: we return the next promise from the current then callback and chain then. 
add(5,14).then((sum) => {
    console.log(sum)
    return add(sum,-1)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})