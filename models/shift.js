var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const shiftSchema = new mongoose.Schema({
    date: String,
    time: String,
    level: String,
    owner: String
}) 

  module.exports = mongoose.model('Shift', shiftSchema);