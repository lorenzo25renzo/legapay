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
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

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
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
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
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    this.isLoading = true;

    // Small delay to simulate processing
    setTimeout(() => {
      const result = this.authService.login(this.email, this.password);
      this.isLoading = false;

      if (result.success) {
        this.router.navigate(['/tabs/home'], { replaceUrl: true });
      } else {
        this.errorMessage = result.message;
      }
    }, 600);
  }

  forgotPassword() {
    alert('A password reset link will be sent to your registered email address.');
  }
}