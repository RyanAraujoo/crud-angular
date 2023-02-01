import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { first } from 'rxjs';
import { MessageCode } from 'src/app/shared/model/message-code';
import { VehicleMockService } from 'src/app/shared/services/vehicle/vehicle-mock.service';
import { Vehicle } from './../../../shared/model/Vehicle.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private vehicleService: VehicleMockService,private route: Router, private activateRoute: ActivatedRoute) {}
  inputDataInitial: Vehicle | null = null
  ngOnInit(): void {
  this.inputDataInitial = this.activateRoute.snapshot.data['vehicle'] as Vehicle
  this.vehicleForm.setValue({
    id: this.inputDataInitial?.id,
    typeTruck: this.inputDataInitial?.typeTruck,
    registrationDate: this.inputDataInitial?.registrationDate,
    plaque: this.inputDataInitial?.plaque,
    color: this.inputDataInitial?.color,
    year: this.inputDataInitial?.year,
    maximumWeight: this.inputDataInitial?.maximumWeight,
    typeFuel: this.inputDataInitial?.typeFuel,
    acquisitionKm: this.inputDataInitial.acquisitionKm,
    chassis: this.inputDataInitial?.chassis,
    motor: this.inputDataInitial?.motor,
    reindeer: this.inputDataInitial?.reindeer,
    owner: this.inputDataInitial?.owner,
    vehicleDocument: this.inputDataInitial?.vehicleDocument,
    vehiclePicture: this.inputDataInitial?.vehiclePicture,
    description: this.inputDataInitial?.description,
    rulesCheck: false
  })
  }

  dataMessage?: MessageCode

  vehicleForm: FormGroup = new FormGroup({
    id: new FormControl({value: null, disabled: true}),
    typeTruck: new FormControl('',[Validators.required]),
    registrationDate: new FormControl({value: '', disabled: true}),
    plaque: new FormControl('',[Validators.required]),
    color: new FormControl(''),
    year: new FormControl('',[Validators.required]),
    maximumWeight: new FormControl('',[Validators.required]),
    typeFuel: new FormControl('', [Validators.required]),
    acquisitionKm: new FormControl('', [Validators.required]),
    chassis: new FormControl('',[Validators.required]),
    motor: new FormControl('',[Validators.required]),
    reindeer: new FormControl('',[Validators.required]),
    owner: new FormControl('',[Validators.required]),
    vehicleDocument: new FormControl('',[Validators.required]),
    vehiclePicture: new FormControl(''),
    description: new FormControl(''),
    rulesCheck: new FormControl(false,[Validators.required])
  })

  registrationDataCurrent() {
    if(this.inputDataInitial?.id) {
      this.vehicleService.putDataVehicle(this.inputDataInitial.id,this.vehicleForm.value)
      .pipe(first())
    .subscribe(
      (data) => { this.dataMessage = data},
      (error) => { this.dataMessage = error}
    )
      return;
    }
    this.vehicleService.setDataVehicle(this.vehicleForm.value)
    .pipe(first())
    .subscribe(
      (data) => { this.dataMessage = data},
      (error) => { this.dataMessage = error}
    )
  }

  backRouteOrigin()  {
    this.route.navigateByUrl("/consultar-veiculo")
    window.scrollTo(0, 0)
  }

}
