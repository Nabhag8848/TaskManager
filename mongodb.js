const { MongoClient, ObjectId} = require('mongodb')

const id = new ObjectId()
console.log(id)
console.log(id.toString())
console.log(id.getTimestamp())
console.log(id.toHexString().length)
console.log(id.id.length)

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to Connect!')
    }

    const db = client.db(databaseName)
    db.collection('users').insertOne({
        _id:id,
        name:'Narhari',
        age:22
    },(error,result)=>{

        if(error){
            return console.log('Unable to insert user')
        }

        console.log(result.acknowledged)
    })

    db.collection('tasks').insertMany([
        {
            description:'Todays Leetcode Question',
            completed: false
        },
        {
            description:'NPTEL Assignment',
            completed:false
        },
        {
            description:'DBMS Module 3',
            completed: true
        }
    ],(error,result)=>{

        if(error){
            return console.log('Unable to insert Documents!')
        }

        console.log(result.insertedCount)
    })
})

