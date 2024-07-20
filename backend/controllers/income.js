const {Income} = require('../models');

module.exports = {
    //get all income
    getIncome(req,res){
        Income.find()
        .then((incomes) => res.json(incomes))
        .catch((err) => res.status(500).json(err))
    },
    //add a Income
    addIncome(req,res) {
        Expense.add(req.body)
        .then((income) => res.json(income))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },
    //delete a Income
    deleteIncome(req,res) {
        Income.findOneAndDelete({_id:req.params.incomeid})
        .then((income) => 
            !income
                ? res.status(404).json({mesage:'No income with his id'})
                : res.json(income)
        ).then(()=> res.json({message: 'Income Deleted'}))
         .catch((err) => res.status(500).json(err))
    }
}