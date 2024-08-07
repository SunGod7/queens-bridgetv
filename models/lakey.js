////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const mongoose = require('./connection')
const commentSchema  = require('./comment')

const { Schema, model } = mongoose;

// make fruits schema
const lakeysSchema = new Schema({
  name: String,
  color: String,
  price: String,
  like: Boolean,
  owner: {
    type: Schema.Types.ObjectId,//
    ref: 'User',//const User = model('User', userSchema)
},
comments: [commentSchema]// fruit can have many comments


}, {
timestamps: true
})


// make fruit model
const lakey = model("lakey", lakeysSchema);
