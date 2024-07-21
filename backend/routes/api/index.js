const router = require('express').Router();

const expenseRouter = require('./expenseRoutes');
const incomeRouter = require('./incomeRoutes')

router.use('/expenses' , expenseRouter);
router.use('/incomes' ,  incomeRouter);

module.exports = router;