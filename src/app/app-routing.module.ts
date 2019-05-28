import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'criar-conta', loadChildren: './criar-conta/criar-conta.module#CriarContaPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },  { path: 'categoria', loadChildren: './categoria/categoria.module#CategoriaPageModule' },
  { path: 'support', loadChildren: './support/support.module#SupportPageModule' },
  { path: 'propaganda', loadChildren: './propaganda/propaganda.module#PropagandaPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
