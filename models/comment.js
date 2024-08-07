const mongoose = require('./connection')


const commentSchema = new mongoose.Schema({
    
    note: {
        type: String,
        required: true
    
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,//
    ref: 'User'//const User = model('User', userSchema)
}
}, {
    timestamps: true
})



module.exports = commentSchema