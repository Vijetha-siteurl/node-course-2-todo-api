//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
    {
        return console.log('Unable to connect to monogdb server');
    }
    console.log('connected to mongodb server');

    const db = client.db('TodoApp');
    
//    db.collection('Todos').update({_id : new ObjectID("5c03c5b54604f42c63c3f571")}, {text : 'Something ToDo', completed : false}).then((result) => {
//        console.log(result);
//    });

    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id : new ObjectID("5c03c5b54604f42c63c3f571")
    //     }, 
    //     { $set : 
    //         {
    //             text : 'Something To Do',
    //             completed : true
    //         }
    //     },
    //     { returnOriginal : false }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate(
        {
            _id : new ObjectID("5c03c7b6b554792d0cda3d67")
        }, 
        { $set : 
            {  
                
                name : 'Vijetha'                
            },
            $inc : {age : 1} 
        },
        { returnOriginal : false }).then((result) => {
            console.log(result);
        });
    client.close();
});