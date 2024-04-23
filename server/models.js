import mongoose from 'mongoose'

let models = {}

console.log("connecting to mongodb")
await mongoose.connect("mongodb+srv://Zefan:K4othGeFiI5ozgzW@ileasev1.whhya6o.mongodb.net/DataV1")

console.log("successfully connected to mongodb")

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
})

const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
  mainImg: String,
  images: [
    {
      src: String,
      alt: String
    }
  ],
  title: String,
  reviews: String,
  location: String,
  description: [String],
  amenities: [String],
  price: String,
  pentagram: String
});

models.Detail = mongoose.model('Detail', detailSchema);
models.User = mongoose.model('User', userSchema)

console.log("mongoose models created")

export default models