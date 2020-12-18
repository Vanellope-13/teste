import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade';
  constructor(public router:Router) { }

 
   rotaPrincipal(){
    this.router.navigate([ '/telaprincipalC']);
  }
  rotaDescricao(){
    this.router.navigate([ '/descricaoC']);
  }
}
