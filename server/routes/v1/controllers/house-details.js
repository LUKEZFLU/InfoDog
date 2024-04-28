import express from 'express';
var router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log(req.body);

        // Check if the user has already registered a house
        const existingHouse = await req.models.House.findOne({ "userId": req.body.userId });
        if (existingHouse) {
            return res.status(400).json({ "status": "error", "error": "House already registered by this user" });
        }

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
            moveInDate: req.body.moveInDate,
            moveOutDate: req.body.moveOutDate,
            depositRequired: req.body.depositRequired,
            furnished: req.body.furnished,
            images: req.body.images,
            roommates: req.body.roommates,
            amenities: req.body.amenities,
            petsAllowed: req.body.petsAllowed,
            verificationEmail: req.body.verificationEmail,
            userId: req.body.userId
        });
        await newHouse.save();

        res.send("House successfully registered");
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ "status": "error", "error": error });
    }
});

export default router;

