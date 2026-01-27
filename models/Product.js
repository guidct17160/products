const mongoose = require('mongoose')
const { type } = require('node:os')
const {Schema} = mongoose

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    },
    imageUrl:{
        type:String,
        required:false
    }
},{timestamps:true})

const Product = mongoose.model('Product',productSchema)
module.exports = Product
