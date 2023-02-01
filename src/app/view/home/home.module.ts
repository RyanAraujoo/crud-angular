import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { VehicleService } from 'src/app/shared/services/vehicle/vehicle.service';
import { MessageModalComponent } from 'src/app/shared/components/message-modal/message-modal.component';



@NgModule({
  declarations: [
    QueryComponent,
    RegistrationComponent,
    HomeComponent,
    PaginationComponent,
    MessageModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
      QueryComponent,
      RegistrationComponent,
      HomeComponent
  ],
  providers: [VehicleService]
})
export class HomeModule { }
