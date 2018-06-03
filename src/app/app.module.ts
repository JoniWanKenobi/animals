import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnimalsService } from './services/animals.service';


import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListingComponent } from './components/listing/listing.component';
import { ListingItemComponent } from './components/listing-item/listing-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListingComponent,
    ListingItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
