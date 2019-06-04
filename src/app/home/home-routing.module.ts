import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { WelcomeComponent } from './welcome/welcome.component';
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'howitwork', component: HowitworkComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
