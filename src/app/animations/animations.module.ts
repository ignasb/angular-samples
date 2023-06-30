import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OpenCloseComponent } from './open-close/open-close.component';


@NgModule({
  declarations: [
    AnimationsComponent,
    OpenCloseComponent
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
