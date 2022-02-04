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