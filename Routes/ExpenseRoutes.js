const express = require('express');
const router = express.Router();
const userExpenseController = require('../Controller/ExpenseManager');

router.post('/userExpense',userExpenseController.addUserExpense);
router.post('/addExpensecategory',userExpenseController.addExpensecategory);
router.post('/addExpenseSubcategory',userExpenseController.addExpenseSubcategory);
router.get('/expenseCategory',userExpenseController.Expensecategory);
router.get('/expenseSubCategory/:category',userExpenseController.ExpenseSubcategory);
router.get('/userExpense',userExpenseController.viewUserExpense);
router.get('/userExpense/:name',userExpenseController.viewUserExpenseById);
module.exports = router;