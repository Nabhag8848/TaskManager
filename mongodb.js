const { MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewURLParser: true }, (error, client) => {

    if(error){
        return console.log('Unable to Connect!')
    }

    const db = client.db(databaseName)

    //fetches first document which matches the filter
    db.collection('users').findOne({age:19},(error,user)=>{

        if(error){
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    //fetches document as per to filter,Grabing by id
    db.collection('users').findOne({_id: new ObjectId("61fa29da919587dc7adb7e9a"),age:19},(error,user)=>{

        if(error){
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    //fetches all the users having age 19
    db.collection('users').find({age:19}).toArray((error,users)=>{

        if(error){
            return console.log('Unable to fetch')
        }

        console.log(users)

    })

    //returns number of documents matching filter
    db.collection('users').find({age:19}).count((error,users)=>{

        if(error){
            return console.log('Unable to count')
        }

        console.log(users)

    })

    //fetches all tasks which aren't complete
    db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{

        if(error){
            return console.log('Unable to fetch')
        }

        console.log(tasks)

    })

    //fetching first task which matches the filter
    db.collection('tasks').findOne({completed:true},(error,task)=>{

        if(error){
            return console.log('Unable to fetch')
        }

        console.log(task)
    })    //fetches first document which matches the filter
    db.collection('users').findOne({age:19},(error,user)=>{

        if(error){
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    //fetches document as per to filter,Grabing by id
    db.collection('users').findOne({_id: new ObjectId("61fa29da919587dc7adb7e9a"),age:19},(error,user)=>{

        if(error){
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    //fetches all the users having age 19
    db.collection('users').find({age:19}).toArray((error,users)=>{

        if(error){
            return console.log('Unable to fetch')
        }

        console.log(users)

    })

    //returns number of documents matching filter
    db.collection('users').find({age:19}).count((error,users)=>{

        if(error){
            return console.log('Unable to count')
        }

        console.log(users)

    })

})

