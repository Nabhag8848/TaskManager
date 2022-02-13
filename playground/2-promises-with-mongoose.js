require('../src/db/mongoose')
const Task = require('../src/models/task')

const id = '6200af36006db68df1bb068e'
Task.findByIdAndDelete(id).then(() => {
    return Task.countDocuments({completed:false})
}).then((incompleteTask) => {
    console.log(incompleteTask)
}).catch((e) => {
    console.log(e)
})