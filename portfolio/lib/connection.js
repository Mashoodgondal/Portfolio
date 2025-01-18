
import mongoose from 'mongoose'
const connectionStr = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.bgo9m.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0`
const connectionDB = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }
    try {
        mongoose.connect(connectionStr)
    } catch (error) {
        console.log("Error to connecting database", error);

    }
}

export default connectionDB
// import mongoose from 'mongoose';

// const connectionStr = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.bgo9m.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0`;
// // const connectionStr = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.bgo9m.mongodb.net/Portfolio?retryWrites=true&w=majority`;

// const connectionDB = async () => {
//     // Check if the database connection is already established
//     if (mongoose.connection.readyState === 1) {
//         console.log("Database is already connected");
//         return;
//     }

//     try {
//         await mongoose.connect(connectionStr, {
//             dbName: 'Portfolio', // Explicitly set the database name
//         })
//         console.log("Connected to the database successfully");
//     } catch (error) {
//         console.error("Error connecting to the database:", error);
//     }
// };

// export default connectionDB;
