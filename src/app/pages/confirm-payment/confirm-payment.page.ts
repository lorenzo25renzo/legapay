import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  chatbubbleEllipsesOutline, fingerPrintOutline, shieldCheckmarkOutline,
  lockClosedOutline, checkmarkCircle, ellipseOutline
} from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonButton, IonIcon, IonContent, IonCard, IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.page.html',
  styleUrls: ['./confirm-payment.page.scss'],
  standalone: true,
  imports: [
    CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonBackButton, IonButton, IonIcon,
    IonContent, IonCard, IonCardContent
  ],
})
export class ConfirmPaymentPage implements OnInit {
  authMethod: string = '';
  methodLabel: string = 'E-Wallet';

  private methodMap: Record<string, string> = {
    'ewallet': 'E-Wallet (GCash / Maya)',
    'online-banking': 'Online Banking',
    'card': 'Debit / Credit Card',
    'otc': 'Over-the-Counter',
  };

  constructor(private route: ActivatedRoute) {
    addIcons({ chatbubbleEllipsesOutline, fingerPrintOutline, shieldCheckmarkOutline, lockClosedOutline, checkmarkCircle, ellipseOutline });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const method = params['method'] || 'ewallet';
      this.methodLabel = this.methodMap[method] || 'E-Wallet';
    });
  }

  selectAuth(method: string) {
    this.authMethod = this.authMethod === method ? '' : method;
  }
}