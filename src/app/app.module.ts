import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { TitleComponent } from './title/title.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SidescrollComponent } from './sidescroll/sidescroll.component';
import { LocationsZoomedOutComponent } from './locations-zoomed-out/locations-zoomed-out.component';
import { TimeGifComponent } from './time-gif/time-gif.component';
import { RoutesZoomedOutComponent } from './routes-zoomed-out/routes-zoomed-out.component';
import { RoutesZoomedInComponent } from './routes-zoomed-in/routes-zoomed-in.component';
import { NetMovesComponent } from './net-moves/net-moves.component';
import { DistributionsComponent } from './distributions/distributions.component';
import { PassholderComponent } from './passholder/passholder.component';
import { CreditsComponent } from './credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    TitleComponent,
    SidescrollComponent,
    LocationsZoomedOutComponent,
    TimeGifComponent,
    RoutesZoomedOutComponent,
    RoutesZoomedInComponent,
    NetMovesComponent,
    DistributionsComponent,
    PassholderComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
