import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { checkmarkDoneOutline, checkmarkCircleOutline, alarmOutline, informationCircleOutline, warningOutline } from 'ionicons/icons';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonButton, IonIcon, IonContent
} from '@ionic/angular/standalone';

interface Notification {
  title: string;
  message: string;
  time: string;
  icon: string;
  iconBg: string;
  read: boolean;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonContent],
})
export class NotificationsPage {

  notifications: Notification[] = [
    {
      title: 'Payment Successful',
      message: 'Your payment of ₱6,000 was received. Receipt #LP-001 has been generated.',
      time: 'Today, 10:32 AM',
      icon: 'checkmark-circle-outline',
      iconBg: 'green-bg',
      read: false,
    },
    {
      title: 'Due Date Reminder',
      message: 'Your next payment of ₱13,000 is due on May 31, 2024. Pay on time to avoid penalties.',
      time: 'Today, 8:00 AM',
      icon: 'alarm-outline',
      iconBg: 'orange-bg',
      read: false,
    },
    {
      title: 'New Fee Posted',
      message: 'A new miscellaneous fee of ₱500 has been added to your account for SY 2023–2024.',
      time: 'Yesterday, 3:15 PM',
      icon: 'information-circle-outline',
      iconBg: 'blue-bg',
      read: false,
    },
    {
      title: 'Overdue Notice',
      message: 'Your payment was due on April 30, 2024. Please settle your balance to avoid late fees.',
      time: 'May 1, 2024',
      icon: 'warning-outline',
      iconBg: 'red-bg',
      read: true,
    },
    {
      title: 'Payment Successful',
      message: 'Your payment of ₱4,000 was received. Receipt #LP-002 has been generated.',
      time: 'Mar 2, 2024',
      icon: 'checkmark-circle-outline',
      iconBg: 'green-bg',
      read: true,
    },
    {
      title: 'Due Date Reminder',
      message: 'Your next payment is due in 7 days. Make sure to prepare your payment method.',
      time: 'Feb 23, 2024',
      icon: 'alarm-outline',
      iconBg: 'orange-bg',
      read: true,
    },
  ];

  get unreadCount() {
    return this.notifications.filter(n => !n.read).length;
  }

  markAllRead() {
    this.notifications = this.notifications.map(n => ({ ...n, read: true }));
  }

  constructor() {
    addIcons({ checkmarkDoneOutline, checkmarkCircleOutline, alarmOutline, informationCircleOutline, warningOutline });
  }
}