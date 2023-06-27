import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent } from './animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class AnimationsModule { }
