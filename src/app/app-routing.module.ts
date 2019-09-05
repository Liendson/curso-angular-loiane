import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './rotas/home/home.component';
import { LoginComponent } from './rotas/login/login.component';
import { CursoDetalheComponent } from './rotas/cursos/curso-detalhe/curso-detalhe.component';
import { RotasCursosComponent } from './rotas/cursos/cursos.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  // {path: 'cursos', loadChildren: './cursos/cursos.module'},
  // configuração de lazy loading
  { path: 'data-form', component: DataFormComponent },
  { path: 'template-form', component: TemplateFormComponent },
  // {path: 'cursos', component: RotasCursosComponent},
  // {path: 'curso/:id', component: CursoDetalheComponent},
  // {path: 'login', component: LoginComponent},
  { path: '', component: DataFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
