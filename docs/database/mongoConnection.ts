import { MongoClient } from "mongodb";

let connectionString = 'mongodb://127.0.0.1:27017/games'

if (!connectionString) {
    throw new Error('It connection string required')
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
    var _dbConnection: Promise<MongoClient> | undefined
}

if (process.env.NODE_ENV === 'development') {

    if (!global._dbConnection) {
        client = new MongoClient(connectionString)
        global._dbConnection = client.connect()

    }
    clientPromise = global._dbConnection
} else {
    client = new MongoClient(connectionString)
    clientPromise = client.connect()
}

export default clientPromise
