import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController, ToastController, AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  msg = "";
  formulario: FormGroup; 

  constructor(private formBuilder: FormBuilder, public toastController: ToastController, private router: Router, private navCtrl:NavController) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  clicou() {
    if (this.formulario.valid && 
        this.formulario.get('email').value == "teste@teste.com" &&
        this.formulario.get('senha').value == "123456") {
          this.router.navigateByUrl('/inicio');
    } else {  
      this.chamar();
  }
}

async chamar() {
  const toast = await this.toastController.create({
    message: 'Usuario Não Cadastrado',
    duration: 2000
  });
  toast.present();
}
 
}