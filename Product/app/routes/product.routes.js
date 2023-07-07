module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  router.post("/", products.create); //create a new product

  router.get("/", products.findAll); //retrieve all products

  router.get("/published", products.findAllPublished); //retrieve all published products

  router.get("/:id", products.findOne); //retrieve a single product with id

  router.put("/:id", products.update); //update a product with id

  router.delete("/:id", products.delete); //delete product by id

  router.delete("/", products.deleteAll); //delete all products

  app.use("/api/products", router);
};
