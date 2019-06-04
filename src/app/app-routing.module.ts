import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },
  { path: 'user', loadChildren: () => import(`./user/user.module`).then(m => m.UserModule) },
  { path: '', redirectTo: 'home/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
