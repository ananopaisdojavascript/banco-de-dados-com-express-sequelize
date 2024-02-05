import express from "express"
import ProductController from "../controllers/product.controller.js"

const router = express.Router()

router.post("/", ProductController.createProduct)

router.get("/", ProductController.getProducts)

router.get("/info", ProductController.getProductInfo) // MongoDB

router.get("/:id", ProductController.getProduct)

router.put("/", ProductController.updateProduct)

router.delete("/:id", ProductController.deleteProduct)

// MongoDB Routes

router.post("/info", ProductController.createProductInfo)

router.put("/info", ProductController.updateProductInfo)

router.post("/review", ProductController.createReview)

router.delete("/:id/review/:index", ProductController.deleteReview)

router.delete("/info/:id", ProductController.deleteProductInfo)


export default router