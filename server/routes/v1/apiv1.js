import express from 'express'
var router = express.Router()

import usersRouter from './controllers/users.js'
import loginRouter from './controllers/login.js'
import houseRouter from './controllers/house.js'
import messageRouter from './controllers/message.js'

router.use("/users", usersRouter)
router.use("/login", loginRouter)
router.use("/house", houseRouter)
router.use("/message", messageRouter)

export default router