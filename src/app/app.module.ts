import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnimalsService } from './services/animals.service';


import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListingComponent } from './components/listing/listing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
