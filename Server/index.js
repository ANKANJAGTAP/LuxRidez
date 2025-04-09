import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import ConnectDB from './Config/monogconnect.js';
import CarsDetails from './Schema/carsdetails.js';
import Contact from './Schema/contact.js';
const app=express();
dotenv.config();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://lux-ridez.vercel.app",
      
  ],
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
app.use(express.json());
app.use(bodyParser.json());



const PORT= process.env.PORT || 5000;

ConnectDB();

app.get('/cardetails',async(req,res)=>{
    const data= await CarsDetails.find();
    res.json(data);
})
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      const newMessage = await new Contact({ name, email, message });
      await newMessage.save();
      res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error, please try again later.' });
    }
  });
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
