import { promises as fs } from 'fs'
import express from 'express';
var router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { from, to, houseId, checkin, checkout, guest } = req.body;
        // 检查是否已经存在针对特定房子和用户的消息
        const existingMessage = await req.models.Message.findOne({ from, houseId });
        if (existingMessage) {
            return res.status(400).json({ "status": "error", "message": "You have already contacted the host for this house." });
        }
        const newMessage = new req.models.Message({
            from,
            houseId,
            checkin,
            checkout,
            guest
        });
        
        await newMessage.save();

        res.status(201).json({ "status": "success", "data": newMessage });
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ "status": "error", "error": error })
    }
});


export default router;