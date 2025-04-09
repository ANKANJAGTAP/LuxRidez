import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  const Contact = mongoose.model('Contact', ContactSchema);
  export default Contact;