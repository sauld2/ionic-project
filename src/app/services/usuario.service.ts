import { Injectable } from '@angular/core';
import { BancoService } from './banco.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService  {

  protected tabela:string = 'usuarios';
  inserir (Nome,Email,Senha,DataNacimento,Telefone,Sexo,Endereço){
    

}}
