const {Expense , Income} = require('../models');

module.exports = {
    //get all expenses
    getExpenses(req,res) {
        Expense.find()
        .then((expenses) => res.json(expenses))
        .catch((err)=>res.status(500).json(err));
    },

    //add a Expense
    addExpense(req,res) {
        Expense.add(req.body)
        .then((expense)=>res.json(expense))
        .catch((err)=>{
            console.log(err);
            return res.status(500).json(err);
        })

    }
}