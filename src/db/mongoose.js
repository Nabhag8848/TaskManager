const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/task-manager-api')

const User = mongoose.model('User',{

    name:{
        type:String
    },
    age:{
        type:Number
    }
})

const me = new User({
    name:'Nabhag',
    age:19
})

me.save().then(() =>{
    console.log(me)
}).catch((error)=>{
    console.log('Error!',error)
})

const Task = mongoose.model('Task',{
    description:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const task = new Task({

    description:'Todays Leetcode Challenge',
    completed:true
})

task.save().then((completedTask) => console.log(completedTask)).catch((error) => console.log(error))