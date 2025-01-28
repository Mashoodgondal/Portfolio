import mongoose from 'mongoose';

const connectionStr = process.env.MONGO_URI;

const connectionDB = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("Database is already connected");
        return;
    }

    try {
        await mongoose.connect(connectionStr)
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

export default connectionDB;
