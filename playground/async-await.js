const add = (a,b) => new Promise((resolve,reject) => {

    setTimeout(() => {
        if(a < 0 || b < 0)
            reject('Cannot add Negatives')
        resolve(a + b)
    },2000)
})

doWork = async () => {
    
    const sum = await add(2,54)
    const sum1 = await add(sum, -44)
    return sum1
}

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})