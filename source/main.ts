// Imports
import server from './server/server';
import './database/database';

// Initializations

// Main
server.listen(server.get('port'));
console.log(`Server start on port ${server.get('port')}.`);