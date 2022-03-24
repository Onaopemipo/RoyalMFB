import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { FormComponent } from './form/form.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';



@NgModule({
  declarations: [WelcomeComponent, SigninComponent, FormComponent, ShowHidePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [WelcomeComponent, SigninComponent, FormComponent, ShowHidePasswordComponent]
})
export class ComponentsModule { }
