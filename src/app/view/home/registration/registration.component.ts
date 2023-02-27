import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
import { first, Observable, switchMap } from 'rxjs';
import { MessageCode } from 'src/app/shared/model/message-code';
import { VehicleMockService } from 'src/app/shared/services/applications/vehicle/vehicle-mock.service';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Vehicle } from './../../../shared/model/Vehicle.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private vehicleService: VehicleMockService,
    private route: Router,
    private activateRoute: ActivatedRoute,
    private global: GlobalService,
    private datePipe: DatePipe
    )
    {}

  inputDataInitial: Array<Vehicle> = []

  ngOnInit(): void {
    const date = new Date()
    this.inputDataInitial = this.activateRoute.snapshot.data['vehicle']

  this.vehicleForm.patchValue({
    id: this.inputDataInitial[0]?.id === null ? '' : `${this.inputDataInitial[0]?.id}`,
    typeTruck:this.inputDataInitial[0]?.typeTruck,
    registrationDate: this.inputDataInitial[0]?.registrationDate ? this.datePipe.transform(this.inputDataInitial[0].registrationDate,"yyyy-MM-dd"): this.datePipe.transform(date,"yyyy-MM-dd") ,
    plaque: this.inputDataInitial[0]?.plaque,
    color: this.inputDataInitial[0]?.color,
    year: this.inputDataInitial[0]?.year,
    maximumWeight: this.inputDataInitial[0]?.maximumWeight,
    typeFuel: this.inputDataInitial[0]?.typeFuel,
    acquisitionKm: this.inputDataInitial[0]?.acquisitionKm,
    chassis: this.inputDataInitial[0]?.chassis,
    motor: this.inputDataInitial[0]?.motor,
    reindeer: this.inputDataInitial[0]?.reindeer,
    owner: this.inputDataInitial[0]?.owner,
    vehicleDocument: null,
    vehiclePicture: null,
    description: null,
    rulesCheck: false
  })
  }

  dataMessage?: MessageCode

  vehicleForm: FormGroup = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    typeTruck: new FormControl('',[Validators.required]),
    registrationDate: new FormControl('',[Validators.required]),
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
    if(this.inputDataInitial[0]?.id) {
      this.putDataVehicleMethod(this.inputDataInitial[0].id)
      return;
    }
    this.setDataVehicleMethod()
  }

  backRouteOrigin()  {
    this.registrationDataCurrent()
    this.route.navigateByUrl("/consultar-veiculo")
    window.scrollTo(0, 0)
  }

  requiredAlert(typeMessage: MessageCode) {
    this.global.showAlertInterfaceResult(`${typeMessage.message}`)
  }

  setDataVehicleMethod() {
    console.log(this.vehicleForm.value)
    this.vehicleService.setDataVehicle(this.vehicleForm.value)
    .pipe(first())
    .subscribe(
      (sucess) => {
        this.dataMessage = sucess
          this.requiredAlert(sucess)
          this.reload()
      },
      (error) => {
        this.dataMessage = error
          this.requiredAlert(error)
          this.reload()
      }
    )
  }

  putDataVehicleMethod(id: number) {
    this.vehicleService.putDataVehicleById(id,this.vehicleForm.value)
    .pipe(first())
    .subscribe(
      (sucess) => {
        this.dataMessage = sucess
          this.requiredAlert(sucess)
      },
      (error) => {
        this.dataMessage = error
          this.requiredAlert(error)
      }
    )
  }
  reload () {
    this.global.reload('consultar-veiculo')
  }
}
