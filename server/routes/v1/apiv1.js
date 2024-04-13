import express from 'express'
var router = express.Router()

import usersRouter from './controllers/users.js'
import loginRouter from './controllers/login.js'

router.use("/users", usersRouter)
router.use("/login", loginRouter)

export default router