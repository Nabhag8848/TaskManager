const { MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to Connect!')
    }

    const db = client.db(databaseName)
    
    db.collection('users').updateOne({_id: new ObjectId("61fa29da919587dc7adb7e9a")},
    {
    $inc:{
        age:-1
    }}).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').updateMany({completed:true},{$set:{
        completed:false
    }}).then((result) =>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})