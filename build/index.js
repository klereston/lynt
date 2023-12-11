"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./todo"));
//CREATE EXPRESS APP
const app = (0, express_1.default)();
const todo = new todo_1.default();
app.use(express_1.default.json()); // middleware transform the req.body to json
const PORT = 3000;
//CREATE END POINT                      (user: ping, app: pong)
app.get('/ping', (_req, res) => {
    console.log("someone ping here");
    res.send(todo.sayHi()); //+ new Date().toLocaleDateString())  //'pong'
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
todo.show();
