import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleMockService } from './vehicle-mock.service';
import { Vehicle } from './../../../model/Vehicle.model';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { MessageCode } from 'src/app/shared/model/message-code';
import { QueryComponent } from 'src/app/view/home/query/query.component';
import { CommonModule } from '@angular/common';

describe('VehicleMockService', () => {
  let service: VehicleMockService;
  const URL = 'https://vehicles.ryan-araujoara1.repl.co/vehicle'
  let vehicle: Vehicle[] = [
    {
      id: 1,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '04/02/2023',
      plaque: 'AGT123F',
      color: 'Prata',
      year: 2011,
      maximumWeight: 23.000,
      typeFuel: 'Alcool',
      acquisitionKm: 1.432,
      chassis: 'ATHG765KVM723JFTG',
      motor: 'AM92KFTB42KFG321N',
      reindeer: 12345678912,
      owner: 'Wesley Borges',
      vehicleDocument: 'c:/documents/vehicleDocument-AGT123F.pdf',
      vehiclePicture: '',
      description: '',
      rulesCheck: true
    },
    {
      id: 2,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '04/02/2023',
      plaque: 'AGT123F',
      color: 'Prata',
      year: 2011,
      maximumWeight: 23.000,
      typeFuel: 'Alcool',
      acquisitionKm: 1.432,
      chassis: 'ATHG765KVM723JFTG',
      motor: 'AM92KFTB42KFG321N',
      reindeer: 12345678912,
      owner: 'Wesley Borges',
      vehicleDocument: 'c:/documents/vehicleDocument-AGT123F.pdf',
      vehiclePicture: '',
      description: '',
      rulesCheck: true
    },
    {
      id: 3,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '04/02/2023',
      plaque: 'AGT123F',
      color: 'Prata',
      year: 2011,
      maximumWeight: 23.000,
      typeFuel: 'Alcool',
      acquisitionKm: 1.432,
      chassis: 'ATHG765KVM723JFTG',
      motor: 'AM92KFTB42KFG321N',
      reindeer: 12345678912,
      owner: 'Wesley Borges',
      vehicleDocument: 'c:/documents/vehicleDocument-AGT123F.pdf',
      vehiclePicture: '',
      description: '',
      rulesCheck: true
    }
  ]

  let messageCode = { code: 201, message: "Veiculo Adicionado com Sucesso!" }
  let httpTesting: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CommonModule]
    })
;
    service = TestBed.inject(VehicleMockService);
    httpTesting = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should to realize post the in vehicle data', () => {
    const vehicleMock = {
      id: null,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '04/02/2023',
      plaque: 'AGT123F',
      color: 'Prata',
      year: 2011,
      maximumWeight: 2300,
      typeFuel: 'Alcool',
      acquisitionKm: 143,
      chassis: 'ATHG765KVM723JFTG',
      motor: 'AM92KFTB42KFG321N',
      reindeer: 12345,
      owner: 'Wesley Borges',
      vehicleDocument: 'c:/documents/vehicleDocument-AGT123F.pdf',
      vehiclePicture: '',
      description: '',
      rulesCheck: true
    }
    service.setDataVehicle(vehicleMock).subscribe((res) => {
      expect(res).toEqual(messageCode);
    })
    let request = httpTesting.expectOne(URL)
    expect(request.request.method).toBe("POST")
    request.flush(messageCode)
  })

  it('should get data vehicle when called', () => {
    service.getDataVehicle().subscribe((res) => {
      expect(res).toEqual(vehicle)
    })

    let request = httpTesting.expectOne(URL)
    expect(request.request.method).toBe("GET")
    request.flush(vehicle)
  })

  it('should get data vehicle by id when called', () => {
    const vehicleMock = {
      id: 10,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '04/02/2023',
      plaque: 'AGT123F',
      color: 'Prata',
      year: 2011,
      maximumWeight: 2300,
      typeFuel: 'Alcool',
      acquisitionKm: 143,
      chassis: 'ATHG765KVM723JFTG',
      motor: 'AM92KFTB42KFG321N',
      reindeer: 12345,
      owner: 'Wesley Borges',
      vehicleDocument: 'c:/documents/vehicleDocument-AGT123F.pdf',
      vehiclePicture: '',
      description: '',
      rulesCheck: true
    }

    service.getDataVehicleById(10).subscribe((res) => {
      expect(res).toEqual(vehicleMock)
    })

    let request = httpTesting.expectOne(`${URL}/10`)
    expect(request.request.method).toBe('GET')
    request.flush(vehicleMock)
  })
/*
  it('should to render spinner case get data vehicle is failed'), () => {
   // const compiled = fixture.querySelector('.spinner-border') as HTMLElement
    service.getDataVehicle().subscribe((res) => {
    })
  //  expect(compiled).toBeTruthy()
  }
*/

  it('should get data vehicle by plaque when called', () => {
    const caracter = 'AG'
    const vehicleMock = [
      {
      id: 10,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '04/02/2023',
      plaque: 'AGT123F',
      color: 'Prata',
      year: 2011,
      maximumWeight: 2300,
      typeFuel: 'Alcool',
      acquisitionKm: 143,
      chassis: 'ATHG765KVM723JFTG',
      motor: 'AM92KFTB42KFG321N',
      reindeer: 12345,
      owner: 'Wesley Borges',
      vehicleDocument: 'c:/documents/vehicleDocument-AGT123F.pdf',
      vehiclePicture: '',
      description: '',
      rulesCheck: true
    },
    {
      id: 11,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '04/02/2023',
      plaque: 'AGI123F',
      color: 'Prata',
      year: 2011,
      maximumWeight: 2300,
      typeFuel: 'Alcool',
      acquisitionKm: 143,
      chassis: 'ATHG765KVM723JFTG',
      motor: 'AM92KFTB42KFG321N',
      reindeer: 12345,
      owner: 'Wesley Borges',
      vehicleDocument: 'c:/documents/vehicleDocument-AGT123F.pdf',
      vehiclePicture: '',
      description: '',
      rulesCheck: true
    }
  ]
  service.getDataVehicleByPlaque(caracter).subscribe((res) => {
    expect(res).toEqual(vehicleMock)
  })

  let request = httpTesting.expectOne(`${URL}/searchBy/${caracter}`)
  expect(request.request.method).toBe('GET')
  request.flush(vehicleMock)
})

  it('should to edit data vehicle by id when called for altered', () => {
    const MessageCode: MessageCode = {code: 201, message: "Veiculo Alterado com Sucesso!"}
    const id = 11
    const newVehicle = {
      id: 11,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '04/02/2023',
      plaque: 'AGI123F',
      color: 'Prata',
      year: 2011,
      maximumWeight: 2300,
      typeFuel: 'Alcool',
      acquisitionKm: 200,
      chassis: 'ATHG765KVM723JFTG',
      motor: 'AM92KFTB42KFG321N',
      reindeer: 12345,
      owner: 'Wesley Borges',
      vehicleDocument: 'c:/documents/vehicleDocument-AGT123F.pdf',
      vehiclePicture: '',
      description: '',
      rulesCheck: true
    }

    service.putDataVehicleById(id,newVehicle).subscribe((res) => {
      expect(res).toBe(messageCode)
    })

    let request = httpTesting.expectOne(`${URL}/${id}`)
    expect(request.request.method).toBe("PUT")
    request.flush(messageCode)
  })

 it("should return message error case edit vehicle is failed", () => {
    const id = 11
    const MessageCode: MessageCode = {code: 422, message: "[ERRO] Erro de conexão. Tente novamente!"}
    const newVehicle = {
      id: 11,
      typeTruck: 'cavalo mecanico simples',
      registrationDate: '04/02/2023',
      plaque: 'AGI123F',
      color: 'Prata',
      year: 2011,
      maximumWeight: 2300,
      typeFuel: 'Alcool',
      acquisitionKm: 200,
      chassis: 'ATHG765KVM723JFTG',
      motor: 'AM92KFTB42KFG321N',
      reindeer: 12345,
      owner: 'Wesley Borges',
      vehicleDocument: 'c:/documents/vehicleDocument-AGT123F.pdf',
      vehiclePicture: '',
      description: '',
      rulesCheck: true
    }
    service.putDataVehicleById(11,newVehicle).subscribe((res) => {
      expect(res).toBe(messageCode)
    })
    let request = httpTesting.expectOne(`${URL}/${id}`)
    expect(request.request.method).toBe("PUT")
    request.flush(messageCode)
  })

  it("should to delete data vehicle when called", () => {
    let messageCode: MessageCode = {code: 201, message: "Veiculo Excluido com sucesso!"}
    const id = 11
    service.deleteDataVehicleById(id).subscribe((res) => {
      expect(res).toBe(messageCode)
    })

    let request = httpTesting.expectOne(`${URL}/${id}`)
    expect(request.request.method).toBe("DELETE")
    request.flush(messageCode)
  })

  it('should return message error case delete data vehicle is failed', () => {
    let messageCode: MessageCode = {code: 422, message: "[ERRO] Erro de conexão. Tente novamente!"}
    const id = 11
    service.deleteDataVehicleById(id).subscribe((res) => {
      expect(res).toBe(messageCode)
    })

    let request = httpTesting.expectOne(`${URL}/${id}`)
    expect(request.request.method).toBe("DELETE")
    request.flush(messageCode)
  })

});
