import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsModule } from './animations/animations.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeaturesNgModule } from './ngfeatures/ngfeatures.module';
import { Animations2Component } from './animations2/animations2.component';
import { ListFilteringComponent } from './animations2/list-filtering/list-filtering.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Animations2Component,
    ListFilteringComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AnimationsModule,
    CoreModule,
    FeaturesNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
