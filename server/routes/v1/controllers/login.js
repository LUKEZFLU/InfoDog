import { promises as fs } from 'fs'
import express from 'express';
var router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        // Find the user in the database
        const user = await req.models.User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ "status": "error", "error": "User not found" });
        }
        // Check if the entered password not match the password in the database
        if (req.body.password !== user.password) {
            return res.status(401).json({ "status": "error", "error": "Password incorrect" });
        }
        // Find the house associated with the user
        const house = await req.models.House.findOne({ userId: user._id });
        const houseId = house ? house._id.toString() : "no";

        res.json({ status: 'success', userId: user._id.toString(), houseId: houseId });
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ "status": "error", "error": error })
    }
})


export default router;
