import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { TransitionsComponent } from './animations/transitions/transitions.component';
import { ContentProjectionComponent } from './ngfeatures/content-projection/content-projection.component';
import { Animations2Component } from './animations2/animations2.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'animations',
  pathMatch: 'full'
}, {
  path: 'animations',
  component: AnimationsComponent,
  data: {
    animation: 'AnimationsPage'
  }
}, {
  path: 'transitions',
  component: TransitionsComponent,
  data: {
    animation: 'TransitionsPage'
  }
}, {
  path: 'animations2',
  component: Animations2Component,
  data: {
    animation: 'Animations2Page'
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
