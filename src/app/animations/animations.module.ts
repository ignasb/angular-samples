import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OpenCloseComponent } from './open-close/open-close.component';
import { TransitionsComponent } from './transitions/transitions.component';
import { SimpleSliderComponent } from './simple-slider/simple-slider.component';
import { FadeInComponent } from './fade-in/fade-in.component';
import { AnimatedSquareComponent } from './animated-square/animated-square.component';


@NgModule({
  declarations: [
    AnimationsComponent,
    OpenCloseComponent,
    TransitionsComponent,
    SimpleSliderComponent,
    FadeInComponent,
    AnimatedSquareComponent
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
