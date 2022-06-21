import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu-on',
  templateUrl: './menu-on.component.html',
  styleUrls: ['./menu-on.component.css']
})
export class MenuOnComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id

  constructor(
    private router: Router,
    private auth: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit(){

    this.auth.refreshToken();
    this.fotoUsuario()
  }

  //zera os valores das variáveis globais e redireciona para tela de login
  sair(){
    this.alertas.showAlertInfo('Até mais!!')
    this.router.navigate(['/home'])
    environment.foto = ''
    environment.nome = ''
    environment.token = ''
    environment.id = 0
  }

  fotoUsuario(){
    if(environment.foto == ''){
      environment.foto = "https://i.imgur.com/rOmhIOT.png"
    }
    return environment.foto
  }
}

