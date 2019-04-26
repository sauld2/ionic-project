import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BancoService } from './banco.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BancoService {

  protected tabela:string = 'usuarios';
  inserir (Nome,Email,Numero,Senha){
      this.getDB().then((db:SQLiteObject)=>{
        db.executeSql("INSERT INTO usuarios(Nome,Email,Numero,Senha) Values (?,?,?,?)", [Nome,Email,Numero,Senha])
      }, (error) =>{console.error("Unable to open database", error);
    })}
}
