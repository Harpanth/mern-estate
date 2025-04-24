import express from 'express'
import { test } from '../controller/user.controller.js'

// Create a router instance
const router = express.Router()

// Define a test route
router.get('/test', test)

// Export the router to be used in your main app
export default router
