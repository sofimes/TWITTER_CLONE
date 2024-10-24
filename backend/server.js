import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js"
import cookieParser from "cookie-parser";

dotenv.config()
const app=express();

const port=process.env.PORT || 5500

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/api/auth",authRoutes);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    connectMongoDB();
})