import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the DrinkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {

  homePage = HomePage;

  private drinks;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private platform: Platform) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

  addOccurance() {
    let currentTime = new Date();
    this.presentToast( this.drinks, currentTime);
  }

  presentToast(item, time) {
    let toast = this.toastCtrl.create({
      message: item + ' logged successfully at ' + time,
      duration: 1500
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
