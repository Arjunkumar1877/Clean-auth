import mongoose from "mongoose";


const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://arjuntech177:702511@cluster0.gg8uon1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Clean_Code");
        console.log("MongoDb connected")
    } catch (error) {
        console.log("error connecting mongodb")
    }
}


export default connectDB;
