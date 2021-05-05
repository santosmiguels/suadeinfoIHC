import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RECEITA} from './receita.model'

@Injectable({
  providedIn: 'root'
})
export class ReceitaReadService {

  baseUrl = "http://localhost:3001/RECEITA";

  constructor(private http:HttpClient) { }

  read(){
      return this.http.get<RECEITA[]>(this.baseUrl);
  }
}
