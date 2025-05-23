import express from "express";
import { createProduct, getProductById, getProducts, getProductsByCategory, getProductsByColor, getProductsByName } from "../controllers/controller.js";
const router = express.Router();


router.get('/', getProducts)
router.post('/', createProduct)
router.get('/:id', getProductById)
router.get('/category/:nombre', getProductsByCategory)
router.get('/color/:color', getProductsByColor)
router.get('/name/:nombre', getProductsByName)


export default router;
