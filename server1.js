const express = require('express');
const mongoose = require('mongoose');
var app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/lab')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Failed to connect to MongoDB", err));
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String },
  stock: { type: Number, default: 0 }
});
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
app.post("/registeruser", (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(() => res.status(200).json({ message: "User registered successfully" }))
    .catch(err => res.status(400).json({ message: "Failed to register user", error: err.message }));
});
app.get("/getAllproducts", (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ message: "Database is empty", error: err.message }));
});
app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .then(product => {
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch(err => res.status(500).json({ message: "Error fetching product", error: err.message }));
});
app.post("/addproduct", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save()
    .then(() => res.status(200).json({ message: "Product added successfully" }))
    .catch(err => res.status(400).json({ message: "Failed to add product", error: err.message }));
});
app.put("/updateproduct/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  Product.findByIdAndUpdate(id, updatedData, { new: true })
    .then(updatedProduct => {
      if (updatedProduct) {
        res.json({ message: "Product updated successfully", product: updatedProduct });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch(err => res.status(500).json({ message: "Error updating product", error: err.message }));
});
app.delete("/deleteproduct/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id) 
    .then(deletedProduct => {
      if (deletedProduct) {
        res.json({ message: "Product deleted successfully", product: deletedProduct });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch(err => res.status(500).json({ message: "Error deleting product", error: err.message }));
});
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
