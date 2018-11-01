import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  public login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(success => {
      this.router.navigate(['home']);
    });
  }
}
