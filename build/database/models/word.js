"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const mongoose_1 = require("mongoose");
// Schema
const wordSchema = new mongoose_1.Schema({
    word: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
}, {
    collection: 'words'
});
// Exports
exports.default = mongoose_1.model('Word', wordSchema);
