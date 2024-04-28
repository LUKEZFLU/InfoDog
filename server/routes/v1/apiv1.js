import express from 'express'
var router = express.Router()

import usersRouter from './controllers/users.js'
import loginRouter from './controllers/login.js'
import houseRouter from './controllers/house-details.js'

router.use("/users", usersRouter)
router.use("/login", loginRouter)
router.use("/house", houseRouter)

export default router