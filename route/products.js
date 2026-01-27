const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const upload = require('../middleware/upload')


router.get('/new', (req,res)=>{
    res.render('products/new-products')
})

router.post('/',upload.single('productImage'),async(req,res)=>{
    try{
        const newProduct = new Product({
            name:req.body.name,
            price:req.body.price
        })
        if(req.file){
            newProduct.imageUrl = `uploads/${req.file.filename}`
        }

        await newProduct.save()
        res.redirect('/products')

    }catch(error){
        console.error(error)
        res.status(500).send('Cannot create a new product')
    }
})

router.get('/',async (req,res)=>{
    try{
        const products = await Product.find({})
        res.render('products/index',{products:products})

    }catch(error){
        console.error(error)
        res.status(500).send('Some thing went wrong')
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.render('products/show-detail',{product:product})

    }catch(error){
        console.error(error)
        res.status(500).send('Some thing went wrong')
    }
})

router.get('/:id/edit',async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.render('products/edit-product',{product:product})

    }catch(error){
        console.error(error)
        res.status(500).send('Some thing went wrong')
    }
})

router.put('/:id',upload.single('productImage'),async (req,res)=>{
    try{
        const updateData = {...req.body}

        if(req.file){
            updateData.imageUrl = `uploads/${req.file.filename}`
        }

        await Product.findByIdAndUpdate(req.params.id,updateData)
        res.redirect(`/products/${req.params.id}`)

    }catch(error){
        console.error(error)
        res.status(500).send('Some thing went wrong')
    }
})


router.delete('/:id',async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.redirect(`/products/`)

    }catch(error){
        console.error(error)
        res.status(500).send('Some thing went wrong')
    }
})



module.exports = router
