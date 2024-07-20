const {Expense , Income} = require('../models');

module.exports = {
    //get all expenses
    getExpenses(req,res) {
        Expense.find()
        .then((expenses) => res.json(expenses))
        .catch((err)=>res.status(500).json(err));
    }
}