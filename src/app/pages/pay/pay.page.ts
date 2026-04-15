import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { notificationsOutline, menuOutline, cardOutline, alarmOutline, lockClosedOutline } from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
  IonIcon, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
  standalone: true,
  imports: [
    RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons,
    IonButton, IonIcon, IonContent, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent
  ],
})
export class PayPage {
  constructor() {
    addIcons({ notificationsOutline, menuOutline, cardOutline, alarmOutline, lockClosedOutline });
  }
}