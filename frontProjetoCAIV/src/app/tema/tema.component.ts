import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';
import { PostagemService } from '../service/postagem.service';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {


  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()
  listaPostagens: Postagem[]
  listaTemas: Tema[]

  idTema: number
  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private http: HttpClient

  ) {}

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(["/login"])
      
    }

    this.findAllTemas()
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe(
      (resp: Tema[]) =>{
      this.listaTemas = resp
      },
    );
  }

  cadastrar() {
      this.temaService.postTema(this.tema).subscribe({
      next: (resp: Tema) =>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!') // Mensagem pro usuário
      this.findAllTemas()
      this.tema = new Tema // Zera o campo após cadastrar um tema
      },
    });
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.router.navigate(['/inicio'])
      this.getAllPostagens()
    })
  }
}
