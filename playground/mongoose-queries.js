const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

var id = '5c04c5236c24f4173293eb92';

// if(!ObjectId.isValid(id)){
//     console.log('Id not Valid');
// }

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('todos', todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo)
//     {
//         return console.log('Id not found.');
//     }
//     console.log('todo by ID', todo);
// }).catch((e) => console.log(e));

Users.findById(id).then((users) => {
    if(!users)
    {
        return console.log('user not found.');
    }
    console.log('user by ID', users);
}).catch((e) => console.log(e));