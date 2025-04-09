import mongoose from "mongoose";

const carDetailsSchema = new mongoose.Schema({
    brand: String ,
    model: String,
    year: Number,
    price:Number,
    fuelType: String,
    seatingCapacity: Number ,
    imageUrl:String ,
    description: String
});
const CarsDetails = mongoose.model("CarDetails", carDetailsSchema);
export default CarsDetails;