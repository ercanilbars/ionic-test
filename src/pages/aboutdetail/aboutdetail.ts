import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {About} from '../../entities/about';
@IonicPage()
@Component({
  selector: 'page-aboutdetail',
  templateUrl: 'aboutdetail.html',
})
export class AboutdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedAbout=navParams.get('item');
  }
  selectedAbout:About;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutdetailPage');
  }
  

}
