var mongoose = require('mongoose');

//Another way of defining schema

// var newSchema = new mongoose.Schema({
//     name : {
//         type : String,
//         minlength : 1,
//         require : true
//     }
// });

// var UserSchema = mongoose.model('Users', newSchema);

var Users = mongoose.model('Users', {
    email : {
        type : String,
        require : true,
        trim : true,
        minlength : 1
    }
});

module.exports = {Users}; 