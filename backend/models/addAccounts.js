const mongoose = require("mongoose");

const addAccountsSchema = mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
      },
      website: {
        type: String,
        required: [true, "Please add a text Website"],
      },
      username: {
        type: String,
        required: [true, "Please add a text Username"],
      },
      password: {
        type: String,
        required: [true, "Please add a text Password"],
      },
    },
    {
      timestamps: true,
    }
);


module.exports = mongoose.model('AddAcounts',addAccountsSchema)