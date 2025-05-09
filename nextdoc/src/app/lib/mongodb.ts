import { MongoClient } from "mongodb";

let client
let clientPromise: Promise<MongoClient>

// Adicionando conexão globalmente para evitar criar
// multiplas conexões

declare global {
    var _mongoClientPromise: Promise<MongoClient>
}

/**No bloco if verificamos o ambiente que estamos desenvolvendo nosso projeto
 * se for localmente precisamos garantir que multiplas conexões com o banco de dados não
 * sejam criadas durante o hot-reload da page, para isso declaramos uma variavel global onde armazenaremos uma
 * promesa de conexão. Uma vez que temos a instância criada, compartilhamos ela
 * com uma varivel para ser utilizada internamente sem precisarmos usar a instacia do
 * codigo armazenada globalmente.
 * 
 * Caso não estejamos em um ambiente de devolvimento, a variavel global não é 
 * necessária, então criamos a instancia de conexão e a retornamos imediatamente 
 * para uso interno à aplicação.
 */

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient('mongodb://localhost:27017', {})
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient('mongodb://localhost:27017', {})
    clientPromise = client.connect()
}

export default clientPromise


