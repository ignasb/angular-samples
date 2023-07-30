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
import { DynamiccontainerComponent } from './chapter01/dynamiccontainer/dynamiccontainer.component';
import { DynamicchildaComponent } from './chapter01/dynamiccontainer/dynamicchilda/dynamicchilda.component';
import { DynamicchildbComponent } from './chapter01/dynamiccontainer/dynamicchildb/dynamicchildb.component';
import { DynamicchildcComponent } from './chapter01/dynamiccontainer/dynamicchildc/dynamicchildc.component';
import { HostDirective } from './chapter01/dynamiccontainer/host.directive';
import { Chapter02Component } from './chapter02/chapter02.component';
import { SimpleDirectiveComponent } from './chapter02/simple-directive/simple-directive.component';
import { SimpleDirectiveDirective } from './chapter02/simple-directive/simple-directive.directive';
import { StructuralDirectiveComponent } from './chapter02/structural-directive/structural-directive.component';
import { StructuralDirectiveDirective } from './chapter02/structural-directive/structural-directive.directive';
import { MultipleStructuralDirectivesComponent } from './chapter02/multiple-structural-directives/multiple-structural-directives.component';
import { Chapter03Component } from './chapter03/chapter03.component';
import { DiTokenSampleComponent } from './chapter03/di-token-sample/di-token-sample.component';



@NgModule({
  declarations: [
    HostDirective,
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
    ViewchildComponent,
    DynamiccontainerComponent,
    DynamicchildaComponent,
    DynamicchildbComponent,
    DynamicchildcComponent,
    Chapter02Component,
    SimpleDirectiveComponent,
    SimpleDirectiveDirective,
    StructuralDirectiveComponent,
    StructuralDirectiveDirective,
    MultipleStructuralDirectivesComponent,
    Chapter03Component,
    DiTokenSampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CookbookModule { }
