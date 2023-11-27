"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var color_controller_1 = require("../controllers/color.controller");
var NameRouter = (0, express_1.Router)();
NameRouter.get('/Jonas', color_controller_1.getNameJonas);
NameRouter.get('/Cesar', color_controller_1.getNameCesar);
exports.default = NameRouter;
