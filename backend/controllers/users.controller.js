const Product = require('../models/users.model');

//Simple version, without validation or sanitation
exports.getUsers = function (req, res) {
    res.send('Greetings from the Test controller!');
};