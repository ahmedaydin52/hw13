import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { FormsModule } from '@angular/forms';
import { OldestandlatestbookComponent } from './oldestandlatestbook/oldestandlatestbook.component';
@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    ViewbookComponent,
    OldestandlatestbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
