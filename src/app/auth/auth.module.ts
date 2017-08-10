import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [LoginComponent, RegisterComponent],
  entryComponents: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
