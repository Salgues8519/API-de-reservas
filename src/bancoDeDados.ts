export type TReservas = {
    id:string
    tipo: string
    destino: string
    data: number
    mes:number
    ano:number
    statusCheckIn:boolean
}

export const reservas:TReservas[] = []