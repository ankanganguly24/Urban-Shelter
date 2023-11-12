import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json())

app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get('/', (req, res)=>{
    res.send("hello world")
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err,req,res,next) => { 
 const statusCode = err.statusCode || 500;
 const message = err.message || 'internal Server Error';
 return res.status(statusCode).json({
  success: false,
  message,
 })
 })

