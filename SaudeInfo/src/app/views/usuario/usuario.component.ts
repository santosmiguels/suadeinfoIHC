import { Component, OnInit } from '@angular/core';
import { User } from '../user-crud/user.model';
import { UserService } from '../user-crud/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usuario = this.userService.getUsu();
  }

  atualizarUsu(){
    this.userService.setUsu(this.usuario);
  }

}
