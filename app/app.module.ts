import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { DetailsComponent } from './details.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule, routing],
  declarations: [ AppComponent ,DashboardComponent, DetailsComponent, HeroesComponent],
  providers:    [ HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}
