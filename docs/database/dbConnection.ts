import mongoose from "mongoose";

let stringConnection = 'mongodb://localhost:27017'

if (!stringConnection) {
    throw new Error("MongoDB connection string is required")
}

let cached = (global as any).mongoose // To avoid creating multiples db connections

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(stringConnection, {
            bufferCommands: false
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

