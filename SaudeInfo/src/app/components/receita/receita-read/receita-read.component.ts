import { Component, OnInit } from '@angular/core';
import { RECEITA, Alarme } from '../receita.model';
import { ReceitaReadService } from '../receita-read.service';
import { ReceitaService } from '../receita.service';
import * as dayjs from 'dayjs';
import { AlarmeBuildService } from 'src/app/views/alarmes/alarme-build.service';


@Component({
  selector: 'app-receita-read',
  templateUrl: './receita-read.component.html',
  styleUrls: ['./receita-read.component.css']
})
export class ReceitaReadComponent implements OnInit {

   receitas: RECEITA[];

  displayedColumns = ['remedio', 'inicio', 'horario'];


  constructor(private receitaReadService: ReceitaReadService, private receitaService: ReceitaService, private alarmeBuildService:AlarmeBuildService) {
    
  }


  ngOnInit(): void {
    if(!this.receitas && this.receitaService.getReceita()){
      this.receitas = this.receitaService.getReceita();
    }
  }
  
  lerQr(): void 
  {
    //Ler receita do arquivo json
    this.receitaReadService.read().subscribe(receitaRetornada => {
      if(this.receitas)
      {
        this.receitas=receitaRetornada.concat(this.receitas);
      }
      else
      {
        this.receitas=receitaRetornada;
      }
      this.receitaService.setReceita(this.receitas);
    });
  }

  criarAlarme(): void
  {
    var receituario: RECEITA[];
    //pegar apenas os remédios que tem data definida
    receituario = this.receitas.filter(el => el.INICIO != null && el.HORARIO != null)
    //Setar a receita no servico get/set
    receituario.forEach(e => {
      var dataRem = dayjs(e.INICIO).add(parseInt(e.HORARIO.toString().split(":")[0]), 'hour').add(parseInt(e.HORARIO.toString().split(":")[1]), 'minute').format('YYYY-MM-DD HH:mm');
      //Pegar os dias de duração do remédio e criar a data final
      var dataFinal = dayjs(dataRem).add(e.DURACAO, 'day').format('YYYY-MM-DD HH:mm');
      //Pegar o tempo de tomada do remédio e ir adicionando as datas até passar a data final
      do{
        var alarme: Alarme = new Alarme;
        alarme.data = dayjs(dataRem).format('DD-MM-YYYY HH:mm').split(" ")[0];
        alarme.horario = dayjs(dataRem).format('DD-MM-YYYY HH:mm').split(" ")[1];
        alarme.remedio = e.REMEDIO;
        this.alarmeBuildService.setAlarme(alarme);
        dataRem = dayjs(dataRem).add(e.TEMPO, 'hour').format('YYYY-MM-DD HH:mm');
      }while(dayjs(dataRem).isBefore(dayjs(dataFinal)) || dayjs(dataRem).isSame(dayjs(dataFinal)))
      //retirar o remedio da lista
      this.receitas = this.receitas.filter(el => el.REMEDIO != e.REMEDIO)
    })
    this.receitaService.setReceita(this.receitas);
  }
}
