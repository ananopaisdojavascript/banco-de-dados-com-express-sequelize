import ProductService from "../services/product.service.js";
import ProductInfoService from "../services/productInfo.service.js";

const createProduct = async(request, response, next) => {
  try {
    let product = request.body
    const areTheFieldsValid = !product.name || !product.description || !product.value || !product.stock || !product.supplierId
    if (areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de nome, descrição, valor, estoque e id do fornecedor é obrigatório.")
    }
    product = await ProductService.createProduct(product)
    logger.info(`POST /product - ${JSON.stringify(product)}`);
    response.send(product)
  } catch(error) {
    next(error)
  }
}

const getProducts = async (_request, response, next) => {
  try {
    response.send(await ProductService.getProducts())
    logger.info("GET /product")
  } catch (error) {
    next(error)
  }
}

const getProduct = async (request, response, next) => {
  try {
    response.send(await ProductService.getProduct(request.params.id));
    logger.info("GET /product/:id");
  } catch (error) {
    next(error);
  }
};


const updateProduct = async(request, response, next) => {
  try {
    let product = request.body
    const areTheFieldsValid = !product.name || !product.description || !product.value || !product.stock || !product.supplierId
    if (areTheFieldsValid) {
      throw new Error("O preenchimento dos campos de nome, descrição, valor, estoque e id do fornecedor é obrigatório.")
    }
    product = await ProductService.updateProduct(product)
    logger.info(`PUT /product - ${JSON.stringify(product)}`)
    response.send(product)
  } catch(error) {
    next(error)
  }
}

const deleteProduct = async (request, response, next) => {
  try {
    await ProductService.deleteProduct(request.params.id)
    response.end();
    logger.info(`DELETE /product/:id - ${request.params.id}`);
  } catch (error) {
    next(error);
  }
};

// MongoDB

const createProductInfo = async (request, response, next) => {
  try {
    let productInfo = request.body
    if (!productInfo.productId) {
      throw new Error("O id do produto é obrigatório")
    }
    await ProductInfoService.saveProductInfo(productInfo)
    response.end()
    logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`)
  } catch (error) {
    next(error)
  }
}

const updateProductInfo = async (request, response, next) => {
  try {
    let productInfo = request.body
    if (!productInfo.productId) {
      throw new Error("O id do produto é obrigatório")
    }
    await ProductInfoService.updateProductInfo(productInfo)
    response.end()
    logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`)
  } catch (error) {
    next(error)
  }
}

const createReview = async (request, response, next) => {
  try {
    let params = request.body
    if (!params.productId || !params.review) {
      throw new Error("O id e o comentário sobre o produto são obrigatórios")
    }
    await ProductInfoService.createReview(params.review, params.productId)
    logger.info(`POST /product/review`)
    response.end()
  } catch (error) {
    next(error)
  }
}

const deleteReview = async (request, response, next) => {
  try {
    await ProductInfoService.deleteReview(request.params.id, request.params.index)
    logger.info(`DELETE /product/${request.params.id}/review/${request.params.index}`)
    response.end()
  } catch (error) {
    next(error)
  }
}

const getProductInfo = async (_request, response, next) => {
  try {
    response.send(await ProductInfoService.findAllProductInfo())
    logger.info("GET /product/info")
  } catch (error) {
    next(error)
  }
}

const deleteProductInfo = async (request, response, next) => {
  try {
    response.send(await ProductInfoService.deleteProductInfo(request.params.id))
    logger.info("DELETE /product/info")
  } catch (error) {
    next(error)
  }
}

export default {
  createProduct, 
  getProducts, 
  getProduct, 
  updateProduct, 
  deleteProduct, 
  createProductInfo, 
  updateProductInfo, 
  createReview, 
  deleteReview, 
  getProductInfo,
  deleteProductInfo
}