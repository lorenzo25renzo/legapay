import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  walletOutline, businessOutline, cardOutline,
  phonePortraitOutline, handLeftOutline
} from 'ionicons/icons';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonIcon],
})
export class SplashPage implements OnInit {

  // State flags
  readyToTap: boolean = false;   // shows "tap to continue" label
  animating: boolean = false;    // shows loading bar + animations
  loadProgress: number = 0;      // loading bar 0–100

  private tapped: boolean = false;
  private progressInterval: any;

  constructor(private router: Router, private zone: NgZone) {
    addIcons({ walletOutline, businessOutline, cardOutline, phonePortraitOutline, handLeftOutline });
  }

  ngOnInit() {
    // Step 1: After a short delay, show the logo with entrance animation
    // then pause and wait for the user to tap
    setTimeout(() => {
      this.zone.run(() => {
        this.animating = true; // triggers CSS animate-in classes

        // After entrance animation finishes, go to paused state
        setTimeout(() => {
          this.zone.run(() => {
            this.animating = false;
            this.readyToTap = true; // show "tap anywhere to continue"
          });
        }, 900);
      });
    }, 400);
  }

  onTap() {
    // Ignore extra taps
    if (this.tapped || !this.readyToTap) return;
    this.tapped = true;
    this.readyToTap = false;

    // Start loading bar animation
    this.animating = true;
    this.loadProgress = 0;

    // Simulate loading progress 0 → 100
    this.progressInterval = setInterval(() => {
      this.zone.run(() => {
        this.loadProgress += Math.floor(Math.random() * 8) + 4;
        if (this.loadProgress >= 100) {
          this.loadProgress = 100;
          clearInterval(this.progressInterval);

          // Navigate to login after bar completes
          setTimeout(() => {
            this.router.navigate(['/login'], { replaceUrl: true });
          }, 400);
        }
      });
    }, 80);
  }
}