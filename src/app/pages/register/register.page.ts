import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  personOutline, idCardOutline, mailOutline, callOutline,
  schoolOutline, lockClosedOutline, eyeOutline, eyeOffOutline,
  personAddOutline
} from 'ionicons/icons';
import {
  IonContent, IonButton, IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink,
    IonContent, IonButton, IonIcon
  ],
})
export class RegisterPage {
  fullName: string = '';
  studentId: string = '';
  email: string = '';
  mobile: string = '';
  course: string = '';
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirm: boolean = false;
  agreedToTerms: boolean = false;

  constructor(private router: Router) {
    addIcons({
      personOutline, idCardOutline, mailOutline, callOutline,
      schoolOutline, lockClosedOutline, eyeOutline, eyeOffOutline,
      personAddOutline
    });
  }

  togglePassword() { this.showPassword = !this.showPassword; }
  toggleConfirm() { this.showConfirm = !this.showConfirm; }

  register() {
    if (!this.fullName || !this.studentId || !this.email || !this.mobile || !this.course) {
      alert('Please fill in all fields.');
      return;
    }
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    if (this.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }
    if (!this.agreedToTerms) {
      alert('Please agree to the Terms & Conditions to continue.');
      return;
    }

    // Static demo: registration always succeeds
    alert(`Account created successfully!\n\nWelcome, ${this.fullName}!\nYou can now log in with your email and password.`);
    this.router.navigate(['/login']);
  }
}