// Imports
import { model, Schema, Document } from 'mongoose'

// Schema
const wordSchema = new Schema({
    word: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
},{
    collection: 'words'
});

// Exports
export default model<WordInterface>('Word', wordSchema);
export interface WordInterface extends Document {
    word: string
}