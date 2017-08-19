import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ProjListComponent } from './project-list.component';

@NgModule({
  declarations: [
    ProjListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ProjListComponent]
})
export class AppModule { }
