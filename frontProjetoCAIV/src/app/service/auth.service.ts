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
  ) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };
  
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  entrar(userLogin: Userlogin): Observable<Userlogin>{
    return this.http.post<Userlogin>('https://projetocaiv.herokuapp.com/usuario/logar', userLogin)
  }  

  cadastrar(user: User):Observable <User> {
    return this.http.post <User> ('https://projetocaiv.herokuapp.com/usuario/cadastrar', user)
  }

  logado() {
    var ok: boolean = false

    if(environment.token != '') {
      ok = true
    }

    return ok
  }

  deslogado(){
    var okay: boolean = false

    if(environment.token == '') {
      okay = true
    }
    return okay
  }
}
