"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var error_middleware_1 = __importDefault(require("./middleware/error.middleware"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var port = 3000;
app.use('/api', index_1.default);
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.use(error_middleware_1.default);
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
