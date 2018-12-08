const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id : '5c08c95cc02fc10c2cf54b10'}).then((todo) => {

});

Todo.findByIdAndRemove('5c08c92ec02fc10c2cf54b0c').then((todo) => {
    console.log(todo);
});