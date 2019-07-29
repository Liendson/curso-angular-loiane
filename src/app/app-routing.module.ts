import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';
import { CursoDetalheComponent } from './rotas/cursos/curso-detalhe/curso-detalhe.component';
import { RotasCursosComponent } from './rotas/cursos/cursos.component';

const routes: Routes = [
  // {path: 'cursos', loadChildren: './cursos/cursos.module'},
  // configuração de lazy loading
  {path: 'cursos', component: RotasCursosComponent},
  {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
