import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private storage: Storage) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

  addOccurance() {
    let currentTime = new Date();
    let currentMS = currentTime.getTime();
    this.storage.set(currentMS.toString(), this.drinks);
    this.presentToast( this.drinks, currentTime);
  }

  getStorage() {

    this.storage.length().then((value) => {
      console.log('Storage length is', value);
    });

    this.storage.forEach( (value, key) => {
      console.log("drink was a", value)
      console.log("drunk at", this.convertMStoDate(key))
    });

  }

  clearStorage() {

    this.storage.clear().then(() => {
      console.log('Storage cleared');
    });

  }

  convertMStoDate(ms) {

    let dateNumber = parseInt(ms);
    let dateConv = new Date(dateNumber);

    return dateConv
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
