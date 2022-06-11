import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if(environment.token == ''){
      this.appComponent.auth.deslogado
    }
  }
}
