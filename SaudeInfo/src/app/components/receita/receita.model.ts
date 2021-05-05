import { Time } from "@angular/common";

export interface RECEITA{
    REMEDIO: string
    TEMPO: number
    DURACAO: number
    INICIO?: Date
    HORARIO?: Time
}
export class Alarme{
    remedio: string
    data: string
    horario: string
}