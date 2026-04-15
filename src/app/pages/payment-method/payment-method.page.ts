import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { walletOutline, businessOutline, cardOutline, storefrontOutline, chevronForwardOutline } from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonCard, IonCardContent, IonIcon
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
  standalone: true,
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonCard, IonCardContent, IonIcon],
})
export class PaymentMethodPage {
  constructor() {
    addIcons({ walletOutline, businessOutline, cardOutline, storefrontOutline, chevronForwardOutline });
  }
}