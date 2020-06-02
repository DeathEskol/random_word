"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const server_1 = __importDefault(require("./server/server"));
require("./database/database");
// Initializations
// Main
server_1.default.listen(server_1.default.get('port'));
console.log(`Server start on port ${server_1.default.get('port')}.`);
