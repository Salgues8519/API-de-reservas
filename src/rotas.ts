import { Router } from "express";
import { criarReserva, fraseAPI } from "./controladores";

const rotas = Router()

rotas.get('/',fraseAPI)
rotas.post('/reservas', criarReserva)



export default rotas