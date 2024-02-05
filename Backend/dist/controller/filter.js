"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastyear = exports.lastmonth = exports.lastweek = exports.lastday = exports.lasthour = void 0;
const users_1 = require("../model/users");
const lasthour = async (req, res) => {
    try {
        const user = await users_1.User.findById(req.id);
        const lastDayTransactions = user?.transition.filter(transaction => {
            const timenow = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })).getTime();
            const timethen = new Date(transaction.timestamp).getTime();
            const differ = timenow - timethen;
            return differ <= 60 * 60 * 1000;
        });
        res.send(lastDayTransactions);
    }
    catch (error) {
        res.status(500).send('Error retrieving last day transactions');
    }
};
exports.lasthour = lasthour;
const lastday = async (req, res) => {
    try {
        const user = await users_1.User.findById(req.id);
        const lastDayTransactions = user?.transition.filter(transaction => {
            const timenow = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })).getTime();
            const timethen = new Date(transaction.timestamp).getTime();
            const differ = timenow - timethen;
            return differ <= 24 * 60 * 60 * 1000;
        });
        res.send(lastDayTransactions);
    }
    catch (error) {
        res.status(500).send('Error retrieving last day transactions');
    }
};
exports.lastday = lastday;
const lastweek = async (req, res) => {
    try {
        const user = await users_1.User.findById(req.id);
        const lastDayTransactions = user?.transition.filter(transaction => {
            const timenow = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })).getTime();
            const timethen = new Date(transaction.timestamp).getTime();
            const differ = timenow - timethen;
            return differ <= 7 * 24 * 60 * 60 * 1000;
        });
        res.send(lastDayTransactions);
    }
    catch (error) {
        res.status(500).send('Error retrieving last day transactions');
    }
};
exports.lastweek = lastweek;
const lastmonth = async (req, res) => {
    try {
        const user = await users_1.User.findById(req.id);
        const lastDayTransactions = user?.transition.filter(transaction => {
            const timenow = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })).getTime();
            const timethen = new Date(transaction.timestamp).getTime();
            const differ = timenow - timethen;
            return differ <= 30 * 24 * 60 * 60 * 1000;
        });
        res.send(lastDayTransactions);
    }
    catch (error) {
        res.status(500).send('Error retrieving last day transactions');
    }
};
exports.lastmonth = lastmonth;
const lastyear = async (req, res) => {
    try {
        const user = await users_1.User.findById(req.id);
        const lastDayTransactions = user?.transition.filter(transaction => {
            const timenow = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })).getTime();
            const timethen = new Date(transaction.timestamp).getTime();
            const differ = timenow - timethen;
            return differ <= 360 * 24 * 60 * 60 * 1000;
        });
        res.send(lastDayTransactions);
    }
    catch (error) {
        res.status(500).send('Error retrieving last day transactions');
    }
};
exports.lastyear = lastyear;
