//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
    {
        return console.log('Unable to connect to monogdb server');
    }
    console.log('connected to mongodb server');

    const db = client.db('TodoApp');
    
    // db.collection('Todos').find(
    //     {
    //         _id : new ObjectID('5c03c5b54604f42c63c3f571')
        
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch', err);
    // });
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count : ${count}`);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch', err);
    });
    client.close();
});