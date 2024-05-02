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
        await newHouse.save();

        // Respond to the client upon successful registration
        res.send({status: 'success'});
    } catch (error) {
        // Log any errors and respond with error message
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


router.get("/house/:id", async (req, res) => {
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



export default router;
