import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from 'dotenv'

dotenv.config({ path: '../env' })
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} `)
        console.log(`\n mongo db connected !! DB HOST ${connectionInstance.connection.host}`)
    }
    catch (err) {
        console.log("Error", err);
        process.exit(1) // read about process in node.
    }
}

export default connectDB;