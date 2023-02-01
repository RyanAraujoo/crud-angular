import { Observable } from "rxjs";
import { MessageCode } from "../model/message-code";
import { Vehicle } from "../model/Vehicle.model";

export interface VehicleInterfaceService {
  setDataVehicle(vehicleObjectData: Vehicle): Observable<MessageCode>
  getDataVehicle(): Observable<Vehicle[]>
  getDataVehicleById(id: number): Observable<Vehicle>
  putDataVehicleById(id: number, data: Vehicle): Observable<MessageCode>
  getDataVehicleByPlaque(caracter: string): Observable<Vehicle[]>
}
