import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as mixpanel from 'mixpanel-browser';

@Injectable({
  providedIn: 'root'
})
export class MixpanelService {
  private mixpanelToken: string;

  constructor() {
    this.mixpanelToken = environment.mixpanelToken;
    this.init();
  }

  init(): void {
    mixpanel.init(this.mixpanelToken);
  }

  track(eventName: string, properties?: any): void {
    mixpanel.track(eventName, properties);
  }

  identify(userId: string): void {
    mixpanel.identify(userId);
  }

  alias(userId: string): void {
    mixpanel.alias(userId, mixpanel.get_distinct_id());
  }
}
