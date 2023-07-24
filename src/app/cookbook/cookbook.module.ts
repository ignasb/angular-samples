import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chapter01Component } from './chapter01/chapter01.component';
import { InputoutputComponent } from './chapter01/inputoutput/inputoutput.component';
import { ContainerComponent } from './chapter01/inputoutput/container/container.component';
import { ChildaComponent } from './chapter01/inputoutput/childa/childa.component';
import { ChildbComponent } from './chapter01/inputoutput/childb/childb.component';
import { ServicesComponent } from './chapter01/services/services.component';
import { SchildaComponent } from './chapter01/services/schilda/schilda.component';
import { SchildbComponent } from './chapter01/services/schildb/schildb.component';



@NgModule({
  declarations: [
    Chapter01Component,
    InputoutputComponent,
    ContainerComponent,
    ChildaComponent,
    ChildbComponent,
    ServicesComponent,
    SchildaComponent,
    SchildbComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CookbookModule { }
