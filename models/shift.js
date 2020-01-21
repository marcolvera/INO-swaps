var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const shiftSchema = new mongoose.Schema({
    date: String,
    time: String,
    comment: String,
    owner: String
}) 

  module.exports = mongoose.model('Shift', shiftSchema);