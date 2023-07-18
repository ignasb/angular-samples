import { Component, ViewChild } from '@angular/core';
import { ROUTE_ANIMATION } from './constants/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    ROUTE_ANIMATION
  ]
})
export class AppComponent {
  title = 'angular-samples';

  @ViewChild(RouterOutlet) routerOutlet: any;

  getRouteAnimationState() {
    return this.routerOutlet && this.routerOutlet.activatedRouteData && this.routerOutlet.activatedRouteData.transitionState;
  }
}
