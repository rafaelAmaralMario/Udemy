const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://oe-dev.occ/todo')