"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = require("../model/users");
const uuid_1 = require("uuid");
const SendEmail_1 = require("../Helper/SendEmail");
const generateUniqueId = () => {
    const v4options = {
        random: [
            0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36,
        ],
    };
    return (0, uuid_1.v4)(v4options);
};
const payment = async (req, res) => {
    const recipent = req.body;
    console.log(recipent);
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
    const sender = user;
    const receiver = await users_1.User.findOne({ username: recipent.recipent_username });
    if (!sender || !receiver) {
        res.status(400).send('Invalid sender or receiver');
        return;
    }
    if (sender.username === receiver.username) {
        res.status(400).send('Sender and receiver cannot be the same');
        return;
    }
    if (sender.wallet < recipent.transfer_money) {
        res.status(400).send('Insufficient balance');
        return;
    }
    try {
        sender.wallet = Number(sender.wallet) - Number(recipent.transfer_money);
        receiver.wallet = Number(receiver.wallet) + Number(recipent.transfer_money);
        const sendertransactiondata = {
            id: generateUniqueId(),
            amount: -recipent.transfer_money,
            timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
        };
        const receivertransactiondata = {
            id: generateUniqueId(),
            amount: recipent.transfer_money,
            timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
        };
        sender.transition.push(sendertransactiondata);
        receiver.transition.push(receivertransactiondata);
        await sender.save();
        await receiver.save();
        (0, SendEmail_1.sendMail)(sender.email, 'debit', ` your account is debited with Rs. ${recipent.transfer_money} amount on ${sendertransactiondata.timestamp}`);
        (0, SendEmail_1.sendMail)(receiver.email, 'credit', ` your account is credited with Rs. ${recipent.transfer_money} amount on ${receivertransactiondata.timestamp}`);
        console.log('payment done');
        res.send({
            message: "transition successful"
        });
    }
    catch (error) {
        console.log(error);
        res.send({
            message: "transition failed"
        });
    }
};
exports.payment = payment;
