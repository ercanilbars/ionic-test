import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutService} from '../../providers/about.service';
import {About} from '../../entities/about';
import {AboutdetailPage} from '../aboutdetail/aboutdetail';
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[AboutService]
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public aboutService:AboutService) {
  
  }
  abouts:About[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.getAbout();
  }
  getAbout()
  {
    
    this.aboutService.getAbout().subscribe(p=>{
      this.abouts=p
  
    });
  }
  itemTapped(event,about)
  {
    this.navCtrl.push(AboutdetailPage,{item:about})
  }
}
