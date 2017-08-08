//import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { SmokePage } from '../smoke/smoke';
//import { DrinkPage } from '../drink/drink';

//@Component({
  //selector: 'page-home',
  //templateUrl: 'home.html'
//})
//export class HomePage {
  //smokePage = SmokePage;
  //drinkPage = DrinkPage;
  //constructor(public navCtrl: NavController) {

  //}

  //goToSmokePage() {
    //this.navCtrl.push(this.smokePage);
  //}

  //goToDrinkPage() {
    //this.navCtrl.push(this.drinkPage);
  //}

//}

import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  developer = {};
  developers = [];

  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider, private platform: Platform) {
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadDeveloperData();
      }
    })
  }

  loadDeveloperData() {
    this.databaseprovider.getAllDevelopers().then(data => {
      this.developers = data;
    })
  }

  addDeveloper() {
    this.databaseprovider.addDeveloper(this.developer['name'], this.developer['skill'], parseInt(this.developer['yearsOfExperience']))
    .then(data => {
      this.loadDeveloperData();
    });
    this.developer = {};
  }

}
