"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.static(path_1.default.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path_1.default.join(__dirname,'dist', 'index.html')));
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/test', (req, res) => {
    res.send('This is a test route.');
});
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
