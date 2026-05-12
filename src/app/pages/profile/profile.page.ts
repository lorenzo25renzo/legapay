import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  notificationsOutline, mailOutline, callOutline, schoolOutline,
  calendarOutline, fingerPrintOutline, lockClosedOutline,
  headsetOutline, chevronForwardOutline, logOutOutline, cameraOutline,
  personOutline, idCardOutline
} from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
  IonIcon, IonContent, IonCard, IonCardContent, IonToggle
} from '@ionic/angular/standalone';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
    IonIcon, IonContent, IonCard, IonCardContent, IonToggle
  ],
})
export class ProfilePage {
  notifEnabled = true;
  bioEnabled = false;

  user: User | null = null;
  initials: string = 'U';

  constructor(private authService: AuthService, private router: Router) {
    addIcons({
      notificationsOutline, mailOutline, callOutline, schoolOutline,
      calendarOutline, fingerPrintOutline, lockClosedOutline,
      headsetOutline, chevronForwardOutline, logOutOutline, cameraOutline,
      personOutline, idCardOutline
    });
  }

  // Runs EVERY time the profile tab is opened
  ionViewWillEnter() {
    // Always read directly from localStorage — never use cached data
    const raw = localStorage.getItem('legapay_current_user');
    if (raw) {
      this.user = JSON.parse(raw);
      this.buildInitials();
    } else {
      // No session found, go back to login
      this.router.navigate(['/login'], { replaceUrl: true });
    }
  }

  buildInitials() {
    if (!this.user?.fullName) return;
    const parts = this.user.fullName.trim().split(' ').filter(p => p.length > 0);
    if (parts.length >= 2) {
      this.initials = parts[0][0].toUpperCase() + parts[parts.length - 1][0].toUpperCase();
    } else if (parts.length === 1) {
      this.initials = parts[0][0].toUpperCase();
    }
  }

  changePassword() {
    alert('Change Password feature coming soon.');
  }

  contactSupport() {
    alert('Support: support@legapay.ph\nHotline: (02) 8XXX-XXXX');
  }

  logout() {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      this.authService.logout();
      this.router.navigate(['/login'], { replaceUrl: true });
    }
  }
}