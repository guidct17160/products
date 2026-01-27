const express = require('express')
const app = express()
const path = require('path')
const port = 3000


const userRoute = require('./route/users')
const productsRoute = require('./route/products')
const apiProductsRoute = require('./route/api/products')


const { url } = require('node:inspector')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()

console.log('MONGO_URI =', process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB is connected'))
    .catch(err => console.error('MongoDB is disconnected',err))


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.use('/users',userRoute)
app.use('/products',productsRoute)
app.use('/api/products',apiProductsRoute)

const loggerMiddleware = (req,res,next) =>{
    console.log(`Request recieve at: ${new Date().toISOString()}`)
    console.log(`Method : ${req.method}, URL:${req.url}`)
    next()
}
app.use(loggerMiddleware)

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Hello',
        header:'E Dok',
        param:'HEE BOW',
        user:null
        

    })

})

app.get('/products',(req,res)=>{
    const products = [
        {
            name:'iPhoneSE',
            price:'15000'
        },
        {
            name:'iPad Pro',
            price:'45000'
        },
        {
            name:'Macbook Pro',
            price:'70000'
        }
    ]
    res.render('products',{products:products})

})

app.listen(port,()=>{
    console.log('Server running')
})
