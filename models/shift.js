var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const shiftSchema = new mongoose.Schema({
    Date: Date,
    Time: String
  }) 

  module.exports = mongoose.model('Shift', shiftSchema);