import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public afAuth: AngularFireAuth, private router: Router) {}
  login() {
    this.router.navigate(['login']);
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
