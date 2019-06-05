import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit  {

  constructor( private ususario: UsuarioService, private camera: Camera) { }
  Nome;
  Email;
  Senha;
  Telefone;
  Sexo;
  Foto='./../../assets/imgs/imagem.png';
  ngOnInit() {
  }
  Cadastrar(){
    this.ususario.inserir(this.Nome,this.Email,this.Senha,this.Telefone,this.Sexo);
  }
  AbrirCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
   
  }}
