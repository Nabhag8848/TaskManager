const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
    
//     if(req.method === 'GET'){
//         res.send('GET request restricted!!')
//     }else{
//         next()
//     }

// })

//Setting up middleware for site Under maintenance
// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintanence try again soon.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up and listening to Port: ' + port)
})