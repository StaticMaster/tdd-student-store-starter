// const express =require("express");
// const router = express.Router()
// const {storage} = require ("../data/storage");
// const { BadRequestError, NotFoundError} = require ("../utils/errors");

import express from "express";
import {Router} from "express";
import storage from "../data/storage.js";
import {BadRequestError, NotFoundError} from "../utils/errors.js";



 class Store{
  static async listProducts() {
    const products = storage.get("products")
    return products
  }
static async fetchProductById(productId) {
    // fetch a single transaction
    const product = storage
      .get("products")
      .find({ id: Number(productId)})
    return product
  }

static async recordTransaction(transaction) {
    // create a new transaction

    if (!transaction) {
      throw new BadRequestError(`No transaction sent.`)
    }
    const requiredFields = ["description", "category", "amount"]
    requiredFields.forEach((field) => {
      if (!transaction[field] && transaction[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in transaction`)
      }
    })

    const transactions = await Bank.listTransactions()
    const transactionId = transactions.length + 1
    const postedAt = new Date().toISOString()

    const newTransaction = { id: transactionId, postedAt, ...transaction }

    storage.get("transactions").push(newTransaction).write()

    return newTransaction
  }


}
// module.exports = Store
export default Store

