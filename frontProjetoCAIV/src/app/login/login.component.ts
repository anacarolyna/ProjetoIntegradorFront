import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Userlogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: Userlogin = new Userlogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    window.scroll(0, 0)
  }

  logar() {
    this.auth.entrar(this.userLogin).subscribe((resp: Userlogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id

      this.userLogin.foto

      this.router.navigate(['/home'])
    }, erro => {
      if (erro.status == 500 || erro.status == 401) {
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }
}
