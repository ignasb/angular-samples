import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OpenCloseComponent } from './open-close/open-close.component';
import { TransitionsComponent } from './transitions/transitions.component';
import { SimpleSliderComponent } from './simple-slider/simple-slider.component';
import { FadeInComponent } from './fade-in/fade-in.component';
import { AnimatedSquareComponent } from './animated-square/animated-square.component';
import { StaggeredAnimatedListComponent } from './staggered-animated-list/staggered-animated-list.component';
import { SimpleButtonAnimationComponent } from './simple-button-animation/simple-button-animation.component';


@NgModule({
  declarations: [
    AnimationsComponent,
    OpenCloseComponent,
    TransitionsComponent,
    SimpleSliderComponent,
    FadeInComponent,
    AnimatedSquareComponent,
    StaggeredAnimatedListComponent,
    SimpleButtonAnimationComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    AnimationsComponent
  ]
})
export class AnimationsModule { }
