import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { Userlogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  
  entrar(userLogin: Userlogin): Observable<Userlogin>{
    return this.http.post<Userlogin>('https://benior-blogpessoal.herokuapp.com/usuario/logar', userLogin)
  }  

  cadastrar(user: User):Observable <User> {
    return this.http.post <User> ('https://benior-blogpessoal.herokuapp.com/usuario/cadastrar', user)
  }

  logado() {
    let ok: boolean = false

    if(environment.token != '') {
      ok = true
    }

    return ok
  }

}
