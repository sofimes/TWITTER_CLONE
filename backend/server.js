import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import connectMongoDB from "./db/connectMongoDB.js"
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js"
import {v2 as cloudinary} from "cloudinary"
import postRoutes from "./routes/post.route.js"
import notificationRoutes from "./routes/notification.route.js"
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
const app=express();

const port=process.env.PORT || 5500

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)
app.use("/api/notifications", notificationRoutes)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    connectMongoDB();
})