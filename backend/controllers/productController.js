import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @acess   Public
const getProducts = asyncHandler(async (req,res) => {
    const products = await Product.find({})
    res.json(products)
})

// @desc    Fetch a single product
// @route   GET /api/products/:id
// @acess   Public
const getProductById = asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    res.json(products)
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @acess   Private/Admin
const deleteProduct = asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        await product.remove();
        res.json({message: 'Product Removed'})
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    res.json(products)
})

// @desc    Create a product
// @route   POST /api/products
// @acess   Private/Admin
const createProduct = asyncHandler(async (req,res) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description'
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

export {
    getProducts,
    getProductById,
    deleteProduct
  }