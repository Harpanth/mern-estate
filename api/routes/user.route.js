import express from 'express'
import { test } from '../controller/user.controller.js'
import { verifyToken } from '../utils/veriftToken.js'
// Create a router instance
const router = express.Router()

// Define a test route
router.get('/test', test)
router.post('/update/:id',verifyToken,updateUser)
router.delete('delete/:id',verifyToken,deleteUser)


// Export the router to be used in your main app
export default router

