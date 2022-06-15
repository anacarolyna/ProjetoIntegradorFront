import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserDeleteComponent } from './delete/user-delete/user-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuOnComponent } from './menu-on/menu-on.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch:'full'},

  {path:'login', component: LoginComponent},
  {path:'cadastro', component: CadastroComponent},

  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: InicioComponent},

  {path: 'user-edit/:id', component: UserEditComponent},
  {path: 'user-delete/:id', component: UserDeleteComponent},
  
  {path: 'menu-on', component: MenuOnComponent},
  {path: 'tema', component: TemaComponent},

  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }