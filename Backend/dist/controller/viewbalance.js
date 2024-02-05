"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewbalance = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = require("../model/users");
const viewbalance = async (req, res) => {
    const user = await users_1.User.findById(req.id);
    if (!user) {
        res.status(400).send('Invalid user ID');
        return;
    }
    const validPassword = await bcrypt_1.default.compare(req.body.password, user.password);
    if (!validPassword) {
        res.status(400).send('Invalid password');
        return;
    }
    res.status(200).json({ balance: user.wallet });
};
exports.viewbalance = viewbalance;
