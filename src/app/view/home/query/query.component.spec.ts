import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { VehicleMockService } from 'src/app/shared/services/applications/vehicle/vehicle-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { QueryComponent } from './query.component';
import { Vehicle } from './../../../shared/model/Vehicle.model';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationComponent } from '../registration/registration.component';
import { VehicleResolve } from 'src/app/shared/guard/vehicle.guard';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { MessageModalComponent } from 'src/app/shared/components/message-modal/message-modal.component';

describe('QueryComponent', () => {

  var vehicle: Vehicle[] = [
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
    }
  ]

  let component: QueryComponent;
  let fixture: ComponentFixture<QueryComponent>;
  let fixtureMessage: MessageModalComponent
  let service: VehicleMockService
  let location: Location;
  let route: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryComponent],
      providers: [VehicleMockService],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes(
        [
          { path: 'cadastrar-veiculo', component: RegistrationComponent, resolve: { vehicle: VehicleResolve}},
          { path: "editar-veiculo/:id", component: RegistrationComponent, resolve: { vehicle: VehicleResolve}}
       ]
     ) ]
    })


    .compileComponents();
    route = TestBed.get(Router);
    location =  TestBed.get<Location>(Location)
    fixture = TestBed.createComponent(QueryComponent);
    service = TestBed.get(VehicleMockService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixtureMessage = TestBed.createComponent(MessageModalComponent).componentInstance
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should request in back end to data vehicle', () => {
   let spygetDataVehicle = spyOn(service, "getDataVehicle").and.returnValues(of([]))
    component.ngOnInit()
    expect(spygetDataVehicle).toHaveBeenCalled();
    expect(component.dataVehicle$).not.toBeUndefined()
  });

  it('should create table case dataVehicle$ is not empty array ',() => {
    spyOn(service, "getDataVehicle").and.returnValues(of(vehicle))
    component.ngOnInit()
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('.container_table > table') as HTMLElement
    expect(compiled).toBeTruthy()
  })

  it('should create alert with " sem registros " case dataVehicle$ is empty array', () => {
    spyOn(service, "getDataVehicle").and.returnValues(of([]))
    component.ngOnInit()
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('.alert.alert-dark') as HTMLElement
    expect(compiled).toBeTruthy()
  })

  it('should render sppiner while is called getDataVehicle', () => {
    component.ngOnInit()
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('.spinner-border > .visually-hidden') as HTMLElement
    expect(compiled).toBeTruthy()
  })

  it('should update dataVehicle$ variable to called search by plaque vehicle', () => {
    const currentValue = of(vehicle)
    component.updateSearchVehicle(currentValue)
    expect(component.dataVehicle$).toBe(currentValue)
  })

  it('should redirect ao route "cadastrar veiculo" in click of "Novo" button',  waitForAsync (() => {
    const routeActive = '/cadastrar-veiculo'
    const compiled = fixture.nativeElement.querySelector(`div.d-flex > .btn.btn-success`) as HTMLButtonElement
    compiled.click()
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(location.path()).toBe(routeActive)
    })
  }))

  it('should redirect ao route "editar veiculo com id" in click of icon "papel com lapis" button', waitForAsync(() => {
    component.ngOnInit()
    component.dataVehicle$ = of(vehicle)
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('#container-edit-vehicle-1')).nativeElement as HTMLButtonElement
    compiled.click()
    location.go(`/editar-veiculo/1`)
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(location.path()).toBe(`/editar-veiculo/1`)
    })
  }))
/*
  it('should delete vehicle record to click in "continuar" pós open modal', waitForAsync(() => {
    component.ngOnInit()
    component.dataVehicle$ = of(vehicle)
    fixture.detectChanges();
    const compiled = fixture.debugElement.query(By.css('.container-remove-vehicle-1'))
    fixture.whenStable().then(() => {
      expect(compiled).toBeTruthy()
    })
  }))
  */
});
