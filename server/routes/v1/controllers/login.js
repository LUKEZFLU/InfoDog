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
        // Check if the entered password matches the password in the database
        if (req.body.password !== user.password) {
            return res.status(401).json({ "status": "error", "error": "Invalid credentials" });
        }
        res.send("Login successful");
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ "status": "error", "error": error })
    }
})


export default router;
