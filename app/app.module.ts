import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { DetailsComponent } from './details.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ BrowserModule , 
                  FormsModule, 
                  HttpModule, 
                  InMemoryWebApiModule.forRoot(InMemoryDataService), 
                  routing],
  declarations: [ AppComponent ,
                  DashboardComponent, 
                  DetailsComponent, 
                  HeroesComponent],
  providers:    [ HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
