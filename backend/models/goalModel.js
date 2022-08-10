const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    website: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    username: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    password: {
      type: String,
      required: [true, 'Please add a text value'],
    }

  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
