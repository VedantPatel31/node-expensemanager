const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSubCategorySchema = new Schema({
    category : {
        type:Schema.Types.ObjectId,
        ref:"expenseCategory"
    },
    name:{
        type : String,
    },
    status :{
        type:String,
    }
});

module.exports = mongoose.model('expenseSubCategory',ExpenseSubCategorySchema);