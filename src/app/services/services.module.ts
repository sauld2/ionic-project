import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UsuarioService, SQLite],
  })
  
export class ServicesModule { }
