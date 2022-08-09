const mongoose = require("mongoose");

const accountsSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    website:
        {
            type: String,
            required:[true,"Please add a text value"],
            unique: true
        },
    username:
    {
        type: String,
        required:[true,"Please add a text value"],
        unique: true
    },
    password:
    {
        type: String,
        required:[true,"Please add a text value"],
        unique: true
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('Accounts',accountsSchema)