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
import { SettergetterComponent } from './chapter01/settergetter/settergetter.component';
import { LoggerComponent } from './chapter01/settergetter/logger/logger.component';
import { OnchangesComponent } from './chapter01/onchanges/onchanges.component';
import { LogsComponent } from './chapter01/onchanges/logs/logs.component';
import { TemplatevariableComponent } from './chapter01/templatevariable/templatevariable.component';
import { ChildaViewComponent } from './chapter01/templatevariable/childa/childa.component';
import { ViewchildparentComponent } from './chapter01/viewchildparent/viewchildparent.component';
import { ViewchildComponent } from './chapter01/viewchildparent/viewchild/viewchild.component';



@NgModule({
  declarations: [
    Chapter01Component,
    InputoutputComponent,
    ContainerComponent,
    ChildaViewComponent,
    ChildaComponent,
    ChildbComponent,
    ServicesComponent,
    SchildaComponent,
    SchildbComponent,
    SettergetterComponent,
    LoggerComponent,
    OnchangesComponent,
    LogsComponent,
    TemplatevariableComponent,
    ViewchildparentComponent,
    ViewchildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CookbookModule { }
