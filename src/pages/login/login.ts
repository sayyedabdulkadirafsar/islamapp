import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  users = {
    email:"",
    password:""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public angularfiredb : AngularFireDatabase ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registerUser(){
    this.angularfiredb.list("/users/").push(this.users);
  }

}
