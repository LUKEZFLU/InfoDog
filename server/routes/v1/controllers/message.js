import { promises as fs } from 'fs'
import express from 'express';
var router = express.Router();

// 发送信息
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

// get信息
router.get("/messages", async (req, res) => {
    try {
        const { houseId } = req.query;
        const messages = await req.models.Message.find({ houseId }).lean();

        const messagesWithUserDetails = await Promise.all(messages.map(async (message) => {
            const user = await req.models.User.findById(message.from).lean();
            return {
                ...message,
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    gender: user.gender,
                    email: user.email
                }
            };
        }));

        res.status(200).json(messagesWithUserDetails);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ "status": "error", "error": error });
    }
});


// refuse
router.delete("/refuse", async (req, res) => {
    try {
        const { messageId } = req.query;
        await req.models.Message.findByIdAndDelete(messageId);
        res.status(200).json({ "status": "success", "message": "Message deleted successfully" });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ "status": "error", "error": error });
    }
});






export default router;