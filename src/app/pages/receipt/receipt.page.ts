import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { checkmarkCircle, documentTextOutline, downloadOutline } from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonButton, IonIcon, IonContent, IonCard, IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
  standalone: true,
  imports: [
    RouterLink, IonHeader, IonToolbar, IonTitle, IonButtons,
    IonBackButton, IonButton, IonIcon, IonContent, IonCard, IonCardContent
  ],
})
export class ReceiptPage {
  constructor() {
    addIcons({ checkmarkCircle, documentTextOutline, downloadOutline });
  }

  viewBill() { alert('Detailed bill will be shown here.'); }
  downloadReceipt() { alert('Receipt download feature coming soon.'); }
}