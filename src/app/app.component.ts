import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade';
  constructor(public router:Router) { }

 

  async rotaPrincipal(){
    this.router.navigate([ 'telaprincipalC']);
  }
  async rotaDescricao(){
    this.router.navigate([ 'descricaoC']);
  }
}
