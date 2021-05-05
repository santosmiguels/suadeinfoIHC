import { Injectable } from '@angular/core';
import {User} from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuarioLog: User;

  constructor() { }

  setUsu(usuario: User){
    this.usuarioLog = usuario;
  }

  getUsu(){
    return this.usuarioLog;
  }
}
