import ProductRepository from "../repositories/product.repository.js"
import SupplierRepository from "../repositories/supplier.repository.js"
import productInfoRepository from "../repositories/productInfo.repository.js"

const createProduct = async (product) => {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.insertProduct(product)
  }
  throw new Error("O id do fornecedor informado não existe")
}

const getProducts = async () => {
  return await ProductRepository.getProducts()
}

const getProduct = async (id) => {
  const product = await ProductRepository.getProduct(id)
  product.info = await productInfoRepository.getProductInfo(parseInt(id))
  return product;
}

const updateProduct = async (product) => {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.updateProduct(product)
  }
  throw new Error("O id do fornecedor informado não existe")
};

const deleteProduct = async (id) => {
  await ProductRepository.deleteProduct(id)
};

export default {
  createProduct, 
  getProducts, 
  getProduct, 
  updateProduct, 
  deleteProduct
}