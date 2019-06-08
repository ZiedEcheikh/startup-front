import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../tools/material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [UserComponent, LoginComponent, ProfileComponent, SignupComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule
  ]
})
export class UserModule { }
