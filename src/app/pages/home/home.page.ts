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
  constructor() {
    addIcons({ notificationsOutline, menuOutline, cardOutline, timeOutline, alarmOutline });
  }
}