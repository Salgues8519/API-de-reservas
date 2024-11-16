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