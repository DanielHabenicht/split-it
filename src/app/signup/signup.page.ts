import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  public email: string;
  public password: string;
  public displayName: string;
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  public signUp() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(user => {
      user.user.updateProfile({
        displayName: this.displayName,
        photoURL: null
      });
      this.router.navigate(['home']);
    });
  }
}
