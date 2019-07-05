import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BaseComponent } from '@src/app/core/classes/BaseComponent';

@Component({
  selector: 'hmt-root',
  template: `
    <hmt-header></hmt-header>
    <hmt-wrapper [hidden]="isLoading">
      <router-outlet (activate)="handleActivate($event)"></router-outlet>
    </hmt-wrapper>
    <hmt-footer></hmt-footer>
    <hmt-loading
      [overlay]="true"
      [hidden]="!isLoading"
      [heading]="'Loading view…'"
      [message]="' '"
    ></hmt-loading>
  `,
})
export class RootComponent extends BaseComponent {
  isLoading: boolean;
  title = 'Angular Sample';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string
  ) {
    super();
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  handleActivate(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollPageToTop();
    }
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.isLoading = false;
    }
  }
}
