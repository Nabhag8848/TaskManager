const bcrypt = require('bcrypt')

const HashingPassword = async () => {

    const providedPassword = '7698470406'
    const hashPassword = await bcrypt.hash(providedPassword, 8)

    console.log(providedPassword)
    console.log(hashPassword)

    const isMatch = await bcrypt.compare('7698470406', hashPassword)
    console.log(isMatch)
}

HashingPassword()