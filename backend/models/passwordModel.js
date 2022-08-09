const mongoose = require("mongoose");

const passwordSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text:
        {
            type: String,
            required:[true,"Please add a text value"],
        },
    text:
    {
        type: String,
        required:[true,"Please add a text value"],
    }
})