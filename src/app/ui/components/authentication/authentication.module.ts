import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },

]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    LoginComponent
  ]

})
export class AuthenticationModule { }
