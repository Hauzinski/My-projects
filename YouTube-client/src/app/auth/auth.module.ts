import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';

import { LoginPageComponent } from 'src/app/auth/pages/login/login-page.component';
import { AdminPageComponent } from 'src/app/auth/pages/admin/admin-page.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule],
  declarations: [LoginPageComponent, AdminPageComponent],
  providers: [],
})
export class AuthModule {}
