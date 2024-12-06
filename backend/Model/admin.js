const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        maxLength: 30,
        trim: true,
        required: true,
        lowercase: true,
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        maxLength: 8
    },

    firstName:{
      type: String,
      required: true,
      maxLength: 50,
      minLength: 5,
      trim: true
    },

    lastName :{
       
      type: String,
      required: true,
      maxLength: 50,
      minLength: 5,
      trim: true
        
    } 
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = {
    Admin
}