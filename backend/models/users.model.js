const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsersSchema = new Schema({
    userName: {type: String, required: true, max: 100},
    password: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('users', UsersSchema);