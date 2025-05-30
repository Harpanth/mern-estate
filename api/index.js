import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
dotenv.config()

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

dbConnect()

const app = express()

app.use(express.json())
app.use(cookieParser())

// Register routes before starting the server
app.use("/api/user", userRouter)
app.use("/api/auth",authRouter)
app.use("/api/listing",listingRouter);

app.use((err,req,resizeBy,next) => {    
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Serve Error'
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000!!!")
})
