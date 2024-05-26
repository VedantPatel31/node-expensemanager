const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fName:{
        type : String,
    },
    lName:{
        type : String,
    },
    email :{
        type:String,
    },
    password :{
        type:String,
    },
    mobileNo :{
        type:String,
    },
    status :{
        type:String,
    },

});

module.exports = mongoose.model('expenseusers',UserSchema);