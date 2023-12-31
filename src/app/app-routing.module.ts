import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { TransitionsComponent } from './animations/transitions/transitions.component';
import { ContentProjectionComponent } from './ngfeatures/content-projection/content-projection.component';
import { Animations2Component } from './animations2/animations2.component';
import { Chapter01Component } from './cookbook/chapter01/chapter01.component';
import { Chapter02Component } from './cookbook/chapter02/chapter02.component';
import { Chapter03Component } from './cookbook/chapter03/chapter03.component';

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
  path: 'chapter01',
  component: Chapter01Component,
  data: {
    animation: 'chapter01'
  }
}, {
  path: 'chapter02',
  component: Chapter02Component,
  data: {
    animation: 'chapter01'
  }
}, {
  path: 'chapter03',
  component: Chapter03Component,
  data: {
    animation: 'chapter01'
  }
},
{
  path: 'content-projection',
  component: ContentProjectionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
