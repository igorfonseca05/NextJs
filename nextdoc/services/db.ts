import { MongoClient } from 'mongodb'

let client
let clientPromise: Promise<MongoClient>

declare global {
    var _globalClientPromise: Promise<MongoClient>
}

if (process.env.NODE_ENV === 'development') {
    if (!global._globalClientPromise) {
        client = new MongoClient('mongodb://localhost:27017')
        global._globalClientPromise = client.connect()
    }
    clientPromise = global._globalClientPromise
} else {
    client = new MongoClient('mongodb://localhost:27017')
    clientPromise = client.connect()
}

export default clientPromise
