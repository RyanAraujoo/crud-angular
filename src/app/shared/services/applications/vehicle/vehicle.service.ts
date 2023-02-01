import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleInterfaceService } from '../../../interface/vehicle';
import { MessageCode } from '../../../model/message-code';
import { Vehicle } from '../../../model/Vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService implements VehicleInterfaceService {

constructor() { }
  setDataVehicle(vehicleObjectData: Vehicle): Observable<MessageCode> {
    throw new Error('Method not implemented.');
  }
  getDataVehicle(): Observable<Vehicle[]> {
    throw new Error('Method not implemented.');
  }
  getDataVehicleById(id: number): Observable<Vehicle> {
    throw new Error('Method not implemented.');
  }
  putDataVehicleById(id: number, data: Vehicle): Observable<MessageCode> {
    throw new Error('Method not implemented.');
  }
  getDataVehicleByPlaque(caracter: string): Observable<Vehicle[]> {
    throw new Error('Method not implemented.');
  }

}
