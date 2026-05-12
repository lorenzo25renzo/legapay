import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  personOutline, idCardOutline, mailOutline, callOutline,
  schoolOutline, lockClosedOutline, eyeOutline, eyeOffOutline,
  personAddOutline, alertCircleOutline, checkmarkCircleOutline
} from 'ionicons/icons';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { AuthService } from '../../services/auth.service';

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
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    addIcons({
      personOutline, idCardOutline, mailOutline, callOutline,
      schoolOutline, lockClosedOutline, eyeOutline, eyeOffOutline,
      personAddOutline, alertCircleOutline, checkmarkCircleOutline
    });
  }

  togglePassword() { this.showPassword = !this.showPassword; }
  toggleConfirm() { this.showConfirm = !this.showConfirm; }

  register() {
    this.errorMessage = '';
    this.successMessage = '';

    // Validations
    if (!this.fullName.trim()) {
      this.errorMessage = 'Please enter your full name.'; return;
    }
    if (!this.studentId.trim()) {
      this.errorMessage = 'Please enter your Student ID.'; return;
    }
    if (!this.email.trim() || !this.email.includes('@')) {
      this.errorMessage = 'Please enter a valid email address.'; return;
    }
    if (!this.mobile.trim()) {
      this.errorMessage = 'Please enter your mobile number.'; return;
    }
    if (!this.course.trim()) {
      this.errorMessage = 'Please enter your course and year level.'; return;
    }
    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters.'; return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match. Please try again.'; return;
    }
    if (!this.agreedToTerms) {
      this.errorMessage = 'Please agree to the Terms & Conditions to continue.'; return;
    }

    this.isLoading = true;

    setTimeout(() => {
      const result = this.authService.register({
        fullName: this.fullName.trim(),
        studentId: this.studentId.trim(),
        email: this.email.trim(),
        mobile: this.mobile.trim(),
        course: this.course.trim(),
        password: this.password,
        createdAt: new Date().toLocaleDateString('en-PH', {
          year: 'numeric', month: 'long', day: 'numeric'
        })
      });

      this.isLoading = false;

      if (result.success) {
        this.successMessage = `Account created! Welcome, ${this.fullName.split(' ')[0]}! Please log in.`;
        // Go to login after short delay
        setTimeout(() => {
          this.router.navigate(['/login'], { replaceUrl: true });
        }, 2000);
      } else {
        this.errorMessage = result.message;
      }
    }, 700);
  }
}