import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  notificationsOutline, menuOutline, cardOutline,
  timeOutline, alarmOutline
} from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
  IonIcon, IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent
} from '@ionic/angular/standalone';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons,
    IonButton, IonIcon, IonContent, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent
  ],
})
export class HomePage {
  user: User | null = null;
  firstName: string = 'User';

  constructor(private authService: AuthService) {
    addIcons({ notificationsOutline, menuOutline, cardOutline, timeOutline, alarmOutline });
  }

  // ✅ Runs every time Home tab becomes active
  ionViewWillEnter() {
    this.user = this.authService.getCurrentUser();
    if (this.user) {
      this.firstName = this.user.fullName.trim().split(' ')[0];
    }
  }
}