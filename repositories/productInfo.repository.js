import { connect } from "./mongo.db.js";
import ProductInfoSchema from "../schemas/productInfo.schema.js";

const createProductInfo = async productInfo => {
  try {
    const mongoose = await connect()
    const ProductInfo = mongoose.model("productInfo", ProductInfoSchema) 
    productInfo = new ProductInfo(productInfo)
    await productInfo.save()
  } catch (error) {
    throw error
  } 
}

const updateProductInfo = async productInfo => {
  try {
    const mongoose = await connect()
    const ProductInfo = mongoose.model("productInfo", ProductInfoSchema) 
    await ProductInfo.findOneAndUpdate({ productId: productInfo.productId }, productInfo)
  } catch (error) {
    throw error
  } 
}

const findAll = async () => {
  try {
    const mongoose = await connect()
    const ProductInfo = mongoose.model("productInfo", ProductInfoSchema) 
    const query =  ProductInfo.find({})
    return await query.exec()
  } catch (error) {
    throw error
  }
}

const getProductInfo = async productId => {
  try {
    const mongoose = await connect()
    const ProductInfo = mongoose.model("productInfo", ProductInfoSchema) 
    const query =  ProductInfo.findOne({ productId: productId })
    return await query.exec()
  } catch (error) {
    throw error
  } 
}


const createReview = async (review, productId) => {
  try {
    const productInfo = await getProductInfo(productId)
    productInfo.reviews.push(review)
    await updateProductInfo(productInfo)
  } catch (error) {
    throw error
  }  
}

const deleteReview = async (productId, index) => {
  try {
    const productInfo = await getProductInfo(productId)
    productInfo.reviews.splice(index, 1)
    await updateProductInfo(productInfo)
  } catch (error) {
    throw error
  }  
}

const deleteProductInfo = async productId => {
  try {
    const mongoose = await connect()
    const ProductInfo = mongoose.model("productInfo", ProductInfoSchema) 
    await ProductInfo.deleteOne({ productId: productId })
  } catch (error) {
    throw error
  }
}

export default {
  createProductInfo, 
  updateProductInfo, 
  getProductInfo, 
  createReview, 
  deleteReview, 
  findAll, 
  deleteProductInfo
}