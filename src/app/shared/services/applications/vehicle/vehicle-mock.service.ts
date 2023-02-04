import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VehicleInterfaceService } from '../../../interface/vehicle';
import { MessageCode } from '../../../model/message-code';
import { Vehicle } from '../../../model/Vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleMockService implements VehicleInterfaceService {

  constructor(private http: HttpClient) {}

  URL: string = 'https://vehicles.ryan-araujoara1.repl.co/vehicle'

   headers = new HttpHeaders({
    'Content-Type': 'application/json', });

  setDataVehicle(vehicleObjectData: Vehicle): Observable<MessageCode> {
    console.log(vehicleObjectData);
    let options = { headers: this.headers };
   return this.http.post<MessageCode>(`${this.URL}`,vehicleObjectData,options)
  }
  getDataVehicle(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.URL}`)
  }
  getDataVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.URL}/${id}`)
  }
  putDataVehicleById(id: number, data: Vehicle): Observable<MessageCode> {
    return this.http.put<MessageCode>(`${this.URL}/${id}`,data)
  }
  getDataVehicleByPlaque(caracter: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.URL}/searchBy/${caracter}`)
  }
  deleteDataVehicleById(id: number): Observable<MessageCode> {
    return this.http.delete<MessageCode>(`${this.URL}/${id}`)
  }

}
