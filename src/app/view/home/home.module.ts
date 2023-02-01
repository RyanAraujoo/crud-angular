import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryComponent } from './query/query.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { VehicleService } from 'src/app/shared/services/applications/vehicle/vehicle.service';
import { MessageModalComponent } from 'src/app/shared/components/message-modal/message-modal.component';
import { GlobalService } from 'src/app/shared/services/global.service';
import { GetByItemComponent } from 'src/app/shared/components/getByItem/getByItem.component';



@NgModule({
  declarations: [
    QueryComponent,
    RegistrationComponent,
    HomeComponent,
    PaginationComponent,
    MessageModalComponent,
    GetByItemComponent
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
  providers: [VehicleService, GlobalService]
})
export class HomeModule { }
