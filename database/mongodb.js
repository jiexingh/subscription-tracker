import mongoose from "mongoose";

import { NODE_ENV, DB_URI  } from "../config/env.js";

if(!DB_URI){
    throw new Error("Please define the MongoDB URL environment variable inside .env<development/production>.local");
}

const connectToDatabase = async () => { 
    try {
        console.log(`Connecting to MongoDB in ${NODE_ENV} mode...`);
        
        await mongoose.connect(DB_URI);

        console.log(`Connected to MongoDB in ${NODE_ENV} mode`);
    } catch (error) {
        console.error("Error connecting to database: ", error);

        process.exit(1);
    }
};

export default connectToDatabase;