const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseCategorySchema = new Schema({
    name:{
        type : String,
    },
    status :{
        type:String,
    },
});

module.exports = mongoose.model('expenseCategory',ExpenseCategorySchema);