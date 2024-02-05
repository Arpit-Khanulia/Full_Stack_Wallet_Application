"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const viewbalance_1 = require("../controller/viewbalance");
const register_1 = require("../controller/register");
const login_1 = require("../controller/login");
const payment_1 = require("../controller/payment");
const auth_1 = require("../middleware/auth");
const filter_1 = require("../controller/filter");
const router = express_1.default.Router();
exports.router = router;
router
    .post('/login', login_1.login)
    .post('/register', register_1.register)
    .post('/pay', auth_1.authenticator, payment_1.payment)
    .post('/viewbalance', auth_1.authenticator, viewbalance_1.viewbalance)
    .get('/lasthour', auth_1.authenticator, filter_1.lasthour)
    .get('/lastday', auth_1.authenticator, filter_1.lastday)
    .get('/lastweek', auth_1.authenticator, filter_1.lastweek)
    .get('/lastmonth', auth_1.authenticator, filter_1.lastmonth)
    .get('/lastyear', auth_1.authenticator, filter_1.lastyear);
