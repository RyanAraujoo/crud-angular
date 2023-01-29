import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';



@NgModule({
  declarations: [
    QueryComponent,
    RegistrationComponent,
    HomeComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
      QueryComponent,
      RegistrationComponent,
      HomeComponent
  ]
})
export class HomeModule { }
