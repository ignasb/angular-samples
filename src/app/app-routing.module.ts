import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { TransitionsComponent } from './animations/transitions/transitions.component';
import { ContentProjectionComponent } from './ngfeatures/content-projection/content-projection.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'animations',
  pathMatch: 'full'
}, {
  path: 'animations',
  component: AnimationsComponent,
  data: {
    transitionState: 'AnimationsPage'
  }
}, {
  path: 'transitions',
  component: TransitionsComponent,
  data: {
    transitionState: 'TransitionsPage'
  }
}, {
  path: 'content-projection',
  component: ContentProjectionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
