import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {

     // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTIyhUVyrtjpUgTcguJC22WA-zhOjAbI0",
    authDomain: "banco-5cb32.firebaseapp.com",
    databaseURL: "https://banco-5cb32.firebaseio.com",
    projectId: "banco-5cb32",
    storageBucket: "banco-5cb32.appspot.com",
    messagingSenderId: "798086140442",
    appId: "1:798086140442:web:b6eb8911f2b678b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Cadastrar
  //Forma 1
  //firebase.firestore().collection('usuarios').doc('1').set({Nome:'', Email:'',Senha:'',DataNacimento:'',Telefone:'',Sexo:'',Endereco:''});
  //Forma 2
  //let doc = firebase.firestore().collection('usuarios').doc();
  //let usuario = {id: doc.id, nome:'Carlos'};
  //doc.set(usuario);

  //Editar
  //firebase.firestore().collection('usuarios').doc('informaID').set({nome:'Carlos', idade: 28});

  //Deletar
  //firebase.firestore().collection('usuarios').doc('informaID').delete();

  //Buscar
  //firebase.firestore().collection('usuarios').doc('informaID').get().then(doc => {
  //  doc.data();
  //})

  //Buscar com condição
  //firebase.firestore().collection('usuarios').where('email', '==', 'teste@teste.com').get().then(docs => {
  //    docs.forEach(doc => {
  //      doc.data(); //Cada acho valor achado
  //    })
  //})

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
   Sair() {

    this.router.navigateByUrl('/login');
   }
}
