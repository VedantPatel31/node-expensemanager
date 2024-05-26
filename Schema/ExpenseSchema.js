const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// id
// name
// cat
// subcat
// amount
// paymentmeht enum ["upi",card,cash]
// descri

const ExpenseSchema = new Schema({
    name : {
        type:String
    },
    cat:{
        type:Schema.Types.ObjectId,
        ref:"expenseCategory"
    },
    subcat :{
        type:Schema.Types.ObjectId,
        ref:"expenseSubCategory"
    },
    amount :{
        type:Number,
    },
    paymentMethod :{
        type:String,
        enum : ["UPI","CASH","CARD"],
    },
    describe :{
        type:String,
    },

});

module.exports = mongoose.model('expense',ExpenseSchema);