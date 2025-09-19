import mongoose from 'mongoose';

const DB_URL = process.env.MONGODB_URI || process.env.MongoDB_URL;

if (!DB_URL) {
    console.log("Please add your Mongo URI to .env.local");
}

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(DB_URL);
        isConnected = true;
        console.log('✅ Mongo DB is Connected!');
    } catch (err) {
        console.log('❌ Mongo DB is not Connected!', err.message);
        throw err;
    }
};