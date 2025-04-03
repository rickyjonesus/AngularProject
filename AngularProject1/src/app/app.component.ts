import { Component } from '@angular/core';
import { MixpanelService } from './MixPanelService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject1';

  constructor(private mixpanelService: MixpanelService) { }

  trackEvent() {
    this.mixpanelService.track('Button Clicked', { button: 'example-button' });
  }

  clickedEvent() {

    this.trackEvent();
  }


}
