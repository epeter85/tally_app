import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmokePage } from '../smoke/smoke';
import { DrinkPage } from '../drink/drink';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  smokePage = SmokePage;
  drinkPage = DrinkPage;
  constructor(public navCtrl: NavController) {

  }

  goToSmokePage() {
    this.navCtrl.push(this.smokePage);
  }

  goToDrinkPage() {
    this.navCtrl.push(this.drinkPage);
  }

}
