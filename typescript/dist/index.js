"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const express_1 = __importDefault(require("express"));
let client = null;
const app = (0, express_1.default)();
const puerto = 3000;
class Alumno {
    constructor(n, e, nm) {
        this.nombre = n;
        this.edad = e;
        this.notaMedia = nm;
    }
}
app.get('/alumnos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnos = yield client.db('universidad').collection('alumnos').find().toArray();
    res.json(alumnos);
}));
app.listen(puerto, () => __awaiter(void 0, void 0, void 0, function* () {
    client = new mongodb_1.MongoClient('mongodb://127.0.0.1');
    yield client.connect();
    console.log('La api está en marcha');
}));
//# sourceMappingURL=index.js.map