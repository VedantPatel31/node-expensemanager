const userExpenseSchema = require("../Schema/ExpenseSchema");
const addExpensecategorySchema = require("../Schema/ExpenseCategory");
const addExpenseSubcategorySchema = require("../Schema/ExpenseSubCategory");
const mailUtil = require('../util/MailUtil');

const addUserExpense = (req, res) => {
    const userExpense = new userExpenseSchema(req.body);
    console.log("user ex : ",userExpense);
    userExpense.save().then((data) => {
        console.log("hi er");
        mailUtil.sendMail(req.body.email, "welcome to our app", "your expenses are :").then((data) => {
            console.log("hello ",data);
        }).catch((err) => {
            
            console.log("err",err);
        })

        res.status(201).json({
            message: "userExpense added successful",
            data: data,
        })
    }).catch((err) => {
        console.log("hi error");
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}

const addExpensecategory = (req, res) => {
    const addExpensecategory = new addExpensecategorySchema(req.body);
    addExpensecategory.save().then((data) => {

        // mailUtil.sendMail(req.body.email,"welcome to our app","your expenses are :").then((data)=>{
        //     console.log(data);
        // }).catch((err)=>{
        //     console.log(err);
        // })

        res.status(201).json({
            message: "userExpense added successful",
            data: data,
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}

const Expensecategory = async (req, res) => {
    // const Expensecategory = await addExpensecategorySchema.find().populate('subcategory');
    const Expensecategory = await addExpensecategorySchema.find();

    if (Expensecategory) {
        res.status(201).json({
            message: "ExpenseCategory fetch successful",
            data: Expensecategory,
        });
    } else {
        res.status(500).json({
            message: "Error in fetching Expenses",
        });
    }
}

const ExpenseSubcategory = async (req, res) => {
    var category = req.params.category;
    const ExpenseSubcategory = await addExpenseSubcategorySchema.find({
        'category' : category
    });
    console.log(category);
    if (ExpenseSubcategory) {
        res.status(201).json({
            message: "ExpenseSubCategory fetch successful",
            data: ExpenseSubcategory,
        });
    } else {
        res.status(500).json({
            message: "Error in fetching Expenses",
        });
    }
}

const viewUserExpense = async (req, res) => {
    const allExpense = await userExpenseSchema.find().populate('subcat').populate('cat');
    console.log(allExpense);
    if (allExpense) {
        res.status(200).json({
            message: "Expenses fetch successfully",
            data: allExpense,
        });
    } else {
        res.status(500).json({
            message: "Error in fetching Expenses",
        });
    }
};

const viewUserExpenseById = async (req, res) => {
    const name = req.params.name;
    console.log(name);
    // const allExpense = await userExpenseSchema.findById(id).populate('subcat').populate('cat');
    const allExpense = await userExpenseSchema.find({
        'name' : name
    }).populate('subcat').populate('cat');
    console.log(allExpense);
    if (allExpense) {
        res.status(200).json({
            message: "Expenses fetch successfully",
            data: allExpense,
        });
    } else {
        res.status(500).json({
            message: "Error in fetching Expenses",
        });
    }
};


const addExpenseSubcategory = (req, res) => {
    const addExpenseSubcategory = new addExpenseSubcategorySchema(req.body);
    console.log(req.body.category);
    addExpenseSubcategory.save().then((data) => {

        // mailUtil.sendMail(req.body.email,"welcome to our app","your expenses are :").then((data)=>{
        //     console.log(data);
        // }).catch((err)=>{
        //     console.log(err);
        // })

        res.status(201).json({
            message: "userExpense added successful",
            data: data,
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}

module.exports = {
    addUserExpense,
    addExpensecategory,
    addExpenseSubcategory,
    viewUserExpense,
    Expensecategory,
    ExpenseSubcategory,
    viewUserExpenseById
}