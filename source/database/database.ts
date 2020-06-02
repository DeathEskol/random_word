// Imports
import mongose, { ConnectionOptions } from 'mongoose';
import * as dotenv from 'dotenv';

// Initializations
dotenv.config();

const dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

// Main
mongose.connect(<string>process.env.DATABASE_URI, dbOptions);
//mongose.connect(<string>process.env.DATABASE_URI || 'mongodb://localhost/random_word' , dbOptions);
const connection = mongose.connection;

connection.once('open', () => {
    console.log(`Connection stablished.`);
});

connection.on('error', (error: any) => {
    console.log(error);
    process.exit(0);
});