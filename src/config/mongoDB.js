const mongoose = require('mongoose');
dotenv.config();

const URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error("MongDB connection error:" ,error.message);
        process.exit(1);
    }
}

module.exports = connectDB;