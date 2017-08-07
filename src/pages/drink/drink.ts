import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

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

  private currentDrink: string = 'beer';
  homePage = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Drink logged successfully',
      duration: 1500
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  drinkType(drink) {
    this.currentDrink = drink;
  }

  submitDrink() {
    console.log('this drink is ' + this.currentDrink);
    this.navCtrl.push(this.homePage);
    //save to local storage
    this.storage.set(this.currentDrink, 1);
    this.presentToast();

    this.storage.get(this.currentDrink).then((val) => {
      console.log(this.currentDrink + ' =', val);
    });
  }

}
