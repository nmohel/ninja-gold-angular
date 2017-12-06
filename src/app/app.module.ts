import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { ActLogComponent } from './act-log/act-log.component';

import { GoldService } from './gold.service';


@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    ActLogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
