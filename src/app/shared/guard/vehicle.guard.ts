import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Vehicle } from './../model/Vehicle.model';
import { VehicleMockService } from 'src/app/shared/services/applications/vehicle/vehicle-mock.service';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class VehicleResolve implements Resolve<Vehicle> {
  constructor(private vehicleMockService: VehicleMockService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Vehicle | Observable<Vehicle> | Promise<Vehicle> {
    if (route.params && route.params['id']) {
      return this.vehicleMockService.getDataVehicleById(route.params['id'])
    }
      return of({
        id: null,
        typeTruck: '',
        registrationDate: new Date(),
        plaque: '',
        color: '',
        year: null,
        maximumWeight: null,
        typeFuel: '',
        acquisitionKm: null,
        chassis: '',
        motor: '',
        reindeer: null,
        owner: '',
        vehicleDocument: '',
        vehiclePicture: '',
        description: '',
        rulesCheck: false,
      })
  }
}
