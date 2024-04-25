import express from 'express'
var router = express.Router()

import usersRouter from './controllers/users.js'
import loginRouter from './controllers/login.js'
// import singupRouter from './controllers/signup-auth.js'

router.use("/users", usersRouter)
router.use("/login", loginRouter)
// router.use("/signup", singupRouter)

export default router