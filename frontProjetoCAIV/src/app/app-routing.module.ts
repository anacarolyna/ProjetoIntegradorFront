import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UserDeleteComponent } from './delete/user-delete/user-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch:'full'},

  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: InicioComponent},


  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'user-delete/:id', component: UserDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }