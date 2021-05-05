import { Component, OnInit } from '@angular/core';
import { Alarme } from 'src/app/components/receita/receita.model';
import { AlarmeBuildService } from 'src/app/views/alarmes/alarme-build.service';

@Component({
  selector: 'app-alarmes',
  templateUrl: './alarmes.component.html',
  styleUrls: ['./alarmes.component.css']
})
export class AlarmesComponent implements OnInit {

  alarmes: Alarme[];
  displayedColumns = ['remedio', 'data', 'horario'];
  
  constructor(private alarmeBuildService: AlarmeBuildService) { }

  ngOnInit(): void {
    this.alarmes = this.alarmeBuildService.getAlarmes();
  }

}
