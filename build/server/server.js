"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv = __importStar(require("dotenv"));
const word_1 = require("./controllers/word");
// Initializations
const server = express_1.default();
dotenv.config();
// Settings
server.set('port', process.env.PORT);
//server.set('port', process.env.PORT || 8000 );
// Middlewares
server.use(morgan_1.default('dev'));
server.use(express_1.default.urlencoded({ extended: false }));
server.use(express_1.default.json());
// Routes
server.get('/', (request, response) => { response.send('Random Word Works!'); });
server.get('/word', word_1.getWord);
server.post('/word', word_1.postWord);
// Export
exports.default = server;
