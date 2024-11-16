import { Request, Response } from "express";
import { reservas, TReservas } from "./bancoDeDados";
import { v4 as uuid } from "uuid";

export function fraseAPI(req:Request, res:Response):any {
    return res.status(200).json({
        mensagem: 'Servidor online'
    })
}
export function criarReserva(req:Request, res:Response):any {
    const { tipo, destino, data, mes, ano, statusCheckIn } = req.body
    
    if( tipo === undefined || 
        destino === undefined || 
        data === undefined || 
        mes === undefined || 
        ano === undefined || 
        statusCheckIn === undefined){
        return res.status(400).json({
            mensagem: 'Todos os paramentros são obrigatorios'
        })
    }

    const novaReserva:TReservas = {
        id:uuid(),
        tipo,  //voo ou hotel 
        destino,
        data,
        mes,
        ano,
        statusCheckIn
    }
    reservas.push(novaReserva)
    return res.status(200).json({
        mensagem: 'Nova Reserva cadastrada com sucesso'
    }) 
}
export function listarReserva(req:Request, res:Response):any {
    return res.send(reservas)
}
export function detalharReserva(req:Request, res:Response):any {
    const { id } = req.params
    const reserva = reservas.find((item)=>{
        return item.id === id
    })
    if (!reserva){
        return res.status(404).json({
            mensagem: "Reserva não encontrada"
        })
    }
    return res.status(200).json(reserva)
}
export function atualizarReserva(req:Request, res:Response):any {
    const { id } = req.params
    const { tipo, destino, data, mes, ano, statusCheckIn } = req.body
    const reserva = reservas.find((item)=>{
        return item.id === id
    })
    if (!reserva){
        return res.status(404).json({
            mensagem: "Reserva não encontrada"
        })
    }
    reserva.tipo = tipo
    reserva.destino = destino
    reserva.data = data
    reserva.mes = mes
    reserva.ano = ano
    reserva.statusCheckIn = statusCheckIn

    return res.status(204).send()
}