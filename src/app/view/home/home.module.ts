import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    QueryComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      QueryComponent,
      RegistrationComponent,
      HomeComponent
  ]
})
export class HomeModule { }
