const {Schema, Types} = require ('mongoose');

const expenseSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim:true,
            maxlength: 50,
        },
        amount: {
            type: Number,
            required: true,
            maxlength: 20,
            trim: true,
        },
        

    }
)