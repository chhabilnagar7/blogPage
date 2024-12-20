import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import authRoutes from './routes/auth.js'
import storyRoutes from './routes/stories.js'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose .connect(process.env.MONGO_URI)
.then(()=> console.log("Mongodb connected successfully"))
.catch((err)=>console.log("Errpr",err))


app.use('/api/auth',authRoutes);
app.use('/api',storyRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))