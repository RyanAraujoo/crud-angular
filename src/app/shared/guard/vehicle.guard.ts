import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Vehicle } from './../model/Vehicle.model';
import { VehicleMockService } from 'src/app/shared/services/vehicle/vehicle-mock.service';
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
      return this.vehicleMockService.getDataVehicleById(route.params['id'] as number);
    }
    return of({
      id: null,
      typeTruck: '',
      registrationDate: new Date().toLocaleDateString('pt-BR'),
      plaque: '',
      color: '',
      year: 0,
      maximumWeight: 0,
      typeFuel: '',
      acquisitionKm: 0,
      chassis: '',
      motor: '',
      reindeer: 0,
      owner: '',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    });
  }
}
