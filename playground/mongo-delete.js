//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
    {
        return console.log('Unable to connect to monogdb server');
    }
    console.log('connected to mongodb server');

    const db = client.db('TodoApp');
    
//    db.collection('Todos').deleteMany({text : 'Eat lunch'}).then((result) => {
//        console.log(result);
//    });

    // db.collection('Todos').deleteOne({text : 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });


    // db.collection('Todos').findOneAndDelete({text : 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({age : 25}).then((result) => {
               console.log(result);
           });

    
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count : ${count}`);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch', err);
    });
    client.close();
});