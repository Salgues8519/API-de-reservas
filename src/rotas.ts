import { Router } from "express";
import { atualizarReserva, criarReserva, detalharReserva, excluirReserva, fraseAPI, listarReserva } from "./controladores";

const rotas = Router()

rotas.get('/',fraseAPI)
rotas.post('/reservas', criarReserva)
rotas.get('/reservas', listarReserva)
rotas.get('/reservas/:id', detalharReserva)
rotas.put('/reservas/:id', atualizarReserva)
rotas.delete('reservas/:id', excluirReserva)

export default rotas