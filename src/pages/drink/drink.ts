import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { Storage } from '@ionic/storage';

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

  catalog = [];
  homePage = HomePage;

  private drinks;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private databaseprovider: DatabaseProvider, private platform: Platform) {

    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
          this.loadCatalogData();
      }
    })
  }

  loadCatalogData() {
    console.log('loadCatalogData');
    this.databaseprovider.getAllOccurances().then(data => {
      this.catalog = data;
      console.log('data = ' + data);
    })
  }

  addOccurance() {

    let currentTime = new Date();

    this.databaseprovider.addOccurance(this.drinks['type'], currentTime['occurance'])
    .then(data => {
      this.loadCatalogData();
    });
    //this.catalogItem = {};

    this.presentToast(this.drinks, currentTime);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
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
