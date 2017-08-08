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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage) {
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

    let checkNode = this.getData(this.currentDrink)
    if (checkNode) {
      this.setData(this.currentDrink);
    }else{

    }

    //this.setData();



    //this.storage.set('beer', currentTime);

    //let currentDrinkArray = this.storage.get(this.currentDrink);
    //let currentDrinkArray = [];
    //let currentTime = new Date();
    //let beerArray = {
      //numberBeers: '1',
      //dateDrunk: currentTime
    //}
    //currentDrinkArray.push(beerArray);
    //this.storage.set('drinkKey', currentDrinkArray);

    //let checkStat = this.storage.get('drinkKey');
    //console.log(checkStat);*/

    //console.log('this drink is ' + this.currentDrink);
    //console.log ( this.storage.get(this.currentDrink) );

    //let test = this.storage.get(this.currentDrink);
    //let parsetest = JSON.parse(data[test]).results;
    //console.log ( JSON.parse(this.storage.get(this.currentDrink)) )
    //this.navCtrl.push(this.homePage);

    //check if array exists
    //if(currentDrinkArray) {
    //  let currentTime = new Date();
      //console.log('logging a ' + this.currentDrink + ' at ' + currentTime)
    //  this.storage.set(this.currentDrink, currentTime);
  //  }else{
      //array did not exist
      //console.log('create array')
    //}

    //save to local storage
    //this.storage.set(this.currentDrink, 1);

    this.presentToast();

    //this.storage.get('beer').then((val) => {
    //  console.log(this.currentDrink + ' =', val);
    //});
  }

  setData(node) {
    let currentTime = new Date();
    this.storage.set(node, currentTime);
  }

  getData(node) {

    this.storage.get(node).then((data) => {
      console.log(data);
      return(data);
    });

  }

}
