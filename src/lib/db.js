import mongoose from 'mongoose';

const DB_URL = process.env.MongoDB_URL;

if (!DB_URL) {
    console.log("Please add your Mongo URI to .env.local");
}

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) return;

    mongoose.connect(DB_URL)
        .then(
            () => console.log('✅ Mongo DB is Connected!')
            && (isConnected = true)
        ).catch(
            err => console.log('❌ Mongo DB is not Connected!', err.message)
        );
};