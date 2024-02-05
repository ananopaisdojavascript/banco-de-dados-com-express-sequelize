import productInfoRepository from "../repositories/productInfo.repository.js"

const saveProductInfo = async productInfo => {
  await productInfoRepository.createProductInfo(productInfo)
}

const updateProductInfo = async productInfo => {
  await productInfoRepository.updateProductInfo(productInfo)
}

const createReview = async (review, productId) => {
  await productInfoRepository.createReview(review, productId)
}

const deleteReview = async (productId, index) => {
  await productInfoRepository.deleteReview(parseInt(productId), index)
}

const findAllProductInfo = async () => {
  return await productInfoRepository.findAll()
}

const deleteProductInfo = async (productId) => {
  await productInfoRepository.deleteProductInfo(parseInt(productId))
}

export default {
  saveProductInfo, 
  updateProductInfo, 
  createReview, 
  deleteReview, 
  findAllProductInfo,
  deleteProductInfo
}