import mongoose from "mongoose";

const url = process.env.URL_DB as string 

if(!url) {
    throw new Error('Defina a string de conexão com o banco de dados')
}

interface MongooseCache {
    conn: mongoose.Connection | null,
    promise: Promise<mongoose.Connection> | null
}

let cached: MongooseCache = (global as any).mongoose

if(!cached) {
    cached = (global as any).mongoose = {conn: null, promise: null}
}

async function connectDB() {
    if(cached.conn) {
       return cached.conn 
    }

    if(!cached.promise) {
        cached.promise = mongoose.connect(url)
            .then((mongoose) => mongoose.connection)
    }

    cached.conn = await cached.promise
    return cached.conn
}

