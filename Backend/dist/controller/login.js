"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv = __importStar(require("dotenv"));
const users_1 = require("../model/users");
dotenv.config();
const accessSecret = process.env.ACCESS_SECRET || '';
const login = async (req, res) => {
    const { username, password } = req.body;
    // Validate user input
    if (!username || !password) {
        res.status(400).send('Missing username or password');
        return;
    }
    // Find user in the database
    const user = await users_1.User.findOne({ username });
    if (!user) {
        res.status(400).send('User not found');
        return;
    }
    // Compare user email with email from the database
    if (user.email !== req.body.email) {
        res.status(400).send('Invalid email');
        return;
    }
    // Check password
    const validPassword = await bcrypt_1.default.compare(password, user.password);
    if (!validPassword) {
        res.status(400).send('Invalid password');
        return;
    }
    const accessToken = (0, jsonwebtoken_1.sign)({
        id: user._id
    }, accessSecret, { expiresIn: '30m' });
    res.cookie('accessToken', accessToken, { httpOnly: true });
    // Send token in header
    res.header('Authorization', `Bearer ${accessToken}`);
    // User is authenticated
    console.log('user logged in');
    res.status(200).json({ user, accessToken });
};
exports.login = login;
