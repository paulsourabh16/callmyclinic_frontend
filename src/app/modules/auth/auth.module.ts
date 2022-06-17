import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/log-in/log-in.component';
import { FormGroup } from '@angular/forms';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ForgetPasswordSuccessComponent } from './components/forget-password-success/forget-password-success.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ForgetPasswordSuccessComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class AuthModule {}
