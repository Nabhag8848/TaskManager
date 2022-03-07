const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        unique:true,
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
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function () {

    const user = this
    const token = jwt.sign({ _id: user._id.toString()},'privateOrSecretKey')
    
    user.tokens = user.tokens.concat({token})
    await user.save()
    
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {

    const user = await User.findOne({email})
    
    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login')
    }

    return user
    
}

userSchema.pre('save', async function (next) {

    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User