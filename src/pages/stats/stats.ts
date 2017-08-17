import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {

  private stats;
  private drinksArray = [];
  private smokesArray = [];

  private drinksToday;
  private drinksWeek = "Week: 5";
  private drinksMonth = "Month: 5";

  private smokesToday = "Today: 5";
  private smokesWeek = "Week: 5";
  private smokesMonth = "Month: 5";

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad StatPage');
    this.loadStats();

  }

  getStats(array, time) {

    let number;

    if (time == 'today') {
      
    }
    //console.log('drinks = ' + this.drinksArray);
    //console.log('smokes = ' + this.smokesArray);

    //this.drinksToday = "Today: 5";

    return number

  }

  loadStats() {

    console.log('loading stats');

    this.storage.forEach( (value, key) => {

      if (value == 'beer' || value == 'wine' || value == 'liquor') {
        this.drinksArray.push( parseInt(key));
      }else{
        this.smokesArray.push( parseInt(key) );
      }

    }).then(() => {
        this.smokesToday = this.getStats(this.drinksArray, 'today');
    });

  }

}
