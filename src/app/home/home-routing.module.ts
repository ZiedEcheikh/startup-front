import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowitworkComponent } from './howitwork/howitwork.component';
const routes: Routes = [
  { path: '', component: HowitworkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
