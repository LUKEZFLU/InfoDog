import express from 'express';
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        // Log the incoming request body to debug if necessary
        console.log(req.body);

        // Create a new house instance from the request body
        const newHouse = new req.models.House({
            title: req.body.title,
            description: req.body.description,
            propertyType: req.body.propertyType,
            roomType: req.body.roomType,
            location: req.body.location,
            bedrooms: req.body.bedrooms,
            bathrooms: req.body.bathrooms,
            price: req.body.price,
            area: req.body.area,
            moveInDate: new Date(req.body.moveInDate),
            moveOutDate: new Date(req.body.moveOutDate),
            depositRequired: req.body.depositRequired,
            furnitureIncluded: req.body.furnitureIncluded, // Ensure this matches boolean or string expectations
            roommatesCount: req.body.roommatesCount,
            roommatesReason: req.body.roommatesReason,
            selectedAmenities: req.body.selectedAmenities,
            petsAllowed: req.body.petsAllowed,
            uwemail: req.body.uwemail,
            userId: req.body.userId
        });

        // Save the new house to the database
        const savedHouse = await newHouse.save();

        // Respond to the client upon successful registration
        res.json({
            status: 'success',
            houseId: savedHouse._id.toString()  // Return the MongoDB document ID as a string
        });
    } catch (error) {
        // Log any errors and respond with error message
        console.log("Error:", error);
        res.status(500).json({ "status": "error", "error": error.message });
    }
});


router.get("/:id", async (req, res) => {
    console.log(`Received ID: ${req.params.id}`);
    try {
        const house = await req.models.House.findById(req.params.id);
        if (!house) {
            console.log("House not found for ID:", req.params.id);
            return res.status(404).send({ message: "House not found" });
        }
        res.send(house);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ "status": "error", "error": error.message });
    }
});


// GET route to retrieve all houses
router.get("/", async (req, res) => {
    try {
        const houses = await req.models.House.find({});
        res.send(houses);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ "status": "error", "error": error.message });
    }
});


// Delete the house
router.delete("/deletehouse", async (req, res) => {
    const { houseId } = req.query; // Extracting HouseId from query parameters
    if (!houseId) {
        return res.status(400).json({ "status": "error", "error": "houseId is required" });
    }

    try {
        const result = await req.models.House.findByIdAndDelete(houseId);
        if (!result) {
            return res.status(404).json({ "status": "error", "error": "House not found" });
        }
        // 删除所有和这个house有关的message
        await req.models.Message.deleteMany({ houseId });
        res.status(200).json({ "status": "success", "message": "House deleted successfully" });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ "status": "error", "error": error.message });
    }
});




export default router;