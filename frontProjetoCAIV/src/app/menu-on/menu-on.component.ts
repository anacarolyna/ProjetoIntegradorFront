import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-on',
  templateUrl: './menu-on.component.html',
  styleUrls: ['./menu-on.component.css']
})
export class MenuOnComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit(){

    this.fotoUsuario()
  }

  //zera os valores das variáveis globais e redireciona para tela de login
  sair(){
    this.router.navigate(['/home'])
    environment.foto = ''
    environment.nome = ''
    environment.token = ''
    environment.id = 0
  }

  fotoUsuario(){
    if(this.foto == ''){
      this.foto = "https://i.imgur.com/rOmhIOT.png"
    }
    return this.foto
  }
}

