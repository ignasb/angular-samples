import { Component, ViewChild } from '@angular/core';
import { ROUTE_ANIMATION } from './constants/animations';
import { ActivatedRoute, ChildrenOutletContexts, RouterOutlet } from '@angular/router';

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

  constructor(private router: ActivatedRoute, private contexts: ChildrenOutletContexts) {
    console.log(this.router.children);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  // another approach for getting animations state
  // getRouteAnimationState() {
  //   return this.routerOutlet && this.routerOutlet.activatedRouteData && this.routerOutlet.activatedRouteData.transitionState;
  // }
}
