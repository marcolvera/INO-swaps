const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

const managerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: String,
    credentials: {
        type: String,
        required: true
    }
},{
    timestamps: true
});


managerSchema.set('toJSON', {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  });
    
  
managerSchema.pre('save', function(next) {
    const manager = this;
    if (!manager.isModified('password')) return next();
    bcrypt.hash(manager.password, SALT_ROUNDS, function(err, hash) {
      manager.password = hash;
      return next();
    });
  });
  
managerSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
  }
  
  
  
  module.exports = mongoose.model('Manager', managerSchema);