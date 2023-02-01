import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VehicleInterfaceService } from '../../../interface/vehicle';
import { MessageCode } from '../../../model/message-code';
import { Vehicle } from '../../../model/Vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleMockService implements VehicleInterfaceService {
  vehicle: Vehicle[] = [
    {
      id: 1,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '11-12-2022',
      plaque: 'A6SDA69SD18',
      color: 'blue',
      year: 2021,
      maximumWeight: 152.0,
      typeFuel: 'alcool',
      acquisitionKm: 159.0,
      chassis: 'IASDJOASD9A5SD9AS',
      motor: 'AS8D4A84F8G488D4A',
      reindeer: 12345678912,
      owner: 'kaue couto',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    },
    {
      id: 2,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '11-12-2022',
      plaque: 'A6SDA69SD18',
      color: 'blue',
      year: 2021,
      maximumWeight: 152.0,
      typeFuel: 'alcool',
      acquisitionKm: 159.0,
      chassis: 'IASDJOASD9A5SD9AS',
      motor: 'AS8D4A84F8G488D4A',
      reindeer: 12345678912,
      owner: 'kaue couto',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    },
    {
      id: 3,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '11-12-2022',
      plaque: 'A6SDA69SD18',
      color: 'blue',
      year: 2021,
      maximumWeight: 152.0,
      typeFuel: 'alcool',
      acquisitionKm: 159.0,
      chassis: 'IASDJOASD9A5SD9AS',
      motor: 'AS8D4A84F8G488D4A',
      reindeer: 12345678912,
      owner: 'kaue couto',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    },
    {
      id: 4,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '11-12-2022',
      plaque: 'A6SDA69SD18',
      color: 'blue',
      year: 2021,
      maximumWeight: 152.0,
      typeFuel: 'alcool',
      acquisitionKm: 159.0,
      chassis: 'IASDJOASD9A5SD9AS',
      motor: 'AS8D4A84F8G488D4A',
      reindeer: 12345678912,
      owner: 'kaue couto',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    },
    {
      id: 5,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '11-12-2022',
      plaque: 'A6SDA69SD18',
      color: 'blue',
      year: 2021,
      maximumWeight: 152.0,
      typeFuel: 'alcool',
      acquisitionKm: 159.0,
      chassis: 'IASDJOASD9A5SD9AS',
      motor: 'AS8D4A84F8G488D4A',
      reindeer: 12345678912,
      owner: 'kaue couto',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    },
    {
      id: 6,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '11-12-2022',
      plaque: 'A6SDA69SD18',
      color: 'blue',
      year: 2021,
      maximumWeight: 152.0,
      typeFuel: 'alcool',
      acquisitionKm: 159.0,
      chassis: 'IASDJOASD9A5SD9AS',
      motor: 'AS8D4A84F8G488D4A',
      reindeer: 12345678912,
      owner: 'kaue couto',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    },
    {
      id: 7,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '11-12-2022',
      plaque: 'A6SDA69SD18',
      color: 'blue',
      year: 2021,
      maximumWeight: 152.0,
      typeFuel: 'alcool',
      acquisitionKm: 159.0,
      chassis: 'IASDJOASD9A5SD9AS',
      motor: 'AS8D4A84F8G488D4A',
      reindeer: 12345678912,
      owner: 'kaue couto',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    },
    {
      id: 8,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '11-12-2022',
      plaque: 'A6SDA69SD18',
      color: 'blue',
      year: 2021,
      maximumWeight: 152.0,
      typeFuel: 'alcool',
      acquisitionKm: 159.0,
      chassis: 'IASDJOASD9A5SD9AS',
      motor: 'AS8D4A84F8G488D4A',
      reindeer: 12345678912,
      owner: 'kaue couto',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    },
    {
      id: 9,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '11-12-2022',
      plaque: 'A6SDA69SD18',
      color: 'blue',
      year: 2021,
      maximumWeight: 152.0,
      typeFuel: 'alcool',
      acquisitionKm: 159.0,
      chassis: 'IASDJOASD9A5SD9AS',
      motor: 'AS8D4A84F8G488D4A',
      reindeer: 12345678912,
      owner: 'kaue couto',
      vehicleDocument: '',
      vehiclePicture: '',
      description: '',
      rulesCheck: true,
    },
  ];

  setDataVehicle(vehicleObjectData: Vehicle): Observable<MessageCode> {
    this.vehicle.push(vehicleObjectData)
    return of({
      code: 201,
      message: 'Veiculo criado com sucesso!',
    });
  }

  getDataVehicle(): Observable<Vehicle[]> {
    return of(this.vehicle)
  }

  getDataVehicleById(id: number): Observable<Vehicle> {
   return of({
    id: 1,
    typeTruck: 'cavalo mecanico simples',
    registrationDate: '11-12-2022',
    plaque: 'A6SDA69SD18',
    color: 'blue',
    year: 2021,
    maximumWeight: 152.0,
    typeFuel: 'alcool',
    acquisitionKm: 159.0,
    chassis: 'IASDJOASD9A5SD9AS',
    motor: 'AS8D4A84F8G488D4A',
    reindeer: 12345678912,
    owner: 'kaue couto',
    vehicleDocument: '',
    vehiclePicture: '',
    description: '',
    rulesCheck: true,
  })
  }

  putDataVehicleById(id: number, data: Vehicle): Observable<MessageCode> {
    return of({
      code: 201,
      message: 'Veiculo Editado com Sucesso!'
    })
  }

  deleteDataVehicle(id: number | null) {
    return of({
      code: 201,
      message: 'Veiculo Removido com Sucesso!'
    })
  }

  getDataVehicleByPlaque(caracter: string): Observable<Vehicle[]> {
    return of(
      [
        {
          id: 1,
          typeTruck: 'cavalo mecanico simples',
          registrationDate: '11-12-2022',
          plaque: 'A6SDA69SD18',
          color: 'blue',
          year: 2021,
          maximumWeight: 152.0,
          typeFuel: 'alcool',
          acquisitionKm: 159.0,
          chassis: 'IASDJOASD9A5SD9AS',
          motor: 'AS8D4A84F8G488D4A',
          reindeer: 12345678912,
          owner: 'kaue couto',
          vehicleDocument: '',
          vehiclePicture: '',
          description: '',
          rulesCheck: true,
        }
      ]
    )
  }
}
