// const express =  require("express")
// const { NotFoundError, BadRequestError } = require("../utils/errors")
// const router = express.Router()
// // const morgan = require("morgan")
// const Store = require("../models/store")
// // const app = require("../app")

import express from "express";
import {Router} from "express";
import storage from "../data/storage.js";
import {BadRequestError, NotFoundError} from "../utils/errors.js";
import morgan from "morgan"
import Store from "../models/store.js"
const router = Router()

router.get ('/', (req, res) =>{
    try {
        const products =  Store.listProducts()
        res.status(200).json({ products:products})
      } catch (err) {
        next(err)
}}) 

router.get("/:productId", (req, res, next) => {
    try { const id= req.params
      const newProduct = storeRouter.fetchProductById(id)
      res.status(200).json({"newProduct": newProduct })
    } catch (err) {
      next(err)
    }
  })

  export default router
