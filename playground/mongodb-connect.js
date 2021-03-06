const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
    {
        return console.log('Unable to connect to monogdb server');
    }
    console.log('connected to mongodb server');

    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name : 'Vijetha',
        age : 27, 
        location : 'Mysore'
    }, (err, result) => {
        if(err)
        {
            return console.log('Unable to insert record', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });
    client.close();
});