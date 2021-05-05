import { Injectable } from '@angular/core';
import { Alarme } from 'src/app/components/receita/receita.model';
import { ReceitaService } from 'src/app/components/receita/receita.service';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class AlarmeBuildService {

  alarmes: Alarme[] = new Array;

  constructor(private receitaService: ReceitaService) { }

  setAlarme(alarme: Alarme){
    this.alarmes.push(alarme);
  }

  getAlarmes(){
    return this.alarmes.sort((a, b) => (dayjs(a.data).add(parseInt(a.horario.toString().split(":")[0]), 'hour').add(parseInt(a.horario.toString().split(":")[1]), 'minute').isAfter(dayjs(b.data).add(parseInt(b.horario.toString().split(":")[0]), 'hour').add(parseInt(b.horario.toString().split(":")[1]), 'minute')) ? 1 : -1));
  }
}
