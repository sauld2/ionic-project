import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-propaganda',
  templateUrl: './propaganda.page.html',
  styleUrls: ['./propaganda.page.scss'],
})
export class PropagandaPage implements OnInit {

  constructor(private router:Router, private navCtrl:NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.navCtrl.back();
    }, 47000);
    
  }

}
