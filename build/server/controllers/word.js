"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const word_1 = __importDefault(require("../../database/models/word"));
// Functions
exports.getWord = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    word_1.default.countDocuments({}, (error, count) => __awaiter(void 0, void 0, void 0, function* () {
        if (error)
            return response.status(400).json({ msg: "Can't get any word." });
        if (count <= 0)
            return response.status(400).json({ msg: "Can't get any word." });
        const word = yield word_1.default.findOne().skip(Math.floor(Math.random() * count));
        return response.status(200).json(word);
    }));
});
exports.postWord = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (!request.body.word)
        return response.status(400).json({ msg: 'Please, send your word.' });
    if (yield word_1.default.findOne({ word: request.body.word }))
        return response.status(400).json({ msg: 'This word already exists.' });
    const word = new word_1.default(request.body);
    yield word.save();
    return response.status(200).json(word);
});
