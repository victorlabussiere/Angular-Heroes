import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ]
})
export class AppModule { }
