"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sendMail = (email, mailSubject, body) => {
    const mailData = {
        from: process.env.MYEMAIL,
        to: email,
        subject: mailSubject,
        text: body
    };
    const transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MYEMAIL,
            pass: process.env.MYPASS || ""
        }
    });
    transporter.sendMail(mailData, async (err, info) => {
        if (err) {
            console.log(err);
            return false;
        }
        else {
            console.log("Mail sent");
            return true;
        }
    });
    return true;
};
exports.sendMail = sendMail;
