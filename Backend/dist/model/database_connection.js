"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//connection
async function connectToDatabase() {
    try {
        await mongoose_1.default.connect('' + process.env.DB_CONNECT);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
exports.connectToDatabase = connectToDatabase;
