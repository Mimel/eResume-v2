import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ProjListComponent } from './project-list.component';
import { ProjDisplayComponent } from './project-display.component';
import { ProjectData } from './project.retrieval.service';

import { AngularFittextModule } from 'angular-fittext';

@NgModule({
  declarations: [
    ProjListComponent,
    ProjDisplayComponent
  ],
  imports: [
    AngularFittextModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ProjectData],
  bootstrap: [ProjListComponent, ProjDisplayComponent]
})
export class AppModule { }
