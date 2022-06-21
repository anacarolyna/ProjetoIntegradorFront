import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user:User = new User()
  idUser: number

  confirmarSenha: string

  
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.alertas.showAlertInfo('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/home'])
    }
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmaSenha(event:any){
    this.confirmarSenha = event.target.value
  }

  atualizar(){

    if(this.user.senha != this.confirmarSenha){
      this.alertas.showAlertDanger('As senhas não conferem')
    } else {
      if(this.user.foto == ''){
        this.user.foto = 'https://i.imgur.com/rOmhIOT.png'
      }
      this.authService.editar(this.user).subscribe((resp:User)=>{
        this.user = resp
        console.log(this.user.nome)
        console.log(this.user.id)
        this.router.navigate(['/login'])
        this.alertas.showAlertSuccess('Usuario atualizado, faça login novamente!')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        
      })
    }

  }

  findByIdUser(id: number) {

    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }
}
