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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticator = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const accessSecret = process.env.ACCESS_SECRET || '';
// Authenticator middleware
const authenticator = (req, res, next) => {
    // const accessToken = req.cookies.accessToken;
    const accessToken = req.header('authorization');
    // console.log(`This is my token ${accessToken}`);
    if (!accessToken) {
        return res.status(401).send('Access token not found');
    }
    try {
        const decoded = (0, jsonwebtoken_1.verify)(accessToken.replace('Bearer ', ''), accessSecret);
        const userdata = decoded;
        req.id = userdata.id;
        next();
    }
    catch (error) {
        return res.status(403).send('Invalid token');
    }
};
exports.authenticator = authenticator;
