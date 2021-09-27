import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

import { promise} from 'protractor'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Afauth: AngularFireAuth, public alertController: AlertController) { }

  login(email: string, password: string)
  {
    return new Promise((resolve, rejected) => {
      this.Afauth.auth.signInWithEmailAndPassword(email,password).then(user => {
        resolve(user)
      }).catch(err => rejected(err));
    });
   
  }
}
