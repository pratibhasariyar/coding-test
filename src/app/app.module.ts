import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXDetailsComponent } from './space-xdetails/space-xdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { MissionDataService } from './mission-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MissionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
