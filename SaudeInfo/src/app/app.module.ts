import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import{MatRadioModule} from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort'

import { HeaderComponent } from './components/template/header/header.component';
import { ReceitaReadComponent } from './components/receita/receita-read/receita-read.component';
import { NavComponent } from './components/template/nav/nav.component';

import { HomeComponent } from './views/home/home.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { AlarmesComponent } from './views/alarmes/alarmes.component';
import { UserCrudComponent } from './views/user-crud/user-crud.component';
import { SegurancaComponent } from './views/seguranca/seguranca.component';
import { ExerciciosComponent } from './views/exercicios/exercicios.component';
import { AlimentacaoComponent } from './views/alimentacao/alimentacao.component';
import { OutrosComponent } from './views/outros/outros.component';
import { AjudaComponent } from './views/ajuda/ajuda.component';
import { TopbarComponent } from './components/template/topbar/topbar.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    UsuarioComponent,
    AlarmesComponent,
    UserCrudComponent,
    ReceitaReadComponent,
    SegurancaComponent,
    ExerciciosComponent,
    AlimentacaoComponent,
    OutrosComponent,
    AjudaComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
