import mongoose from "mongoose";

const url = process.env.URL_DB

if(!url) {
    throw new Error('Defina a string de conexão com o banco de dados')
}

interface MongooseCache {
    conn: mongoose.Connection | null,
    promise: Promise<mongoose.Connection> | null
}

let cached: MongooseCache = (global as any).mongoose

