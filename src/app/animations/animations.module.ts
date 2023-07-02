import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OpenCloseComponent } from './open-close/open-close.component';
import { TransitionsComponent } from './transitions/transitions.component';


@NgModule({
  declarations: [
    AnimationsComponent,
    OpenCloseComponent,
    TransitionsComponent
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
