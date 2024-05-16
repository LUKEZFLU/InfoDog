import mongoose from 'mongoose'

let models = {}

console.log("connecting to mongodb")
await mongoose.connect("mongodb+srv://Zefan:K4othGeFiI5ozgzW@ileasev1.whhya6o.mongodb.net/DataV1")

console.log("successfully connected to mongodb")

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    gender: String,
    birthday: Date,
    created_at: Date
})

const houseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    propertyType: { type: String, required: true },
    roomType: { type: String, required: true },  // Maps to propertyType2
    location: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    price: { type: Number, required: true },
    area: { type: Number, required: true },  // Assuming this is in square feet
    moveInDate: { type: Date, required: true },
    moveOutDate: { type: Date, required: true },
    depositRequired: { type: String, required: true },
    furnitureIncluded: { type: String, required: true },  // Maps to furnitureIncluded
    roommatesCount: { type: Number, required: true },
    roommatesReason: { type: String, required: true },
    selectedAmenities: Object,
    petsAllowed: { type: String, required: true },
    uwemail: { type: String, required: true },  // Maps to uwemail
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const messageSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    houseId: { type: mongoose.Schema.Types.ObjectId, ref: 'House', required: true },
    checkin: Date,
    checkout: Date,
    guest: Number
})

houseSchema.index({ location: 1 });

models.House = mongoose.model('House', houseSchema);
models.User = mongoose.model('User', userSchema);
models.Message = mongoose.model('Message', messageSchema);


console.log("mongoose models created")

export default models