import { Injectable } from '@angular/core';
import { RECEITA } from './receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private receita: RECEITA[];

  constructor() { }

  setReceita(rec: RECEITA[]){
    this.receita = rec;
  }

  getReceita(){
    return this.receita;
  }
}
