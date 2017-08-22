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
  private drinksWeek;
  private drinksMonth;

  private smokesToday;
  private smokesWeek;
  private smokesMonth;

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad StatPage');

    this.drinksArray = [];
    this.smokesArray = [];
    this.loadStats();
  }

  getStats(array, time) {

    let number = 0;
    let currentTime = new Date();
    let currentMS = currentTime.getTime();
    
    if (time == 'today') {

      for (let entry of array) {

        if ( (currentMS - entry) < 86400000) {
          number = number + 1;
        }
      }
    }

    if (time == 'week') {

      for (let entry of array) {

        if ((currentMS - entry) < 604800000){
          number = number + 1;
        }
      }
    }

    if (time == 'month') {

      for (let entry of array) {

        if ((currentMS - entry) < 2592000000){
          number = number + 1;
        }
      }
    }

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

        this.drinksToday = "Today : " + this.getStats(this.drinksArray, 'today');
        this.drinksWeek = "Week : " + this.getStats(this.drinksArray, 'week');
        this.drinksMonth = "Month : " + this.getStats(this.drinksArray, 'month');

        this.smokesToday = "Today : " + this.getStats(this.smokesArray, 'today');
        this.smokesWeek = "Week : " + this.getStats(this.smokesArray, 'week');
        this.smokesMonth = "Month : " + this.getStats(this.smokesArray, 'month');

    });

  }

}
