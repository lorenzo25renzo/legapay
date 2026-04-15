import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  notificationsOutline, mailOutline, callOutline, schoolOutline,
  calendarOutline, fingerPrintOutline, lockClosedOutline,
  headsetOutline, chevronForwardOutline, logOutOutline, cameraOutline
} from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
  IonIcon, IonContent, IonCard, IonCardContent, IonToggle
} from '@ionic/angular/standalone';

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

  constructor() {
    addIcons({
      notificationsOutline, mailOutline, callOutline, schoolOutline,
      calendarOutline, fingerPrintOutline, lockClosedOutline,
      headsetOutline, chevronForwardOutline, logOutOutline, cameraOutline
    });
  }

  changePassword() { alert('Change Password feature coming soon.'); }
  contactSupport() { alert('Support: support@legapay.ph'); }
  logout() { alert('You have been logged out.'); }
}