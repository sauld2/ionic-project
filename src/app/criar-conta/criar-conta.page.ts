import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {

  constructor( private ususario: UsuarioService) { }
  Nome;
  Email;
  Numero;
  Senha;
  ngOnInit() {
  }
  Cadastrar(){
    this.ususario.inserir(this.Nome,this.Email,this.Numero,this.Senha);
  }

}
