import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, HowitworkComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
