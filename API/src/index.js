"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var color_1 = require("./routes/color");
var app = (0, express_1.default)();
var port = parseInt(process.env.PORT_API, 10) || 5000;
var hostname = '0.0.0.0';
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
// Uso de las rutas
app.use('/nombre', color_1.default);
// Activación del servidor del API
app.listen(port, hostname, function () {
    console.log("Servidor activo en el puerto ".concat(hostname, ":").concat(port));
});
