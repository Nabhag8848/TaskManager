const mongoose = require('mongoose')
const validator = require('validator')

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

module.exports = User