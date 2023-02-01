import { VehicleMockService } from "src/app/shared/services/vehicle/vehicle-mock.service";
import { VehicleService } from './../app/shared/services/vehicle/vehicle.service';

export const environment = {
  production: true,
  providers: [{provide: VehicleMockService, useValue: VehicleService}]
};
