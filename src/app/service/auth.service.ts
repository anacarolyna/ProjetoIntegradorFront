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
    // return this.http.post<Userlogin>('http://localhost:8080/usuario/logar', userLogin)
  }  

  editar(user:User): Observable<User>{
    return this.http.post<User>('https://projetocaiv.herokuapp.com/usuario/atualizar', user, this.token)
    // return this.http.put<User>('http://localhost:8080/usuario/atualizar', user, this.token)
  }

  deletar(id:number): Observable<User>{
    return this.http.delete<User>(`https://projetocaiv.herokuapp.com/usuario/${id}`, this.token)
    // return this.http.delete<User>(`http://localhost:8080/usuario/${id}`, this.token)
  }

  cadastrar(user: User):Observable <User> {
    return this.http.post <User> ('https://projetocaiv.herokuapp.com/ usuario/cadastrar', user)
    //return this.http.post <User> ('http://localhost:8080/usuario/cadastrar', user)
  }

  getByIdUser(id: number): Observable<User>{   
    return this.http.get<User>(`https://projetocaiv.herokuapp.com/usuario/${id}`, this.token) 
    //return this.http.get<User>(`http://localhost:8080/usuario/${id}`, this.token)
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
