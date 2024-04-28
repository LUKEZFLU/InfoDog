import mongoose from 'mongoose'

let models = {}

console.log("connecting to mongodb")
await mongoose.connect("mongodb+srv://Zefan:K4othGeFiI5ozgzW@ileasev1.whhya6o.mongodb.net/DataV1")

console.log("successfully connected to mongodb")

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    created_at: Date
})

const houseSchema = new mongoose.Schema({
  title: String,
  description: String,
  propertyType: String,
  roomType: String,
  location: String,
  bedrooms: Number,
  bathrooms: Number,
  price: Number,
  area: Number, // Assuming this is in square feet
  moveInDate: Date,
  moveOutDate: Date,
  depositRequired: Boolean,
  furnished: Boolean,
  images: [String], // Array of image URLs
  roommates: {
      count: Number,
      details: String
  },
  amenities: {
      stove: Boolean,
      refrigerator: Boolean,
      oven: Boolean,
      dishwasher: Boolean,
      microwave: Boolean,
      tv: Boolean,
      couch: Boolean,
      heating: Boolean,
      airConditioner: Boolean,
      washer: Boolean,
      dryer: Boolean,
      wifi: Boolean,
      parking: Boolean,
      security: Boolean,
      swimmingPool: Boolean,
      gym: Boolean,
      elevator: Boolean,
      accessibility: Boolean
  },
  petsAllowed: Boolean,
  verificationEmail: String,
  UserId: String
});

models.House = mongoose.model('House', houseSchema);
models.User = mongoose.model('User', userSchema)

console.log("mongoose models created")

export default models