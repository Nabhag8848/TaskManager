const jwt = require('jsonwebtoken')

const myFunction = async () => {

    const token = jwt.sign({_id: 'Eminem#123'}, 'privateOrSecretKey', { expiresIn: '4 weeks'})
    console.log(token)

    const data = jwt.verify(token, 'privateOrSecretKey')
    console.log(data)
    
}

myFunction()