const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://localhost:27017/task-manager-api')

const User = mongoose.model('User',{

    name:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){

            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate (value){

            if(value < 0){
                throw new Error("Age cannot be Negative!")
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){

            if(value.toLowerCase().includes('password')){
                throw new Error("Your Password should not include 'password'!!")
            }

            if(!validator.isStrongPassword(value)){
                throw new Error('Your Password is not Strong')
            }
        },
        trim:true
    }
})

// const me = new User({
//     name:'    Nabhag Motivaras      ',
//     email:'NABHAGMOTIVARAS76@GMAIL.COM   ',
//     password:' fs '

// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

const Task = mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const task = new Task({
    description:'     NPTEL Assignment Week1 '
})

task.save().then((completedTask) => console.log(completedTask)).catch((error) => console.log(error))