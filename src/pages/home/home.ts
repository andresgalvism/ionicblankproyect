import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '¡Alert!',
      subTitle: 'access denied for user',
      buttons: ['OK']
    });
    alert.present();
  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Recover your email',
      message: "enter your mail",
      inputs: [
        {
          name: 'title',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            this.showAlert1(data);
          }
        }
      ]
    });
    prompt.present();
  }

  showAlert1(data) {
    let alert = this.alertCtrl.create({
      title: 'Send!',
      subTitle: 'an email was sent to '+ data['title'],
      buttons: ['OK']
    });
    alert.present();
}

}
