require('../src/db/mongoose')
const User = require('../src/models/user')

const id = '620511dcb6368e75c20196eb'
User.findByIdAndUpdate(id, {age : 19}).then((userWithUpdate) => {
    console.log(userWithUpdate)
    return User.countDocuments({age: 19})
}).then((count)=>{
    console.log(count)
}).catch((e) =>{
    console.log(e)
})

