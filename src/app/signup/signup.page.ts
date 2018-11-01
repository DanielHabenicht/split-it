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
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  public signUp() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(success => {
      this.router.navigate(['home']);
    });
  }
}
