require('../src/db/mongoose')
const Task = require('../src/models/task')

const id = '62052fe8033ae58b376fd858'

//without using async-await
Task.findByIdAndDelete(id).then(() => {
    return Task.countDocuments({completed:false})
}).then((incompleteTask) => {
    console.log(incompleteTask)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (id) => {

    const task = await Task.findByIdAndDelete(id)
    const incompleteTask = await Task.countDocuments({ completed: false })
    return incompleteTask
}

deleteTaskAndCount(id).then((countOfIncompleteTask) => {
    console.log(countOfIncompleteTask)
}).catch((e) => {
    console.log(e)
})
