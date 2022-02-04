const { MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to Connect!')
    }

    const db = client.db(databaseName)
    
    db.collection('users').insertMany([
        {
         name:'Nabhag',
         age:19

        },
        {
          name:'JaySudani',
          age:18
        }]).then((result) => console.log(result)).catch((error) => console.log(error))

    db.collection('users').deleteMany({
        age:19
    }).then((result) => console.log(result)).catch((error) => console.log(error))

    db.collection('tasks').deleteOne({description:"DBMS Module 3"}).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


})