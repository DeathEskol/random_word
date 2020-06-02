// Imports
import mongose, { ConnectionOptions } from 'mongoose'
import * as dotenv from "dotenv"
dotenv.config();

// Initialization
const dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

// Main
mongose.connect(<string>process.env.DATABASE_URI, dbOptions)

const connection = mongose.connection;

connection.once('open', () => {
    console.log(`Connection stablished.`);
})

connection.on('error', (error: any) => {
    console.log(error);
    process.exit(0)
})