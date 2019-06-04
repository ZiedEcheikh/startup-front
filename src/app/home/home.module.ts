import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [HomeComponent, HowitworkComponent, WelcomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
