import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  mailOutline, lockClosedOutline, eyeOutline, eyeOffOutline,
  checkmarkOutline, walletOutline, businessOutline,
  cardOutline, ellipsisHorizontalOutline
} from 'ionicons/icons';
import {
  IonContent, IonButton, IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink,
    IonContent, IonButton, IonIcon
  ],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {
    addIcons({
      mailOutline, lockClosedOutline, eyeOutline, eyeOffOutline,
      checkmarkOutline, walletOutline, businessOutline,
      cardOutline, ellipsisHorizontalOutline
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    // Hardcoded credentials for static demo
    const validEmail = 'bumaya';
    const validPassword = 'legapay123';

    if (this.email === validEmail && this.password === validPassword) {
      this.router.navigate(['/tabs/home']);
    } else {
      alert('Invalid email or password.\n\nUse:\nEmail: student@legapay.ph\nPassword: legapay123');
    }
  }

  forgotPassword() {
    alert('A password reset link will be sent to your email.');
  }
}