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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,  // Include gender in the new user creation
            birthday: req.body.birthday,
            created_at: req.body.createdAt
        })
        await newUser.save()

        res.send("success")
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ "status": "error", "error": error })
    }
})

// GET 路由，通过 _id 查询用户信息
router.get("/userInfo", async (req, res) => {
    try {
        const userId = req.query.UserId;  // 从查询参数中获取 UserId

        if (!userId) {
            return res.status(400).json({ "status": "error", "error": "No UserId provided" });
        }

        const user = await req.models.User.findById(userId);
        if (!user) {
            return res.status(404).json({ "status": "error", "error": "User not found" });
        }

        res.json(user);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ "status": "error", "error": error });
    }
});


// update user info
router.put("/update", async (req, res) => {
    console.log(req.body)
    const { userId, firstName, lastName, email, password } = req.body;

    if (!userId) {
        return res.status(400).json({ "status": "error", "error": "User ID is required" });
    }

    try {
        // 使用 findByIdAndUpdate 方法来更新用户信息
        // 你可以根据实际情况选择更新的字段
        const updatedUser = await req.models.User.findByIdAndUpdate(userId, {
            $set: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password // 注意：在实际应用中密码应该是加密存储的
            }
        }, { new: true }); // { new: true } 确保返回的是更新后的文档

        if (!updatedUser) {
            return res.status(404).json({ "status": "error", "error": "User not found" });
        }

        res.json({ "status": "success", "message": "User updated successfully", "data": updatedUser });
    } catch (error) {
        console.log("Error is:", error);
        res.status(500).json({ "status": "error", "error": "Internal server error" });
    }
});

export default router;