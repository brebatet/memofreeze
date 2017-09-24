import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-freeze-list',
  templateUrl: 'freeze-list.html',
})
export class FreezeListPage {
  items: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthProvider, public db: AngularFireDatabase) {
    this.items = this.db.list('/freezes');
  }

  logoutUser() {
    this.authData.logoutUser()
      .then(authData => { this.navCtrl.setRoot('LoginPage'); });
  }

  addItem() {
    this.items.push({
      name: 'Courgette'
    });
  }

}
