// Imports
import express from 'express'
import morgan from 'morgan'
import * as dotenv from "dotenv"
dotenv.config();

// Initializations
const server = express()

// Settings
server.set('port', process.env.PORT)

// Middlewares
server.use(morgan('dev'))
server.use(express.urlencoded({ extended: false }))
server.use(express.json())

// Routes
server.get('/', (request, response) => {
    response.send('Random Word Works!')
});

// Export
export default server;