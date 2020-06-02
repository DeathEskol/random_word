// Imports
import { Request, Response } from 'express';
import Word, { WordInterface } from '../../database/models/word';

// Functions
export const getWord = async (request: Request, response: Response) => {
    Word.countDocuments({}, async (error, count) => {
        if (error) return response.status(400).json({ msg: "Can't get any word." });
        if (count <= 0) return response.status(400).json({ msg: "Can't get any word." });
        const word = await Word.findOne().skip(Math.floor(Math.random() * count));
        return response.status(200).json(word);
    })
}

export const postWord = async (request: Request, response: Response) => {
    if (!request.body.word) return response.status(400).json({ msg: 'Please, send your word.' });
    if (await Word.findOne({ word: request.body.word })) return response.status(400).json({ msg: 'This word already exists.' });
    const word = new Word(request.body);
    await word.save();
    return response.status(200).json(word);
}