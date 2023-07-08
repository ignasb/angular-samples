import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsModule } from './animations/animations.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { FeaturesNgModule } from './ngfeatures/ngfeatures.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimationsModule,
    CoreModule,
    FeaturesNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
