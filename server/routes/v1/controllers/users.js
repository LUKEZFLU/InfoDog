import { promises as fs } from 'fs'
import express from 'express';
var router = express.Router();

router.post("/", async (req, res) => {
    try {
        console.log(req.body)

        // Check if a user with the provided email already exists
        const existingUser = await req.models.User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ "status": "error", "error": "User already exists" });
        }

        const newUser = new req.models.User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password

        })
        await newUser.save()

        res.send("success")
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ "status": "error", "error": error })
    }
})


export default router;