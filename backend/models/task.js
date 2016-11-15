var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Task', TaskSchema);
