import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  user:User = new User()
  idUser: number

  confirmarSenha: string
  nome = environment.nome
  id = environment.id

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      alert('Sua sessão expirou, faça login novamente')
      this.router.navigate(['/inicio'])
    }
    this.idUser = this.route.snapshot.params['id']

  }

  confirmaSenha(event:any){
    this.confirmarSenha = event.target.value
  }

  apagar(){
   
      this.authService.deletar(this.idUser).subscribe((resp:User)=>{
        this.user = resp

        alert ('Usuario apagado!')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        this.router.navigate(['/home'])
      })


  }

}
