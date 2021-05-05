import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {UsuarioComponent} from "./views/usuario/usuario.component";
import {AlarmesComponent} from "./views/alarmes/alarmes.component";
import {NavComponent} from './components/template/nav/nav.component';
import {ReceitaReadComponent} from './components/receita/receita-read/receita-read.component';
import {AjudaComponent} from './views/ajuda/ajuda.component';
import {AlimentacaoComponent} from './views/alimentacao/alimentacao.component';
import {ExerciciosComponent} from './views/exercicios/exercicios.component';
import {OutrosComponent} from './views/outros/outros.component';
import {SegurancaComponent} from './views/seguranca/seguranca.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"auth",
    pathMatch:"full"
  },
  {
    path:"",
    component: NavComponent,
    children: [
    {
      path:"usuario",
      component: UsuarioComponent
    },
    {
      path:"receita-read",
      component: ReceitaReadComponent
    },
    {
      path:"alarmes",
      component: AlarmesComponent
    },
    {
      path:"home",
      component: HomeComponent
    },
    {
      path:"ajuda",
      component: AjudaComponent
    },
    {
      path:"alimentacao",
      component: AlimentacaoComponent
    },
    {
      path:"exercicios",
      component: ExerciciosComponent
    },
    {
      path:"outros",
      component: OutrosComponent
    },
    {
      path:"seguranca",
      component: SegurancaComponent
    }]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
