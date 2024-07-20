const {Schema, Types} = require ('mongoose');

const expenseSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim:true,
            maxlength: 50,
        },
        
    }
)