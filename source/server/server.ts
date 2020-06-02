// Imports
import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import { getWord, postWord } from './controllers/word'

// Initializations
const server = express();
dotenv.config();

// Settings
server.set('port', process.env.PORT);
//server.set('port', process.env.PORT || 8000 );

// Middlewares
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// Routes
server.get('/', (request, response) => { response.send('Random Word Works!'); });
server.get('/word', getWord);
server.post('/word', postWord);

// Export
export default server;